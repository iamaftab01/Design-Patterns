
/*

The State Pattern is a behavioral design pattern that allows an object to change its behavior when its
internal state changes — it appears as if the object changed its class.

Example: Order Processing System

*/

interface OrderState {
  next(): OrderState;
  getStatus(): string;
  cancel(): OrderState;
}

class PendingState implements OrderState {
  next() {
    return new ConfirmedState();
  }

  cancel() {
    return new CancelledState();
  }

  getStatus(): string {
    return 'PEDNING';
  }
}

class ConfirmedState implements OrderState {
  next() {
    return new DeliveredState();
  }

  cancel(): OrderState {
    return new CancelledState();
  }

  getStatus(): string {
    return 'CONFIRMED';
  }
}

class DeliveredState implements OrderState {
  next(): OrderState {
    throw new Error('Order already delivered')
  }

  cancel(): OrderState {
    throw new Error('Delivered Product can\'t be Cancelled anymore');
  }

  getStatus(): string {
    return 'DELIVERED';
  }
}

class CancelledState implements OrderState {
  next(): OrderState {
    throw new Error('Cancelled orders cannot be processed');
  }
  cancel(): OrderState {
    throw new Error('Order is already cancelled');
  }
  getStatus(): string {
    return 'CANCELLED';
  }
}

class Order {
  private state: OrderState = new PendingState();

  nextState() {
    try {
      this.state = this.state.next();
    } catch (error) {
      console.log((error as Error).message);
    }
  }

  cancelOrder() {
    try {
      this.state = this.state.cancel();
    } catch (error) {
      console.log((error as Error).message);
    }
  }

  getStatus() {
    console.log(this.state.getStatus());
  }
}

const order = new Order();
order.getStatus();
order.nextState();
order.getStatus();
order.cancelOrder();
order.getStatus();
order.nextState();
order.getStatus();