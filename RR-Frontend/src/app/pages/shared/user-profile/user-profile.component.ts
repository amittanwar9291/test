import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { DialogService } from 'primeng/dynamicdialog';
import { remove } from 'lodash';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { ChangePasswordDialogConfig } from '@models/shared/change-password/change-password-dialog-config';
import { UserModel } from '@models/shared/user/user.model';
import { ROLES } from '@models/shared/user/roles';

import { DynamicComponentOutletService } from '@services/shared/dynamic-component/dynamic-component-outlet.service';
import { CustomTranslateService } from '@services/shared';
import { UserHttpService } from '@services/shared/user/user-http.service';
import { UserButtonCommunicationService } from '@services/shared/user/user-button-communication.service';
import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';
import { ChangePasswordService } from '@services/shared/change-password/change-password.service';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';
import { LogoutService } from '@services/shared/logout/logout.service';

import { UserProfileOptionsPanelComponent } from '../user-list/user-profile-options-panel/user-profile-options-panel.component';
import { UserNewProfileOptionsPanelComponent } from '../user-list/user-new-profile-options-panel/user-new-profile-options-panel.component';
import { AuthorizedComponent } from '../../../shared/authorized/authorized.component';
import { ChangePasswordDialogComponent } from '../../../shared/dialogs/change-password-dialog/change-password-dialog.component';
import { environment } from '@environments/environment';

@Component({
  selector: 'rr-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  providers: [DialogService]
})
export class UserProfileComponent implements OnInit, OnDestroy {
  model: UserModel = new UserModel();
  subscriptions: Subscription[] = [];

  // check if current page is user creation or edit
  isNew: boolean;

  // local variable for showing initial (so the model is not updated)
  initial = '- -';

  // this variable is to be discussed; sets id, username and password editable
  isSingleSignOn = false;
  userId: string;
  loggedUserId: string;
  isAdmin: boolean;

  // dropdown array definitions
  salutations: DropdownModel[];
  titles: DropdownModel[];
  positions: DropdownModel[];
  userRoles: DropdownModel[];
  approvalLevels: DropdownModel[];
  languages: DropdownModel[];

  changPassBtnDisabled: boolean;

  constructor(
    public parent: AuthorizedComponent,
    public translate: TranslateService,
    public customTranslate: CustomTranslateService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dynamicComponentService: DynamicComponentOutletService,
    private userCommService: UserButtonCommunicationService,
    public userService: UserHttpService,
    private userBasicDataService: UserBasicDataService,
    private dialogService: DialogService,
    private changePasswordService: ChangePasswordService,
    private toastMessageService: ToastMessageService,
    private logoutService: LogoutService
  ) {
    this.checkIdAndGetUserData();
    this.checkLoggedUserData();
    this.setDropdownTranslationSubs();
  }

  checkIdAndGetUserData() {
    this.subscriptions.push(
      this.activatedRoute.params.subscribe(params => {
        this.userId = params.id;
        this.isNew = !params.id;
        this.getUserData();
        this.setHeader();
      })
    );
  }

  private getUserData() {
    if (!this.isNew) {
      this.userService.getUserById(this.userId).subscribe((out: UserModel) => {
        this.model = out;
        this.initial = this.model.initial;
      });
    } else {
      this.model.isActive = true;
      this.model.password = 'N30-q';
      this.model.languageDoctorFindings = 'DE';
      this.model.languageOfProgram = 'DE';
      this.model.languagePatientFindings = 'DE';
    }
  }

  private setHeader() {
    const translateKey: string = this.isNew ? 'users.profile.userNew' : 'users.profile.userProfile';
    this.subscriptions.push(
      this.translate.stream(translateKey).subscribe((out: string) => {
        this.parent.header = out;
      })
    );
  }

  private setDropdownTranslationSubs() {
    this.subscriptions.push(
      this.translate.stream('users.enums.salutations').subscribe((out: DropdownModel[]) => {
        this.salutations = Object.values(out);
      })
    );
    this.subscriptions.push(
      this.translate.stream('users.enums.titles').subscribe((out: DropdownModel[]) => {
        this.titles = Object.values(out);
      })
    );
    this.subscriptions.push(
      this.translate.stream('users.enums.positions').subscribe((out: DropdownModel[]) => {
        this.positions = Object.values(out);
      })
    );
    // todo Superadministrator removed from list 'cause should be unselectable. Consider disable this option instead removing it
    this.subscriptions.push(
      this.translate.stream('users.enums.userRoles').subscribe((out: DropdownModel[]) => {
        this.userRoles = remove(Object.values(out), elem => elem.value !== ROLES.S_ADMIN);
      })
    );
    this.subscriptions.push(
      this.translate.stream('users.enums.approvalLevels').subscribe((out: DropdownModel[]) => {
        this.approvalLevels = Object.values(out);
      })
    );
    this.subscriptions.push(
      this.translate.stream('users.enums.languages').subscribe((out: DropdownModel[]) => {
        this.languages = Object.values(out);
      })
    );
  }

