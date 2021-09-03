import { AppScope } from '../models/app-scope.model';
import { ImportScope } from '../models/import-scope.model';
import { Logger } from './logger.service';
import { TraceTag } from '../enums/trace-tag.enum';
import { TraceMessage } from '../enums/trace-message.enum';
import { ErrorMessage } from '../enums/error-message.enum';

// app scoped
export class ServiceProvider {
  private appScopeInternal: AppScope;
  private importScopeInternal: ImportScope;

  constructor(configFolderPath: string) {
    this.appScopeInternal = new AppScope(configFolderPath);
    this.createImportScope(process.argv);
  }

  get appScope(): AppScope {
    return this.appScopeInternal;
  }

  get importScope(): ImportScope {
    if (!this.importScopeInternal) {
      throw new Error(ErrorMessage.IMPORT_SCOPE_NOT_INITIALIZED);
    }

    return this.importScopeInternal;
  }

  createImportScope(args: string[]): void {
    this.importScopeInternal = new ImportScope(
      this.appScope.fileSystemService,
      this.appScope.ipcMessageService,
      this.appScope.configManager,
      this.appScope.errorHandler
    );
    this.importScopeInternal.cliManager.parseCliArguments(args);
    Logger.logger.trace(TraceTag.Custom, TraceMessage.IMPORT_SCOPE_CREATED);
  }

  disposeImportScope(): void {
    this.importScopeInternal = null;
  }
}
