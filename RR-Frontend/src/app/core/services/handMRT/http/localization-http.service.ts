import { AppConfig } from 'app/app.config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared/logging/logging.service';
import { LocalizationMapper } from '@mappings/handMRT/localization/localization-mapper';
import { LocalizationApiModel } from '@models/handMRT/api/localization/localization-api.model';
import { LocalizationUiModel } from '@models/handMRT/ui/localization/localization-ui.model';

@Injectable({
  providedIn: 'root'
})
export class LocalizationHttpService extends BaseHttpService<LocalizationApiModel, LocalizationUiModel, LocalizationMapper> {
  constructor(httpClient: HttpClient, mapper: LocalizationMapper, logger: LoggingService) {
    super(
      [AppConfig.handMrtConfig.localBaseURL, AppConfig.handMrtConfig.localization],
      httpClient,
      mapper,
      LocalizationApiModel,
      LocalizationUiModel,
      logger
    );
  }
}
