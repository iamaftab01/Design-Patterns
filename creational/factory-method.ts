/*

The Factory Method is a creational pattern that defines an interface for creating objects
but lets subclasses decide which class to instantiate.

It decouples object creation from the main code logic, improving flexibility and maintainability.

Example: 
  A factory method for creating different types of vehicles,
  e-commerce backend that supports multiple payment gateways

*/

interface PaymentProcessor {
  pay(amount: number): void;
}

class PayPalProcessor implements PaymentProcessor {
  public pay(amount: number): void {
    console.log(`${amount} - Amount processed by PayPal`);
  }
}

class AdyenProcessor implements PaymentProcessor {
  public pay(amount: number): void {
    console.log(`${amount} - Amount processed by Adyen`);
  }
}

class PaymentProcessorFactory {
  static createProcessor(processorType: string): PaymentProcessor {
    switch(processorType) {
      case 'PayPal' : return new PayPalProcessor();
      case 'Adyen' : return new AdyenProcessor();
      default: throw new Error(`Unsupported payment processor: ${processorType}`);
    }
    
  }
}

const processor1 = PaymentProcessorFactory.createProcessor('PayPal');
processor1.pay(100);

const processor2 = PaymentProcessorFactory.createProcessor('Adyen');
processor2.pay(200);