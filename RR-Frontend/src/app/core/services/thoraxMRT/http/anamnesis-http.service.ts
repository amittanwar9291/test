import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';
import { AnamnesisApiModel } from '@models/thoraxMRT/api/anamnesis/anamnesis-api.model';
import { AnamnesisUiModel } from '@models/thoraxMRT/ui/anamnesis/anamnesis-ui.model';
import { AnamnesisMapper } from '@mappings/thoraxMRT/anamnesis/anamnesis.mapper';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisHttpService extends BaseHttpService<AnamnesisApiModel, AnamnesisUiModel, AnamnesisMapper> {
  constructor(httpClient: HttpClient, mapper: AnamnesisMapper, logger: LoggingService) {
    super(
      [AppConfig.thoraxMrtConfig.localBaseURL, AppConfig.thoraxMrtConfig.anamnesis],
      httpClient,
      mapper,
      AnamnesisApiModel,
      AnamnesisUiModel,
      logger
    );
  }
}
