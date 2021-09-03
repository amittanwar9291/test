import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SummaryMapper } from '@mappings/cardioMRT/summary/summary.mapper';

import { SummaryApiModel } from '@models/cardioMRT/api/summary/summary-api.model';
import { SummaryUiModel } from '@models/cardioMRT/ui/summary/summary-ui.model';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';

@Injectable({
  providedIn: 'root'
})
export class SummaryHttpService extends BaseHttpService<SummaryApiModel, SummaryUiModel, SummaryMapper> {
  constructor(httpClient: HttpClient, mapper: SummaryMapper, logger: LoggingService) {
    super(
      [AppConfig.cardioMrtConfig.localBaseURL, AppConfig.cardioMrtConfig.summary],
      httpClient,
      mapper,
      SummaryApiModel,
      SummaryUiModel,
      logger
    );
  }
}
