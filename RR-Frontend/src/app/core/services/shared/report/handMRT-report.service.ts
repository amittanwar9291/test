import { Injectable } from '@angular/core';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { ReportApiModel, ReportUiModel } from '@models/shared/report';
import { ReportMapper } from '@mappings/shared/report/report.mapper';
import { AppConfig } from 'app/app.config';
import { LoggingService } from '../logging/logging.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HandMRTReportService extends BaseHttpService<ReportApiModel, ReportUiModel, ReportMapper> {
  constructor(http: HttpClient, mapper: ReportMapper, logger: LoggingService) {
    super(AppConfig.settings.servicesUrls.reports.handMRT, http, mapper, ReportApiModel, ReportUiModel, logger);
  }
}
