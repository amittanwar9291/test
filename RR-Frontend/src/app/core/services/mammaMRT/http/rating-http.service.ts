import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { RatingApiModel } from '@models/mammaMRT/api/rating/rating-api.model';
import { RatingUiModel } from '@models/mammaMRT/ui/rating/rating-ui.model';

import { RatingMapper } from '@mappings/mammaMRT/rating.mapper';

import { AppConfig } from 'app/app.config';

import { LoggingService } from '@services/shared/logging/logging.service';

@Injectable({
  providedIn: 'root'
})
export class RatingHttpService extends BaseHttpService<RatingApiModel, RatingUiModel, RatingMapper> {
  constructor(httpClient: HttpClient, mapper: RatingMapper, logger: LoggingService) {
    super(
      [AppConfig.mammaMrtConfig.localBaseURL, AppConfig.mammaMrtConfig.rating],
      httpClient,
      mapper,
      RatingApiModel,
      RatingUiModel,
      logger
    );
  }
}
