import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { RotatorApiModel } from '@models/shoulderMRT/api/rotator/rotator-api.model';
import { RotatorUiModel } from '@models/shoulderMRT/ui/rotator/rotator-ui.model';

import { RotatorMapper } from '@mappings/shoulderMRT/rotator/rotator.mapper';

import { AppConfig } from 'app/app.config';

import { LoggingService } from '@services/shared/logging/logging.service';

@Injectable({
  providedIn: 'root'
})
export class RotatorHttpService extends BaseHttpService<RotatorApiModel, RotatorUiModel, RotatorMapper> {
  constructor(httpClient: HttpClient, mapper: RotatorMapper, logger: LoggingService) {
    super(
      [AppConfig.shoulderMrtConfig.localBaseURL, AppConfig.shoulderMrtConfig.rotator.http],
      httpClient,
      mapper,
      RotatorApiModel,
      RotatorUiModel,
      logger
    );
  }
}
