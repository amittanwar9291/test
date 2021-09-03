import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../app.config';
import { TechnologyApiModel } from '@models/angiographyMRT/api/technology/technology-api.model';
import { TechnologyUiModel } from '@models/angiographyMRT/ui/technology/technology-ui.model';
import { TechnologyMapper } from '@mappings/angiographyMRT/technology/technology.mapper';

@Injectable({
  providedIn: 'root'
})
export class TechnologyHttpService extends BaseHttpService<TechnologyApiModel, TechnologyUiModel, TechnologyMapper> {
  constructor(httpClient: HttpClient, mapper: TechnologyMapper, logger: LoggingService) {
    super(
      [AppConfig.angiographyMrtConfig.localBaseURL, AppConfig.angiographyMrtConfig.technology],
      httpClient,
      mapper,
      TechnologyApiModel,
      TechnologyUiModel,
      logger
    );
  }
}
