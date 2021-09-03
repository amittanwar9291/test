import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../app.config';
import { AortaApiModel } from '@models/angiographyMRT/api/aorta/aorta-api.model';
import { AortaUiModel } from '@models/angiographyMRT/ui/aorta/aorta-ui.model';
import { AortaMapper } from '@mappings/angiographyMRT/aorta/aorta.mapper';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AortaHttpService extends BaseHttpService<AortaApiModel, AortaUiModel, AortaMapper> {
  constructor(httpClient: HttpClient, mapper: AortaMapper, logger: LoggingService) {
    super(
      [AppConfig.angiographyMrtConfig.localBaseURL, AppConfig.angiographyMrtConfig.aorta],
      httpClient,
      mapper,
      AortaApiModel,
      AortaUiModel,
      logger
    );
  }
}
