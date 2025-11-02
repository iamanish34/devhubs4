/**
 * Mock Payment Service
 * Simulates payment gateway functionality for testing and development
 */

export const createMockOrder = (amount, currency = 'INR') => {
  const orderId = `mock_order_${Date.now()}`;
  
  return {
    id: orderId,
    entity: 'order',
    amount: amount,
    amount_paid: 0,
    amount_due: amount,
    currency: currency,
    receipt: `rcpt_${Date.now()}`,
    status: 'created',
    created_at: Date.now()
  };
};

export const createMockPayment = (amount, orderId, currency = 'INR') => {
  return {
    id: `mock_pay_${Date.now()}`,
    entity: 'payment',
    amount: amount,
    currency: currency,
    status: 'captured',
    order_id: orderId,
    method: 'mock',
    captured: true,
    created_at: Date.now()
  };
};

export const verifyMockPayment = (paymentId, orderId) => {
  return {
    verified: true,
    payment_id: paymentId,
    order_id: orderId,
    signature: `mock_sign_${Date.now()}`
  };
};

export const createMockRefund = (paymentId, amount) => {
  return {
    id: `mock_refund_${Date.now()}`,
    entity: 'refund',
    amount: amount,
    payment_id: paymentId,
    status: 'processed',
    created_at: Date.now()
  };
};

export const generateMockPayoutId = () => `mock_payout_${Date.now()}`;