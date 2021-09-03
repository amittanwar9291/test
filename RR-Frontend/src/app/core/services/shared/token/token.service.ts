import { Injectable } from '@angular/core';
import { AuthResponse } from '@models/shared/login/auth-response';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor() {}

  setTokenInStorage(token: AuthResponse) {
    sessionStorage.setItem('token', JSON.stringify(token));
    if (token.clientToken) {
      localStorage.setItem('clientToken', JSON.stringify(token.clientToken));
    } else {
      this.removeClientToken();
    }
  }

  getTokenFromStorage(): AuthResponse {
    return JSON.parse(sessionStorage.getItem('token'));
  }

  getClientToken() {
    return JSON.parse(localStorage.getItem('clientToken'));
  }

  hasClientToken() {
    return !!localStorage.getItem('clientToken');
  }

  clearTokenInStorage() {
    sessionStorage.removeItem('token');
  }

  removeClientToken() {
    localStorage.removeItem('clientToken');
  }
}
