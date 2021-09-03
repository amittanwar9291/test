import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BonesMapper } from '@mappings/spineMRT/bones/bones.mapper';

import { BonesApiModel } from '@models/spineMRT/api/bones/bones-api.model';
import { BonesUiModel } from '@models/spineMRT/ui/bones/bones-ui.model';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AppConfig } from 'app/app.config';
import { LoggingService } from '@services/shared/logging/logging.service';

@Injectable({
  providedIn: 'root'
})
export class BonesHttpService extends BaseHttpService<BonesApiModel, BonesUiModel, BonesMapper> {
  constructor(httpClient: HttpClient, mapper: BonesMapper, logger: LoggingService) {
    super(
      [AppConfig.spineMrtConfig.localBaseURL, AppConfig.spineMrtConfig.bones.http],
      httpClient,
      mapper,
      BonesApiModel,
      BonesUiModel,
      logger
    );
  }
}
