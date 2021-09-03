import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { SoftTissueUiModel } from '@models/feetMRT/ui/soft-tissue/soft-tissue-ui.model';
import { SoftTissueMapper } from '@mappings/feetMRT/soft-tissue/soft-tissue.mapper';
import { SoftTissueApiModel } from '@models/feetMRT/api/soft-tissue/soft-tissue-api.model';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../../app.config';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoftTissueHttpService extends BaseHttpService<SoftTissueApiModel, SoftTissueUiModel, SoftTissueMapper> {
  constructor(httpClient: HttpClient, mapper: SoftTissueMapper, logger: LoggingService) {
    super(
      [AppConfig.feetMrtConfig.localBaseURL, AppConfig.feetMrtConfig.softTissue.http],
      httpClient,
      mapper,
      SoftTissueApiModel,
      SoftTissueUiModel,
      logger
    );
  }
}