  private checkLoggedUserData() {
    this.subscriptions.push(
      this.userBasicDataService.userData.subscribe(data => {
        if (data) {
          this.loggedUserId = data.userId;
          this.isAdmin = data.role === ROLES.ADMIN || data.role === ROLES.S_ADMIN;
        }
      })
    );
  }

  /**
   * Called after component initialization.
   */
  ngOnInit(): void {
    this.setCallbackForHeaderSaveButton();
    this.setCallbackForHeaderNavigateButton();
    this.loadOptionsPanel();
  }

  private setCallbackForHeaderSaveButton() {
    this.subscriptions.push(
      this.userCommService.button1Clicked$.subscribe(() => {
        if (this.isNew) {
          this.createNewUser();
        } else {
          this.updateUser();
        }
      })
    );
  }

  private setCallbackForHeaderNavigateButton() {
    if (this.isNew) {
      this.subscriptions.push(
        this.userCommService.button2Clicked$.subscribe(() => {
          this.router.navigate(['/users']);
        })
      );
    }
  }

  private createNewUser() {
    this.userService.createNewUser(this.model).subscribe({
      next: () => this.onSuccess(),
      error: this.onError.bind(this)
    });
  }

  private updateUser() {
    if (this.isNoEditableUser()) {
      return;
    }
    this.userService.updateUser(this.model).subscribe({
      next: () => this.onSuccess(),
      error: this.onError.bind(this)
    });
  }

  private onSuccess() {
    if (!this.isLoggedUser()) {
      this.router.navigate(['/users']);
    }
  }
  private onError(error) {
    this.toastMessageService.showErrors(error);
  }

  /**
   * Called during component destruction.
   */
  ngOnDestroy(): void {
    this.dynamicComponentService.componentSource.next(null);
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }

  /**
   * Insert a component into bottom header.
   */
  loadOptionsPanel(): void {
    if (this.isNew) {
      this.dynamicComponentService.componentSource.next(UserNewProfileOptionsPanelComponent);
    } else {
      this.dynamicComponentService.componentSource.next(UserProfileOptionsPanelComponent);
    }
  }

  /**
   * Create initial automatically.
   */
  nameChanged(): void {
    let firstNameInitial = '';
    let surnameInitial = '';

    const firstNameArray = this.model.firstName.split(' ');
    const surnameArray = this.model.surname.split(' ');

    const firstWord = firstNameArray[0]; // get first word entered
    const lastWord = surnameArray[surnameArray.length - 1]; // get last word entered

    if (firstWord.length > 0) {
      firstNameInitial = firstWord[0].toUpperCase();
    }

    if (lastWord.length > 0) {
      surnameInitial = lastWord[0].toUpperCase();
    }

    const newInitial = firstNameInitial + surnameInitial;

    // if both first and last name are defined, update the model
    if (newInitial.length > 1) {
      this.model.initial = newInitial;
      this.initial = this.model.initial;
    }
  }

  toUppercase() {
    this.model.initial = this.model.initial.toLocaleUpperCase();
  }

  changePassword(event): void {
    if (!this.isLoggedUser() || this.isNoEditableUser()) {
      return;
    }
    this.dialogService.open(ChangePasswordDialogComponent, new ChangePasswordDialogConfig(this.loggedUserId));
    event.target.blur();
  }

  private isLoggedUser() {
    return this.loggedUserId === this.userId;
  }

  setDefaultPassword() {
    if (this.isAdmin && !this.isNoEditableUser()) {
      this.changePasswordService.setDefaultPassword(this.userId).subscribe({
        next: _ => {
          this.toastMessageService.showSuccessToast(this.translate.instant('users.profile.passwordResetSuccess'));
          if (this.userId === this.userBasicDataService.userData.getValue().userId) {
            this.logoutService.logoutFrontend();
          }
        },
        error: this.onSetDefaultPassError.bind(this)
      });
    }
  }

  private onSetDefaultPassError(response) {
    this.toastMessageService.showErrors(response);
  }

  shouldNotBeEditable(): boolean {
    return this.isLoggedUser() && !this.isAdmin;
  }

  // disabling possibility to edit default users on local environment
  // todo remove if not used
  private isNoEditableUser(): boolean {
    const noEditableUsers = ['rr', 'sa', 'ad', 'ed', 'vi', 'sv'];
    const isNoEditableUser = !environment.production && noEditableUsers.includes(this.model.userName);
    if (isNoEditableUser) {
      this.toastMessageService.showErrorToast('You can\'t change default user data');
    }
    return isNoEditableUser;
  }
}
