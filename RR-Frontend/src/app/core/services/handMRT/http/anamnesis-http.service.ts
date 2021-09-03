import { Injectable } from '@angular/core';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AnamnesisApiModel } from '@models/handMRT/api/anamnesis/anamnesis-api.model';
import { AnamnesisUiModel } from '@models/handMRT/ui/anamnesis/anamnesis-ui.model';

import { AnamnesisMapper } from '@mappings/handMRT/anamnesis/anamnesis.mapper';

import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisHttpService extends BaseHttpService<AnamnesisApiModel, AnamnesisUiModel, AnamnesisMapper> {
  constructor(httpClient: HttpClient, mapper: AnamnesisMapper, logger: LoggingService) {
    super(
      [AppConfig.handMrtConfig.localBaseURL, AppConfig.handMrtConfig.anamnesis],
      httpClient,
      mapper,
      AnamnesisApiModel,
      AnamnesisUiModel,
      logger
    );
  }
}
