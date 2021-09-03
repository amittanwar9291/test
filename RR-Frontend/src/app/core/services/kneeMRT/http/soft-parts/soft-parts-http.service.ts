import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SoftPartsMapper } from '@mappings/kneeMRT/soft-parts/soft-parts.mapper';

import { SoftPartsApiModel } from '@models/kneeMRT/api/soft-parts/soft-parts-api.model';
import { SoftPartsUiModel } from '@models/kneeMRT/ui/soft-parts/soft-parts-ui.model';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AppConfig } from 'app/app.config';

import { LoggingService } from '@services/shared/logging/logging.service';

@Injectable({
  providedIn: 'root'
})
export class SoftPartsHttpService extends BaseHttpService<SoftPartsApiModel, SoftPartsUiModel, SoftPartsMapper> {
  constructor(httpClient: HttpClient, mapper: SoftPartsMapper, logger: LoggingService) {
    super(
      [AppConfig.kneeMrtConfig.localBaseURL, AppConfig.kneeMrtConfig.softParts.http],
      httpClient,
      mapper,
      SoftPartsApiModel,
      SoftPartsUiModel,
      logger
    );
  }
}
