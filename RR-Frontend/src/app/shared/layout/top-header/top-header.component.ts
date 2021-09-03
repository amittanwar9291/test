import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';
import { LogoutService } from '@services/shared/logout/logout.service';
import { TranslateService } from '@ngx-translate/core';
import { PatientUiModel } from '@models/shared/patient/patient-ui.model';
import { PatientDataService } from '@services/shared/patient-data/patient-data.service';
import { NavigationReportDataService } from '@services/shared/navigation/navigation-report-data.service';
import { ReportUiModel } from '@models/shared/report';
import { environment } from '@environments/environment';
import { AppConfig } from '../../../app.config';
import { mapValues } from 'lodash';

@Component({
  selector: 'rr-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnDestroy {
  @Output() sidebarToggle = new EventEmitter();

  subscriptions: Subscription[] = [];
  isReport: boolean;
  userInitials: string;
  patientData: PatientUiModel;
  reportData: ReportUiModel;
  moduleNames: object;

  constructor(
    private router: Router,
    private userBasicDataService: UserBasicDataService,
    private logoutService: LogoutService,
    private patientDataService: PatientDataService,
    private navigationDataService: NavigationReportDataService,
    private translate: TranslateService
  ) {
    this.initSubscriptions();
  }

  sidebarClick() {
    this.sidebarToggle.emit();
  }

  logout() {
    this.logoutService.logout();
  }

  get customerLogo(): string {
    return AppConfig.settings.customerLogo;
  }

  private initSubscriptions() {
    const routerSubsription = this.router.events.subscribe(() => {
      this.isReport = this.router.url.includes('report/');
    });

    const userBasicDataSubsription = this.userBasicDataService.userData.subscribe(value => {
      this.userInitials = value ? value.initial : '';
    });

    const translateSubscription = this.translate.stream('routing.modules').subscribe(out => {
      this.moduleNames = mapValues(out, elem => elem.replace('\n', ''));
    });

    const patientDataSubscription = this.patientDataService.getPatientStream().subscribe(patientData => {
      this.patientData = patientData;
    });

    const reportDataSubscription = this.navigationDataService.getReportStream().subscribe(reportData => {
      this.reportData = reportData;
    });

    this.subscriptions.push(
      routerSubsription,
      userBasicDataSubsription,
      translateSubscription,
      patientDataSubscription,
      reportDataSubscription
    );
  }

  isOnDevelopmentEnviroment() {
    return !environment.production || window.location.href.includes('rrtestint') || window.location.href.includes('rrtestdocker');
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }
}
