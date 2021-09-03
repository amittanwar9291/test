import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoggingService } from '@services/shared/logging/logging.service';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AppConfig } from 'app/app.config';
import { TechnologyApiModel } from '@models/headCT/api/technology/technology-api.model';
import { TechnologyUiModel } from '@models/headCT/ui/technology/technology-ui.model';
import { TechnologyMapper } from '@mappings/headCT/technology/technology.mapper';

@Injectable({
  providedIn: 'root'
})
export class TechnologyHttpService extends BaseHttpService<TechnologyApiModel, TechnologyUiModel, TechnologyMapper> {
  constructor(httpClient: HttpClient, mapper: TechnologyMapper, logger: LoggingService) {
    super(
      [AppConfig.headCtConfig.localBaseURL, AppConfig.headCtConfig.technology],
      httpClient,
      mapper,
      TechnologyApiModel,
      TechnologyUiModel,
      logger
    );
  }
}
