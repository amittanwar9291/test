import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AppConfig } from 'app/app.config';
import { LoggingService } from '@services/shared/logging/logging.service';
import { BonesUiModel } from '@models/pelvisMRT/ui/bones/bones-ui.model';
import { BonesApiModel } from '@models/pelvisMRT/api/bones/bones-api.model';
import { BonesMapper } from '@mappings/pelvisMRT/bones/bones.mapper';

@Injectable({
  providedIn: 'root'
})
export class BonesHttpService extends BaseHttpService<BonesApiModel, BonesUiModel, BonesMapper> {
  constructor(httpClient: HttpClient, mapper: BonesMapper, logger: LoggingService) {
    super(
      [AppConfig.pelvisMrtConfig.localBaseURL, AppConfig.pelvisMrtConfig.bones.http],
      httpClient,
      mapper,
      BonesApiModel,
      BonesUiModel,
      logger
    );
  }
}
