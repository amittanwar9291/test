import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { FindingBase } from '@models/shared/finding/finding.base';
import { HttpClient, HttpParams } from '@angular/common/http';
import { INoParamConstructor } from '@interfaces/no-param-constructor.interface';
import { LoggingService } from '@services/shared';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DifferentialDiagnosisPresetsBaseService<
  TModelAPI extends FindingBase,
  TModelUI extends FindingBase,
  TMapper extends IMapper<TModelAPI, TModelUI>
> extends BaseHttpService<TModelAPI, TModelUI, TMapper> {
  diagnosisWithPresets: string[];
  uiModelConstructor: INoParamConstructor<TModelUI>;
  lastUsedHttpParams: HttpParams;

  constructor(
    route: string | string[],
    httpClient: HttpClient,
    mapper: TMapper,
    apiModelConstructor: INoParamConstructor<TModelAPI>,
    uiModelConstructor: INoParamConstructor<TModelUI>,
    logger: LoggingService
  ) {
    super(route, httpClient, mapper, apiModelConstructor, uiModelConstructor, logger);
    this.uiModelConstructor = uiModelConstructor;
  }

  private getDiagnosisWithPresets(params: HttpParams): Observable<any> {
    return this.httpClient.get(this.route, { params });
  }

  getPreset(presetNam: string, params: HttpParams): Observable<FindingBase | FindingBase[]> {
    if (this.diagnosisWithPresets && this.areHttpParamsTheSame(params)) {
      return this.getPresetForSupportedDiagnosis(presetNam, this.diagnosisWithPresets, params);
    } else {
      this.lastUsedHttpParams = params;
      return this.getDiagnosisWithPresets(params).pipe(
        switchMap((response: string[]) => {
          this.diagnosisWithPresets = response;
          return this.getPresetForSupportedDiagnosis(presetNam, response, params);
        })
      );
    }
  }

  private getPresetForSupportedDiagnosis(
    presetName: string,
    supportedDiagnosis: string[],
    params: HttpParams
  ): Observable<FindingBase | FindingBase[]> {
    if (supportedDiagnosis.includes(presetName)) {
      return this.get(presetName, params);
    } else {
      return new Observable<FindingBase | FindingBase[]>(s => s.next(new this.uiModelConstructor()));
    }
  }

  areHttpParamsTheSame(params: HttpParams): boolean {
    const lastUsedParamsValues = this.lastUsedHttpParams
      .keys()
      .map(item => this.lastUsedHttpParams.get(item))
      .sort()
      .toString();
    const newParamsValues = params
      .keys()
      .map(item => params.get(item))
      .sort()
      .toString();
    return lastUsedParamsValues.length === newParamsValues.length && lastUsedParamsValues === newParamsValues;
  }
}
