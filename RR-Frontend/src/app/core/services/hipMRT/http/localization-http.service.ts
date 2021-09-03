import { Injectable } from '@angular/core';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { HttpClient } from '@angular/common/http';

import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';

import { LocalizationApiModel } from '@models/hipMRT/api/localization/localization-api.model';
import { LocalizationUiModel } from '@models/hipMRT/ui/localization/localization-ui.model';
import { LocalizationMapper } from '@mappings/hipMRT/localization/localization-mapper';

@Injectable({
  providedIn: 'root'
})
export class LocalizationHttpService extends BaseHttpService<LocalizationApiModel, LocalizationUiModel, LocalizationMapper> {
  constructor(httpClient: HttpClient, mapper: LocalizationMapper, logger: LoggingService) {
    super(
      [AppConfig.hipMrtConfig.localBaseURL, AppConfig.hipMrtConfig.localization],
      httpClient,
      mapper,
      LocalizationApiModel,
      LocalizationUiModel,
      logger
    );
  }
}
