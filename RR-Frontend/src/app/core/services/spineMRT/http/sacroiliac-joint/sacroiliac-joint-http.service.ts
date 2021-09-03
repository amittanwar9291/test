import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SacroiliacJointMapper } from '@mappings/spineMRT/sacroiliac-joint/sacroiliac-joint.mapper';

import { SacroiliacJointApiModel } from '@models/spineMRT/api/sacroiliac-joint/sacroiliac-joint-api.model';
import { SacroiliacJointUiModel } from '@models/spineMRT/ui/sacroiliac-joint/sacroiliac-joint-ui.model';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AppConfig } from 'app/app.config';
import { LoggingService } from '@services/shared/logging/logging.service';

@Injectable({
  providedIn: 'root'
})
export class SacroiliacJointHttpService extends BaseHttpService<SacroiliacJointApiModel, SacroiliacJointUiModel, SacroiliacJointMapper> {
  constructor(httpClient: HttpClient, mapper: SacroiliacJointMapper, logger: LoggingService) {
    super(
      [AppConfig.spineMrtConfig.localBaseURL, AppConfig.spineMrtConfig.sacroiliacJoint.http],
      httpClient,
      mapper,
      SacroiliacJointApiModel,
      SacroiliacJointUiModel,
      logger
    );
  }
}
