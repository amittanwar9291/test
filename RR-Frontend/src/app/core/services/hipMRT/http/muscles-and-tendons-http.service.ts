import { Injectable } from '@angular/core';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { HttpClient } from '@angular/common/http';

import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';

import { MusclesAndTendonsApiModel } from '@models/hipMRT/api/muscles-and-tendons/muscles-and-tendons-api.model';
import { MusclesAndTendonsUiModel } from '@models/hipMRT/ui/muscles-and-tendons/muscles-and-tendons-ui.model';

import { MusclesAndTendonsMapper } from '@mappings/hipMRT/muscles-and-tendons/muscles-and-tendons-mapper';

@Injectable({
  providedIn: 'root'
})
export class MusclesAndTendonsHttpService extends BaseHttpService<
  MusclesAndTendonsApiModel,
  MusclesAndTendonsUiModel,
  MusclesAndTendonsMapper
> {
  constructor(httpClient: HttpClient, mapper: MusclesAndTendonsMapper, logger: LoggingService) {
    super(
      [AppConfig.hipMrtConfig.localBaseURL, AppConfig.hipMrtConfig.musclesAndTendons],
      httpClient,
      mapper,
      MusclesAndTendonsApiModel,
      MusclesAndTendonsUiModel,
      logger
    );
  }
}
