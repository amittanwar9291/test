import { Injectable } from '@angular/core';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { HttpClient } from '@angular/common/http';

import { AnamnesisApiModel } from '@models/hipMRT/api/anamnesis/anamnesis-api.model';
import { AnamnesisUiModel } from '@models/hipMRT/ui/anamnesis/anamnesis-ui.model';

import { AnamnesisMapper } from '@mappings/hipMRT/anamnesis/anamnesis.mapper';

import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisHttpService extends BaseHttpService<AnamnesisApiModel, AnamnesisUiModel, AnamnesisMapper> {
  constructor(httpClient: HttpClient, mapper: AnamnesisMapper, logger: LoggingService) {
    super(
      [AppConfig.hipMrtConfig.localBaseURL, AppConfig.hipMrtConfig.anamnesis],
      httpClient,
      mapper,
      AnamnesisApiModel,
      AnamnesisUiModel,
      logger
    );
  }
}
