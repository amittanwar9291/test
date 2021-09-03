import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';
import { SoftTissuesApiModel } from '@models/neckMRT/api/soft-tissues/soft-tissues-api.model';
import { SoftTissuesUiModel } from '@models/neckMRT/ui/soft-tissues/soft-tissues-ui.model';
import { SoftTissuesMapper } from '@mappings/neckMRT/soft-tissues/soft-tissues.mapper';

@Injectable({
  providedIn: 'root'
})
export class SoftTissuesHttpService extends BaseHttpService<SoftTissuesApiModel, SoftTissuesUiModel, SoftTissuesMapper> {
  constructor(httpClient: HttpClient, mapper: SoftTissuesMapper, logger: LoggingService) {
    super(
      [AppConfig.neckMrtConfig.localBaseURL, AppConfig.neckMrtConfig.softTissues.http],
      httpClient,
      mapper,
      SoftTissuesApiModel,
      SoftTissuesUiModel,
      logger
    );
  }
}
