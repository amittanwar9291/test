import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AnamnesisMapper } from '@mappings/spineMRT/anamnesis/anamnesis.mapper';

import { AnamnesisApiModel } from '@models/spineMRT/api/anamnesis/anamnesis-api.model';
import { AnamnesisUiModel } from '@models/spineMRT/ui/anamnesis/anamnesis-ui.model';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { Observable, of } from 'rxjs';

import { AppConfig } from 'app/app.config';

import { LoggingService } from '@services/shared/logging/logging.service';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisHttpService extends BaseHttpService<AnamnesisApiModel, AnamnesisUiModel, AnamnesisMapper> {
  constructor(httpClient: HttpClient, mapper: AnamnesisMapper, logger: LoggingService) {
    super(
      [AppConfig.spineMrtConfig.localBaseURL, AppConfig.spineMrtConfig.anamnesis],
      httpClient,
      mapper,
      AnamnesisApiModel,
      AnamnesisUiModel,
      logger
    );
  }
}
