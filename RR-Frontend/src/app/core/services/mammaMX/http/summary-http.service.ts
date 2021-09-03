import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { SummaryApiModel } from '@models/mammaMX/api/summary/summary-api.model';
import { SummaryUiModel } from '@models/mammaMX/ui/summary/summary-ui.model';

import { SummaryMapper } from '@mappings/mammaMX/summary/summary.mapper';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LoggingService } from '@services/shared';

import { AppConfig } from 'app/app.config';

@Injectable({
  providedIn: 'root'
})
export class SummaryHttpService extends BaseHttpService<SummaryApiModel, SummaryUiModel, SummaryMapper> {
  constructor(httpClient: HttpClient, mapper: SummaryMapper, logger: LoggingService) {
    super(
      [AppConfig.mammaMxConfig.localBaseURL, AppConfig.mammaMxConfig.summary],
      httpClient,
      mapper,
      SummaryApiModel,
      SummaryUiModel,
      logger
    );
  }
}
