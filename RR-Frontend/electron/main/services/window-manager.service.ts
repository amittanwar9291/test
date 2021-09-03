import { BrowserWindow, globalShortcut, ipcMain, screen } from 'electron';
import { join } from 'path';
import { FileSystemService } from './file-system.service';
import { Logger } from './logger.service';
import { TraceTag } from '../enums/trace-tag.enum';
import { TraceMessage } from '../enums/trace-message.enum';
import { ErrorMessage } from '../enums/error-message.enum';
import { ErrorHandler } from './error-handler.service';
import { AppContext } from '../models/app-context.model';
import { DEVTOOLS_CONFIG } from '../constants';
import { IpcChannel } from '../enums/ipc-channel.enum';

// app scoped
export class WindowManager {
  private mainWebContentsInternal: Electron.WebContents;
  private mainWindowInternal: BrowserWindow;
  private screenWidthFraction = 0.75;
  private aspectRatio = 9 / 16;

  constructor(private fileSystemService: FileSystemService, private errorHandler: ErrorHandler) {}

  get mainWebContents(): Electron.webContents {
    if (!this.mainWebContentsInternal) {
      throw new Error(ErrorMessage.MAINWINDOW_NOT_INITIALIZED);
    }

    return this.mainWebContentsInternal;
  }

  get mainWindow(): BrowserWindow {
    if (!this.mainWindowInternal) {
      throw new Error(ErrorMessage.MAINWINDOW_NOT_INITIALIZED);
    }

    return this.mainWindowInternal;
  }

  get isInitialized(): boolean {
    return !!this.mainWindowInternal;
  }

  async createMainWindow(): Promise<void> {
    const mainWindow = this.createMainWindowInternal();
    this.registerWindowEvents(mainWindow);
    this.registerWebContentsEvents(mainWindow);
    this.registerGlobalShortcuts(mainWindow);
    this.registerShortcutsReportSessionNav(mainWindow);
    Logger.logger.trace(TraceTag.Custom, TraceMessage.WINDOW_CREATED_METHOD);
    await this.loadApplication(mainWindow);
  }

  activateMainWindow(): void {
    const mainWindow = this.mainWindow;
    if (mainWindow) {
      if (mainWindow.isMinimized()) {
        mainWindow.restore();
      }

      mainWindow.focus();
    }
  }

  private createMainWindowInternal(): BrowserWindow {
    const { width, height } = this.calculateDimensions();

    const window = new BrowserWindow({
      width,
      height,
      webPreferences: {
        nodeIntegration: true,
        enableRemoteModule: true,
        webSecurity: false,
        allowRunningInsecureContent: false,
        // @ts-ignore
        devTools: DEVTOOLS_CONFIG === 'ENABLED' || DEVTOOLS_CONFIG === '$DEVTOOLS',
        preload: join(this.fileSystemService.getEntryFolderPath(), 'preload.js')
      },
      useContentSize: true,
      frame: false,
      show: false,
      backgroundColor: '#00aec2'
    });
    window.webContents.userAgent += ' RadioReport-Desktop';
    this.mainWebContentsInternal = window.webContents;
    this.mainWindowInternal = window;
    return window;
  }

  private calculateDimensions(): { width: number; height: number } {
    const screenSize = screen.getPrimaryDisplay().size;
    const width = screenSize.width * this.screenWidthFraction;
    const height = width * this.aspectRatio;
    Logger.logger.trace(TraceTag.Custom, TraceMessage.SCREEN_DIMENSIONS, screenSize, width, height);

    return { width, height };
  }

  private registerWindowEvents(window: BrowserWindow) {
    window.once('ready-to-show', () => this.handleReadyToShow(window));
    window.on('closed', () => this.handleWindowClosed());
    window.on('show', () => Logger.logger.trace(TraceTag.Window, 'show'));
    window.on('maximize', () => Logger.logger.trace(TraceTag.Window, 'maximize'));
    window.on('enter-full-screen', () => Logger.logger.trace(TraceTag.Window, 'enter-full-screen'));
  }

