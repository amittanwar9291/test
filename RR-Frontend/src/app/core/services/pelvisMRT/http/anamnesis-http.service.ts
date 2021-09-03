import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { AnamnesisApiModel } from '@models/pelvisMRT/api/anamnesis/anamnesis-api.model';

import { AnamnesisUiModel } from '@models/pelvisMRT/ui/anamnesis/anamnesis-ui.model';
import { AnamnesisMapper } from '@mappings/pelvisMRT/anamnesis/anamnesis.mapper';

import { AppConfig } from 'app/app.config';
import { LoggingService } from '@services/shared/logging/logging.service';
import { Observable, of } from 'rxjs';
import { Guid } from '@models/shared/guid/guid';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisHttpService extends BaseHttpService<AnamnesisApiModel, AnamnesisUiModel, AnamnesisMapper> {
  constructor(httpClient: HttpClient, mapper: AnamnesisMapper, logger: LoggingService) {
    super(
      [AppConfig.pelvisMrtConfig.localBaseURL, AppConfig.pelvisMrtConfig.anamnesis],
      httpClient,
      mapper,
      AnamnesisApiModel,
      AnamnesisUiModel,
      logger
    );
  }
}
