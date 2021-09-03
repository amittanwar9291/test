import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../app.config';
import { Observable, of } from 'rxjs';

import { AortaMapper } from '@mappings/angiographyCT/aorta/aorta.mapper';
import { AortaUiModel } from '@models/angiographyCT/ui/aorta/aorta-ui.model';
import { AortaApiModel } from '@models/angiographyCT/api/aorta/aorta-api.model';

@Injectable({
  providedIn: 'root'
})
export class AortaHttpService extends BaseHttpService<AortaApiModel, AortaUiModel, AortaMapper> {
  constructor(httpClient: HttpClient, mapper: AortaMapper, logger: LoggingService) {
    super(
      [AppConfig.angiographyCtConfig.localBaseURL, AppConfig.angiographyCtConfig.aorta],
      httpClient,
      mapper,
      AortaApiModel,
      AortaUiModel,
      logger
    );
  }
}
