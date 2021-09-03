import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { SoftPartsApiModel } from '@models/shoulderMRT/api/soft-parts/soft-parts-api.model';
import { SoftPartsUiModel } from '@models/shoulderMRT/ui/soft-parts/soft-parts-ui.model';

import { SoftPartsMapper } from '@mappings/shoulderMRT/soft-parts/soft-parts.mapper';

import { AppConfig } from 'app/app.config';

import { LoggingService } from '@services/shared/logging/logging.service';

@Injectable({
  providedIn: 'root'
})
export class SoftPartsHttpService extends BaseHttpService<SoftPartsApiModel, SoftPartsUiModel, SoftPartsMapper> {
  constructor(httpClient: HttpClient, mapper: SoftPartsMapper, logger: LoggingService) {
    super(
      [AppConfig.shoulderMrtConfig.localBaseURL, AppConfig.shoulderMrtConfig.softParts],
      httpClient,
      mapper,
      SoftPartsApiModel,
      SoftPartsUiModel,
      logger
    );
  }
}
