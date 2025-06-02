/*

The Observer Pattern is a behavioral design pattern where an object (called the Subject) maintains a list
of its dependents (Observers) and notifies them automatically of any state changes.

Example: User Activity Notification System

*/
interface Observer {
  update(event: string, data: any): void;
}

interface Subject {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(event: string, data: any): void;
}

class UserActivityService implements Subject {
  private observers: Observer[] = [];

  public subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  public unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter(obj => obj !== observer);
  }

  public notify(event: string, data: any): void {
    this.observers.forEach(observer => observer.update(event, data));
  }

  public userLoggedIn(user: string) {
    console.log(`User logged in ${user}`);
    this.notify('login', user);
  }
}

class AuditLogger implements Observer {
  public update(event: string, data: any): void {
    if (event === 'login') {
      console.log(`📝 [Audit] ${data.name} logged in at ${new Date().toISOString()}`);
    }
  }
}

class NotificationService implements Observer {
  public update(event: string, data: any): void {
    if (event === 'login') {
      console.log(`📲 [Notify] Welcome back, ${data.name}!`);
    }
  }
}

class SessionTracker implements Observer {
  public update(event: string, data: any): void {
    if (event === 'login') {
      console.log(`📊 [Tracker] User ${data.name} is now online.`);
    }
  }
}

const userActivityService = new UserActivityService();
userActivityService.subscribe(new AuditLogger());
userActivityService.subscribe(new SessionTracker());
userActivityService.subscribe(new NotificationService());

userActivityService.userLoggedIn('d-123');