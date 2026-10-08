import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import test from 'node:test'

import {
  dbCreateTransaction,
  dbGetRecentHistory,
  dbGetTransactionById,
  dbGetTransactions
} from './dbManager.js'

const tempDbPath = path.join(os.tmpdir(), `onbus-db-${process.pid}-${Date.now()}.json`)
const originalDbPath = process.env.ONBUS_DB_FILE
process.env.ONBUS_DB_FILE = tempDbPath

function seedDatabase() {
  const database = {
    version: '2.0.0',
    users: [],
    bookings: [],
    search_history: [],
    transactions: [],
    activity_logs: []
  }
  fs.writeFileSync(tempDbPath, JSON.stringify(database, null, 2))
}

test.beforeEach(() => {
  seedDatabase()
})

test.after(() => {
  if (originalDbPath === undefined) delete process.env.ONBUS_DB_FILE
  else process.env.ONBUS_DB_FILE = originalDbPath
  fs.rmSync(tempDbPath, { force: true })
})

test('stores a complete transaction with contact and timestamp details', () => {
  const result = dbCreateTransaction({
    transactionId: 'TXN_TEST_001',
    ticketId: 'OB_TEST_001',
    userId: 'user_123',
    userName: 'Test Passenger',
    userEmail: 'test@example.com',
    userPhone: '9876543210',
    amount: 120,
    currency: 'INR',
    paymentMode: 'UPI',
    paymentStatus: 'PAID',
    bookingStatus: 'CONFIRMED',
    tripDate: '2026-10-08',
    departureTime: '08:00',
    route: { from: 'Borivali', to: 'Andheri' },
    paymentReference: 'UPI_REF_001'
  })

  assert.equal(result.success, true)
  assert.equal(result.transaction.transactionId, 'TXN_TEST_001')
  assert.equal(result.transaction.userEmail, 'test@example.com')
  assert.equal(result.transaction.userPhone, '9876543210')
  assert.equal(result.transaction.tripDate, '2026-10-08')
  assert.ok(result.transaction.timestamp)
  assert.equal(result.transaction.amount, 120)
  assert.equal(result.transaction.paymentMode, 'UPI')
  assert.equal(result.transaction.paymentStatus, 'PAID')
})

test('retrieves transactions and recent activity history', () => {
  dbCreateTransaction({
    transactionId: 'TXN_TEST_002',
    ticketId: 'OB_TEST_002',
    userId: 'user_123',
    userEmail: 'test@example.com',
    userPhone: '9876543210',
    amount: 75,
    paymentMode: 'CASH',
    paymentStatus: 'PAY_ON_BOARDING',
    tripDate: '2026-10-09',
    departureTime: '09:30',
    route: { from: 'Dahisar', to: 'Malad' }
  })

  const transactions = dbGetTransactions('user_123')
  const history = dbGetRecentHistory('user_123', 10)

  assert.equal(transactions.length, 1)
  assert.equal(dbGetTransactionById('TXN_TEST_002')?.paymentStatus, 'PAY_ON_BOARDING')
  assert.equal(history.length, 1)
  assert.equal(history[0].userPhone, '9876543210')
  assert.equal(history[0].type, 'TRANSACTION')
})
