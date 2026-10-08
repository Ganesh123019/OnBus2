// ON BUS V2 — Database Persistence Manager
// Permanent JSON Database Engine for Users, Bookings, Telemetry, Searches, and Logs

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_FILE = path.resolve(__dirname, '../data/database.json');

function readDb() {
  try {
    if (!fs.existsSync(DB_FILE)) {
      return {
        version: '2.0.0',
        users: [],
        bookings: [],
        search_history: [],
        transactions: [],
        activity_logs: []
      };
    }
    const raw = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('[DB Error] Read failed:', err.message);
    return { users: [], bookings: [], search_history: [], transactions: [], activity_logs: [] };
  }
}

function writeDb(data) {
  try {
    data.lastUpdated = new Date().toISOString();
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('[DB Error] Write failed:', err.message);
    return false;
  }
}

// User Operations
export function dbRegisterUser({ username, name, email, phone, password, role = 'passenger' }) {
  const db = readDb();
  const normalizedEmail = (email || '').trim().toLowerCase();
  const normalizedUsername = (username || normalizedEmail.split('@')[0]).trim().toLowerCase();

  const existing = db.users.find(u => 
    u.email.toLowerCase() === normalizedEmail || 
    (u.username && u.username.toLowerCase() === normalizedUsername)
  );

  if (existing) {
    return { success: false, error: 'User with this email or username already exists' };
  }

  const newUser = {
    id: 'user_' + Date.now().toString(36) + Math.random().toString(36).substring(2, 6),
    username: normalizedUsername,
    name: name.trim(),
    email: normalizedEmail,
    phone: (phone || '').trim(),
    password: password, // In production, hash with bcrypt/argon2
    role,
    createdAt: new Date().toISOString(),
    lastLogin: new Date().toISOString()
  };

  db.users.push(newUser);

  db.activity_logs.push({
    id: 'LOG_' + Date.now(),
    userId: newUser.id,
    action: 'USER_REGISTERED',
    details: `User ${newUser.name} (${newUser.email}) registered`,
    timestamp: new Date().toISOString()
  });

  writeDb(db);
  const { password: _, ...safeUser } = newUser;
  return { success: true, user: safeUser };
}

export function dbLoginUser(identifier, password) {
  const db = readDb();
  const idStr = (identifier || '').trim().toLowerCase();

  const user = db.users.find(u =>
    u.email.toLowerCase() === idStr ||
    (u.username && u.username.toLowerCase() === idStr)
  );

  if (!user || user.password !== password) {
    return { success: false, error: 'Invalid email/username or password' };
  }

  user.lastLogin = new Date().toISOString();
  db.activity_logs.push({
    id: 'LOG_' + Date.now(),
    userId: user.id,
    action: 'USER_LOGIN',
    details: `User ${user.name} logged in`,
    timestamp: new Date().toISOString()
  });

  writeDb(db);
  const { password: _, ...safeUser } = user;
  return { success: true, user: safeUser };
}

