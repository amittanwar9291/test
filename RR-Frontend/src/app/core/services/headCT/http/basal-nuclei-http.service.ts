import { Injectable } from '@angular/core';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../app.config';
import { BasalNucleiApiModel } from '@models/headCT/api/basal-nuclei/basal-nuclei-api.model';
import { BasalNucleiUiModel } from '@models/headCT/ui/basal-nuclei/basal-nuclei-ui.model';
import { BasalNucleiMapper } from '@mappings/headCT/basal-nuclei/basal-nuclei-mapper';

@Injectable({
  providedIn: 'root'
})
export class BasalNucleiHttpService extends BaseHttpService<BasalNucleiApiModel, BasalNucleiUiModel, BasalNucleiMapper> {
  constructor(httpClient: HttpClient, mapper: BasalNucleiMapper, logger: LoggingService) {
    super(
      [AppConfig.headCtConfig.localBaseURL, AppConfig.headCtConfig.basalNuclei],
      httpClient,
      mapper,
      BasalNucleiApiModel,
      BasalNucleiUiModel,
      logger
    );
  }
}
