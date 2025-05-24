/* 

  The Singleton pattern ensures that a class has only one instance and provides 
  a global point of access to that instance.

  Example: Logger, DBConnection
  
*/

class DBConnection {
  private static instance: DBConnection;
  private isConnected: boolean = false;
  private constructor() {}

  public static getInstance() {
    if (!this.instance) {
      this.instance = new DBConnection();
      return this.instance;
    }
    return this.instance;
  }

  public connect() {
    if (!this.isConnected) return;
    //await mongoose.connect()
    return;
  }
}

const db = DBConnection.getInstance();
db.connect();

const db1 = DBConnection.getInstance();
db1.connect()

console.log(db === db1)
