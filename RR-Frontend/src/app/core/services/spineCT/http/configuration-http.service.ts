import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AppConfig } from 'app/app.config';

import { LoggingService } from '@services/shared/logging/logging.service';

import { SpineCTConfigurationMapper } from '@mappings/spineCT';

import { ConfigurationApiModel, ConfigurationUiModel } from '@models/spineCT';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationHttpService extends BaseHttpService<ConfigurationApiModel, ConfigurationUiModel, SpineCTConfigurationMapper> {
  constructor(httpClient: HttpClient, mapper: SpineCTConfigurationMapper, logger: LoggingService) {
    super(
      [AppConfig.spineCtConfig.localBaseURL, AppConfig.spineCtConfig.configuration],
      httpClient,
      mapper,
      ConfigurationApiModel,
      ConfigurationUiModel,
      logger
    );
  }
}
