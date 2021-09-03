import { Logger } from './logger.service';
import { InfoMessage } from '../enums/info-message.enum';
import { app } from 'electron';
import { PROTOCOL_NAME } from '../constants';
import { TraceTag } from '../enums/trace-tag.enum';
import { ErrorMessage } from '../enums/error-message.enum';
import { ErrorHandler } from './error-handler.service';
import { ConfigManager } from './config-manager.service';
import { WindowManager } from './window-manager.service';
import { IpcMessageService } from './ipc-message.service';
import { ServiceProvider } from './service-provider.service';
import { IConfig } from '../interfaces/config.interface';
import { TraceMessage } from '../enums/trace-message.enum';
import { IpcEventHandler } from './ipc-event-handler.service';
import { AppContext } from '../models/app-context.model';
import { is } from 'electron-util';
import { NsisUpdater } from 'electron-updater';
import { dialog } from 'electron';

// app scoped
export class AppManager {
  constructor(
    private errorHandler: ErrorHandler,
    private configManager: ConfigManager,
    private windowManager: WindowManager,
    private ipcMessageService: IpcMessageService,
    private ipcEventHandler: IpcEventHandler
  ) {}

  async initializeApp(serviceProvider: ServiceProvider): Promise<void> {
    try {
      this.setUnhandledErrorHandlers();
      if (is.development && AppContext.mockParser) {
        serviceProvider.createImportScope(process.argv);
      }

      const config = this.configManager.config;
      Logger.logger.info(InfoMessage.MAIN_STARTED, config, `Electron v${process.versions.electron}`, process.argv);
      if (config.enableProtocolClient) {
        app.setAsDefaultProtocolClient(PROTOCOL_NAME);
      }

      if (config.enableTraceLog) {
        Logger.logger.enableTraceLog();
      }

      this.setEnvironmentVariables(config);
      this.registerAppEvents(serviceProvider);
      this.ipcEventHandler.registerIpcEvents(serviceProvider);
      this.configureDevelopmentMode();

      await app.whenReady();
      Logger.logger.trace(TraceTag.App, 'ready');
      await this.windowManager.createMainWindow();
      this.ipcMessageService.mainWebContents = this.windowManager.mainWebContents;
    } catch (error) {
      this.errorHandler.handleError(new Error(ErrorMessage.APP_INITIALIZE_FAILED), error);
    }
  }

  private setUnhandledErrorHandlers() {
    process.on('uncaughtException', error => {
      Logger.logger.warning(ErrorMessage.UNHANDLED_EXCEPTION);
      this.errorHandler.handleError(error);
    });
    process.on('unhandledRejection', error => {
      Logger.logger.warning(ErrorMessage.UNHANDLED_REJECTION);
      this.errorHandler.handleError(error);
    });
  }

  private setEnvironmentVariables(config: IConfig): void {
    const trackingEnabledKey = 'TRACKING_ENABLED';
    const baseUrlKey = 'BASE_URL';
    const instituteIdKey = 'INSTITUTE_ID';
    process.env[trackingEnabledKey] = JSON.stringify(Boolean(config.enableTracking));
    process.env[baseUrlKey] = config.baseUrl;
    process.env[instituteIdKey] = config.instituteId;
  }

  private configureDevelopmentMode() {
    require('electron-debug')({ showDevTools: false });
  }

  private registerAppEvents(serviceProvider: ServiceProvider): void {
    app.on('second-instance', (_, args) => this.handleSecondInstance(args, serviceProvider));
    app.on('window-all-closed', () => this.handleWindowAllClosed());
    app.on('activate', async () => await this.handleActivate());
    app.on('will-quit', () => Logger.logger.trace(TraceTag.App, 'will-quit'));
    app.on('browser-window-created', () => Logger.logger.trace(TraceTag.App, 'browser-window-created'));
    app.on('web-contents-created', () => Logger.logger.trace(TraceTag.App, 'web-contents-created'));
    app.on('certificate-error', () => Logger.logger.warning(ErrorMessage.CERTIFICATE_ERROR));
    app.on('select-client-certificate', () => Logger.logger.trace(TraceTag.App, 'select-client-certificate'));
    app.on('login', () => Logger.logger.trace(TraceTag.App, 'login'));
    app.on('render-process-gone', (_1, _2, details) => Logger.logger.error(ErrorMessage.RENDERER_PROCESS_CRASHED, details));
    app.on('child-process-gone', (_, details) => Logger.logger.error(ErrorMessage.CHILD_PROCESS_CRASHED, details));
    app.on('session-created', () => Logger.logger.trace(TraceTag.App, 'session-created'));
    app.on('ready', () => this.startUpdate());
    app.on('browser-window-blur', () => this.windowManager.unregisterGlobalShortcuts());
    app.on('browser-window-focus', () => this.windowManager.registerGlobalShortcuts(this.windowManager.mainWindow));
  }

  private async handleSecondInstance(args: string[], serviceProvider: ServiceProvider): Promise<void> {
    Logger.logger.info(InfoMessage.SECOND_INSTANCE, ...args);
    serviceProvider.createImportScope(args);
    this.windowManager.activateMainWindow();
    if (is.development && AppContext.mockParser) {
      serviceProvider.createImportScope(args);
    }

    if (serviceProvider.importScope.cliManager.isImportRequested) {
      Logger.logger.trace(TraceTag.Custom, TraceMessage.IMPORT_REQUEST_SECOND_INSTANCE);
      await serviceProvider.importScope.reportImporter.startImport();
    }
  }

  private handleWindowAllClosed(): void {
    Logger.logger.trace(TraceTag.App, 'window-all-closed');
    if (process.platform !== 'darwin') {
      app.quit();
    }
  }

  private async handleActivate(): Promise<void> {
    Logger.logger.trace(TraceTag.App, 'activate');
    if (!this.windowManager.isInitialized) {
      await this.windowManager.createMainWindow();
    }
  }

  private startUpdate() {
    let updateURL = this.configManager.config.updaterUrl;
    if (updateURL === '') {
      const baseUrlArray = this.configManager.config.baseUrl.split(/(?=:)/g);
      if (baseUrlArray.length > 2) {
        updateURL = baseUrlArray.slice(0, 2).join('');
        updateURL = updateURL + ':5080';
      } else {
        updateURL = this.configManager.config.baseUrl + ':5080';
      }
    }
    Logger.logger.info('Looking for updates in ' + updateURL);
    const options: any = {
      provider: 'generic',
      url: updateURL
    };
    const autoUpdater = new NsisUpdater(options);
    autoUpdater.on('update-available', _ => {
      Logger.logger.info('Update available');
      this.updateDialog();
    });
    autoUpdater.on('download-progress', progressObj => {
      let logMessage = 'Download speed: ' + progressObj.bytesPerSecond;
      logMessage += ' - Downloaded ' + progressObj.percent + '%';
      logMessage += ' (' + progressObj.transferred + '/' + progressObj.total + ')';
      Logger.logger.info(logMessage);
    });
    autoUpdater.on('update-downloaded', _ => {
      autoUpdater.quitAndInstall();
    });
    autoUpdater.checkForUpdates().catch(e => Logger.logger.error(ErrorMessage.AUTO_UPDATE_FAILED, e));
  }

  private updateDialog() {
    // TODO replace with good looking dialog
    const options = {
      type: 'info',
      buttons: [],
      defaultId: 2,
      title: 'Downloading Update',
      message: 'RadioReport is updating, please wait. After the update is downloaded, it will be installed automatically.'
    };

    dialog.showMessageBox(null, options).then(messageBoxReturnValue => {
      console.log(messageBoxReturnValue);
    });
  }
}
