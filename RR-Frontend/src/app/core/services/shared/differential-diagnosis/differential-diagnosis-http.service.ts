import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CustomTranslateService } from '@services/shared';

import { DifferentialDiagnosisMapper } from '@mappings/shared/differential-diagnosis/differential-diagnosis.mapper';

import { DifferentialDiagnosisUiModel } from '@models/shared/differential-diagnosis/differential-diagnosis-ui.model';
import { DifferentialDiagnosisApiModel } from '@models/shared/differential-diagnosis/differential-diagnosis-api.model';

import { AppConfig } from 'app/app.config';

@Injectable({
  providedIn: 'root'
})
export class DifferentialDiagnosisHttpService {
  constructor(private httpClient: HttpClient, private mapper: DifferentialDiagnosisMapper, private translate: CustomTranslateService) {}

  public getCollection(subRoute: string): Observable<DifferentialDiagnosisUiModel[]> {
    let languageCode = this.translate.language.getValue();

    if (languageCode === 'de') {
      languageCode = 'de-DE';
    }

    const params = new HttpParams().set('languageCode', languageCode);

    return this.httpClient
      .get<DifferentialDiagnosisApiModel[]>(AppConfig.settings.baseUrl + '/' + subRoute + '/GetDiagnosisList', { params })
      .pipe(
        map((out: DifferentialDiagnosisApiModel[]) => {
          const result: DifferentialDiagnosisUiModel[] = [];

          out.forEach((item: DifferentialDiagnosisApiModel) => result.push(this.mapper.mapToUI(item, new DifferentialDiagnosisUiModel())));

          return result.sort((previous, current) => (previous.orderNumber > current.orderNumber ? 1 : -1));
        })
      );
  }
}
