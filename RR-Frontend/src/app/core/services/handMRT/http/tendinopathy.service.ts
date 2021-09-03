import { Injectable } from '@angular/core';
import { AppConfig } from 'app/app.config';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { HttpClient } from '@angular/common/http';

import { LoggingService } from '@services/shared/logging/logging.service';

import { TendinopathyApiModel } from '@models/handMRT/api/tendinopathy/tendinopathy-api.model';
import { TendinopathyUiModel } from '@models/handMRT/ui/tendinopathy/tendinopathy-ui.model';
import { TendinopathyMapper } from '@mappings/handMRT/tendinopathy/tendinopathy-mapper';

@Injectable({
  providedIn: 'root'
})
export class TendinopathyHttpService extends BaseHttpService<TendinopathyApiModel, TendinopathyUiModel, TendinopathyMapper> {
  constructor(httpClient: HttpClient, mapper: TendinopathyMapper, logger: LoggingService) {
    super(
      [AppConfig.handMrtConfig.localBaseURL, AppConfig.handMrtConfig.tendinopathy],
      httpClient,
      mapper,
      TendinopathyApiModel,
      TendinopathyUiModel,
      logger
    );
  }
}
