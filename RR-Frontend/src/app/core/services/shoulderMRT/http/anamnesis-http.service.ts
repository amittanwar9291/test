import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AnamnesisMapper } from '@mappings/shoulderMRT/anamnesis.mapper';

import { AnamnesisApi } from '@models/shoulderMRT/api/anamnesis/anamnesis-api.model';
import { AnamnesisUI } from '@models/shoulderMRT/ui/anamnesis/anamnesis-ui.model';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AppConfig } from 'app/app.config';
import { LoggingService } from '@services/shared/logging/logging.service';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisHttpService extends BaseHttpService<AnamnesisApi, AnamnesisUI, AnamnesisMapper> {
  constructor(httpClient: HttpClient, mapper: AnamnesisMapper, logger: LoggingService) {
    super(
      [AppConfig.shoulderMrtConfig.localBaseURL, AppConfig.shoulderMrtConfig.anamnesis],
      httpClient,
      mapper,
      AnamnesisApi,
      AnamnesisUI,
      logger
    );
  }
}
