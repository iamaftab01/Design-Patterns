/*

The Chain of Responsibility is a behavioral design pattern used to achieve loose coupling in software design.
It allows a request to be passed along a chain of handlers. Each handler decides either to process the request 
or to pass it to the next handler in the chain.

Example: HTTP Request Validation Pipeline

*/

export {}
interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: any): any;
}

abstract class AbstractHandler implements Handler {
  protected nextHandler: Handler | null = null;
  setNext(hanlder: Handler) {
    this.nextHandler = hanlder;
    return this.nextHandler;
  }

  handle(request: any): any {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return null;
  }
}

class AuthHandler extends AbstractHandler {
  handle(request: any) {
    if (!request.user || !request.user.isAuthenticated) {
      return { statusCode: 429, message: "Authentication failed" };
    }
    console.log("Authentication Passed");
    return super.handle(request);
  }
}

class RoleHandler extends AbstractHandler {
  handle(request: any) {
    if (request.user.role !== "admin") {
      return { statusCode: 403, message: "Access denied: Admins only" };
    }
    console.log("Role Passed");
    return super.handle(request);
  }
}

class RateLimitHandler extends AbstractHandler {
  handle(request: any) {
    if (request.user.requestsToday > 1000) {
      return { statusCode: 429, message: "Too many requests, limit reached" };
    }
    console.log("RateLimit Passed");
    return super.handle(request);
  }
}

const authHandler = new AuthHandler();
const roleHandler = new RoleHandler();
const rateLimitHandler = new RateLimitHandler();

authHandler.setNext(roleHandler).setNext(rateLimitHandler);

const request = {
  user: {
    isAuthenticated: true,
    role: "admin",
    requestsToday: 500,
  }
}

const result = authHandler.handle(request);

if (result) {
  console.log("Request rejected:", result);
} else {
  console.log("Request passed all checks!");
}