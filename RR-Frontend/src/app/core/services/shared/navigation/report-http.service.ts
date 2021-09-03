import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { lowerFirst } from 'lodash';

import { ReportApiModel, ReportUiModel } from '@models/shared/report';
import { ReportPatientApiModel } from '@models/shared/report/report-patient-api.model';
import { ReportPatientUiModel } from '@models/shared/report/report-patient-ui.model';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { LoggingService } from '@services/shared';

import { ReportMapper } from '@mappings/shared/report/report.mapper';
import { ReportPatientMapper } from '@mappings/shared/report/report-patient.mapper';
import { AppConfig } from '../../../../app.config';
import { IModuleConfigBase } from '@interfaces/configs';
import { ReportStatus } from '@enums/shared/report-status.enum';

@Injectable({
  providedIn: 'root'
})
export class ReportHttpService extends BaseHttpService<ReportApiModel, ReportUiModel, ReportMapper> {
  constructor(http: HttpClient, mapper: ReportMapper, logger: LoggingService, private reportPatientMapper: ReportPatientMapper) {
    super('', http, mapper, ReportApiModel, ReportUiModel, logger);
  }

  public getWithPatient(id: any): Observable<ReportPatientUiModel> {
    return this.httpClient
      .get<ReportPatientApiModel>(this.route + '/GetWithPatient/' + id)
      .pipe(map((out: ReportPatientApiModel) => this.reportPatientMapper.mapToUI(out)));
  }

  public markAsModified(reportId: any, pageId: any): Observable<any> {
    return this.httpClient.put<void>(this.route + '/MarkPageAsModified/?reportId=' + reportId + '&pageId=' + pageId, null);
  }

  setRoute(baseUrl: string, inRoute = ''): void {
    this.route = baseUrl + (inRoute ? '/' + inRoute : '');
  }

  createReport(report: ReportUiModel): Observable<ReportUiModel> {
    const moduleConfig = AppConfig.settings.servicesUrls[lowerFirst(report.examinationType)] as IModuleConfigBase;
    if (!moduleConfig) {
      return throwError(new Error('No module config found for type ' + report.examinationType));
    }

    const url = `${moduleConfig.localBaseURL}/${moduleConfig.report}`;
    const modelAPI = this.adapter.adaptToAPI(report);

    return this.httpClient.post<ReportApiModel>(url, modelAPI).pipe(map(out => this.adapter.adaptToUI(out)));
  }

  updateStatus(reportId: string, examinationType: string, status: ReportStatus): Observable<ReportUiModel> {
    const moduleConfig = AppConfig.settings.servicesUrls[lowerFirst(examinationType)] as IModuleConfigBase;
    if (!moduleConfig) {
      return throwError(new Error('No module config found for type ' + examinationType));
    }

    const url = `${moduleConfig.localBaseURL}/${moduleConfig.report}/${reportId}/${status}`;

    return this.httpClient.post<ReportApiModel>(url, null).pipe(map(out => this.adapter.adaptToUI(out)));
  }
}
