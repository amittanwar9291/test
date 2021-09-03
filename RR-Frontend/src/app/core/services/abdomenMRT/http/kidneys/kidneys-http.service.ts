import { Injectable } from '@angular/core';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../../app.config';
import { KidneysApiModel } from '@models/abdomenMRT/api/kidneys/kidneys-api.model';
import { KidneysUiModel } from '@models/abdomenMRT/ui/kidneys/kidneys-ui.model';
import { KidneysMapper } from '@mappings/abdomenMRT/kidneys/kidneys.mapper';

@Injectable({
  providedIn: 'root'
})
export class KidneysHttpService extends BaseHttpService<KidneysApiModel, KidneysUiModel, KidneysMapper> {
  constructor(httpClient: HttpClient, mapper: KidneysMapper, logger: LoggingService) {
    super(
      [AppConfig.abdomenMRTConfig.localBaseURL, AppConfig.abdomenMRTConfig.kidneys.http],
      httpClient,
      mapper,
      KidneysApiModel,
      KidneysUiModel,
      logger
    );
  }
}
