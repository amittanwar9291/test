import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LabrumAndRibbonsMapper } from '@mappings/shoulderMRT/labrum-and-ribbons/labrum-and-ribbons.mapper';

import { LabrumAndRibbonsApiModel } from '@models/shoulderMRT/api/labrum-and-ribbons/labrum-and-ribbons-api.model';
import { LabrumAndRibbonsUiModel } from '@models/shoulderMRT/ui/labrum-and-ribbons/labrum-and-ribbons-ui.model';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { CustomTranslateService } from '@services/shared';

import { AppConfig } from 'app/app.config';

import { LoggingService } from '@services/shared/logging/logging.service';

@Injectable({
  providedIn: 'root'
})
export class LabrumAndRibbonsHttpService extends BaseHttpService<
  LabrumAndRibbonsApiModel,
  LabrumAndRibbonsUiModel,
  LabrumAndRibbonsMapper
> {
  constructor(httpClient: HttpClient, mapper: LabrumAndRibbonsMapper, private translate: CustomTranslateService, logger: LoggingService) {
    super(
      [AppConfig.shoulderMrtConfig.localBaseURL, AppConfig.shoulderMrtConfig.labrumAndRibbons.http],
      httpClient,
      mapper,
      LabrumAndRibbonsApiModel,
      LabrumAndRibbonsUiModel,
      logger
    );
  }
}
