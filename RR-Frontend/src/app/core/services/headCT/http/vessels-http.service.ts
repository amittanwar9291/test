import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';
import { VesselsApiModel } from '@models/headCT/api/vessels/vessels-api.model';
import { VesselsUiModel } from '@models/headCT/ui/vessels/vessels-ui.model';
import { VesselsMapper } from '@mappings/headCT/vessels/vessels.mapper';

@Injectable({
  providedIn: 'root'
})
export class VesselsHttpService extends BaseHttpService<VesselsApiModel, VesselsUiModel, VesselsMapper> {
  constructor(httpClient: HttpClient, mapper: VesselsMapper, logger: LoggingService) {
    super(
      [AppConfig.headCtConfig.localBaseURL, AppConfig.headCtConfig.vessels.http],
      httpClient,
      mapper,
      VesselsApiModel,
      VesselsUiModel,
      logger
    );
  }
}
