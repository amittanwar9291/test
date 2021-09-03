import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';

import { FlapsApiModel } from '@models/cardioMRT/api/flaps/flaps-api.model';
import { FlapsUiModel } from '@models/cardioMRT/ui/flaps/flaps-ui.model';

import { FlapsMapper } from '@mappings/cardioMRT/flaps/flaps.mapper';

@Injectable({
  providedIn: 'root'
})
export class FlapsHttpService extends BaseHttpService<FlapsApiModel, FlapsUiModel, FlapsMapper> {
  constructor(httpClient: HttpClient, mapper: FlapsMapper, logger: LoggingService) {
    super(
      [AppConfig.cardioMrtConfig.localBaseURL, AppConfig.cardioMrtConfig.flaps.http],
      httpClient,
      mapper,
      FlapsApiModel,
      FlapsUiModel,
      logger
    );
  }
}
