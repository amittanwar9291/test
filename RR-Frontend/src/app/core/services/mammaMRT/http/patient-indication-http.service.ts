import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from 'app/app.config';

import { MammaMRTPatientIndicationMapper } from '@mappings/mammaMRT';

import { PatientIndicationApiModel } from '@models/mammaMRT/api/patient-indication/patient-indication-api.model';
import { PatientIndicationUiModel } from '@models/mammaMRT/ui/patient-indication/patient-indication-ui.model';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { LoggingService } from '@services/shared/logging/logging.service';

@Injectable({
  providedIn: 'root'
})
export class PatientIndicationHttpService extends BaseHttpService<
  PatientIndicationApiModel,
  PatientIndicationUiModel,
  MammaMRTPatientIndicationMapper
> {
  constructor(httpClient: HttpClient, mapper: MammaMRTPatientIndicationMapper, public logger: LoggingService) {
    super(
      [AppConfig.mammaMrtConfig.localBaseURL, AppConfig.mammaMrtConfig.patientIndication],
      httpClient,
      mapper,
      PatientIndicationApiModel,
      PatientIndicationUiModel,
      logger
    );
  }
}
