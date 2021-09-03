import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';

import { FacialSkullUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-ui.model';
import { FacialSkullApiModel } from '@models/headMRT/api/facial-skull/facial-skull-api.model';
import { FacialSkullMapper } from '@mappings/headMRT/facial-skull/facial-skull.mapper';

@Injectable({
  providedIn: 'root'
})
export class FacialSkullHttpService extends BaseHttpService<FacialSkullApiModel, FacialSkullUiModel, FacialSkullMapper> {
  constructor(httpClient: HttpClient, mapper: FacialSkullMapper, logger: LoggingService) {
    super(
      [AppConfig.headMrtConfig.localBaseURL, AppConfig.headMrtConfig.facialSkull.http],
      httpClient,
      mapper,
      FacialSkullApiModel,
      FacialSkullUiModel,
      logger
    );
  }
}
