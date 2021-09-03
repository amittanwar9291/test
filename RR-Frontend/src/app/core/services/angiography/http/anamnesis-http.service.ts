import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AnamnesisMapper } from '@mappings/angiographyMRT/anamnesis/anamnesis.mapper';

import { AnamnesisApiModel } from '@models/angiographyMRT/api/anamnesis/anamnesis-api.model';
import { AnamnesisUiModel } from '@models/angiographyMRT/ui/anamnesis/anamnesis-ui.model';

import { LoggingService } from '@services/shared';

import { AppConfig } from '../../../../app.config';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisHttpService extends BaseHttpService<AnamnesisApiModel, AnamnesisUiModel, AnamnesisMapper> {
  constructor(httpClient: HttpClient, mapper: AnamnesisMapper, logger: LoggingService) {
    super(
      [AppConfig.angiographyMrtConfig.localBaseURL, AppConfig.angiographyMrtConfig.anamnesis],
      httpClient,
      mapper,
      AnamnesisApiModel,
      AnamnesisUiModel,
      logger
    );
  }
}
