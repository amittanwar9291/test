import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';
import { MediastinumApiModel } from '@models/thoraxMRT/api/mediastinum/mediastinum-api.model';
import { MediastinumUiModel } from '@models/thoraxMRT/ui/mediastinum/mediastinum-ui.model';
import { MediastinumMapper } from '@mappings/thoraxMRT/mediastinum/mediastinum.mapper';

@Injectable({
  providedIn: 'root'
})
export class MediastinumHttpService extends BaseHttpService<MediastinumApiModel, MediastinumUiModel, MediastinumMapper> {
  constructor(httpClient: HttpClient, mapper: MediastinumMapper, logger: LoggingService) {
    super(
      [AppConfig.thoraxMrtConfig.localBaseURL, AppConfig.thoraxMrtConfig.mediastinum],
      httpClient,
      mapper,
      MediastinumApiModel,
      MediastinumUiModel,
      logger
    );
  }
}
