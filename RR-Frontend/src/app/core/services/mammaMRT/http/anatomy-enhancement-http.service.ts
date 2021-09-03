import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AnatomyEnhancementUi } from '@models/mammaMRT/ui/anatomy-enhancement/anatomy-enhancement-ui.model';
import { AnatomyEnhancementApi } from '@models/mammaMRT/api/anatomy-enhancement/anatomy-enhancement-api.model';

import { AnatomyEnhancementMapper } from '@mappings/mammaMRT/anatomy-enhancement/anatomy-enhancement.mapper';

import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';

@Injectable({
  providedIn: 'root'
})
export class AnatomyEnhancementHttpService extends BaseHttpService<AnatomyEnhancementApi, AnatomyEnhancementUi, AnatomyEnhancementMapper> {
  constructor(httpClient: HttpClient, mapper: AnatomyEnhancementMapper, logger: LoggingService) {
    super(
      [AppConfig.mammaMrtConfig.localBaseURL, AppConfig.mammaMrtConfig.anatomyEnhancement],
      httpClient,
      mapper,
      AnatomyEnhancementApi,
      AnatomyEnhancementUi,
      logger
    );
  }
}
