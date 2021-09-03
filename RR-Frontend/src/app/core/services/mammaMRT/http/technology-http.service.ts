import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AppConfig } from 'app/app.config';

import { LoggingService } from '@services/shared/logging/logging.service';

import { TechnologyApiModel } from '@models/mammaMRT/api/technology/technology-api.model';
import { TechnologyUiModel } from '@models/mammaMRT/ui/technology/technology-ui.model';

import { TechnologyMapper } from '@mappings/mammaMRT/technology/technology.mapper';

@Injectable({
  providedIn: 'root'
})
export class TechnologyHttpService extends BaseHttpService<TechnologyApiModel, TechnologyUiModel, TechnologyMapper> {
  constructor(httpClient: HttpClient, mapper: TechnologyMapper, logger: LoggingService) {
    super(
      [AppConfig.mammaMrtConfig.localBaseURL, AppConfig.mammaMrtConfig.technology],
      httpClient,
      mapper,
      TechnologyApiModel,
      TechnologyUiModel,
      logger
    );
  }
}
