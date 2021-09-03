import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { LoggingService } from '@services/shared';

import { AppConfig } from 'app/app.config';
import { Observable, of } from 'rxjs';

import { SoftTissueApiModel } from '@models/angiographyCT/api/soft-tissue/soft-tissue-api.model';
import { SoftTissueUiModel } from '@models/angiographyCT/ui/soft-tissue/soft-tissue-ui.model';
import { SoftTissueMapper } from '@mappings/angiographyCT/soft-tissue/soft-tissue.mapper';

@Injectable({
  providedIn: 'root'
})
export class SoftTissueHttpService extends BaseHttpService<SoftTissueApiModel, SoftTissueUiModel, SoftTissueMapper> {
  constructor(httpClient: HttpClient, mapper: SoftTissueMapper, logger: LoggingService) {
    super(
      [AppConfig.angiographyCtConfig.localBaseURL, AppConfig.angiographyCtConfig.softTissue],
      httpClient,
      mapper,
      SoftTissueApiModel,
      SoftTissueUiModel,
      logger
    );
  }
}
