import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CustomTranslateService } from '@services/shared';
import { TokenService } from '@services/shared/token/token.service';
import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';
import { AuthResponse } from '@models/shared/login/auth-response';

import { TranslateService } from '@ngx-translate/core';
import { InstituteHttpService } from '@services/shared/settings/institute-http.service';
import { AppConfig } from '../../app.config';

@Component({
  selector: 'rr-authorized',
  templateUrl: './authorized.component.html',
  styleUrls: ['./authorized.component.scss']
})
export class AuthorizedComponent implements OnInit {
  sidebarOpened = false;
  header = '';
  isAuthorized = false;

  constructor(
    public translateService: TranslateService,
    public customTranslateService: CustomTranslateService,
    private tokenService: TokenService,
    private router: Router,
    private userBasicDataService: UserBasicDataService,
    private instituteHttpService: InstituteHttpService
  ) {}

  ngOnInit() {
    const userToken = this.tokenService.getTokenFromStorage();
    if (!userToken) {
      this.router.navigate(['/login']);
    } else {
      this.checkIfLoggedUserDataExists(userToken);
      this.isAuthorized = true;
      /**
       * TODO Fetching logo after successful login is temporary and will be removed when backend is ready to handle the logo request
       * without user authorization
       */
      this.instituteHttpService.getInstituteLogo().subscribe(
        response =>
          (AppConfig.settings.customerLogo =
            response && response.isSuccess && response.payload ? `data:image/png;base64,${JSON.parse(response.payload).Content}` : ''),
        () => (AppConfig.settings.customerLogo = '')
      );
    }
  }

  switchLanguage(language: string) {
    this.translateService.use(language);
    this.customTranslateService.language.next(language);
  }

  toggleSidebar() {
    this.sidebarOpened = !this.sidebarOpened;
  }

  hideSidebar() {
    this.sidebarOpened = false;
  }

  private checkIfLoggedUserDataExists(token: AuthResponse) {
    if (!this.userBasicDataService.userData.getValue()) {
      const user = this.userBasicDataService.extractUserDataFromToken(token);
      this.userBasicDataService.userData.next(user);
      this.switchLanguage(user.language === 'none' ? 'en' : user.language);
    }
  }
}
