import { Injectable } from '@angular/core';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from 'app/app.config';
import { TechnologyApiModel } from '@models/mammaMX/api/technology/technology-api.model';
import { TechnologyUiModel } from '@models/mammaMX/ui/technology/technology-ui.model';
import { TechnologyMapper } from '@mappings/mammaMX/technology/technology.mapper';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService extends BaseHttpService<TechnologyApiModel, TechnologyUiModel, TechnologyMapper> {
  constructor(httpClient: HttpClient, mapper: TechnologyMapper, logger: LoggingService) {
    super(
      [AppConfig.mammaMxConfig.localBaseURL, AppConfig.mammaMxConfig.technology],
      httpClient,
      mapper,
      TechnologyApiModel,
      TechnologyUiModel,
      logger
    );
  }
}
