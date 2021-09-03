import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { BladderApiModel } from '@models/pelvisMRT/api/bladder/bladder-api.model';
import { BladderUiModel } from '@models/pelvisMRT/ui/bladder/bladder-ui.model';

import { BladderMapper } from '@mappings/pelvisMRT/bladder/bladder.mapper';

import { AppConfig } from 'app/app.config';
import { LoggingService } from '@services/shared/logging/logging.service';

@Injectable({
  providedIn: 'root'
})
export class BladderHttpService extends BaseHttpService<BladderApiModel, BladderUiModel, BladderMapper> {
  constructor(httpClient: HttpClient, mapper: BladderMapper, logger: LoggingService) {
    super(
      [AppConfig.pelvisMrtConfig.localBaseURL, AppConfig.pelvisMrtConfig.bladder.http],
      httpClient,
      mapper,
      BladderApiModel,
      BladderUiModel,
      logger
    );
  }
}
