import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TechnologyMapper } from '@mappings/neckMRT/technology/technology.mapper';
import { TechnologyApiModel } from '@models/neckMRT/api/technology/technology-api.model';
import { TechnologyUiModel } from '@models/neckMRT/ui/technology/technology-ui.model';
import { LoggingService } from '@services/shared/logging/logging.service';
import { AppConfig } from 'app/app.config';

@Injectable({
  providedIn: 'root'
})
export class TechnologyHttpService extends BaseHttpService<TechnologyApiModel, TechnologyUiModel, TechnologyMapper> {
  constructor(httpClient: HttpClient, mapper: TechnologyMapper, logger: LoggingService) {
    super(
      [AppConfig.neckMrtConfig.localBaseURL, AppConfig.neckMrtConfig.technology],
      httpClient,
      mapper,
      TechnologyApiModel,
      TechnologyUiModel,
      logger
    );
  }
}
