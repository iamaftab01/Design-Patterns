/*

The Facade is a Structural Design pattern that provides a simplified, unified interface to a complex
subsystem.

Purpose: 
  To reduce complexity for clients by exposing a higher-level API that internally coordinates
  multiple components or subsystems.

Example:
  Microservices
  Placing a Order

*/


export {};
class PaymentService {
  processPayment(amount: number) {
    console.log(`Processing payment of ${amount}`);
    return true;
  }
}

class InventoryService {
  checkProduct(productId: string) {
    console.log(`Checking product ${productId}`);
    return true;
  }
}

class EmailService {
  sendEmail(to: string, subject: string) {
    console.log( `Sending email to ${to} with subject ${subject}`);
  }
}

class OrderFacade {
  private paymentService: PaymentService = new PaymentService();
  private inventoryService: InventoryService = new InventoryService();
  private emailService: EmailService = new EmailService();

  public placeOrder(productId: string, amount: number, email: string) {
    if (!this.inventoryService.checkProduct(productId)) {
      console.log(`Product with ${productId} not found`)
      return;
    }

    if (!this.paymentService.processPayment(amount)) {
      console.log('Payment Not Processed successfully');
      return;
    }

    this.emailService.sendEmail(email, 'Your Order Placed Successfully');
    console.log('Order completed successfully');
    return;
  }
}

const orderFacade = new OrderFacade();
orderFacade.placeOrder('12345', 100, 'user@example.com');