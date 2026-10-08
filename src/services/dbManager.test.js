import assert from 'node:assert/strict'
import test from 'node:test'
import { MongoMemoryServer } from 'mongodb-memory-server'

import {
  closeDatabase,
  dbCreateBooking,
  dbCreateTransaction,
  dbGetRecentHistory,
  dbGetTransactionById,
  dbGetTransactions,
  dbLoginUser,
  dbRegisterUser
} from './dbManager.js'

let mongoServer
let originalMongoUri

async function startMongo() {
  mongoServer = await MongoMemoryServer.create({ instance: { port: 0 } })
  process.env.MONGODB_URI = mongoServer.getUri('onbus_test')
}

test.before(async () => {
  originalMongoUri = process.env.MONGODB_URI
  await startMongo()
})

test.after(async () => {
  await closeDatabase()
  if (mongoServer) await mongoServer.stop()
  if (originalMongoUri === undefined) delete process.env.MONGODB_URI
  else process.env.MONGODB_URI = originalMongoUri
})

test('registers, authenticates, stores, and retrieves user transaction data', async () => {
  const registerResult = await dbRegisterUser({
    name: 'Test Passenger',
    username: 'testpassenger',
    email: 'test@example.com',
    phone: '9876543210',
    password: 'StrongPass123!'
  })
  assert.equal(registerResult.success, true)
  assert.equal(registerResult.user.email, 'test@example.com')
  assert.equal('password' in registerResult.user, false)

  const loginResult = await dbLoginUser('test@example.com', 'StrongPass123!')
  assert.equal(loginResult.success, true)
  assert.equal(loginResult.user.email, 'test@example.com')

  const bookingResult = await dbCreateBooking({
    userId: registerResult.user.id,
    userName: 'Test Passenger',
    userEmail: 'test@example.com',
    userPhone: '9876543210',
    busId: 'B_TEST_1',
    busNumber: 'TEST',
    operator: 'OnBus',
    busType: 'AC',
    route: { from: 'Borivali', to: 'Andheri', stops: ['Borivali', 'Andheri'] },
    boardingStop: 'Borivali',
    droppingStop: 'Andheri',
    departureTime: '08:00',
    arrivalTime: '09:00',
    travelDate: '2026-10-08',
    seats: ['1A', '1B'],
    fare: 100,
    totalAmount: 200,
    paymentMode: 'UPI',
    paymentStatus: 'PAID',
    bookingStatus: 'CONFIRMED',
    ticketId: 'OB_TEST_001',
    transactionId: 'TXN_TEST_001'
  })
  assert.equal(bookingResult.success, true)
  assert.equal(bookingResult.transaction.userPhone, '9876543210')

  const transaction = await dbGetTransactionById('TXN_TEST_001')
  assert.equal(transaction?.amount, 200)
  assert.equal(transaction?.bookingStatus, 'CONFIRMED')

  const transactions = await dbGetTransactions(registerResult.user.id)
  const history = await dbGetRecentHistory(registerResult.user.id, 10)
  assert.equal(transactions.length, 1)
  assert.equal(history.length, 3)
  assert.ok(history.some(item => item.type === 'TRANSACTION'))
})

test('stores a standalone transaction with all required details', async () => {
  const result = await dbCreateTransaction({
    ticketId: 'OB_TEST_002',
    userId: 'user_transaction_123',
    userName: 'Transaction User',
    userEmail: 'transaction@example.com',
    userPhone: '9876543211',
    amount: 125,
    paymentMode: 'CASH',
    paymentStatus: 'PAY_ON_BOARDING',
    tripDate: '2026-10-09',
    departureTime: '09:30',
    route: { from: 'Dahisar', to: 'Malad' },
    paymentReference: 'CASH_REF_001'
  })

  assert.equal(result.success, true)
  assert.equal(result.transaction.userPhone, '9876543211')
  assert.equal(result.transaction.amount, 125)
  assert.ok(result.transaction.timestamp)
})
