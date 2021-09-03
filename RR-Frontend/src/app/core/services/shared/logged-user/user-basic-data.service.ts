import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { LoggedUser } from '@models/shared/user/logged-user-models';
import { LoginResponseDecoded } from '@models/shared/login/login-response-decoded';
import { AuthResponse } from '@models/shared/login/auth-response';

@Injectable({
  providedIn: 'root'
})
export class UserBasicDataService {
  userData = new BehaviorSubject<LoggedUser>(null);

  constructor() {}

  extractUserDataFromToken(token: AuthResponse): LoggedUser {
    const decodedResponse: LoginResponseDecoded = JSON.parse(atob(token.accessToken.split('.')[1]));
    return new LoggedUser(
      decodedResponse.sub,
      decodedResponse.initial,
      decodedResponse.firstName,
      decodedResponse.surname,
      decodedResponse.userId,
      decodedResponse.language,
      decodedResponse.role,
      decodedResponse.defaultPassword
    );
  }
}
