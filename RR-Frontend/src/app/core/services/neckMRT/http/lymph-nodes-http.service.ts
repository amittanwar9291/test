import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';
import { LymphNodesApiModel } from '@models/neckMRT/api/lymph-nodes/lymph-nodes-api.model';
import { LymphNodesUiModel } from '@models/neckMRT/ui/lymph-nodes/lymph-nodes-ui.model';
import { LymphNodesMapper } from '@mappings/neckMRT/lymph-nodes/lymph-nodes.mapper';

@Injectable({
  providedIn: 'root'
})
export class LymphNodesHttpService extends BaseHttpService<LymphNodesApiModel, LymphNodesUiModel, LymphNodesMapper> {
  constructor(httpClient: HttpClient, mapper: LymphNodesMapper, logger: LoggingService) {
    super(
      [AppConfig.neckMrtConfig.localBaseURL, AppConfig.neckMrtConfig.lymphNodes.http],
      httpClient,
      mapper,
      LymphNodesApiModel,
      LymphNodesUiModel,
      logger
    );
  }
}
