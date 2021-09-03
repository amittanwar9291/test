import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TechnologyMapper } from '@mappings/spineMRT/technology/technology.mapper';

import { TechnologyApiModel } from '@models/spineMRT/api/technology/technology-api.model';
import { TechnologyUiModel } from '@models/spineMRT/ui/technology/technology-ui.model';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { Observable, of } from 'rxjs';
import { AppConfig } from 'app/app.config';

import { LoggingService } from '@services/shared/logging/logging.service';

@Injectable({
  providedIn: 'root'
})
export class TechnologyHttpService extends BaseHttpService<TechnologyApiModel, TechnologyUiModel, TechnologyMapper> {
  constructor(httpClient: HttpClient, mapper: TechnologyMapper, logger: LoggingService) {
    super(
      [AppConfig.spineMrtConfig.localBaseURL, AppConfig.spineMrtConfig.technology],
      httpClient,
      mapper,
      TechnologyApiModel,
      TechnologyUiModel,
      logger
    );
  }
}
