import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AppConfig } from 'app/app.config';
import { LoggingService } from '@services/shared/logging/logging.service';

import { LymphNodesApiModel } from '@models/pelvisMRT/api/lymph-nodes/lymph-nodes-api.model';
import { LymphNodesUiModel } from '@models/pelvisMRT/ui/lymph-nodes/lymph-nodes-ui.model';
import { LymphNodesMapper } from '@mappings/pelvisMRT/lymh-nodes/lymh-nodes.mapper';

@Injectable({
  providedIn: 'root'
})
export class LymphNodesHttpService extends BaseHttpService<LymphNodesApiModel, LymphNodesUiModel, LymphNodesMapper> {
  constructor(httpClient: HttpClient, mapper: LymphNodesMapper, logger: LoggingService) {
    super(
      [AppConfig.pelvisMrtConfig.localBaseURL, AppConfig.pelvisMrtConfig.lymphNodes.http],
      httpClient,
      mapper,
      LymphNodesApiModel,
      LymphNodesUiModel,
      logger
    );
  }
}
