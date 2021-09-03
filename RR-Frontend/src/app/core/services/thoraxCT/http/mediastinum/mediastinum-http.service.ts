import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';

import { MediastinumApiModel } from '@models/thoraxCT/api/mediastinum/mediastinum-api.model';
import { MediastinumUiModel } from '@models/thoraxCT/ui/mediastinum/mediastinum-ui.model';

import { MediastinumMapper } from '@mappings/thoraxCT/mediastinum/mediastinum.mapper';

@Injectable({
  providedIn: 'root'
})
export class MediastinumHttpService extends BaseHttpService<MediastinumApiModel, MediastinumUiModel, MediastinumMapper> {
  constructor(httpClient: HttpClient, mapper: MediastinumMapper, logger: LoggingService) {
    super(
      [AppConfig.thoraxCtConfig.localBaseURL, AppConfig.thoraxCtConfig.mediastinum.http],
      httpClient,
      mapper,
      MediastinumApiModel,
      MediastinumUiModel,
      logger
    );
  }
}
