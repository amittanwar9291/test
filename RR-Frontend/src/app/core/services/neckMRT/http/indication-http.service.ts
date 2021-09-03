import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';
import { IndicationApiModel } from '@models/neckMRT/api/indication/indication-api.model';
import { IndicationUiModel } from '@models/neckMRT/ui/indication/indication-ui.model';
import { IndicationMapper } from '@mappings/neckMRT/indication/indication.mapper';

@Injectable({
  providedIn: 'root'
})
export class IndicationHttpService extends BaseHttpService<IndicationApiModel, IndicationUiModel, IndicationMapper> {
  constructor(httpClient: HttpClient, mapper: IndicationMapper, logger: LoggingService) {
    super(
      [AppConfig.neckMrtConfig.localBaseURL, AppConfig.neckMrtConfig.indication],
      httpClient,
      mapper,
      IndicationApiModel,
      IndicationUiModel,
      logger
    );
  }
}
