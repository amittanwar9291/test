import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AppConfig } from 'app/app.config';

import { LoggingService } from '@services/shared/logging/logging.service';

import { SpineCTSummaryMapper } from '@mappings/spineCT';

import { SummaryApiModel, SummaryUiModel } from '@models/spineCT';

@Injectable({
  providedIn: 'root'
})
export class SummaryHttpService extends BaseHttpService<SummaryApiModel, SummaryUiModel, SpineCTSummaryMapper> {
  constructor(httpClient: HttpClient, mapper: SpineCTSummaryMapper, logger: LoggingService) {
    super(
      [AppConfig.spineCtConfig.localBaseURL, AppConfig.spineCtConfig.summary],
      httpClient,
      mapper,
      SummaryApiModel,
      SummaryUiModel,
      logger
    );
  }
}
