import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';

import { LeftVentricleApiModel } from '@models/cardioMRT/api/left-ventricle/left-ventricle-api.model';
import { LeftVentricleUiModel } from '@models/cardioMRT/ui/left-ventricle/left-ventricle-ui.model';

import { LeftVentricleMapper } from '@mappings/cardioMRT/left-ventricle/left-ventricle.mapper';

@Injectable({
  providedIn: 'root'
})
export class LeftVentricleHttpService extends BaseHttpService<LeftVentricleApiModel, LeftVentricleUiModel, LeftVentricleMapper> {
  constructor(httpClient: HttpClient, mapper: LeftVentricleMapper, logger: LoggingService) {
    super(
      [AppConfig.cardioMrtConfig.localBaseURL, AppConfig.settings.servicesUrls.cardioMRT.leftVentricle.http],
      httpClient,
      mapper,
      LeftVentricleApiModel,
      LeftVentricleUiModel,
      logger
    );
  }
}
