import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';

import { BasalNucleiApiModel } from '@models/headMRT/api/basal_nuclei/basal-nuclei-api.model';
import { BasalNucleiUiModel } from '@models/headMRT/ui/basal-nuclei/basal-nuclei-ui.model';
import { BasalNucleiMapper } from '@mappings/headMRT/basal_nuclei/basal-nuclei.mapper';

@Injectable({
  providedIn: 'root'
})
export class BasalNucleiHttpService extends BaseHttpService<BasalNucleiApiModel, BasalNucleiUiModel, BasalNucleiMapper> {
  constructor(httpClient: HttpClient, mapper: BasalNucleiMapper, logger: LoggingService) {
    super(
      [AppConfig.headMrtConfig.localBaseURL, AppConfig.headMrtConfig.basalNuclei.http],
      httpClient,
      mapper,
      BasalNucleiApiModel,
      BasalNucleiUiModel,
      logger
    );
  }
}
