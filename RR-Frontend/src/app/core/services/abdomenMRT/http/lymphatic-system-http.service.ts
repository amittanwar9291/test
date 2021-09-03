import { Injectable } from '@angular/core';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from '../../../../app.config';
import { LymphaticSystemApiModel } from '@models/abdomenMRT/api/lymphatic-system/lymphatic-system-api.model';
import { LymphaticSystemUiModel } from '@models/abdomenMRT/ui/lymphatic-system/lymphatic-system-ui.model';
import { LymphaticSystemMapper } from '@mappings/abdomenMRT/lymphatic-system/lymphatic-system.mapper';

@Injectable({
  providedIn: 'root'
})
export class LymphaticSystemHttpService extends BaseHttpService<LymphaticSystemApiModel, LymphaticSystemUiModel, LymphaticSystemMapper> {
  constructor(httpClient: HttpClient, mapper: LymphaticSystemMapper, logger: LoggingService) {
    super(
      [AppConfig.abdomenMRTConfig.localBaseURL, AppConfig.abdomenMRTConfig.lymphaticSystem.http],
      httpClient,
      mapper,
      LymphaticSystemApiModel,
      LymphaticSystemUiModel,
      logger
    );
  }
}
