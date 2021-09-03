import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AppConfig } from 'app/app.config';

import { LoggingService } from '@services/shared';

import { LymphNodesMapper } from '@mappings/mammaMX/lymph-nodes/lymph-nodes.mapper';

import { LymphNodesUiModel } from '@models/mammaMX/ui/lymph-nodes/lymph-nodes-ui.model';
import { LymphNodesApiModel } from '@models/mammaMX/api/lymph-nodes/lymph-nodes-api.model';

@Injectable({
  providedIn: 'root'
})
export class LymphNodesHttpService extends BaseHttpService<LymphNodesApiModel, LymphNodesUiModel, LymphNodesMapper> {
  constructor(httpClient: HttpClient, mapper: LymphNodesMapper, logger: LoggingService) {
    super(
      [AppConfig.mammaMxConfig.localBaseURL, AppConfig.mammaMxConfig.lymphNodes],
      httpClient,
      mapper,
      LymphNodesApiModel,
      LymphNodesUiModel,
      logger
    );
  }
}
