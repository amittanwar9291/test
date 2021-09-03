import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';
import { ThyroidApiModel } from '@models/neckMRT/api/thyroid/thyroid-api.model';
import { ThyroidUiModel } from '@models/neckMRT/ui/thyroid/thyroid-ui.model';
import { ThyroidMapper } from '@mappings/neckMRT/thyroid/thyroid.mapper';

@Injectable({
  providedIn: 'root'
})
export class ThyroidHttpService extends BaseHttpService<ThyroidApiModel, ThyroidUiModel, ThyroidMapper> {
  constructor(httpClient: HttpClient, mapper: ThyroidMapper, logger: LoggingService) {
    super(
      [AppConfig.neckMrtConfig.localBaseURL, AppConfig.neckMrtConfig.thyroid.http],
      httpClient,
      mapper,
      ThyroidApiModel,
      ThyroidUiModel,
      logger
    );
  }
}
