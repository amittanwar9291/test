import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { ReportApiModel, ReportUiModel } from '@models/shared/report';
import { ReportMapper } from '@mappings/shared/report/report.mapper';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../app.config';

@Injectable({
  providedIn: 'root'
})
export class AngiographyMRTReportService extends BaseHttpService<ReportApiModel, ReportUiModel, ReportMapper> {
  constructor(http: HttpClient, mapper: ReportMapper, logger: LoggingService) {
    super(AppConfig.settings.servicesUrls.reports.angiographyMRT, http, mapper, ReportApiModel, ReportUiModel, logger);
  }
}