  private registerWebContentsEvents(window: BrowserWindow) {
    window.webContents.on('did-start-loading', () => Logger.logger.trace(TraceTag.WebContents, 'did-start-loading'));
    window.webContents.on('did-stop-loading', () => Logger.logger.trace(TraceTag.WebContents, 'did-stop-loading'));
    window.webContents.on('did-finish-load', () => Logger.logger.trace(TraceTag.WebContents, 'did-finish-load'));
    window.webContents.on('did-fail-load', () => this.handleLoadFailed(window));
    window.webContents.on('dom-ready', () => Logger.logger.trace(TraceTag.WebContents, 'dom-ready'));
    window.webContents.on('did-start-navigation', () => Logger.logger.trace(TraceTag.WebContents, 'did-start-navigation'));
    window.webContents.on('did-navigate', () => Logger.logger.trace(TraceTag.WebContents, 'did-navigate'));
    window.webContents.on('render-process-gone', (_, details) => Logger.logger.error(ErrorMessage.RENDERER_PROCESS_CRASHED, details));
    window.webContents.on('plugin-crashed', (_, name) => Logger.logger.error(ErrorMessage.PLUGIN_CRASHED, name));
    window.webContents.on('responsive', () => Logger.logger.trace(TraceTag.WebContents, 'responsive'));
    window.webContents.on('unresponsive', () => Logger.logger.trace(TraceTag.WebContents, 'unresponsive'));
    window.webContents.on('destroyed', () => Logger.logger.trace(TraceTag.WebContents, 'destroyed'));
    window.webContents.on('ipc-message', () => Logger.logger.trace(TraceTag.WebContents, 'ipc-message'));
    window.webContents.on('ipc-message-sync', () => Logger.logger.trace(TraceTag.WebContents, 'ipc-message-sync'));
    window.webContents.on('certificate-error', () => Logger.logger.warning(ErrorMessage.CERTIFICATE_ERROR));
    window.webContents.on('preload-error', (_, path, error) => Logger.logger.error(ErrorMessage.PRELOAD_ERROR, path, error));
  }

  private handleLoadFailed(window: BrowserWindow): void {
    Logger.logger.warning(ErrorMessage.LOAD_FAILED);
    setTimeout(async () => await this.loadApplication(window), 5000);
  }

  private handleReadyToShow(window: BrowserWindow): void {
    Logger.logger.trace(TraceTag.Window, 'ready-to-show');
    window.show();
    if (AppContext.openDevTools) {
      window.webContents.openDevTools();
    }
  }

  private handleWindowClosed() {
    Logger.logger.trace(TraceTag.Window, 'closed');
  }

  registerGlobalShortcuts(wWindow: BrowserWindow): void {
    globalShortcut.register('F5', () => wWindow.webContents.send('reload'));
    globalShortcut.register('Control+F5', () => wWindow.reload());
    globalShortcut.register('F11', () => wWindow.setFullScreen(!wWindow.isFullScreen()));
    globalShortcut.register('Control+Down', () => (wWindow.isMinimized() ? wWindow.restore() : wWindow.minimize()));
    globalShortcut.register('Control+M', () => (wWindow.isMaximized() ? wWindow.restore() : wWindow.maximize()));
  }

  unregisterGlobalShortcuts(): void {
    globalShortcut.unregisterAll();
  }

  private registerShortcutsReportSessionNavigation(wWindow: BrowserWindow): void {
    globalShortcut.register('Tab', () => wWindow.webContents.send(IpcChannel.GoToNextPage));
    globalShortcut.register('Shift+Tab', () => wWindow.webContents.send(IpcChannel.GoToPreviousPage));
    globalShortcut.register('Shift+R', () => wWindow.webContents.send(IpcChannel.GoToReportPage));
  }

  private unregisterShortcutsReportSessionNavigation() {
    globalShortcut.unregister('Tab');
    globalShortcut.unregister('Shit+Tab');
    globalShortcut.unregister('Shift+R');
  }

  private registerShortcutsReportSessionNav(wWindow: BrowserWindow) {
    ipcMain.on('register-navigation-shortcuts', () => this.registerShortcutsReportSessionNavigation(wWindow));
    ipcMain.on('unregister-navigation-shortcuts', () => this.unregisterShortcutsReportSessionNavigation());
  }

  private async loadApplication(window: BrowserWindow): Promise<void> {
    Logger.logger.trace(TraceTag.Custom, TraceMessage.START_APP_LOADING);
    try {
      if (AppContext.isServe) {
        require('electron-reload')(this.fileSystemService.getEntryFolderPath(), {
          electron: require(join(this.fileSystemService.getEntryFolderPath(), 'node_modules/electron'))
        });
        const applicationUrl = 'http://localhost:4200';
        Logger.logger.trace(TraceTag.Custom, TraceMessage.APPLICATION_URL, applicationUrl);
        await window.loadURL(applicationUrl);
      } else {
        const indexPath = join(this.fileSystemService.getEntryFolderPath(), 'app', 'index.html');
        Logger.logger.trace(TraceTag.Custom, TraceMessage.INDEX_PATH, indexPath);
        const indexPathExists = this.fileSystemService.existsSync(indexPath);
        Logger.logger.trace(TraceTag.Custom, TraceMessage.INDEX_PATH_EXISTS, indexPathExists);
        await window.loadFile(indexPath);
      }
      Logger.logger.trace(TraceTag.Custom, TraceMessage.APP_LOADED);
    } catch (error) {
      Logger.logger.trace(TraceTag.Custom, 'loadURL/File failed');
      this.errorHandler.handleError(error);
    }
  }
}
