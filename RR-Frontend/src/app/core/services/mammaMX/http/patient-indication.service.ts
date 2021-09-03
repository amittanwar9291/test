import { Injectable } from '@angular/core';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoggingService } from '@services/shared';
import { AppConfig } from 'app/app.config';
import { PatientIndicationApiModel } from '@models/mammaMX/api/patient-indication/patient-indication-api.model';
import { PatientIndicationUiModel } from '@models/mammaMX/ui/patient-indication/patient-indication-ui.model';
import { PatientIndicationMapper } from '@mappings/mammaMX/patient-indication/patient-indication.mapper';
import { Observable } from 'rxjs/internal/Observable';

import { of } from 'rxjs/internal/observable/of';
import { Guid } from '@models/shared/guid/guid';

@Injectable({
  providedIn: 'root'
})
export class PatientIndicationService extends BaseHttpService<
  PatientIndicationApiModel,
  PatientIndicationUiModel,
  PatientIndicationMapper
> {
  constructor(httpClient: HttpClient, mapper: PatientIndicationMapper, logger: LoggingService) {
    super(
      [AppConfig.mammaMxConfig.localBaseURL, AppConfig.mammaMxConfig.patientIndication],
      httpClient,
      mapper,
      PatientIndicationApiModel,
      PatientIndicationUiModel,
      logger
    );
  }
}
