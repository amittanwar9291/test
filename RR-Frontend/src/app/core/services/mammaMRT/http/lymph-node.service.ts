import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { LymphNodeApiModel } from '@models/mammaMRT/api/lymph-node/lymph-node-api.model';
import { LymphNodeUiModel } from '@models/mammaMRT/ui/lymph-node/lymph-node-ui.model';

import { LymphNodeMapper } from '@mappings/mammaMRT/lymph-node/lymph-node.mapper';

import { AppConfig } from 'app/app.config';

import { LoggingService } from '@services/shared/logging/logging.service';

@Injectable({
  providedIn: 'root'
})
export class LymphNodeHttpService extends BaseHttpService<LymphNodeApiModel, LymphNodeUiModel, LymphNodeMapper> {
  constructor(httpClient: HttpClient, mapper: LymphNodeMapper, logger: LoggingService) {
    super(
      [AppConfig.mammaMrtConfig.localBaseURL, AppConfig.mammaMrtConfig.lymphs],
      httpClient,
      mapper,
      LymphNodeApiModel,
      LymphNodeUiModel,
      logger
    );
  }
}
