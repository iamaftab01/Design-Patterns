/*

The Decorator Structural Design Pattern lets you add new behaviour dynamically to the existing object
without changing its functionality.

Example: 
  Coffee (Base) with Addons like Milk, Sugar, Whipped Cream (Decorators)
  Logger (Base) with adding Headers, TimeStamp (Decorators)

*/

interface Logger {
  log(message: string): void;
}

class BasicLogger implements Logger {
  public log(message: string) {
    console.log(`[LOG] ${message}`);
  }
}

abstract class LoggerDecorator implements Logger {
  constructor(protected wrapee: Logger) {}
  abstract log(message: string): void;
}

class TimestampLogger extends LoggerDecorator {
  log(message: string) {
    const timestamp = new Date().toISOString();
    this.wrapee.log(`${timestamp} ${message}`);
  }
}

class HeadersLogger extends LoggerDecorator {
  log(message: string) {
    const headers = {'User-Agent': 'WEB'};
    this.wrapee.log(`${message} | ${JSON.stringify(headers)}`);
  }
}

const logger = new BasicLogger();
const timestampLogger = new TimestampLogger(logger);
const headersLogger = new HeadersLogger(timestampLogger);

headersLogger.log('Logging the message')
timestampLogger.log('Logged message')