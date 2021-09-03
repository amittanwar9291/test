import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { LoggingService } from '@services/shared/logging/logging.service';

import { TechnologyApiModel } from '@models/elbowMRT/api/technology/technology-api.model';
import { TechnologyUiModel } from '@models/elbowMRT/ui/technology/technology-ui.model';

import { TechnologyMapper } from '@mappings/elbowMRT/technology/technology.mapper';

import { AppConfig } from 'app/app.config';

@Injectable({
  providedIn: 'root'
})
export class TechnologyHttpService extends BaseHttpService<TechnologyApiModel, TechnologyUiModel, TechnologyMapper> {
  constructor(httpClient: HttpClient, mapper: TechnologyMapper, logger: LoggingService) {
    super(
      [AppConfig.elbowMrtConfig.localBaseURL, AppConfig.elbowMrtConfig.technology],
      httpClient,
      mapper,
      TechnologyApiModel,
      TechnologyUiModel,
      logger
    );
  }
}
