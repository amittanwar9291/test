import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';
import { TokenService } from '@services/shared/token/token.service';
import { LoggedUser } from '@models/shared/user/logged-user-models';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private userBasicDataService: UserBasicDataService, private tokenService: TokenService, private router: Router) {}
  canActivate(): boolean {
    return ['Administrator', 'Superadministrator'].includes(this.getLoggedUserData().role);
  }

  getLoggedUserData(): LoggedUser {
    const token = this.tokenService.getTokenFromStorage();
    if (token) {
      return this.userBasicDataService.extractUserDataFromToken(token);
    } else {
      this.router.navigate(['login']);
    }
  }
}
