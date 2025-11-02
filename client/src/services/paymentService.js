import { mockPaymentService } from './mockPaymentService';
import razorpayService from './razorpayService';

const useMockPayments = (import.meta.env.VITE_MOCK_RAZORPAY || 'false') === 'true';

class PaymentServiceWrapper {
  constructor() {
    this.service = useMockPayments ? mockPaymentService : razorpayService;
    console.log(`🔧 Using ${useMockPayments ? 'mock' : 'real'} payment service`);
  }

  async createPaymentOrder(paymentData) {
    console.log('Creating payment order:', paymentData);
    return this.service.createPaymentOrder(paymentData);
  }

  async initializePayment(orderData, paymentData, callbacks) {
    console.log('Initializing payment:', { orderData, paymentData });
    if (useMockPayments) {
      // For mock payments, simulate success after a delay
      setTimeout(async () => {
        try {
          const mockPaymentResult = await mockPaymentService.processPayment(orderData);
          if (callbacks.onSuccess) {
            callbacks.onSuccess(mockPaymentResult);
          }
        } catch (error) {
          if (callbacks.onError) {
            callbacks.onError(error);
          }
        }
      }, 1000);
      return null;
    } else {
      return razorpayService.initializePayment(orderData, paymentData, callbacks);
    }
  }

  async verifyPayment(orderId) {
    console.log('Verifying payment:', orderId);
    return this.service.verifyPayment(orderId);
  }

  getPaymentEndpoint(paymentType) {
    return this.service.getPaymentEndpoint(paymentType);
  }

  isAvailable() {
    return useMockPayments || razorpayService.isAvailable();
  }
}

const paymentService = new PaymentServiceWrapper();
export default paymentService;