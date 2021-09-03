import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { LoggingService } from '@services/shared';

import { AppConfig } from 'app/app.config';

import { SummaryMapper } from '@mappings/angiographyMRT/summary/summary.mapper';

import { SummaryApiModel } from '@models/angiographyMRT/api/summary/summary-api.model';
import { SummaryUiModel } from '@models/angiographyMRT/ui/summary/summary-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SummaryHttpService extends BaseHttpService<SummaryApiModel, SummaryUiModel, SummaryMapper> {
  constructor(httpClient: HttpClient, mapper: SummaryMapper, logger: LoggingService) {
    super(
      [AppConfig.angiographyMrtConfig.localBaseURL, AppConfig.angiographyMrtConfig.summary],
      httpClient,
      mapper,
      SummaryApiModel,
      SummaryUiModel,
      logger
    );
  }
}
