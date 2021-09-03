import { Injectable } from '@angular/core';
import { HubConnection } from '@microsoft/signalr';
import { Guid } from '@models/shared/guid/guid';
import { AbstractNavigationReportDataService } from '@abstractions/abstract-classes/navigation/navigation-report-data';
import { AppConfig } from '../../../../app.config';
import { filter, map, take, takeWhile } from 'rxjs/operators';
import { SignalRService } from '@services/shared/signalr/signalr.service';
import { LoggingService } from '@services/shared';
import { serializeError } from 'serialize-error';
import { TextReportService } from '@services/shared/report/text-report.service';
import { BehaviorSubject, combineLatest, Subscription } from 'rxjs';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';

import { includes } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ReportSessionSignalRService {
  private connection: HubConnection;
  private connectionOpenedOrPending = false;
  private awaitSubscription: Subscription;
  private awaitStream$: BehaviorSubject<boolean>;

  constructor(
    private navigationDataService: AbstractNavigationReportDataService,
    private signalRService: SignalRService,
    private loggingService: LoggingService
  ) {
    this.awaitStream$ = new BehaviorSubject<boolean>(false);
  }

  initialize(
    changeDetectionService: ChangeDetectionService,
    slideRequestService: SlideRequestService,
    textReportService: TextReportService
  ) {
    this.buildAwaitStream(changeDetectionService, slideRequestService, textReportService);
    const reportId = this.navigationDataService.getReportData()?.id;
    const moduleName = this.navigationDataService.getReportData()?.examinationType;
    this.signalRService.initializeConnection(this.connection, this.initializeConnection.bind(this, reportId, moduleName));
  }

  terminate(changeDetectionService: ChangeDetectionService) {
    this.scheduleAction(changeDetectionService, () => this.connection.stop());
  }

  private initializeConnection(reportId: string, moduleName: string) {
    if (this.connectionOpenedOrPending) {
      return;
    }

    if (reportId && !Guid.isEmpty(reportId) && moduleName) {
      this.openConnection(reportId, moduleName);
      this.connectionOpenedOrPending = true;
    } else {
      this.loggingService.info('REPORT_SESSION', 'Report session connection scheduled');
      this.scheduleConnection();
    }
  }

  private openConnection(reportId: string, moduleName: string) {
    const baseUrl = AppConfig.settings.baseUrl;
    const signalRHubUrl = AppConfig.settings.servicesUrls.reports.reportSessionSignalRHub;
    const url = `${baseUrl}/${signalRHubUrl}?ReportId=${reportId}&Module=${moduleName}`;

    this.connection = this.signalRService.createConnection(url);
    this.addConnectionEventHandler(reportId, moduleName);
    this.initListener();
    this.connection
      .start()
      .then(() => console.log(`Report session connection started for ${moduleName} report ${reportId}`))
      .catch(error => {
        this.connectionOpenedOrPending = false;
        this.loggingService.error('REPORT_SESSION', serializeError(error));
      });
  }

  private addConnectionEventHandler(reportId: string, moduleName: string) {
    this.connection.onreconnected(connectionId =>
      console.log(`Report session connection reconnected for ${moduleName} report ${reportId} | ${connectionId}`)
    );
    this.connection.onclose(error => {
      this.connectionOpenedOrPending = false;
      console.log(`Report session connection of ${moduleName} report ${reportId} closed`);
      if (error) {
        console.error(error);
      }
    });
  }

  private scheduleConnection() {
    this.connectionOpenedOrPending = true;

    this.navigationDataService
      .getReportStream()
      .pipe(
        takeWhile(report => Guid.isEmpty(report.id), true),
        filter(report => !Guid.isEmpty(report.id))
      )
      .subscribe(report => this.openConnection(report.id, report.examinationType));
  }

  private initListener() {
    this.connection.on('UpdatePages', () => this.navigationDataService.refreshReport());
  }

  private buildAwaitStream(
    changeDetectionService: ChangeDetectionService,
    slideRequestService: SlideRequestService,
    textReportService: TextReportService
  ) {
    this.awaitSubscription?.unsubscribe();
    this.awaitSubscription = combineLatest([
      changeDetectionService.getAwaitStream(),
      slideRequestService.getAwaitStream(),
      textReportService.getAwaitStream()
    ])
      .pipe(map(array => !includes(array, true)))
      .subscribe(val => this.awaitStream$.next(val));
  }

  private scheduleAction(changeDetectionService: ChangeDetectionService, action: () => void) {
    if (this.awaitStream$.value) {
      action();
    } else {
      changeDetectionService.skipAudit();
      this.awaitStream$
        .pipe(
          filter(val => !!val),
          take(1)
        )
        .subscribe(() => {
          action();
        });
    }
  }
}
