import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { JointApiModel } from '@models/shoulderMRT/api/joint/joint-api.model';
import { JointUiModel } from '@models/shoulderMRT/ui/joint/joint-ui-model';

import { JointMapper } from '@mappings/shoulderMRT/joint/joint.mapper';

import { AppConfig } from 'app/app.config';

import { LoggingService } from '@services/shared/logging/logging.service';

@Injectable({
  providedIn: 'root'
})
export class JointHttpService extends BaseHttpService<JointApiModel, JointUiModel, JointMapper> {
  constructor(httpClient: HttpClient, mapper: JointMapper, logger: LoggingService) {
    super(
      [AppConfig.shoulderMrtConfig.localBaseURL, AppConfig.shoulderMrtConfig.jointAndBursae.http],
      httpClient,
      mapper,
      JointApiModel,
      JointUiModel,
      logger
    );
  }
}
