import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { DiagnosisApiModel } from '@models/mammaMRT/api/diagnosis/diagnosis-api.model';
import { DiagnosisUiModel } from '@models/mammaMRT/ui/diagnosis/diagnosis-ui.model';

import { DiagnosisMapper } from '@mappings/mammaMRT/diagnosis/diagnosis.mapper';

import { LoggingService } from '@services/shared/logging/logging.service';

import { AppConfig } from 'app/app.config';

@Injectable({
  providedIn: 'root'
})
export class DiagnosisHttpService extends BaseHttpService<DiagnosisApiModel, DiagnosisUiModel, DiagnosisMapper> {
  constructor(httpClient: HttpClient, mapper: DiagnosisMapper, logger: LoggingService) {
    super(
      [AppConfig.mammaMrtConfig.localBaseURL, AppConfig.mammaMrtConfig.diagnosis.http],
      httpClient,
      mapper,
      DiagnosisApiModel,
      DiagnosisUiModel,
      logger
    );
  }
}
