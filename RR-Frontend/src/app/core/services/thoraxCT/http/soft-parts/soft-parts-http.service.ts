import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';

import { SoftPartsApiModel } from '@models/thoraxCT/api/soft-parts/soft-parts-api.model';
import { SoftPartsUiModel } from '@models/thoraxCT/ui/soft-parts/soft-parts-ui.model';

import { SoftPartsMapper } from '@mappings/thoraxCT/soft-parts/soft-parts.mapper';

@Injectable({
  providedIn: 'root'
})
export class SoftPartsHttpService extends BaseHttpService<SoftPartsApiModel, SoftPartsUiModel, SoftPartsMapper> {
  constructor(httpClient: HttpClient, mapper: SoftPartsMapper, logger: LoggingService) {
    super(
      [AppConfig.thoraxCtConfig.localBaseURL, AppConfig.thoraxCtConfig.softParts.http],
      httpClient,
      mapper,
      SoftPartsApiModel,
      SoftPartsUiModel,
      logger
    );
  }
}
