import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';
import { PleuraApiModel } from '@models/thoraxMRT/api/pleura/pleura-api.model';
import { PleuraUiModel } from '@models/thoraxMRT/ui/pleura/pleura-ui.model';
import { PleuraMapper } from '@mappings/thoraxMRT/pleura/pleura.mapper';

@Injectable({
  providedIn: 'root'
})
export class PleuraHttpService extends BaseHttpService<PleuraApiModel, PleuraUiModel, PleuraMapper> {
  constructor(httpClient: HttpClient, mapper: PleuraMapper, logger: LoggingService) {
    super(
      [AppConfig.thoraxMrtConfig.localBaseURL, AppConfig.thoraxMrtConfig.pleura.http],
      httpClient,
      mapper,
      PleuraApiModel,
      PleuraUiModel,
      logger
    );
  }
}
