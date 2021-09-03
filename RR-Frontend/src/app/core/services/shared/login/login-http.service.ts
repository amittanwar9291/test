import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AppConfig } from '../../../../app.config';
import { LoginRequest } from '@models/shared/login/login-request';

@Injectable({
  providedIn: 'root'
})
export class LoginHttpService {
  constructor(private httpClient: HttpClient) {}

  sendCredentials(request: LoginRequest): Observable<any> {
    return this.httpClient.post(AppConfig.settings.baseUrl + AppConfig.settings.auth.signIn, request);
  }

  refreshToken(rememberMe: boolean): Observable<any> {
    const params = rememberMe ? new HttpParams().append('rememberMe', 'true') : null;
    return this.httpClient.post(AppConfig.settings.baseUrl + AppConfig.settings.auth.refreshToken, null, { params });
  }

  loginWithClientToken(): Observable<any> {
    return this.httpClient.post(AppConfig.settings.baseUrl + AppConfig.settings.auth.clientToken, null);
  }
}
