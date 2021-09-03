import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';

import { VesselsApiModel } from '@models/headMRT/api/vessels/vessels-api.model';
import { VesselsMapper } from '@mappings/headMRT/vessels/vessels.mapper';
import { VesselsUiModel } from '@models/headMRT/ui/vessels/vessels-ui.model';

@Injectable({
  providedIn: 'root'
})
export class VesselsHttpService extends BaseHttpService<VesselsApiModel, VesselsUiModel, VesselsMapper> {
  constructor(httpClient: HttpClient, mapper: VesselsMapper, logger: LoggingService) {
    super(
      [AppConfig.headMrtConfig.localBaseURL, AppConfig.headMrtConfig.vessels.http],
      httpClient,
      mapper,
      VesselsApiModel,
      VesselsUiModel,
      logger
    );
  }
}
