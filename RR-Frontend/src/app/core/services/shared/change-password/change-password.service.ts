import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AppConfig } from '../../../../app.config';
import { NewPasswordRequest } from '@models/shared/login/new-password-request';
import { AuthResponse } from '@models/shared/login/auth-response';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {
  constructor(private httpClient: HttpClient) {}

  changePassword(request: NewPasswordRequest): Observable<AuthResponse> {
    return this.httpClient.put<AuthResponse>(AppConfig.settings.baseUrl + AppConfig.settings.users + '/changePassword', request);
  }

  setDefaultPassword(userId: string) {
    return this.httpClient.put(AppConfig.settings.baseUrl + AppConfig.settings.users + '/resetPassword', { userId });
  }
}
