import { Injectable } from '@angular/core';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from 'app/app.config';
import { TechnologyMapper } from '@mappings/abdomenCT/technology/technology.mapper';
import { TechnologyUiModel } from '@models/abdomenCT/ui/technology/technology-ui.model';
import { TechnologyApiModel } from '@models/abdomenCT/api/technology/technology-api.model';

@Injectable({
  providedIn: 'root'
})
export class TechnologyHttpService extends BaseHttpService<TechnologyApiModel, TechnologyUiModel, TechnologyMapper> {
  constructor(httpClient: HttpClient, mapper: TechnologyMapper, logger: LoggingService) {
    super(
      [AppConfig.abdomenCtConfig.localBaseURL, AppConfig.abdomenCtConfig.technology],
      httpClient,
      mapper,
      TechnologyApiModel,
      TechnologyUiModel,
      logger
    );
  }
}
