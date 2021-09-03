import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ReportApiModel, ReportUiModel } from '@models/shared/report';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { ReportMapper } from '@mappings/shared/report/report.mapper';

import { AppConfig } from 'app/app.config';
import { LoggingService } from '../logging/logging.service';

@Injectable({
  providedIn: 'root'
})
export class MammaMRTReportService extends BaseHttpService<ReportApiModel, ReportUiModel, ReportMapper> {
  constructor(http: HttpClient, mapper: ReportMapper, logger: LoggingService) {
    super(AppConfig.settings.servicesUrls.reports.mammaMRT, http, mapper, ReportApiModel, ReportUiModel, logger);
  }
}
