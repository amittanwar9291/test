import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AppConfig } from 'app/app.config';

import { LoggingService } from '@services/shared/logging/logging.service';

import { AnamnesisApiModel, AnamnesisUiModel } from '@models/spineCT';

import { SpineCTAnamnesisMapper } from '@mappings/spineCT';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisHttpService extends BaseHttpService<AnamnesisApiModel, AnamnesisUiModel, SpineCTAnamnesisMapper> {
  constructor(httpClient: HttpClient, mapper: SpineCTAnamnesisMapper, logger: LoggingService) {
    super(
      [AppConfig.spineCtConfig.localBaseURL, AppConfig.spineCtConfig.anamnesis],
      httpClient,
      mapper,
      AnamnesisApiModel,
      AnamnesisUiModel,
      logger
    );
  }
}
