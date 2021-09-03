import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackingEventType } from '@enums/shared/tracking-event-type.enum';
import { TrackingSubjectType } from '@enums/shared/tracking-subject-type.enum';
import { StartStopTrackingRequest } from '@models/shared/tracking/start-stop-tracking-request.model';
import { AppConfig } from 'app/app.config';
import { UserBasicDataService } from '../logged-user/user-basic-data.service';
import { NavigationReportDataService } from '../navigation/navigation-report-data.service';
import { LoggingService } from '@services/shared';
import { ROLES } from '@models/shared/user/roles';
import { ReportStatus } from '@enums/shared/report-status.enum';
import { LoggedUser } from '@models/shared/user/logged-user-models';
import { ReportUiModel } from '@models/shared/report';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {
  private editingRoles = [ROLES.S_ADMIN, ROLES.ADMIN, ROLES.EDITOR, ROLES.SUPERVISOR];

  constructor(
    private navigationReportDataService: NavigationReportDataService,
    private userBasicDataService: UserBasicDataService,
    private httpClient: HttpClient,
    private loggingService: LoggingService
  ) {
    this.httpClient = httpClient;
  }

  sendTrackingEvent(trackingEventType: TrackingEventType, trackingSubjectType: TrackingSubjectType, trackingSubjectId: string): void {
    const userData = this.userBasicDataService.userData.getValue();
    const reportData = this.navigationReportDataService.getReportData();
    const reportId = this.navigationReportDataService.getReportId();

    if (
      !userData ||
      !reportData ||
      !reportId ||
      !trackingSubjectId ||
      !trackingSubjectType ||
      !this.isTrackingRequired(userData, reportData)
    ) {
      return;
    }

    const request: StartStopTrackingRequest = {
      trackingEventType,
      reportId,
      trackingSubjectId,
      trackingSubjectType,
      moduleName: reportData.examinationType
    };
    const url = AppConfig.settings.baseUrl + '/' + AppConfig.settings.coreTrackingUrl + '/StartStopTracking';

    this.httpClient.post(url, request).subscribe(
      _ => {},
      error => this.loggingService.error('TRACKING', 'ERROR - sendTrackingEvent: ' + JSON.stringify(error))
    );
  }

  private isTrackingRequired(userData: LoggedUser, reportData: ReportUiModel): boolean {
    return (
      AppConfig.settings.enableTracking &&
      (reportData.status === ReportStatus.Open || reportData.status === ReportStatus.InProgress) &&
      this.editingRoles.includes(userData.role) &&
      userData.userId === reportData.userId
    );
  }
}
