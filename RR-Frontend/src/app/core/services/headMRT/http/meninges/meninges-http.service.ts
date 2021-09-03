import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { MeningesApiModel } from '@models/headMRT/api/meninges/meninges-api.model';
import { MeningesUiModel } from '@models/headMRT/ui/meninges/meninges-ui.model';
import { MeningesMapper } from '@mappings/headMRT/meninges/meninges.mapper';

import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';

@Injectable({
  providedIn: 'root'
})
export class MeningesHttpService extends BaseHttpService<MeningesApiModel, MeningesUiModel, MeningesMapper> {
  constructor(httpClient: HttpClient, mapper: MeningesMapper, logger: LoggingService) {
    super(
      [AppConfig.headMrtConfig.localBaseURL, AppConfig.headMrtConfig.meninges.http],
      httpClient,
      mapper,
      MeningesApiModel,
      MeningesUiModel,
      logger
    );
  }
}
