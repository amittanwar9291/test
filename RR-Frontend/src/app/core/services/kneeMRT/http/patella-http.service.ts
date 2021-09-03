import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PatellaMapper } from '@mappings/kneeMRT/patella/patella.mapper';

import { PatellaApiModel } from '@models/kneeMRT/api/patella/patella-api.model';
import { PatellaUiModel } from '@models/kneeMRT/ui/patella/patella-ui.model';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AppConfig } from 'app/app.config';

import { LoggingService } from '@services/shared/logging/logging.service';

@Injectable({
  providedIn: 'root'
})
export class PatellaHttpService extends BaseHttpService<PatellaApiModel, PatellaUiModel, PatellaMapper> {
  constructor(httpClient: HttpClient, mapper: PatellaMapper, logger: LoggingService) {
    super(
      [AppConfig.kneeMrtConfig.localBaseURL, AppConfig.kneeMrtConfig.patella],
      httpClient,
      mapper,
      PatellaApiModel,
      PatellaUiModel,
      logger
    );
  }
}
