import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared';
import { AppConfig } from 'app/app.config';

import { TechnologyMapper } from '@mappings/angiographyCT/technology/technology.mapper';
import { TechnologyApiModel } from '@models/angiographyCT/api/technology/technology-api.model';
import { TechnologyUiModel } from '@models/angiographyCT/ui/technology/technology-ui.model';

@Injectable({
  providedIn: 'root'
})
export class TechnologyHttpService extends BaseHttpService<TechnologyApiModel, TechnologyUiModel, TechnologyMapper> {
  constructor(httpClient: HttpClient, mapper: TechnologyMapper, logger: LoggingService) {
    super(
      [AppConfig.angiographyCtConfig.localBaseURL, AppConfig.angiographyCtConfig.technology],
      httpClient,
      mapper,
      TechnologyApiModel,
      TechnologyUiModel,
      logger
    );
  }
}
