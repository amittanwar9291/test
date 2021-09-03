import { Component, Inject, LOCALE_ID, OnDestroy, OnInit } from '@angular/core';
import { LicenseHttpService } from '@services/shared/settings/license-http.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';
import { LicenseDetailsUiModel } from '@models/shared/settings/license-details-ui.model';
import { LicenseFractionsRequest } from '@models/shared/settings/license-fractions-request.model';
import { PaginationOptionsUiModel } from '@models/shared/pagination-options-ui.model';
import { LicenseFractionUiModel } from '@models/shared/settings/license-fraction-ui.model';
import { DecimalPipe, formatDate } from '@angular/common';
import { LicenseListItemUiModel } from '@models/shared/settings/license-list-item-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SettingsHelperService } from '@sharedPages/settings/settings-helper.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'rr-license',
  templateUrl: './license-settings.component.html',
  styleUrls: ['./license-settings.component.scss']
})
export class LicenseSettingsComponent implements OnInit, OnDestroy {
  licenseListOptions: DropdownModel[] = [];
  instituteConnectionType: string;
  page = 0;
  subscriptions: Subscription[] = [];

  showlicenseDetails: boolean;
  showlicenseFractions: boolean;

  selectedLicenseId: string;
  selectedLicenseDetails: LicenseDetailsUiModel;
  selectedLicenseFractions: LicenseFractionUiModel[];

  licenseFractionOptions = new PaginationOptionsUiModel(500);

  constructor(
    public translate: TranslateService,
    private toastMessageService: ToastMessageService,
    private licenseHttpService: LicenseHttpService,
    private settingsHelperService: SettingsHelperService,
    private decimalPipe: DecimalPipe,
    @Inject(LOCALE_ID) private locale: string
  ) {}

  ngOnInit(): void {
    this.fetchLicenses();
    this.subscriptions.push(
      this.settingsHelperService.institute.subscribe(value => (this.instituteConnectionType = value?.connectionType))
    );
  }

  private fetchLicenses() {
    this.licenseHttpService.getLicenses().subscribe(licenses => {
      this.licenseListOptions = licenses
        .sort(license => license.order)
        .map<DropdownModel>(license => {
          const option = new DropdownModel();
          option.value = license.licenseId;
          option.label = this.getLicenseLabel(license);
          return option;
        });
    });
  }

  private getLicenseLabel(license: LicenseListItemUiModel) {
    const format = this.translate.instant('shared.dateFormat');
    return `${formatDate(license.creationDate, format, this.locale)} - ${formatDate(license.expirationDate, format, this.locale)}`;
  }

  onLicenseSelect(event: any) {
    const isNone = event.value === 'None';
    if (isNone) {
      this.showlicenseDetails = false;
      this.showlicenseFractions = false;
      this.selectedLicenseDetails = null;
      this.selectedLicenseFractions = [];
      this.selectedLicenseId = '';
      return;
    }
    this.selectedLicenseId = event.value;
    this.fetchLicenseDetails(this.selectedLicenseId);
    this.fetchLicenseFractions(this.selectedLicenseId);
  }

  uploadLicenseConfig(event): void {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file, file.name);
    this.licenseHttpService
      .uploadLicense(formData)
      .subscribe(__ => this.toastMessageService.showSuccessToast('settings.toastMessages.licenseUploaded'));
  }

  private fetchLicenseDetails(selectedLicenseId: string): void {
    this.licenseHttpService.getLicenseDetails(selectedLicenseId).subscribe(details => {
      this.selectedLicenseDetails = details;
      this.showlicenseDetails = true;
    });
  }

  getChartColor(isBackground?: boolean) {
    const valueToCheck = this.selectedLicenseDetails?.depletionPercentage;
    if (valueToCheck >= 80 && valueToCheck <= 95) {
      return isBackground ? '#fff79c' : '#DEB403';
    } else if (valueToCheck >= 95) {
      return isBackground ? '#fecfd0' : '#FD0000';
    } else {
      return isBackground ? '#d6f0f4' : '#1caec2';
    }
  }

  private fetchLicenseFractions(selectedLicenseId: string) {
    const request = new LicenseFractionsRequest();
    request.licenseId = selectedLicenseId;
    request.paginationOptions = this.licenseFractionOptions;

    this.licenseHttpService.getLicenseFractions(request).subscribe(response => {
      this.selectedLicenseFractions = response.licenseFractions.sort(fraction => fraction.order);
      this.licenseFractionOptions = response.paginationOptions;
      this.showlicenseFractions = true;
    });
  }

  setPage(event: any): void {
    this.page = event;
  }

  getPageLabel(page) {
    return page.label === '...' ? page.label : this.decimalPipe.transform(page.label, '');
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
