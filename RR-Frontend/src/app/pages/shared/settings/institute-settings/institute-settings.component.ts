import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { InstituteHttpService } from '@services/shared/settings/institute-http.service';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';
import { Subscription } from 'rxjs';
import { DialogService } from 'primeng/dynamicdialog';
import { SettingsButtonTypes } from '@enums/settings/settings-button-types.enum';
import { AppConfig } from '../../../../app.config';
import { ImportLogoDialogComponent } from '../../../../shared/dialogs/settings/import-logo-dialog/import-logo-dialog.component';
import { DeleteConfirmDialogComponent } from '../../../../shared/dialogs/settings/delete-confirm-dialog/delete-confirm-dialog.component';
import { SettingsHelperService } from '@sharedPages/settings/settings-helper.service';
import { InstituteModel } from '@models/shared/settings/institute.model';

@Component({
  selector: 'rr-institute-settings',
  templateUrl: './institute-settings.component.html',
  styleUrls: ['./institute-settings.component.scss'],
  providers: [DialogService]
})
export class InstituteSettingsComponent implements OnInit, OnDestroy {
  @Input() institute: InstituteModel;
  currentLogo: string;

  buttonTypes: typeof SettingsButtonTypes;

  instituteAddress = '';
  subscriptions: Subscription[] = [];
  retrieveLevelOptions: DropdownModel[];

  croppedImage: string;

  constructor(
    public translate: TranslateService,
    private toastMessageService: ToastMessageService,
    public instituteHttpService: InstituteHttpService,
    private dialogService: DialogService,
    private settingsHelperService: SettingsHelperService
  ) {
    this.initTranslation();
    this.currentLogo = 'assets/img/settings/NoImage.png';
    this.buttonTypes = SettingsButtonTypes;
  }

  ngOnInit(): void {
    this.subscriptions.push(this.settingsHelperService.institute.subscribe(value => (this.institute = value)));
    this.fetchInstituteLogo();
  }

  private fetchInstituteLogo(): void {
    this.instituteHttpService.getInstituteLogo().subscribe(response => {
      if (response && response.isSuccess && response.payload) {
        this.currentLogo = `data:image/png;base64,${JSON.parse(response.payload).Content}`;
      }
    });
  }

  createInstituteToken(): void {
    if (!this.institute.id) {
      this.toastMessageService.showErrorToast('settings.toastMessages.noInstituteUploaded');
      return;
    }

    this.instituteHttpService.createInstituteToken().subscribe(_ => {
      this.toastMessageService.showSuccessToast('settings.toastMessages.tokenGenerated');
      this.settingsHelperService.fetchInstitute();
    });
  }

  uploadLogo() {
    this.dialogService
      .open(ImportLogoDialogComponent, {
        showHeader: false,
        contentStyle: { padding: '0' },
        dismissableMask: false
      })
      .onClose.subscribe(res => {
        if (res) {
          this.currentLogo = AppConfig.settings.customerLogo;
          this.toastMessageService.showSuccessToast('settings.toastMessages.instituteLogoUploaded');
        }
      });
  }

  removeLogo() {
    this.dialogService
      .open(DeleteConfirmDialogComponent, {
        showHeader: false,
        contentStyle: { padding: '0' },
        dismissableMask: false,
        data: { type: 'logo' }
      })
      .onClose.subscribe(res => {
        if (res) {
          this.instituteHttpService.deleteInstituteLogo().subscribe(() => {
            this.currentLogo = '';
            AppConfig.settings.customerLogo = '';
            this.toastMessageService.showSuccessToast('settings.toastMessages.instituteLogoDelete');
          });
        }
      });
  }

  private initTranslation(): void {
    this.subscriptions.push(
      this.translate.stream('settings.retrieveLevelOptions').subscribe((out: DropdownModel[]) => {
        this.retrieveLevelOptions = Object.keys(out).map(e => out[e]);
      })
    );
  }

  copyToClipboard() {
    const dummy = document.createElement('input');
    document.body.appendChild(dummy);
    dummy.value = this.institute.token;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
