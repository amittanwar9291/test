import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AnamnesisApiModel } from '@models/feetMRT/api/anamnesis/anamnesis-api.model';
import { AnamnesisUiModel } from '@models/feetMRT/ui/anamnesis/anamnesis-ui.model';

import { AnamnesisMapper } from '@mappings/feetMRT/anamnesis/anamnesis.mapper';

import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisHttpService extends BaseHttpService<AnamnesisApiModel, AnamnesisUiModel, AnamnesisMapper> {
  constructor(httpClient: HttpClient, mapper: AnamnesisMapper, logger: LoggingService) {
    super(
      [AppConfig.feetMrtConfig.localBaseURL, AppConfig.feetMrtConfig.anamnesis],
      httpClient,
      mapper,
      AnamnesisApiModel,
      AnamnesisUiModel,
      logger
    );
  }
}
