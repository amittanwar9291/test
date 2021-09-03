import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../app.config';
import { LocalizationMapper } from '@mappings/angiographyCT/localization/localization.mapper';
import { LocalizationApiModel } from '@models/angiographyCT/api/localization/localization-api.model';
import { LocalizationUiModel } from '@models/angiographyCT/ui/localization/localization-ui.model';

@Injectable({
  providedIn: 'root'
})
export class LocalizationHttpService extends BaseHttpService<LocalizationApiModel, LocalizationUiModel, LocalizationMapper> {
  constructor(httpClient: HttpClient, mapper: LocalizationMapper, logger: LoggingService) {
    super(
      [AppConfig.angiographyCtConfig.localBaseURL, AppConfig.angiographyCtConfig.localization],
      httpClient,
      mapper,
      LocalizationApiModel,
      LocalizationUiModel,
      logger
    );
  }
}
