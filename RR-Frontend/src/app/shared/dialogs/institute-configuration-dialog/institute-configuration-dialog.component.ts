import { ResizableBaseComponent } from '@abstractions/resizable-base/resizable-base';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ConfigurationDataService } from '@services/shared/configuration-data/configuration-data.service';
import { ConfigurationStorageService } from '@services/shared/configuration-storage/configuration-storage.service';
import { PlatformService } from '@services/shared/platform/platform.service';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';
import { AppConfig } from 'app/app.config';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { SettingsHttpService } from '@services/shared/settings/settings-http.service';

@Component({
  selector: 'rr-institute-configuration-dialog',
  templateUrl: './institute-configuration-dialog.component.html',
  styleUrls: ['./institute-configuration-dialog.component.scss']
})
export class InstituteConfigurationDialogComponent extends ResizableBaseComponent implements OnInit {
  @ViewChild('tokenUpload') tokenUpload: any;

  token = '';
  instituteId: string;
  instituteName: string;
  baseUrl: string;
  pacsHost: string;
  pacsPort: string;
  pacsCallingAe: string;
  pacsCalledAe: string;
  content: any;
  isClient: boolean;

  constructor(
    public ref: DynamicDialogRef,
    public settingsHttpService: SettingsHttpService,
    private toastMessageService: ToastMessageService,
    public configStorageService: ConfigurationStorageService,
    private platform: PlatformService,
    private configData: ConfigurationDataService,
    private router: Router,
    private translateService: TranslateService
  ) {
    super();
  }

  ngOnInit() {
    this.translateService.use('en');
    this.checkPlatform();
    this.setInstituteConfigValues();
  }

  setInstituteConfigValues() {
    this.instituteId = this.configStorageService.getInstituteId();
    this.baseUrl = this.configStorageService.getBaseUrl();
    this.pacsHost = this.configStorageService.getPacsHost();
    this.pacsPort = JSON.parse(this.configStorageService.getPacsPort());
    this.pacsCallingAe = this.configStorageService.getCallingAe();
    this.pacsCalledAe = this.configStorageService.getCalledAe();
  }

  checkPlatform() {
    if (this.platform.isDesktop()) {
      this.isClient = true;
    }
  }

  uploadToken() {
    this.content = this.configData.getContent();
    this.token = this.configData.getToken();
    try {
      this.settingsHttpService.uploadInstituteToken(this.content).subscribe(response => {
        if (response.isSuccess) {
          this.toastMessageService.showSuccessToast('instituteconfiguration.toastMessages.uploadsuccess');
          this.configStorageService.setInstituteInitialized(true);
          this.router.navigate(['/login']);
        } else {
          this.toastMessageService.showErrorToast(response.reason);
        }
      });
    } catch {
      this.toastMessageService.showErrorToast('instituteconfiguration.toastMessages.uploadfailed');
    }
  }

  cancel() {
    this.ref.close();
  }

  confirm() {
    this.configStorageService.setInstituteId(this.instituteId);
    this.configStorageService.setInstituteName(this.instituteName);
    this.configStorageService.setBaseUrl(this.baseUrl);
    this.configStorageService.setPacsHost(this.pacsHost);
    this.configStorageService.setPacsPort(JSON.stringify(this.pacsPort));
    this.configStorageService.setCallingAe(this.pacsCallingAe);
    this.configStorageService.setCalledAe(this.pacsCalledAe);
    AppConfig.settings.baseUrl = this.baseUrl;
    AppConfig.settings.instituteId = this.instituteId;
    this.uploadToken();
    this.ref.close();
  }
}
