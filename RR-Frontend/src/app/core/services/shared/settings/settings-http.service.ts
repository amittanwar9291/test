import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppConfig } from '../../../../app.config';
import { Observable } from 'rxjs';
import { IRequestResponse } from '@interfaces/request-response.interface';
import { DicomMapApiModel } from '@models/shared/settings/dicom-map-api.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsHttpService {
  constructor(private http: HttpClient) {}

  get baseUrl() {
    return `${AppConfig.settings.baseUrl}/${AppConfig.settings.instituteManager.settings}`;
  }

  uploadInstituteToken(token): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/Initialize`, token);
  }

  getDicomMap(moduleName: string): Observable<IRequestResponse> {
    const params = new HttpParams().append('includeUniversal', 'false');

    return this.http.get<any>(`${this.baseUrl}/GetDicomMap/${moduleName}`, { params });
  }

  setDicomMap(moduleData: DicomMapApiModel): Observable<IRequestResponse> {
    return this.http.post<any>(`${this.baseUrl}/SetDicomMap`, moduleData);
  }
}
