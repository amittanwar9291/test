import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from 'app/app.config';
import { Observable } from 'rxjs';
import { IRequestResponse } from '@interfaces/request-response.interface';
import { ConfigurationStorageService } from '@services/shared/configuration-storage/configuration-storage.service';

@Injectable({
  providedIn: 'root'
})
export class InstituteHttpService {
  constructor(private http: HttpClient, private configStorageService: ConfigurationStorageService) {}

  get baseUrl() {
    return `${AppConfig.settings.baseUrl}/${AppConfig.settings.instituteManager.institutes}`;
  }

  getInstituteLogo(): Observable<IRequestResponse> {
    return this.http.get<any>(`${this.baseUrl}/GetInstituteLogo`);
  }

  uploadInstituteLogo(image): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/UploadInstituteLogo`, {
      fileformat: 0,
      content: image
    });
  }

  deleteInstituteLogo(): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/DeleteInstituteLogo`);
  }

  getInstituteToken(): Observable<IRequestResponse> {
    return this.http.get<any>(`${this.baseUrl}/GetInstituteToken`);
  }

  createInstituteToken(): Observable<IRequestResponse> {
    return this.http.put<any>(`${this.baseUrl}/CreateInstituteToken`, null);
  }

  getInstitute(): Observable<IRequestResponse> {
    const instituteId = this.configStorageService.getInstituteId() || AppConfig.settings.instituteId;
    if (!instituteId) {
      throw Error('No institute id available');
    }

    return this.http.get<any>(`${this.baseUrl}/${instituteId}`);
  }

  getAvailableModules(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/GetAvailableModules`);
  }
}
