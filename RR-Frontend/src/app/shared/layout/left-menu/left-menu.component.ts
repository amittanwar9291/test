import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

import { CustomTranslateService } from '@services/shared/translations/custom-translate-service.service';
import { LocaleHelper } from '@abstractions/abstract-classes/locale-helper-service';
import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';
import { LoggedUser } from '@models/shared/user/logged-user-models';
import { LogoutService } from '@services/shared/logout/logout.service';
import { ROLES } from '@models/shared/user/roles';
import { NavigationConnectorService } from '@services/shared/navigation/navigation-connector.service';
import { environment } from '@environments/environment';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { ReportListExternalCommunicationService } from '@services/shared/report-list/report-list-external-communication.service';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

@Component({
  selector: 'rr-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  @Output() sidebarToggle = new EventEmitter();
  subscriptions: Subscription[] = [];

  readonly roles = ROLES;
  userDataSubscription: Subscription;
  user: LoggedUser;

  validation; // todo for development and testing purpose only
  validationLogger; // todo for development and testing purpose only
  hideReportSearchBar: boolean; // todo for development and testing purpose only

  languages: DropdownModel[] = [
    { label: 'DE', value: 'de' },
    { label: 'EN', value: 'en' },
    { label: 'FR*', value: 'fr' }
  ];

  currentLanguage = '';

  constructor(
    public translateService: TranslateService,
    public customTranslateService: CustomTranslateService,
    private userBasicDataService: UserBasicDataService,
    private logoutService: LogoutService,
    private navConnectorService: NavigationConnectorService,
    private router: Router,
    private validationHelperService: ValidationHelperService,
    private externalCommunicationService: ReportListExternalCommunicationService
  ) {
    this.userDataSubscription = userBasicDataService.userData.subscribe(value => {
      this.user = value ? value : null;
    });
  }

  ngOnInit(): void {
    this.currentLanguage = this.translateService.currentLang;
  }

  switchLanguage() {
    this.translateService.use(this.currentLanguage);
    this.customTranslateService.language.next(this.currentLanguage);
    LocaleHelper.setCurrentLocale(this.currentLanguage);
  }

  navigate(link: string) {
    if (this.router.url.includes('/report/') || this.router.url.includes('centerspecificPreferences')) {
      this.navConnectorService.triggerNavToLink(link);
    } else {
      this.router.navigate([link]);
    }
    this.sidebarToggle.emit();
  }

  logout() {
    this.logoutService.logout();
  }

  // todo for development and testing purpose only
  validationTrigger() {
    this.validation = !this.validation;
    this.validationHelperService.validationTurnOff = this.validation;
  }

  logValidationErrors() {
    this.validationLogger = !this.validationLogger;
    this.validationHelperService.validationLoggerTurnedOff = this.validationLogger;
  }

  toggleReportSearchBar() {
    this.hideReportSearchBar = !this.hideReportSearchBar;
    this.externalCommunicationService.emitHideReportSearchBar(this.hideReportSearchBar);
  }

  shouldBeVisible() {
    return !environment.production || window.location.href.includes('rrtestint') || window.location.href.includes('rrtestdocker');
  }
}
