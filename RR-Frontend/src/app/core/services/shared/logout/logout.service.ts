import { Injectable } from '@angular/core';
import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';
import { TokenService } from '@services/shared/token/token.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../../../app.config';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  constructor(
    private userBasicDataService: UserBasicDataService,
    private tokenService: TokenService,
    private router: Router,
    private httpClient: HttpClient
  ) {}

  logout() {
    this.httpClient.get(AppConfig.settings.baseUrl + AppConfig.settings.auth.signOut).subscribe(() => this.clearUserDataAndNavigate());
  }

  logoutFrontend() {
    this.clearUserDataAndNavigate();
  }

  private clearUserDataAndNavigate() {
    this.userBasicDataService.userData.next(null);
    this.tokenService.clearTokenInStorage();
    this.tokenService.removeClientToken();
    this.router.navigate(['/login']);
  }
}
