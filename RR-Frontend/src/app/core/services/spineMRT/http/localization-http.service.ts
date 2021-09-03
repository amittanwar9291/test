import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LocalizationMapper } from '@mappings/spineMRT/localization/localization.mapper';

import { LocalizationApiModel } from '@models/spineMRT/api/localization/localization-api.model';
import { LocalizationUiModel } from '@models/spineMRT/ui/localization/localization-ui.model';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AppConfig } from 'app/app.config';

import { LoggingService } from '@services/shared/logging/logging.service';

@Injectable({
  providedIn: 'root'
})
export class LocalizationHttpService extends BaseHttpService<LocalizationApiModel, LocalizationUiModel, LocalizationMapper> {
  constructor(httpClient: HttpClient, mapper: LocalizationMapper, logger: LoggingService) {
    super(
      [AppConfig.spineMrtConfig.localBaseURL, AppConfig.spineMrtConfig.localization],
      httpClient,
      mapper,
      LocalizationApiModel,
      LocalizationUiModel,
      logger
    );
  }
}
