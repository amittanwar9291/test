import { IpcMessageService } from '../services/ipc-message.service';
import { FileSystemService } from '../services/file-system.service';
import { ConfigManager } from '../services/config-manager.service';
import { ErrorHandler } from '../services/error-handler.service';
import { WindowManager } from '../services/window-manager.service';
import { IpcEventHandler } from '../services/ipc-event-handler.service';
import { AppManager } from '../services/app-manager.service';

// app scoped services are created once during the whole app lifetime containing app level state and can be 'injected' where needed
export class AppScope {
  private readonly configManagerInternal: ConfigManager;
  private readonly ipcMessageServiceInternal: IpcMessageService;
  private readonly fileSystemServiceInternal: FileSystemService;
  private readonly errorHandlerInternal: ErrorHandler;
  private readonly windowManagerInternal: WindowManager;
  private readonly ipcEventHandlerInternal: IpcEventHandler;
  private readonly appManagerInternal: AppManager;

  constructor(configFolderPath: string) {
    this.fileSystemServiceInternal = new FileSystemService();
    this.configManagerInternal = new ConfigManager(configFolderPath, this.fileSystemServiceInternal);
    this.ipcMessageServiceInternal = new IpcMessageService();
    this.errorHandlerInternal = new ErrorHandler(this.ipcMessageServiceInternal);
    this.windowManagerInternal = new WindowManager(this.fileSystemServiceInternal, this.errorHandlerInternal);
    this.ipcEventHandlerInternal = new IpcEventHandler(this.errorHandlerInternal, this.ipcMessageServiceInternal);
    this.appManagerInternal = new AppManager(
      this.errorHandlerInternal,
      this.configManagerInternal,
      this.windowManagerInternal,
      this.ipcMessageServiceInternal,
      this.ipcEventHandlerInternal
    );
  }

  get configManager(): ConfigManager {
    return this.configManagerInternal;
  }

  get ipcMessageService(): IpcMessageService {
    return this.ipcMessageServiceInternal;
  }

  get fileSystemService(): FileSystemService {
    return this.fileSystemServiceInternal;
  }

  get errorHandler(): ErrorHandler {
    return this.errorHandlerInternal;
  }

  get windowManager(): WindowManager {
    return this.windowManagerInternal;
  }

  get ipcEventHandler(): IpcEventHandler {
    return this.ipcEventHandlerInternal;
  }

  get appManager(): AppManager {
    return this.appManagerInternal;
  }
}
