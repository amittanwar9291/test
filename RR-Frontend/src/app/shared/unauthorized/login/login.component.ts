import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { DialogService } from 'primeng/dynamicdialog';
import { fromEvent, Subscription } from 'rxjs';
import { serializeError } from 'serialize-error';

import { LoginHttpService } from '@services/shared/login/login-http.service';
import { UserStorageService } from '@services/shared/logged-user/user-storage.service';
import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';
import { TokenService } from '@services/shared/token/token.service';
import { CustomTranslateService, LoggingService } from '@services/shared';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';
import { IpcMessageService } from '@services/shared/ipc-message/ipc-message.service';
import { LogoutService } from '@services/shared/logout/logout.service';
import { UserForStorage } from '@models/shared/user/logged-user-models';
import { LOGIN_FORM } from '@models/shared/login/login-form';
import { LoginRequest } from '@models/shared/login/login-request';
import { AuthResponse } from '@models/shared/login/auth-response';
import { ChangePasswordDialogConfig } from '@models/shared/change-password/change-password-dialog-config';
import { ROLES } from '@models/shared/user/roles';
import { ChangePasswordDialogComponent } from '../../dialogs/change-password-dialog/change-password-dialog.component';
import { ResizableBaseComponent } from '@abstractions/resizable-base/resizable-base';
import { environment } from '@environments/environment';
import { AppConfig } from '../../../app.config';
import { Platform } from '@enums/shared/platform.enum';
import { ConfigurationStorageService } from '@services/shared/configuration-storage/configuration-storage.service';
import { InstituteConfigurationDialogComponent } from 'app/shared/dialogs/institute-configuration-dialog/institute-configuration-dialog.component';
import { PlatformService } from '@services/shared/platform/platform.service';

