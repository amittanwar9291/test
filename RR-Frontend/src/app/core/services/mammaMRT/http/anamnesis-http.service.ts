import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AnamnesisMapper } from '@mappings/mammaMRT/anamnesis/anamnesis.mapper';

import { AnamnesisApi } from '@models/mammaMRT/api/anamnesis/anamnesis-api.model';
import { AnamnesisUi } from '@models/mammaMRT/ui/anamnesis/anamnesis-ui.model';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisHttpService extends BaseHttpService<AnamnesisApi, AnamnesisUi, AnamnesisMapper> {
  constructor(httpClient: HttpClient, mapper: AnamnesisMapper, public logger: LoggingService) {
    super(
      [AppConfig.mammaMrtConfig.localBaseURL, AppConfig.mammaMrtConfig.anamnesis],
      httpClient,
      mapper,
      AnamnesisApi,
      AnamnesisUi,
      logger
    );
  }
}