// Booking Operations
export function dbCreateBooking(bookingData) {
  const db = readDb();

  const ticketId = bookingData.ticketId || ('OB' + Math.random().toString(36).substring(2, 10).toUpperCase());
  const transactionId = bookingData.transactionId || ('TXN_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6).toUpperCase());

  const booking = {
    ticketId,
    transactionId,
    userId: bookingData.userId,
    userName: bookingData.userName,
    userEmail: bookingData.userEmail || '',
    userPhone: bookingData.userPhone || '',
    busId: bookingData.busId,
    busNumber: bookingData.busNumber,
    operator: bookingData.operator || 'BEST',
    busType: bookingData.busType || 'Standard',
    route: bookingData.route,
    boardingStop: bookingData.boardingStop,
    droppingStop: bookingData.droppingStop,
    locationPath: bookingData.locationPath || bookingData.routePath || [],
    currentBusLocation: bookingData.currentBusLocation || bookingData.currentLocation || null,
    departureTime: bookingData.departure || bookingData.departureTime,
    arrivalTime: bookingData.arrival || bookingData.arrivalTime,
    travelDate: bookingData.date || bookingData.travelDate || new Date().toISOString().split('T')[0],
    seats: bookingData.seats || [],
    seatCount: (bookingData.seats || []).length,
    farePerSeat: bookingData.fare || bookingData.farePerSeat,
    totalAmount: bookingData.totalAmount || bookingData.totalFare || (bookingData.fare * (bookingData.seats || []).length),
    paymentMode: bookingData.paymentMode || bookingData.paymentMethod || 'UPI',
    paymentStatus: (bookingData.paymentMode === 'CASH' || bookingData.paymentMethod === 'CASH') ? 'PAY_ON_BOARDING' : 'PAID',
    bookingStatus: 'CONFIRMED',
    bookedAt: new Date().toISOString()
  };

  db.bookings.push(booking);

  // Record Transaction in Ledger
  db.transactions.push({
    transactionId,
    ticketId,
    userId: booking.userId,
    amount: booking.totalAmount,
    paymentMode: booking.paymentMode,
    paymentStatus: booking.paymentStatus,
    timestamp: new Date().toISOString(),
    reference: booking.paymentMode === 'CASH' ? 'CASH_CONDUCTOR_COLLECTION' : 'PG_MUMBAI_TRANSIT'
  });

  // Record Activity Log
  db.activity_logs.push({
    id: 'LOG_' + Date.now(),
    userId: booking.userId,
    action: 'TICKET_BOOKED',
    details: `Booked ${booking.seatCount} seats on Bus ${booking.busNumber} (Ticket: ${ticketId}, Mode: ${booking.paymentMode})`,
    timestamp: new Date().toISOString()
  });

  writeDb(db);
  return { success: true, booking };
}

export function dbGetUserBookings(userId) {
  const db = readDb();
  return db.bookings
    .filter(b => b.userId === userId)
    .sort((a, b) => new Date(b.bookedAt) - new Date(a.bookedAt));
}

export function dbGetBookingByTicketId(ticketId) {
  const db = readDb();
  return db.bookings.find(b => b.ticketId === ticketId) || null;
}

export function dbCancelBooking(ticketId, userId) {
  const db = readDb();
  const booking = db.bookings.find(b => b.ticketId === ticketId && b.userId === userId);
  if (!booking) return { success: false, error: 'Booking not found' };
  if (booking.bookingStatus === 'CANCELLED') return { success: false, error: 'Already cancelled' };

  booking.bookingStatus = 'CANCELLED';
  booking.cancelledAt = new Date().toISOString();

  db.activity_logs.push({
    id: 'LOG_' + Date.now(),
    userId,
    action: 'TICKET_CANCELLED',
    details: `Cancelled Ticket ${ticketId}`,
    timestamp: new Date().toISOString()
  });

  writeDb(db);
  return { success: true, booking };
}

// Search History Operations
export function dbRecordSearch({ userId = 'guest', from = '', to = '', travelDate = '', busType = 'All', resultsCount = 0 }) {
  const db = readDb();
  const searchEntry = {
    id: 'SCH_' + Date.now(),
    userId,
    from,
    to,
    travelDate,
    busType,
    resultsCount,
    searchedAt: new Date().toISOString()
  };

  db.search_history.unshift(searchEntry);
  if (db.search_history.length > 200) {
    db.search_history = db.search_history.slice(0, 200);
  }

  writeDb(db);
  return { success: true, search: searchEntry };
}

export function dbGetSearchHistory(userId = null) {
  const db = readDb();
  if (userId) {
    return db.search_history.filter(s => s.userId === userId).slice(0, 15);
  }
  return db.search_history.slice(0, 15);
}

// Analytics and Full Export
export function dbGetStats() {
  const db = readDb();
  const totalRevenue = db.transactions
    .filter(t => t.paymentStatus === 'PAID')
    .reduce((sum, t) => sum + (t.amount || 0), 0);

  const pendingCashRevenue = db.transactions
    .filter(t => t.paymentStatus === 'PAY_ON_BOARDING')
    .reduce((sum, t) => sum + (t.amount || 0), 0);

  return {
    totalUsers: db.users.length,
    totalBookings: db.bookings.length,
    confirmedBookings: db.bookings.filter(b => b.bookingStatus === 'CONFIRMED').length,
    cancelledBookings: db.bookings.filter(b => b.bookingStatus === 'CANCELLED').length,
    totalSearches: db.search_history.length,
    totalRevenue,
    pendingCashRevenue,
    totalTransactions: db.transactions.length,
    recentLogs: db.activity_logs.slice(-10).reverse()
  };
}

export function dbExportAll() {
  return readDb();
}
