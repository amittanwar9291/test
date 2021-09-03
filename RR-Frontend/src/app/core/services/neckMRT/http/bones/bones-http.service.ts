import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';
import { BonesApiModel } from '@models/neckMRT/api/bones/bones-api.model';
import { BonesUiModel } from '@models/neckMRT/ui/bones/bones-ui.model';
import { BonesMapper } from '@mappings/neckMRT/bones/bones.mapper';

@Injectable({
  providedIn: 'root'
})
export class BonesHttpService extends BaseHttpService<BonesApiModel, BonesUiModel, BonesMapper> {
  constructor(httpClient: HttpClient, mapper: BonesMapper, logger: LoggingService) {
    super(
      [AppConfig.neckMrtConfig.localBaseURL, AppConfig.neckMrtConfig.bones.http],
      httpClient,
      mapper,
      BonesApiModel,
      BonesUiModel,
      logger
    );
  }
}
