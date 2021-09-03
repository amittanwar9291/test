import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MyelonMapper } from '@mappings/spineMRT/myelon/myelon.mapper';

import { MyelonAPIModel } from '@models/spineMRT/api/myelon/myelon-api.model';
import { MyelonUIModel } from '@models/spineMRT/ui/myelon/myelon-ui.model';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AppConfig } from 'app/app.config';
import { LoggingService } from '@services/shared/logging/logging.service';

@Injectable({
  providedIn: 'root'
})
export class MyelonHttpService extends BaseHttpService<MyelonAPIModel, MyelonUIModel, MyelonMapper> {
  constructor(httpClient: HttpClient, mapper: MyelonMapper, logger: LoggingService) {
    super(
      [AppConfig.spineMrtConfig.localBaseURL, AppConfig.spineMrtConfig.spinalCanal.http],
      httpClient,
      mapper,
      MyelonAPIModel,
      MyelonUIModel,
      logger
    );
  }
}
