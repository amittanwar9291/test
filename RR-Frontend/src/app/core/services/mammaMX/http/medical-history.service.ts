import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoggingService } from '@services/shared';

import { AppConfig } from 'app/app.config';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { MedicalHistoryMapper } from '@mappings/mammaMX/medical-history/medical-history.mapper';

import { MedicalHistoryApiModel } from '@models/mammaMX/api/medical-history/medical-history-api.model';
import { MedicalHistoryUiModel } from '@models/mammaMX/ui/medical-history/medical-history-ui.model';

@Injectable({
  providedIn: 'root'
})
export class MedicalHistoryService extends BaseHttpService<MedicalHistoryApiModel, MedicalHistoryUiModel, MedicalHistoryMapper> {
  constructor(httpClient: HttpClient, mapper: MedicalHistoryMapper, logger: LoggingService) {
    super(
      [AppConfig.mammaMxConfig.localBaseURL, AppConfig.mammaMxConfig.medicalHistory],
      httpClient,
      mapper,
      MedicalHistoryApiModel,
      MedicalHistoryUiModel,
      logger
    );
  }
}
