import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AppConfig } from '../../../../app.config';
import { IModuleConfigBase } from '@interfaces/configs';
import { IRequestResponse } from '@interfaces/request-response.interface';
import { IImportReportRequest } from '@interfaces/import-report-request.interface';
import { ICheckExistingImportData } from '@interfaces/check-existing-import-data.interface';
import { ICheckExistingImportResponse } from '@interfaces/check-existing-import-response.interface';

@Injectable({
  providedIn: 'root'
})
export class ImportReportHttpService {
  constructor(private httpClient: HttpClient) {}

  checkExistingImport(checkData: ICheckExistingImportData): Observable<ICheckExistingImportResponse> {
    const url = `${AppConfig.settings.baseUrl}/${AppConfig.settings.importInterface}/CheckExistingImport`;
    const params = new HttpParams()
      .append('studyInstanceUid', checkData.studyInstanceUid)
      .append('accessionNumber', checkData.accessionNumber);

    return this.httpClient.get<ICheckExistingImportResponse>(url, { params });
  }

  getDicomMap(module: string): Observable<IRequestResponse> {
    const url = `${AppConfig.settings.baseUrl}/${AppConfig.settings.instituteManager.settings}/GetDicomMap/${module}`;

    return this.httpClient.get<IRequestResponse>(url);
  }

  importReport(request: IImportReportRequest): Observable<IRequestResponse> {
    const moduleConfig = AppConfig.settings.servicesUrls[request.moduleName] as IModuleConfigBase;
    const url = `${moduleConfig.localBaseURL}/${moduleConfig.report}/ImportReport`;

    return this.httpClient.post<IRequestResponse>(url, request);
  }
}
