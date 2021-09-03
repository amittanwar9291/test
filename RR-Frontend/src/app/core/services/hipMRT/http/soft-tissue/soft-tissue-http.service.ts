import { Injectable } from '@angular/core';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { HttpClient } from '@angular/common/http';

import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';

import { SoftTissueApiModel } from '@models/hipMRT/api/soft-tissue/soft-tissue-api-model';
import { SoftTissueUiModel } from '@models/hipMRT/ui/soft-tissue/soft-tissue-ui-model';

import { SoftTissueMapper } from '@mappings/hipMRT/soft-tissue/soft-tissue-mapper';

@Injectable({
  providedIn: 'root'
})
export class SoftTissueHttpService extends BaseHttpService<SoftTissueApiModel, SoftTissueUiModel, SoftTissueMapper> {
  constructor(httpClient: HttpClient, mapper: SoftTissueMapper, logger: LoggingService) {
    super(
      [AppConfig.hipMrtConfig.localBaseURL, AppConfig.hipMrtConfig.softTissue.http],
      httpClient,
      mapper,
      SoftTissueApiModel,
      SoftTissueUiModel,
      logger
    );
  }
}
