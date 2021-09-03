import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TechnologyMapper } from '@mappings/kneeMRT/technology/technology.mapper';

import { TechnologyApiModel } from '@models/kneeMRT/api/technology/technology-api.model';
import { TechnologyUiModel } from '@models/kneeMRT/ui/technology/technology-ui.model';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AppConfig } from 'app/app.config';

import { LoggingService } from '@services/shared/logging/logging.service';

@Injectable({
  providedIn: 'root'
})
export class TechnologyHttpService extends BaseHttpService<TechnologyApiModel, TechnologyUiModel, TechnologyMapper> {
  constructor(httpClient: HttpClient, mapper: TechnologyMapper, logger: LoggingService) {
    super(
      [AppConfig.kneeMrtConfig.localBaseURL, AppConfig.kneeMrtConfig.technology],
      httpClient,
      mapper,
      TechnologyApiModel,
      TechnologyUiModel,
      logger
    );
  }
}
