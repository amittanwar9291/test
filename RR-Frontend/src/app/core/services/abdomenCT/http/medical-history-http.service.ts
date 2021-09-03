import { Injectable } from '@angular/core';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from 'app/app.config';
import { MedicalHistoryMapper } from '@mappings/abdomenCT/medical-history/medical-history.mapper';
import { MedicalHistoryUiModel } from '@models/abdomenCT/ui/medical-history/medical-history-ui.model';
import { MedicalHistoryApiModel } from '@models/abdomenCT/api/medical-history/medical-history-api.model';

@Injectable({
  providedIn: 'root'
})
export class MedicalHistoryHttpService extends BaseHttpService<MedicalHistoryApiModel, MedicalHistoryUiModel, MedicalHistoryMapper> {
  constructor(httpClient: HttpClient, mapper: MedicalHistoryMapper, logger: LoggingService) {
    super(
      [AppConfig.abdomenCtConfig.localBaseURL, AppConfig.abdomenCtConfig.medicalHistory],
      httpClient,
      mapper,
      MedicalHistoryApiModel,
      MedicalHistoryUiModel,
      logger
    );
  }
}
