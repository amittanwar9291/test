import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '../logging/logging.service';

import { AppConfig } from 'app/app.config';

import { ReportApiModel, ReportUiModel } from '@models/shared/report';

import { ReportMapper } from '@mappings/shared/report/report.mapper';

@Injectable({
  providedIn: 'root'
})
export class CardioMRTReportService extends BaseHttpService<ReportApiModel, ReportUiModel, ReportMapper> {
  constructor(http: HttpClient, mapper: ReportMapper, logger: LoggingService) {
    super(AppConfig.settings.servicesUrls.reports.cardioMRT, http, mapper, ReportApiModel, ReportUiModel, logger);
  }
}
