import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AppConfig } from 'app/app.config';

import { LoggingService } from '@services/shared/logging/logging.service';

import { LocalizationApiModel } from '@models/pelvisMRT/api/localization/localization-api.model';
import { LocalizationUiModel } from '@models/pelvisMRT/ui/localization/localization-ui.model';

import { LocalizationMapper } from '@mappings/pelvisMRT/localization/localization.mapper';

@Injectable({
  providedIn: 'root'
})
export class LocalizationHttpService extends BaseHttpService<LocalizationApiModel, LocalizationUiModel, LocalizationMapper> {
  constructor(httpClient: HttpClient, mapper: LocalizationMapper, logger: LoggingService) {
    super(
      [AppConfig.pelvisMrtConfig.localBaseURL, AppConfig.pelvisMrtConfig.localization],
      httpClient,
      mapper,
      LocalizationApiModel,
      LocalizationUiModel,
      logger
    );
  }
}
