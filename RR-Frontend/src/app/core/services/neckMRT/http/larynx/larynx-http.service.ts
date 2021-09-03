import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';
import { LarynxApiModel } from '@models/neckMRT/api/larynx/larynx-api.model';
import { LarynxUiModel } from '@models/neckMRT/ui/larynx/larynx-ui.model';
import { LarynxMapper } from '@mappings/neckMRT/larynx/larynx.mapper';

@Injectable({
  providedIn: 'root'
})
export class LarynxHttpService extends BaseHttpService<LarynxApiModel, LarynxUiModel, LarynxMapper> {
  constructor(httpClient: HttpClient, mapper: LarynxMapper, logger: LoggingService) {
    super(
      [AppConfig.neckMrtConfig.localBaseURL, AppConfig.neckMrtConfig.larynx.http],
      httpClient,
      mapper,
      LarynxApiModel,
      LarynxUiModel,
      logger
    );
  }
}
