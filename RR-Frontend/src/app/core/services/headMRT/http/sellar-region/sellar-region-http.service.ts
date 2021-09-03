import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';

import { SellarRegionUiModel } from '@models/headMRT/ui/sellar-region/sellar-region-ui.model';
import { SellarRegionApiModel } from '@models/headMRT/api/sellar-region/sellar-region-api.model';
import { SellarRegionMapper } from '@mappings/headMRT/sellar-region/sellar-region.mapper';

@Injectable({
  providedIn: 'root'
})
export class SellarRegionHttpService extends BaseHttpService<SellarRegionApiModel, SellarRegionUiModel, SellarRegionMapper> {
  constructor(httpClient: HttpClient, mapper: SellarRegionMapper, logger: LoggingService) {
    super(
      [AppConfig.headMrtConfig.localBaseURL, AppConfig.headMrtConfig.sellarRegion.http],
      httpClient,
      mapper,
      SellarRegionApiModel,
      SellarRegionUiModel,
      logger
    );
  }
}
