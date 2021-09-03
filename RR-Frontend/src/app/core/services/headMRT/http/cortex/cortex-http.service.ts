import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { CortexApiModel } from '@models/headMRT/api/cortex/cortex-api.model';
import { CortexUiModel } from '@models/headMRT/ui/cortex/cortex-ui.model';
import { CortexMapper } from '@mappings/headMRT/cortex/cortex.mapper';

import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';

@Injectable({
  providedIn: 'root'
})
export class CortexHttpService extends BaseHttpService<CortexApiModel, CortexUiModel, CortexMapper> {
  constructor(httpClient: HttpClient, mapper: CortexMapper, logger: LoggingService) {
    super(
      [AppConfig.headMrtConfig.localBaseURL, AppConfig.headMrtConfig.cortex.http],
      httpClient,
      mapper,
      CortexApiModel,
      CortexUiModel,
      logger
    );
  }
}
