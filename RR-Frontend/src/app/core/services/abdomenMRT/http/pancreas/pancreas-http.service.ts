import { Injectable } from '@angular/core';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../../app.config';
import { PancreasApiModel } from '@models/abdomenMRT/api/pancreas/pancreas-api.model';
import { PancreasUiModel } from '@models/abdomenMRT/ui/pancreas/pancreas-ui.model';
import { PancreasMapper } from '@mappings/abdomenMRT/pancreas/pancreas.mapper';

@Injectable({
  providedIn: 'root'
})
export class PancreasHttpService extends BaseHttpService<PancreasApiModel, PancreasUiModel, PancreasMapper> {
  constructor(httpClient: HttpClient, mapper: PancreasMapper, logger: LoggingService) {
    super(
      [AppConfig.abdomenMRTConfig.localBaseURL, AppConfig.abdomenMRTConfig.pancreas.http],
      httpClient,
      mapper,
      PancreasApiModel,
      PancreasUiModel,
      logger
    );
  }
}
