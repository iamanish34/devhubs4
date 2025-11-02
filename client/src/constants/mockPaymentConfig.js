// Mock payment configuration
export const MOCK_PAYMENT_CONFIG = {
  enabled: (import.meta.env.VITE_MOCK_RAZORPAY || 'false') === 'true',
  delay: 1000, // 1 second delay to simulate network
  successRate: 0.95, // 95% success rate for mock payments
  currencies: ['INR'],
  providers: ['razorpay']
};

// Mock payment status
export const MOCK_PAYMENT_STATUS = {
  CREATED: 'created',
  PROCESSING: 'processing',
  SUCCESS: 'success',
  FAILED: 'failed'
};

// Mock payment errors
export const MOCK_PAYMENT_ERRORS = {
  INSUFFICIENT_FUNDS: 'Insufficient funds',
  NETWORK_ERROR: 'Network error',
  INVALID_CARD: 'Invalid card details',
  TIMEOUT: 'Payment timeout'
};

// Payment amounts
export const PAYMENT_AMOUNTS = {
  BID_FEE: 9,
  LISTING_FEE: 199,
  BONUS_MIN: 100,
  BONUS_MAX: 10000
};