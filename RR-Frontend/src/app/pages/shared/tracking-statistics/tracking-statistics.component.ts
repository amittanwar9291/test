import { AppConfig } from 'app/app.config';
import { AuthorizedComponent } from '../../../shared/authorized/authorized.component';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared/logging/logging.service';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rr-tracking-statistics',
  templateUrl: './tracking-statistics.component.html',
  styleUrls: ['./tracking-statistics.component.scss']
})
export class TrackingStatisticsComponent implements OnDestroy {
  getReportlistCSVDownload = AppConfig.settings.baseUrl + '/' + AppConfig.settings.coreReportListUrl + '/ExportCsvReportList/';
  getReportTrackingCSVDownload = AppConfig.settings.baseUrl + '/' + AppConfig.settings.coreTrackingUrl + '/ExportCsvAll/';
  errorConsoleLogOutputName = 'Tracking Statistic Page';
  errorConsoleLogOutputError = 'ERROR Tracking Statistic Page';
  headerTitleSubscription: Subscription;

  constructor(
    parent: AuthorizedComponent,
    public translate: TranslateService,
    private httpClient: HttpClient,
    private loggingService: LoggingService
  ) {
    this.headerTitleSubscription = this.translate.stream('statisticsTracking.layout.pageTitle').subscribe((out: string) => {
      parent.header = out;
    });
  }

  ngOnDestroy() {
    this.headerTitleSubscription.unsubscribe();
  }

  downloadFile(data: any, type: string, filename: string) {
    const todaysDate = new Date();
    const yyyy = todaysDate.getFullYear().toString();
    const MM = (todaysDate.getMonth() + 1).toString();
    const dd = todaysDate.getDate().toString();

    const blob = new Blob([data], { type });
    const date = yyyy + '-' + MM + '-' + dd;
    const objectUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');

    a.href = objectUrl;
    a.download = filename + '-' + date + '.csv';
    a.click();
    URL.revokeObjectURL(objectUrl);
  }

  downloadCsvFileReportlist(): void {
    this.httpClient
      .get(this.getReportlistCSVDownload, {
        responseType: 'blob'
      })
      .subscribe(
        response => this.downloadFile(response, 'application/ms-excel', 'ReportList-Export-All'),
        error => this.loggingService.error(this.errorConsoleLogOutputName, this.errorConsoleLogOutputError + ': ' + JSON.stringify(error))
      );
  }

  downloadCsvFileTracking(): void {
    this.httpClient
      .get(this.getReportTrackingCSVDownload, {
        responseType: 'blob'
      })
      .subscribe(
        response => this.downloadFile(response, 'application/ms-excel', 'Tracking-Export-All'),
        error => this.loggingService.error(this.errorConsoleLogOutputName, this.errorConsoleLogOutputError + ': ' + JSON.stringify(error))
      );
  }
}