@Component({
  selector: 'rr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [DialogService]
})
export class LoginComponent extends ResizableBaseComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('passwordInput') passwordInput: ElementRef;

  logInBtnListenerSubscription: Subscription;

  users: UserForStorage[] = [];

  showUsernameInput = false;
  showShortcutBubbles = true;
  passwordVisible = false;
  loginFormGroup: FormGroup;
  readonly loginForm = LOGIN_FORM;
  IsInitialConfiguration: boolean;
  constructor(
    private loginHttpService: LoginHttpService,
    private userBasicDataService: UserBasicDataService,
    private userStorageService: UserStorageService,
    private router: Router,
    private tokenService: TokenService,
    private customTranslateService: CustomTranslateService,
    private dialogService: DialogService,
    private toastMessageService: ToastMessageService,
    private ipcMessageService: IpcMessageService,
    private loggingService: LoggingService,
    private configStorageService: ConfigurationStorageService,
    private logoutService: LogoutService,
    private platformService: PlatformService
  ) {
    super();

    if (!this.configStorageService.getInstituteInitialized()) {
      this.navigateToInitialConfigurationPage();
    } else {
      this.loginWithClientToken();
    }
  }

  ngOnInit() {
    super.ngOnInit();
    this.loginFormGroup = new FormGroup({
      [this.loginForm.userName]: new FormControl(null, Validators.required),
      [this.loginForm.password]: new FormControl(null, Validators.required),
      [this.loginForm.rememberMe]: new FormControl(false)
    });
    this.prepareUsersList();
    this.loginFormGroup
      .get(this.loginForm.userName)
      .valueChanges.subscribe(() => this.loginFormGroup.get(this.loginForm.password).setValue(null));
    if (this.platformService.isDesktop() && this.platformService.getElectronMainProcess().env.USER_NAME) {
      this.loginWithUserLoginImport();
    }
  }

  loginWithClientToken() {
    if (!this.tokenService.getClientToken()) {
      return;
    }
    this.loginHttpService.loginWithClientToken().subscribe({
      next: this.onLoginSuccess.bind(this),
      error: this.onLoginError.bind(this)
    });
  }

  navigateToInitialConfigurationPage() {
    this.router.navigate(['/configuration']);
  }

  get customerLogo(): string {
    return AppConfig.settings.customerLogo;
  }

  private prepareUsersList() {
    this.users = this.userStorageService.getLastUsersList();
    if (this.users.length === 0) {
      this.showUsernameInput = true;
      this.showShortcutBubbles = false;
    }
    if (this.users.length === 1) {
      this.loginFormGroup.get(this.loginForm.userName).setValue(this.users[0].username);
    }
  }

  ngAfterViewInit(): void {
    if (this.users.length === 1) {
      this.passwordInput.nativeElement.focus();
    }
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    if (this.logInBtnListenerSubscription) {
      this.logInBtnListenerSubscription.unsubscribe();
    }
  }

  selectUser(user: UserForStorage) {
    if (this.showUsernameInput) {
      return;
    }
    this.loginFormGroup.get(this.loginForm.userName).setValue(user.username);
    this.passwordInput.nativeElement.focus();
  }

  showUsername() {
    this.showUsernameInput = !this.showUsernameInput;
    this.loginFormGroup.get(this.loginForm.userName).setValue(null);
  }

  shouldBeTransparent(user: UserForStorage): boolean {
    const currentUser = this.loginFormGroup.get(this.loginForm.userName).value;
    return this.showUsernameInput || (currentUser && currentUser !== user.username);
  }

  isAdmin(user: UserForStorage): boolean {
    return user.role === ROLES.ADMIN || user.role === ROLES.S_ADMIN;
  }

  showPassword() {
    this.passwordVisible = true;
  }

  hidePassword() {
    this.passwordVisible = false;
  }

  submitOnEnter(event) {
    if (event.code === 'Enter') {
      this.submitForm();
    }
  }

  submitForm() {
    const request = new LoginRequest(
      this.loginFormGroup.get(this.loginForm.userName).value,
      this.loginFormGroup.get(this.loginForm.password).value,
      this.configStorageService.getInstituteId() || AppConfig.settings.instituteId,
      this.loginFormGroup.get(this.loginForm.rememberMe).value
    );
    return this.loginHttpService.sendCredentials(request).subscribe({
      next: this.onLoginSuccess.bind(this),
      error: this.onLoginError.bind(this)
    });
  }

  private onLoginSuccess(response: AuthResponse): void {
    const loggedUser = this.userBasicDataService.extractUserDataFromToken(response);
    this.tokenService.setTokenInStorage(response);
    this.userBasicDataService.userData.next(loggedUser);
    this.userStorageService.prepareAndSetLastUsersList(this.users, loggedUser);
    const loggedUserLanguage = loggedUser.language === 'none' ? 'en' : loggedUser.language;
    this.customTranslateService.language.next(loggedUserLanguage);
    this.customTranslateService.setLanguage(loggedUserLanguage);

    if (loggedUser.defaultPassword && !this.isNoEditableUser()) {
      this.changePassword(loggedUser.userId);
    } else {
      this.navigateToFirstPage().then(() => this.notifyLogin());
    }
  }

  private onLoginError(error) {
    this.toastMessageService.showErrors(error);
    this.loggingService.error('LOGIN', JSON.stringify(serializeError(error)));
  }

  private changePassword(userId) {
    this.dialogService
      .open(ChangePasswordDialogComponent, new ChangePasswordDialogConfig(userId, this.loginFormGroup.get(this.loginForm.password).value))
      .onClose.subscribe(isCancel => {
        if (isCancel) {
          this.logoutService.logout();
        } else {
          this.navigateToFirstPage().then(() => this.notifyLogin());
        }
      });

    this.logInBtnListenerSubscription = fromEvent(document.body, 'keydown').subscribe((event: KeyboardEvent) => {
      if (event.code === 'Space' || event.code === 'Enter') {
        event.preventDefault();
      }
    });
  }

  private notifyLogin(): void {
    if (AppConfig.settings.env.platform === Platform.Desktop) {
      this.ipcMessageService.sendUserLogin();
    }
  }

  navigateToFirstPage(): Promise<boolean> {
    return this.router.navigate(['/']);
  }

  // disabling possibility to edit default users on local environment
  // todo remove if not used
  private isNoEditableUser(): boolean {
    const noEditableUsers = ['NEO-Q', 'Administrator', 'AndiCarbonara', 'LucaLasagne', 'rr'];
    return !environment.production && noEditableUsers.includes(this.loginFormGroup.get(this.loginForm.userName).value);
  }

  openInstituteConfigurationDialog() {
    this.dialogService.open(InstituteConfigurationDialogComponent, {
      showHeader: false
    });
  }

  private loginWithUserLoginImport() {
    this.loginFormGroup.get(this.loginForm.userName).setValue(this.platformService.getElectronMainProcess().env.USER_NAME);
    this.loginFormGroup.get(this.loginForm.password).setValue(this.platformService.getElectronMainProcess().env.PASSWORD);
    const request = new LoginRequest(
      this.loginFormGroup.get(this.loginForm.userName).value,
      this.loginFormGroup.get(this.loginForm.password).value,
      AppConfig.settings.instituteId || this.configStorageService.getInstituteId(),
      false
    );
    this.loginHttpService.sendCredentials(request).subscribe({
      next: this.onLoginSuccess.bind(this),
      error: this.onLoginError.bind(this)
    });
    this.platformService.getElectronMainProcess().env.USER_NAME = '';
  }
}
