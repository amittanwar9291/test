import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { LoggingService } from '@services/shared';

import { AppConfig } from 'app/app.config';

import { UltrasoundFindingUiModel } from '@models/mammaMX/ui/ultrasound-finding/ultrasound-finding-ui.model';
import { UltrasoundFindingApiModel } from '@models/mammaMX/api/ultrasound-finding/ultrasound-finding-api.model';

import { UltrasoundFindingMapper } from '@mappings/mammaMX/ultrasound-finding/ultrasound-finding.mapper';

@Injectable({
  providedIn: 'root'
})
export class UltrasoundFindingService extends BaseHttpService<
  UltrasoundFindingApiModel,
  UltrasoundFindingUiModel,
  UltrasoundFindingMapper
> {
  constructor(httpClient: HttpClient, mapper: UltrasoundFindingMapper, logger: LoggingService) {
    super(
      [AppConfig.mammaMxConfig.localBaseURL, AppConfig.mammaMxConfig.ultrasoundFinding.http],
      httpClient,
      mapper,
      UltrasoundFindingApiModel,
      UltrasoundFindingUiModel,
      logger
    );
  }
}
