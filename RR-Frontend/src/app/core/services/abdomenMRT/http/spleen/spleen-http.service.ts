import { Injectable } from '@angular/core';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../../app.config';
import { SpleenApiModel } from '@models/abdomenMRT/api/spleen/spleen-api.model';
import { SpleenUiModel } from '@models/abdomenMRT/ui/spleen/spleen-ui.model';
import { SpleenMapper } from '@mappings/abdomenMRT/spleen/spleen.mapper';

@Injectable({
  providedIn: 'root'
})
export class SpleenHttpService extends BaseHttpService<SpleenApiModel, SpleenUiModel, SpleenMapper> {
  constructor(httpClient: HttpClient, mapper: SpleenMapper, logger: LoggingService) {
    super(
      [AppConfig.abdomenMRTConfig.localBaseURL, AppConfig.abdomenMRTConfig.spleen.http],
      httpClient,
      mapper,
      SpleenApiModel,
      SpleenUiModel,
      logger
    );
  }
}
