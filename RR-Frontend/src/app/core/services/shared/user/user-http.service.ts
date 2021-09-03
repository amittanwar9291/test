import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AppConfig } from '../../../../app.config';
import { UserModel } from '@models/shared/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {
  constructor(private http: HttpClient) {}

  /**
   * Sends an UPDATE request to activate/deactivate user,
   * depending on provided switch type.
   * @param id UserModel id.
   * @param switchStatus Switch type, available types: @example ['Activate', 'Deactivate']
   */
  putStatus(id: string, switchStatus: string): Observable<any> {
    const statusRoute = AppConfig.settings.baseUrl + AppConfig.settings.users + '/' + switchStatus + '/' + id;
    return this.http.put(statusRoute, null);
  }

  getUsersList(): Observable<any> {
    return this.http.get(AppConfig.settings.baseUrl + AppConfig.settings.users);
  }

  getUserById(userId: string): Observable<any> {
    return this.http.get(AppConfig.settings.baseUrl + AppConfig.settings.users + '/' + userId);
  }

  getEditingUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(AppConfig.settings.baseUrl + AppConfig.settings.users + '/Editing');
  }

  createNewUser(user: UserModel): Observable<any> {
    return this.http.post(AppConfig.settings.baseUrl + AppConfig.settings.users, user);
  }

  updateUser(user: UserModel): Observable<any> {
    return this.http.put(AppConfig.settings.baseUrl + AppConfig.settings.users, user);
  }
}
