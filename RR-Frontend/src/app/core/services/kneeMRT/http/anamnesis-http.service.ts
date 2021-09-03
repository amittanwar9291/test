import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AnamnesisMapper } from '@mappings/kneeMRT/anamnesis/anamnesis.mapper';

import { AnamnesisApiModel } from '@models/kneeMRT/api/anamnesis/anamnesis-api.model';
import { AnamnesisUiModel } from '@models/kneeMRT/ui/anamnesis/anamnesis-ui.model';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { of, Observable } from 'rxjs';

import { AppConfig } from 'app/app.config';
import { LoggingService } from '@services/shared/logging/logging.service';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisHttpService extends BaseHttpService<AnamnesisApiModel, AnamnesisUiModel, AnamnesisMapper> {
  constructor(httpClient: HttpClient, mapper: AnamnesisMapper, logger: LoggingService) {
    super(
      [AppConfig.kneeMrtConfig.localBaseURL, AppConfig.kneeMrtConfig.anamnesis],
      httpClient,
      mapper,
      AnamnesisApiModel,
      AnamnesisUiModel,
      logger
    );
  }
}
