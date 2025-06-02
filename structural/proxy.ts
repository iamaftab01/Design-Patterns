/*

The Proxy Design Pattern is a structural pattern that provides a substitute or placeholder for another object to control access to it.

Purpose: 
  To introduce an additional layer of control over object access, often for purposes like:
    Lazy loading
    Access control
    Logging
    Caching
    Remote access

*/

interface UserService {
  getUser(userId: string): string; 
}

class RealUserService implements UserService {
  getUser(userId: string) {
    console.log(`Fetching the user with userId: ${userId} from DB`);
    return JSON.stringify({id: userId, name: `User_${userId}`});
  }
}

class UserProxyService implements UserService {
  private data: Map<string, string> = new Map();

  getUser(userId: string) {
    if (this.data.has(userId)) {
      console.log(`Fetching the user with userId: ${userId} from Cache`);
      return this.data.get(userId)!;
    }
    const userData = new RealUserService().getUser(userId);
    this.data.set(userId, userData);
    return userData;
  }
}

const userProxy = new UserProxyService();

userProxy.getUser('123');
userProxy.getUser('123');