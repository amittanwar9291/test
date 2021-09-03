import { Injectable } from '@angular/core';
import { AppConfig } from 'app/app.config';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { HttpClient } from '@angular/common/http';

import { LoggingService } from '@services/shared/logging/logging.service';

import { BonesApiModel } from '@models/handMRT/api/bones/bones-api.model';
import { BonesUiModel } from '@models/handMRT/ui/bones/bones-ui.model';
import { BonesMapper } from '@mappings/handMRT/bones/bones-mapper';

@Injectable({
  providedIn: 'root'
})
export class BonesHttpService extends BaseHttpService<BonesApiModel, BonesUiModel, BonesMapper> {
  constructor(httpClient: HttpClient, mapper: BonesMapper, logger: LoggingService) {
    super(
      [AppConfig.handMrtConfig.localBaseURL, AppConfig.handMrtConfig.bones.http],
      httpClient,
      mapper,
      BonesApiModel,
      BonesUiModel,
      logger
    );
  }
}
