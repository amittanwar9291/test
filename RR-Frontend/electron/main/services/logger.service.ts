import { app } from 'electron';
import moment from 'moment';
import { join } from 'path';
import chalk from 'chalk';
import { ErrorMessage } from '../enums/error-message.enum';
import { FileSystemService } from './file-system.service';
import { LogLevel } from '../enums/log-level.enum';
import { TraceTag } from '../enums/trace-tag.enum';
import { serializeError } from 'serialize-error';

// app scoped
export class Logger {
  static logger: Logger;

  private readonly logFilePath: string;
  private logEntryStrings: string[] = [];
  private isTraceLogEnabled: boolean;

  constructor(private fileSystemService: FileSystemService) {
    this.logFilePath = join(app.getPath('logs'), 'log.txt');
    if (!fileSystemService.existsSync(this.logFilePath)) {
      fileSystemService.writeFileSync(this.logFilePath, '');
    }
  }

  public enableTraceLog() {
    this.isTraceLogEnabled = true;
  }

  public startLogEntryCollection() {
    this.logEntryStrings = [];
  }

  public getLogEntryCollection(): string[] {
    return this.logEntryStrings;
  }

  public addToLogEntryCollection(...entries: string[]): void {
    this.logEntryStrings.push(...entries);
  }

  public trace(tag: TraceTag, message?: any, ...optionalParams: any[]): void {
    if (this.isTraceLogEnabled) {
      this.logInternal(LogLevel.Debug, 'TRACE', `${tag} - ${message}`, ...optionalParams);
    }
  }

  public info(message?: any, ...optionalParams: any[]): void {
    this.logInternal(LogLevel.Info, 'INFO', message, ...optionalParams);
  }

  public warning(message?: any, ...optionalParams: any[]): void {
    this.logInternal(LogLevel.Warning, 'WARNING', message, ...optionalParams);
  }

  public error(message?: any, ...optionalParams: any[]): void {
    this.logInternal(LogLevel.Error, 'ERROR', message, ...optionalParams);
  }

  private logInternal(logLevel: LogLevel, tag: string, message?: any, ...optionalParams: any[]) {
    if (!message && !optionalParams?.length) {
      return;
    }

    const messageString = this.maybeStringifyParameter(message);
    const tagString = tag.padEnd(10);
    this.logConsole(logLevel, tagString, messageString, ...optionalParams);
    this.logFile(tagString, messageString, ...optionalParams);
  }

  private logConsole(logLevel: LogLevel, tagString: string, messageString: string, ...optionalParams: any[]): void {
    const taggedMessage = `${tagString}${messageString}`;
    switch (logLevel) {
      case LogLevel.Debug:
        console.log(chalk.blackBright(taggedMessage), ...optionalParams);
        break;
      case LogLevel.Info:
        console.log(chalk.greenBright(taggedMessage), ...optionalParams);
        break;
      case LogLevel.Warning:
        console.warn(chalk.yellow(taggedMessage), ...optionalParams);
        break;
      case LogLevel.Error:
        console.error(chalk.red(taggedMessage), ...optionalParams);
        break;
    }
  }

  private logFile(tagString: string, messageString: string, ...optionalParams: any[]): void {
    const logEntryString = this.createLogEntryString(tagString, messageString, ...optionalParams);
    this.appendToFile(logEntryString);
    this.logEntryStrings.push(logEntryString);
  }

  private createLogEntryString(tagString: string, messageString: string, ...optionalParams: any[]): string {
    if (optionalParams?.length) {
      messageString += ` | ${optionalParams.map(p => this.maybeStringifyParameter(p)).join(' | ')}`;
    }

    const dateString = moment().format('YYYY-MM-DD HH:mm:ss:SSS');

    return `${dateString} - ${tagString}${messageString}\n`;
  }

  private appendToFile(logEntry: string): void {
    try {
      this.fileSystemService.appendFileAsync(this.logFilePath, logEntry).subscribe(
        () => {},
        error => console.error(ErrorMessage.FILE_LOG_FAILED, error, logEntry)
      );
    } catch (error) {
      console.error(ErrorMessage.FILE_LOG_FAILED, error);
    }
  }

  private maybeStringifyParameter(parameter?: any): string {
    if (!parameter) {
      return '';
    }

    if (typeof parameter === 'string') {
      return parameter;
    }

    if (parameter instanceof Error) {
      return JSON.stringify(serializeError(parameter));
    }

    return JSON.stringify(parameter);
  }
}
