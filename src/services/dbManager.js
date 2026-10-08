// ON BUS V2 — Database Persistence Manager
// Permanent JSON Database Engine for Users, Bookings, Telemetry, Searches, and Logs

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getDbFile() {
  return process.env.ONBUS_DB_FILE
    ? path.resolve(process.env.ONBUS_DB_FILE)
    : path.resolve(__dirname, '../data/database.json');
}

function readDb() {
  const DB_FILE = getDbFile();
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
  const DB_FILE = getDbFile();
  try {
    data.lastUpdated = new Date().toISOString();
    fs.mkdirSync(path.dirname(DB_FILE), { recursive: true });
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('[DB Error] Write failed:', err.message);
    return false;
  }
}

function normalizeText(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function toMoney(value) {
  const amount = Number(value);
  return Number.isFinite(amount) && amount >= 0 ? amount : 0;
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
export function dbCreateTransaction(transactionData) {
  const db = readDb();
  const transactionId = normalizeText(transactionData.transactionId) || ('TXN_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6).toUpperCase());
  const userId = normalizeText(transactionData.userId);
  const userEmail = normalizeText(transactionData.userEmail).toLowerCase();
  const userPhone = normalizeText(transactionData.userPhone);
  const paymentMode = normalizeText(transactionData.paymentMode).toUpperCase() || 'UPI';
  const paymentStatus = normalizeText(transactionData.paymentStatus).toUpperCase() || 'PAID';

  if (!userId || !userEmail || !userPhone || !transactionData.ticketId) {
    return { success: false, error: 'User, email, phone number, and ticket ID are required' };
  }

  if (!/^[0-9]{10}$/.test(userPhone)) {
    return { success: false, error: 'A valid 10-digit phone number is required' };
  }

  const transaction = {
    transactionId,
    ticketId: normalizeText(transactionData.ticketId),
    userId,
    userName: normalizeText(transactionData.userName),
    userEmail,
    userPhone,
    amount: toMoney(transactionData.amount),
    currency: normalizeText(transactionData.currency).toUpperCase() || 'INR',
    paymentMode,
    paymentStatus,
    bookingStatus: normalizeText(transactionData.bookingStatus).toUpperCase() || 'CONFIRMED',
    tripDate: normalizeText(transactionData.tripDate) || new Date().toISOString().split('T')[0],
    departureTime: normalizeText(transactionData.departureTime) || '00:00',
    route: transactionData.route || null,
    timestamp: new Date().toISOString(),
    reference: normalizeText(transactionData.paymentReference) || `REF_${Date.now()}`
  };

  db.transactions.push(transaction);
  db.activity_logs.push({
    id: 'LOG_' + Date.now(),
    userId,
    type: 'TRANSACTION',
    action: 'TRANSACTION_RECORDED',
    details: `Transaction ${transactionId} for ${transaction.ticketId} (${transaction.paymentMode})`,
    userEmail,
    userPhone,
    timestamp: transaction.timestamp
  });

  writeDb(db);
  return { success: true, transaction };
}

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

  const transaction = {
    transactionId,
    ticketId,
    userId: booking.userId,
    userName: booking.userName,
    userEmail: booking.userEmail,
    userPhone: booking.userPhone,
    amount: booking.totalAmount,
    currency: 'INR',
    paymentMode: booking.paymentMode,
    paymentStatus: booking.paymentStatus,
    bookingStatus: booking.bookingStatus,
    tripDate: booking.travelDate,
    departureTime: booking.departureTime,
    route: booking.route,
    timestamp: new Date().toISOString(),
    reference: booking.paymentMode === 'CASH' ? 'CASH_CONDUCTOR_COLLECTION' : 'PG_MUMBAI_TRANSIT'
  };

  db.transactions.push(transaction);
  db.activity_logs.push({
    id: 'LOG_' + Date.now(),
    userId: booking.userId,
    action: 'TICKET_BOOKED',
    details: `Booked ${booking.seatCount} seats on Bus ${booking.busNumber} (Ticket: ${ticketId}, Mode: ${booking.paymentMode})`,
    timestamp: new Date().toISOString()
  });

  writeDb(db);
  return { success: true, booking, transaction };
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
export function dbGetTransactions(userId = null) {
  const db = readDb();
  const transactions = userId
    ? db.transactions.filter(t => t.userId === userId)
    : db.transactions;
  return transactions.slice().sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
}

export function dbGetTransactionById(transactionId) {
  const db = readDb();
  return db.transactions.find(t => t.transactionId === transactionId) || null;
}

export function dbGetRecentHistory(userId = null, limit = 20) {
  const db = readDb();
  const items = db.activity_logs
    .filter(entry => !userId || entry.userId === userId)
    .slice()
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    .slice(0, limit);

  return items.map(entry => ({
    ...entry,
    type: entry.type || 'ACTIVITY',
    userId: entry.userId || userId || 'guest',
    userPhone: entry.userPhone || '',
    userEmail: entry.userEmail || ''
  }));
}

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
