/*

The Strategy Pattern is a behavioral design pattern that allows you to select an algorithm’s
behavior at runtime. It defines a family of algorithms, encapsulates each one, and makes them
interchangeable.

Example: Payment Gateway Integration

*/

interface PaymentStrategy {
  pay(amount: number): void;
}

class AdyenPayment implements PaymentStrategy {
  public pay(amount: number): void {
    console.log(`${amount} Paid by Adyen`);
  }
}

class PaypalPayment implements PaymentStrategy {
  public pay(amount: number): void {
    console.log(`${amount} Paid by Paypal`);
  }
}

class PaymentService {
  private paymentStrategy!: PaymentStrategy;

  getPaymentStrategy(paymentType: string): PaymentStrategy {
    switch (paymentType) {
      case 'Adyen': new AdyenPayment();
      case 'PayPal': new PaypalPayment();
      default: throw new Error(`PaymentType ${paymentType} not found`);
    }
  }

  processPayment(amount: number, type: string): void {
    this.paymentStrategy = this.getPaymentStrategy(type);
    this.paymentStrategy.pay(amount);
  }
}

const paymentService = new PaymentService();
paymentService.processPayment(25.99, 'PayPal');
// paymentService.processPayment(15.99, 'Stripe');