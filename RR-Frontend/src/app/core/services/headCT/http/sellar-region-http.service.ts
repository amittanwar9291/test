import { Injectable } from '@angular/core';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../app.config';
import { SellarRegionApiModel } from '@models/headCT/api/sellar-region/sellar-region-api.model';
import { SellarRegionUiModel } from '@models/headCT/ui/sellar-region/sellar-region-ui.model';
import { SellarRegionMapper } from '@mappings/headCT/sellar-region/sellar-region-mapper';

@Injectable({
  providedIn: 'root'
})
export class SellarRegionHttpService extends BaseHttpService<SellarRegionApiModel, SellarRegionUiModel, SellarRegionMapper> {
  constructor(httpClient: HttpClient, mapper: SellarRegionMapper, logger: LoggingService) {
    super(
      [AppConfig.headCtConfig.localBaseURL, AppConfig.headCtConfig.sellarRegion],
      httpClient,
      mapper,
      SellarRegionApiModel,
      SellarRegionUiModel,
      logger
    );
  }
}
