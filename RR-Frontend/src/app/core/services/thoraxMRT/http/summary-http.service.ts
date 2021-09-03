import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AppConfig } from 'app/app.config';
import { LoggingService } from '@services/shared/logging/logging.service';
import { SummaryApiModel } from '@models/thoraxMRT/api/summary/summary-api.model';
import { SummaryUiModel } from '@models/thoraxMRT/ui/summary/summary-ui.model';
import { SummaryMapper } from '@mappings/thoraxMRT/summary/summary.mapper';

@Injectable({
  providedIn: 'root'
})
export class SummaryHttpService extends BaseHttpService<SummaryApiModel, SummaryUiModel, SummaryMapper> {
  constructor(httpClient: HttpClient, mapper: SummaryMapper, logger: LoggingService) {
    super(
      [AppConfig.thoraxMrtConfig.localBaseURL, AppConfig.thoraxMrtConfig.summary],
      httpClient,
      mapper,
      SummaryApiModel,
      SummaryUiModel,
      logger
    );
  }
}
