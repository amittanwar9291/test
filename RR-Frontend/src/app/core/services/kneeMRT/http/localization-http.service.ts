import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LocalizationMapper } from '@mappings/kneeMRT/localization/localization.mapper';

import { LocalizationApiModel } from '@models/kneeMRT/api/localization/localization-api.model';
import { LocalizationUiModel } from '@models/kneeMRT/ui/localization/localization-ui.model';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AppConfig } from 'app/app.config';

import { LoggingService } from '@services/shared/logging/logging.service';

@Injectable({
  providedIn: 'root'
})
export class LocalizationHttpService extends BaseHttpService<LocalizationApiModel, LocalizationUiModel, LocalizationMapper> {
  constructor(httpClient: HttpClient, mapper: LocalizationMapper, logger: LoggingService) {
    super(
      [AppConfig.kneeMrtConfig.localBaseURL, AppConfig.kneeMrtConfig.localization],
      httpClient,
      mapper,
      LocalizationApiModel,
      LocalizationUiModel,
      logger
    );
  }
}
