import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AnamnesisApiModel } from '@models/angiographyCT/api/anamnesis/anamnesis-api.model';
import { AnamnesisUiModel } from '@models/angiographyCT/ui/anamnesis/anamnesis-ui.model';
import { AnamnesisMapper } from '@mappings/angiographyCT/anamnesis/anamnesis.mapper';

import { LoggingService } from '@services/shared';

import { AppConfig } from '../../../../app.config';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisHttpService extends BaseHttpService<AnamnesisApiModel, AnamnesisUiModel, AnamnesisMapper> {
  constructor(httpClient: HttpClient, mapper: AnamnesisMapper, logger: LoggingService) {
    super(
      [AppConfig.angiographyCtConfig.localBaseURL, AppConfig.angiographyCtConfig.anamnesis],
      httpClient,
      mapper,
      AnamnesisApiModel,
      AnamnesisUiModel,
      logger
    );
  }
}
