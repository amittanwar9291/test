import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AppConfig } from 'app/app.config';
import { LoggingService } from '@services/shared/logging/logging.service';

import { SoftTissuesApiModel, SoftTissuesUiModel } from '@models/spineCT';

import { SpineCTSoftTissuesMapper } from '@mappings/spineCT';

@Injectable({
  providedIn: 'root'
})
export class SoftTissuesHttpService extends BaseHttpService<SoftTissuesApiModel, SoftTissuesUiModel, SpineCTSoftTissuesMapper> {
  constructor(httpClient: HttpClient, mapper: SpineCTSoftTissuesMapper, logger: LoggingService) {
    super(
      [AppConfig.spineCtConfig.localBaseURL, AppConfig.spineCtConfig.softTissues.http],
      httpClient,
      mapper,
      SoftTissuesApiModel,
      SoftTissuesUiModel,
      logger
    );
  }
}
