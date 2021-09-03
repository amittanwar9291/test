import { Injectable } from '@angular/core';
import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { PatientApiModel } from '@models/shared/patient/patient-api.model';
import { PatientUiModel } from '@models/shared/patient/patient-ui.model';
import { PatientMapper } from '@mappings/shared/patient/patient.mapper';
import { AppConfig } from 'app/app.config';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '..';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PatientDataHttpService extends BaseHttpService<PatientApiModel, PatientUiModel, PatientMapper> {
  constructor(httpClient: HttpClient, mapper: PatientMapper, logger: LoggingService) {
    super(AppConfig.settings.patientManager, httpClient, mapper, PatientApiModel, PatientUiModel, logger);
  }

  public getBySubStringOfFirstName(subString: string): Observable<PatientUiModel[]> {
    return this.httpClient
      .get<PatientApiModel[]>(this.route + '/GetBySubStringOfFirstName/' + subString)
      .pipe(map((out: PatientApiModel[]) => out.map(p => this.adapter.adaptToUI(p))));
  }

  public getBySubStringOfLastName(subString: string): Observable<PatientUiModel[]> {
    return this.httpClient
      .get<PatientApiModel[]>(this.route + '/GetBySubStringOfLastName/' + subString)
      .pipe(map((out: PatientApiModel[]) => out.map(p => this.adapter.adaptToUI(p))));
  }
}
