import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { BonesMapper } from '@mappings/shoulderMRT/bones/bones.mapper';

import { BonesApiModel } from '@models/shoulderMRT/api/bones/bones-api.model';
import { BonesUiModel } from '@models/shoulderMRT/ui/bones/bones-ui.model';

import { AppConfig } from 'app/app.config';

import { LoggingService } from '@services/shared/logging/logging.service';

@Injectable({
  providedIn: 'root'
})
export class BonesHttpService extends BaseHttpService<BonesApiModel, BonesUiModel, BonesMapper> {
  constructor(httpClient: HttpClient, mapper: BonesMapper, logger: LoggingService) {
    super(
      [AppConfig.shoulderMrtConfig.localBaseURL, AppConfig.shoulderMrtConfig.bones.http],
      httpClient,
      mapper,
      BonesApiModel,
      BonesUiModel,
      logger
    );
  }
}
