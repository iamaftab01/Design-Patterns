/*

The Command Pattern is a behavioral design pattern that turns a request into a stand-alone object
containing all the information about the request.

Example: Task Queue with Command Pattern

*/

export {}
interface Command {
  execute(): Promise<void>;
}

class EmailService {
  public async sendEmail(to: string, message: string): Promise<void> {
    console.log(`📧 Sending email to ${to}: ${message}`);
  }
}

class ReportService {
  public async generateReport(userId: number) {
    console.log(`📄 Generating report for user ${userId}`);
  }
}

class SendEmailCommand implements Command {
  constructor (private emailService: EmailService, private to: string, private message: string) {}

  async execute(): Promise<void> {
    await this.emailService.sendEmail(this.to, this.message);
  }
}

class GenerateReportCommand implements Command {
  constructor (private reportService: ReportService, private userId: number) {}

  async execute(): Promise<void> {
    await this.reportService.generateReport(this.userId);
  }
}

class CommandInvoker {
  private queue: Command[] = [];

  public addCommand(command: Command) {
    this.queue.push(command);
  }

  public async run() {
    for (const command of this.queue) {
      await command.execute();
    }
    this.queue = [];
  }
}

const emailService = new EmailService();
const reportService = new ReportService();

const invoker = new CommandInvoker();

invoker.addCommand(new SendEmailCommand(emailService, 'john@example.com', 'Hello, world!'));
invoker.addCommand(new GenerateReportCommand(reportService, 1213243));

invoker.run();