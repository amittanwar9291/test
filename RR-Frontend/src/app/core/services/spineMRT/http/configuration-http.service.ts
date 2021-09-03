import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ConfigurationMapper } from '@mappings/spineMRT/configuration/configuration.mapper';

import { ConfigurationApiModel } from '@models/spineMRT/api/configuration/configuration-api.model';
import { ConfigurationUiModel } from '@models/spineMRT/ui/configuration/configuration-ui.model';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AppConfig } from 'app/app.config';

import { LoggingService } from '@services/shared/logging/logging.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationHttpService extends BaseHttpService<ConfigurationApiModel, ConfigurationUiModel, ConfigurationMapper> {
  constructor(httpClient: HttpClient, mapper: ConfigurationMapper, logger: LoggingService) {
    super(
      [AppConfig.spineMrtConfig.localBaseURL, AppConfig.spineMrtConfig.configuration],
      httpClient,
      mapper,
      ConfigurationApiModel,
      ConfigurationUiModel,
      logger
    );
  }
}
