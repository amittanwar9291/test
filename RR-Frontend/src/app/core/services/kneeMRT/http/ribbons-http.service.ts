import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RibbonsMapper } from '@mappings/kneeMRT/ribbons/ribbons.mapper';

import { RibbonsApiModel } from '@models/kneeMRT/api/ribbons/ribbons-api.model';
import { RibbonsUiModel } from '@models/kneeMRT/ui/ribbons/ribbons-ui.model';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AppConfig } from 'app/app.config';

import { LoggingService } from '@services/shared/logging/logging.service';

@Injectable({
  providedIn: 'root'
})
export class RibbonsHttpService extends BaseHttpService<RibbonsApiModel, RibbonsUiModel, RibbonsMapper> {
  constructor(httpClient: HttpClient, mapper: RibbonsMapper, logger: LoggingService) {
    super(
      [AppConfig.kneeMrtConfig.localBaseURL, AppConfig.kneeMrtConfig.ribbons.http],
      httpClient,
      mapper,
      RibbonsApiModel,
      RibbonsUiModel,
      logger
    );
  }
}
