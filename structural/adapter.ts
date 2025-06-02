/*

The Adapter Structural Design pattern is used to allow the two incompatible interfaces to work together.
It acts as a bridge between two incompatible classes, enabling a class to be used in a system it wasn't designed for.

Purpose: To convert the interface of a class into another interface the client expects, without changing the existing code.

Example: 
  Scenario:
    You are building a backend system that sends notifications. 
    Your existing code uses a NotificationSender interface. You previously used an email service,
    but now you want to integrate a third-party SMS provider (which has a different interface).

*/

interface NotificationSender {
  send(recipient: string, message: string): void;
}

class EmailService implements NotificationSender {
  send(recipient: string, message: string): void {
    console.log(`Sending email to ${recipient}: ${message}`);
  }
}

class ThirdPartySMSService {
  sendSMS(phoneNumber: string, text: string) {
    console.log(`Sending SMS to ${phoneNumber}: ${text}`);
  }
}

class SMSAdapter implements NotificationSender {
  constructor (private smsService: ThirdPartySMSService) {}

  send(recipient: string, message: string) {
    this.smsService.sendSMS(recipient, message);
  }
}

function notifyUser(sender: NotificationSender, user: string, message: string) {
  sender.send(user, message);
}

const emailSender = new EmailService();
const smsSender = new SMSAdapter(new ThirdPartySMSService());
notifyUser(emailSender, 'john.doe@example.com', 'Hello, world!');
notifyUser(smsSender, '1234567890', 'Hello, world!');