import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AppConfig } from 'app/app.config';

import { LoggingService } from '@services/shared/logging/logging.service';

import { SpineCTMyelonMapper } from '@mappings/spineCT';

import { MyelonUiModel, MyelonApiModel } from '@models/spineCT';

@Injectable({
  providedIn: 'root'
})
export class MyelonHttpService extends BaseHttpService<MyelonApiModel, MyelonUiModel, SpineCTMyelonMapper> {
  constructor(httpClient: HttpClient, mapper: SpineCTMyelonMapper, logger: LoggingService) {
    super(
      [AppConfig.spineCtConfig.localBaseURL, AppConfig.spineCtConfig.myelonSpinalCanal],
      httpClient,
      mapper,
      MyelonApiModel,
      MyelonUiModel,
      logger
    );
  }
}
