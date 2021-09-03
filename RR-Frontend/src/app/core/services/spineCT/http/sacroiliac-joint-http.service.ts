import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AppConfig } from 'app/app.config';
import { LoggingService } from '@services/shared/logging/logging.service';

import { SpineCTSacroiliacJointMapper } from '@mappings/spineCT';

import { SacroiliacJointApiModel, SacroiliacJointUiModel } from '@models/spineCT';

@Injectable({
  providedIn: 'root'
})
export class SacroiliacJointHttpService extends BaseHttpService<
  SacroiliacJointApiModel,
  SacroiliacJointUiModel,
  SpineCTSacroiliacJointMapper
> {
  constructor(httpClient: HttpClient, mapper: SpineCTSacroiliacJointMapper, logger: LoggingService) {
    super(
      [AppConfig.spineCtConfig.localBaseURL, AppConfig.spineCtConfig.sacroiliacJoint.http],
      httpClient,
      mapper,
      SacroiliacJointApiModel,
      SacroiliacJointUiModel,
      logger
    );
  }
}
