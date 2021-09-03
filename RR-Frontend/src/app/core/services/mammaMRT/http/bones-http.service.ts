import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from 'app/app.config';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { BonesApiModel } from '@models/mammaMRT/api/bones/bones-api.model';
import { BonesUiModel } from '@models/mammaMRT/ui/bones/bones-ui.model';

import { LoggingService } from '@services/shared/logging/logging.service';

import { BonesMapper } from '@mappings/mammaMRT/bones/bones.mapper';

@Injectable({
  providedIn: 'root'
})
export class BonesHttpService extends BaseHttpService<BonesApiModel, BonesUiModel, BonesMapper> {
  constructor(httpClient: HttpClient, mapper: BonesMapper, logger: LoggingService) {
    super([AppConfig.mammaMrtConfig.localBaseURL, AppConfig.mammaMrtConfig.bones], httpClient, mapper, BonesApiModel, BonesUiModel, logger);
  }
}
