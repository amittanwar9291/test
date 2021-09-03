import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { TechnologyApiModel } from '@models/shoulderMRT/api/technology/technology-api.model';
import { TechnologyUiModel } from '@models/shoulderMRT/ui/technology/technology-ui.model';

import { TechnologyMapper } from '@mappings/shoulderMRT/technology/technology.mapper';

import { AppConfig } from 'app/app.config';

import { LoggingService } from '@services/shared/logging/logging.service';

@Injectable({
  providedIn: 'root'
})
export class TechnologyHttpService extends BaseHttpService<TechnologyApiModel, TechnologyUiModel, TechnologyMapper> {
  constructor(httpClient: HttpClient, mapper: TechnologyMapper, logger: LoggingService) {
    super(
      [AppConfig.shoulderMrtConfig.localBaseURL, AppConfig.shoulderMrtConfig.technology],
      httpClient,
      mapper,
      TechnologyApiModel,
      TechnologyUiModel,
      logger
    );
  }
}
