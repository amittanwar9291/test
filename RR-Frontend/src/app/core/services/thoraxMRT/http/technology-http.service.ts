import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';
import { TechnologyApiModel } from '@models/thoraxMRT/api/technology/technology-api.model';
import { TechnologyUiModel } from '@models/thoraxMRT/ui/technology/technology-ui.model';
import { TechnologyMapper } from '@mappings/thoraxMRT/technology/technology.mapper';

@Injectable({
  providedIn: 'root'
})
export class TechnologyHttpService extends BaseHttpService<TechnologyApiModel, TechnologyUiModel, TechnologyMapper> {
  constructor(httpClient: HttpClient, mapper: TechnologyMapper, logger: LoggingService) {
    super(
      [AppConfig.thoraxMrtConfig.localBaseURL, AppConfig.thoraxMrtConfig.technology],
      httpClient,
      mapper,
      TechnologyApiModel,
      TechnologyUiModel,
      logger
    );
  }
}
