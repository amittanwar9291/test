import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { KneeBonesMapper } from '@mappings/kneeMRT/bones/knee-bones.mapper';

import { KneeBonesApiModel } from '@models/kneeMRT/api/bones/knee-bones-api.model';
import { KneeBonesUiModel } from '@models/kneeMRT/ui/bones/knee-bones-ui.model';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AppConfig } from 'app/app.config';

import { LoggingService } from '@services/shared/logging/logging.service';

@Injectable({
  providedIn: 'root'
})
export class BonesHttpService extends BaseHttpService<KneeBonesApiModel, KneeBonesUiModel, KneeBonesMapper> {
  constructor(httpClient: HttpClient, mapper: KneeBonesMapper, logger: LoggingService) {
    super(
      [AppConfig.kneeMrtConfig.localBaseURL, AppConfig.kneeMrtConfig.bones.http],
      httpClient,
      mapper,
      KneeBonesApiModel,
      KneeBonesUiModel,
      logger
    );
  }
}
