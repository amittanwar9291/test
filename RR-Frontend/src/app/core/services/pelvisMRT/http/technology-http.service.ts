import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AppConfig } from 'app/app.config';

import { LoggingService } from '@services/shared/logging/logging.service';

import { TechnologyMapper } from '@mappings/pelvisMRT/technology/technology.mapper';

import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';
import { TechnologyApiModel } from '@models/pelvisMRT/api/technology/technology-api.model';

@Injectable({
  providedIn: 'root'
})
export class TechnologyHttpService extends BaseHttpService<TechnologyApiModel, TechnologyUiModel, TechnologyMapper> {
  constructor(httpClient: HttpClient, mapper: TechnologyMapper, logger: LoggingService) {
    super(
      [AppConfig.pelvisMrtConfig.localBaseURL, AppConfig.pelvisMrtConfig.technology],
      httpClient,
      mapper,
      TechnologyApiModel,
      TechnologyUiModel,
      logger
    );
  }
}
