import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { LoggingService } from '@services/shared';
import { AppConfig } from 'app/app.config';
import { AnamnesisApiModel } from '@models/abdomenMRT/api/anamnesis/anamnesis-api.model';
import { AnamnesisUiModel } from '@models/abdomenMRT/ui/anamnesis/anamnesis-ui.model';
import { AnamnesisMapper } from '@mappings/abdomenMRT/anamnesis/anamnesis.mapper';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisHttpService extends BaseHttpService<AnamnesisApiModel, AnamnesisUiModel, AnamnesisMapper> {
  constructor(httpClient: HttpClient, mapper: AnamnesisMapper, logger: LoggingService) {
    super(
      [AppConfig.abdomenMRTConfig.localBaseURL, AppConfig.abdomenMRTConfig.anamnesis],
      httpClient,
      mapper,
      AnamnesisApiModel,
      AnamnesisUiModel,
      logger
    );
  }
}
