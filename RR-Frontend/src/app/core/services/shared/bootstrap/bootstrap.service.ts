import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '@environments/environment';
import { AppConfig } from '../../../../app.config';
import { Platform } from '@enums/shared/platform.enum';
import { IModuleConfigBase } from '@interfaces/configs';
import { ImportReportService } from '../import-report/import-report.service';
import { IpcMessageService } from '../ipc-message/ipc-message.service';
import { PlatformService } from '../platform/platform.service';
import { ToastMessageService } from '../ToastMessage/toast-message.service';
import ensureError from 'ensure-error';
import { LogLevel } from '@enums/shared/log-level.enum';
import { IpcLoggingService } from '@services/shared/logging/ipc-logging.service';
import { LoadingScreenService } from '@services/shared/loading-screen/loading-screen.service';
import { ConfigurationStorageService } from '../configuration-storage/configuration-storage.service';
import { InstituteHttpService } from '@services/shared/settings/institute-http.service';

@Injectable({
  providedIn: 'root'
})
export class BootstrapService {
  constructor(
    private platformService: PlatformService,
    private router: Router,
    private ngZone: NgZone,
    private importReportService: ImportReportService,
    private toastMessageService: ToastMessageService,
    private ipcMessageService: IpcMessageService,
    private ipcLoggingService: IpcLoggingService,
    private loadingScreenService: LoadingScreenService,
    private instituteHttpService: InstituteHttpService,
    private configStorageService: ConfigurationStorageService
  ) {}

  public configurePlatform(): void {
    if (this.platformService.isDocker()) {
      this.configureDocker();
    }

    if (this.platformService.isElectron()) {
      this.configureElectron();

      if (this.platformService.isDesktop()) {
        this.configureDesktop();
      }
    }

    const isDev = environment.name === 'dev';
    if (isDev) {
      this.configureDev();
    }

    if (this.platformService.isDocker() || this.platformService.isElectron() || isDev) {
      this.getInstituteLogo();
    }

    if (AppConfig.settings.instituteId) {
      this.configStorageService.setInstituteInitialized(true);
    }
  }

  private configureDev(): void {
    console.log('Detecting dev environment');
  }

  private configureDocker(): void {
    console.log('Detecting Docker environment with base url ' + environment.baseUrl);
    console.log(JSON.stringify(environment));
    this.setBaseUrl(environment.baseUrl);
    this.storeInstituteId(environment.instituteId);
    AppConfig.settings.enableTracking = environment.tracking;
  }

  private configureElectron(): void {
    console.log('Detecting electron platform');
    console.log(JSON.stringify(environment));
    this.platformService.getElectronRenderer()?.on('reload', () =>
      this.ngZone.run(() => {
        const reuseStrategyOld = this.router.routeReuseStrategy.shouldReuseRoute;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.navigateByUrl(this.router.url).then(() => (this.router.routeReuseStrategy.shouldReuseRoute = reuseStrategyOld));
      })
    );
  }

  private configureDesktop(): void {
    console.log('Detecting desktop platform');
    this.ipcLoggingService.hookConsole();

    const trackingEnabledKey = 'TRACKING_ENABLED';
    const baseUrlKey = 'BASE_URL';
    const instituteIdKey = 'INSTITUTE_ID';
    AppConfig.settings.env.platform = Platform.Desktop;
    AppConfig.settings.enableTracking = this.platformService.getElectronMainProcess().env[trackingEnabledKey] === 'true';
    this.setBaseUrl(this.platformService.getElectronMainProcess().env[baseUrlKey]);
    this.storeInstituteId(this.platformService.getElectronMainProcess().env[instituteIdKey]);
    if (AppConfig.settings.enableTracking) {
      console.log('Tracking enabled');
    }

    window.addEventListener('error', event => this.ipcMessageService.sendRendererLog(LogLevel.Error, ensureError(event.error || event)));
    this.registerIpcHandler();
  }

  private registerIpcHandler(): void {
    this.ipcMessageService.registerStudySelection(data => this.importReportService.handleStudySelection(data));
    this.ipcMessageService.registerExistingImportCheck(data => this.importReportService.handleExistingImportCheck(data));
    this.ipcMessageService.registerModuleSelection((data?) => this.importReportService.handleModuleSelection(data));
    this.ipcMessageService.registerReportRequiredFields(data => this.importReportService.handleReportRequiredFields(data));
    this.ipcMessageService.registerImportReportRequest(requestString => this.importReportService.handleImportReportRequest(requestString));
    this.ipcMessageService.registerToastError((title, message) => {
      this.loadingScreenService.stopLoading();
      this.toastMessageService.showErrorToast(message, title);
    });
  }

  private setBaseUrl(baseUrl: string): void {
    AppConfig.settings.baseUrl = baseUrl;
    for (const moduleSettingKey of Object.keys(AppConfig.settings.servicesUrls)) {
      const moduleSetting = AppConfig.settings.servicesUrls[moduleSettingKey] as IModuleConfigBase;
      if (moduleSetting) {
        moduleSetting.localBaseURL = baseUrl;
      }
    }
  }

  private getInstituteLogo() {
    /**
     * TODO Backend is not ready for fetching logo without token, so temporally it's fetch after successful login, which should be removed and below lines uncomment when backend is ready
     */
    // this.instituteHttpService.getInstituteLogo().subscribe(response => {
    //   AppConfig.settings.customerLogo = `data:image/png;base64,${JSON.parse(response.payload).Content}`;
    // });
  }

  private storeInstituteId(instituteId: string) {
    AppConfig.settings.instituteId = instituteId;
    this.configStorageService.setInstituteId(instituteId);
  }
}
