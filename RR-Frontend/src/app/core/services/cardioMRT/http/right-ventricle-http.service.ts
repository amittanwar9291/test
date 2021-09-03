import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { LoggingService } from '@services/shared/logging/logging.service';

import { RightVentricleUiModel } from '@models/cardioMRT/ui/right-ventricle/right-ventricle-ui.model';
import { RightVentricleApiModel } from '@models/cardioMRT/api/right-ventricle/right-ventricle-api.model';

import { RightVentricleMapper } from '@mappings/cardioMRT/right-ventricle/right-ventricle.mapper';

import { AppConfig } from 'app/app.config';

@Injectable({
  providedIn: 'root'
})
export class RightVentricleHttpService extends BaseHttpService<RightVentricleApiModel, RightVentricleUiModel, RightVentricleMapper> {
  constructor(httpClient: HttpClient, mapper: RightVentricleMapper, logger: LoggingService) {
    super(
      [AppConfig.cardioMrtConfig.localBaseURL, AppConfig.cardioMrtConfig.rightVentricle],
      httpClient,
      mapper,
      RightVentricleApiModel,
      RightVentricleUiModel,
      logger
    );
  }
}
