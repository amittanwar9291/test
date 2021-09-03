import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';

import { SoftTissueUiModel } from '@models/elbowMRT/ui/soft-tissue/soft-tissue-ui.model';
import { SoftTissueApiModel } from '@models/elbowMRT/api/soft-tissue/soft-tissue-api.model';
import { SoftTissueMapper } from '@mappings/elbowMRT/soft-tissue/soft-tissue.mapper';

@Injectable({
  providedIn: 'root'
})
export class SoftTissueHttpService extends BaseHttpService<SoftTissueApiModel, SoftTissueUiModel, SoftTissueMapper> {
  constructor(httpClient: HttpClient, mapper: SoftTissueMapper, logger: LoggingService) {
    super(
      [AppConfig.elbowMrtConfig.localBaseURL, AppConfig.elbowMrtConfig.softTissue.http],
      httpClient,
      mapper,
      SoftTissueApiModel,
      SoftTissueUiModel,
      logger
    );
  }
}
