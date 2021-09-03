import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SummaryMapper } from '@mappings/kneeMRT/summary/summary.mapper';

import { SummaryApiModel } from '@models/kneeMRT/api/summary/summary-api.model';
import { SummaryUiModel } from '@models/kneeMRT/ui/summary/summary-ui.model';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AppConfig } from 'app/app.config';

import { LoggingService } from '@services/shared/logging/logging.service';

@Injectable({
  providedIn: 'root'
})
export class SummaryHttpService extends BaseHttpService<SummaryApiModel, SummaryUiModel, SummaryMapper> {
  constructor(httpClient: HttpClient, mapper: SummaryMapper, logger: LoggingService) {
    super(
      [AppConfig.kneeMrtConfig.localBaseURL, AppConfig.kneeMrtConfig.summary],
      httpClient,
      mapper,
      SummaryApiModel,
      SummaryUiModel,
      logger
    );
  }
}
