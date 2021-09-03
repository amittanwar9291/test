import { ResizableBaseComponent } from '@abstractions/resizable-base/resizable-base';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfigurationDataService } from '@services/shared/configuration-data/configuration-data.service';
import { ConfigurationStorageService } from '@services/shared/configuration-storage/configuration-storage.service';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';
import { InstituteConfigurationDialogComponent } from 'app/shared/dialogs/institute-configuration-dialog/institute-configuration-dialog.component';
import jwt_decode from 'jwt-decode';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'rr-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent extends ResizableBaseComponent implements OnInit {
  @ViewChild('tokenUpload') tokenUpload: ElementRef;

  fileChangedEvent: any = '';
  token = '';
  tokenDecoded = false;
  instituteConfig: any;
  content: any;
  file: any;
  fileReader: FileReader;
  correctFileExtension = false;
  toastMessages: any;

  constructor(
    private toastMessageService: ToastMessageService,
    private dialogService: DialogService,
    public configStorageService: ConfigurationStorageService,
    private configService: ConfigurationDataService,
    public translateService: TranslateService
  ) {
    super();
  }

  ngOnInit() {
    this.translateService.use('en');
  }

  fileChangeEvent(event: any): void {
    this.file = event.target.files[0];
    this.fileReader = new FileReader();
    this.fileReader.onload = e => {
      if (this.correctFileExtension === true) {
        this.content = JSON.parse(this.fileReader.result as string);
        this.token = this.content.InstituteConfigJwt;
        this.instituteConfig = jwt_decode(this.token);
        this.tokenDecoded = true;
        this.setInstituteConfigValues();
        this.dialogService.open(InstituteConfigurationDialogComponent, {
          showHeader: false
        });
        this.configService.setContent(this.content);
        this.configService.setToken(this.token);
        this.tokenUpload.nativeElement.value = '';
      }
    };
    this.fileReader.readAsText(this.file);
    this.checkfile(this.file.name);
  }

  checkfile(filename) {
    try {
      const reg = /(.*?)\.(rric)$/;
      const fileExtension = filename.match(reg);
      if (fileExtension[2] === 'rric') {
        this.correctFileExtension = true;
      }
    } catch {
      this.toastMessageService.showErrorToast('instituteconfiguration.toastMessages.invalidfileformat');
    }
  }

  setInstituteConfigValues() {
    try {
      const validJson = this.content;
      if (validJson !== null) {
        this.configStorageService.setInstituteId(this.instituteConfig.instituteConfiguration.Id);
        this.configStorageService.setBaseUrl(this.instituteConfig.instituteConfiguration.ApplicationConfig.BackendBaseUrl);
        this.configStorageService.setPacsHost(this.instituteConfig.instituteConfiguration.ApplicationConfig.PacsConfig.Host);
        this.configStorageService.setPacsPort(this.instituteConfig.instituteConfiguration.ApplicationConfig.PacsConfig.Port);
        this.configStorageService.setCallingAe(this.instituteConfig.instituteConfiguration.ApplicationConfig.PacsConfig.CallingAe);
        this.configStorageService.setCalledAe(this.instituteConfig.instituteConfiguration.ApplicationConfig.PacsConfig.CalledAe);
      }
    } catch {
      this.toastMessageService.showErrorToast('instituteconfiguration.toastMessages.invalidfileformat');
    }
  }
}
