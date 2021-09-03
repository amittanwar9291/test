import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { mapKeys } from 'lodash';

import { ChangePasswordForm } from '@models/shared/change-password/change-password-form';
import { ChangePasswordService } from '@services/shared/change-password/change-password.service';
import { NewPasswordRequest } from '@models/shared/login/new-password-request';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';
import { AuthResponse } from '@models/shared/login/auth-response';
import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';
import { TokenService } from '@services/shared/token/token.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rr-change-password-dialog',
  templateUrl: './change-password-dialog.component.html',
  styleUrls: ['./change-password-dialog.component.scss']
})
export class ChangePasswordDialogComponent implements OnInit {
  changePasswordFormGroup: FormGroup;
  readonly changePasswordForm = ChangePasswordForm;

  currentPassVisible = false;
  newPassVisible = false;
  repeatNewPassVisible = false;

  // todo add to translations when provided by client
  tooltip =
    '<p style="font-weight: 700">Password Rules:</p>' +
    '<p>• min. 5 characters long<p>' +
    '<p>• min. 1 capital letter<p>' +
    '<p>• min. 1 number<p>' +
    '<p>• min. 1 special character from a set of: "-"; "!"; "§"; "?"; "_"; "@"<p>';

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private changePasswordDialogService: ChangePasswordService,
    private userBasicDataService: UserBasicDataService,
    private tokenService: TokenService,
    private toastMessageService: ToastMessageService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.setFormBaseOnMode();
  }

  private setFormBaseOnMode() {
    this.changePasswordFormGroup = new FormGroup(
      {
        [this.changePasswordForm.currentPassword]: new FormControl(this.config.data.currentPassword, Validators.required),
        [this.changePasswordForm.newPassword]: new FormControl(null, [
          Validators.required,
          Validators.pattern(new RegExp('^(?=.*[0-9])(?=.*[A-Z])(?=.*[-!§?_@]).{5,}$'))
        ]),
        [this.changePasswordForm.repeatNewPassword]: new FormControl(null, Validators.required)
      },
      this.isNemPasswordMatch
    );
  }

  changePassword() {
    if (!this.validateForm()) {
      return;
    }
    const request = new NewPasswordRequest(
      this.changePasswordFormGroup.get(this.changePasswordForm.currentPassword).value,
      this.changePasswordFormGroup.get(this.changePasswordForm.newPassword).value,
      this.changePasswordFormGroup.get(this.changePasswordForm.repeatNewPassword).value,
      this.tokenService.hasClientToken()
    );
    return this.changePasswordDialogService.changePassword(request).subscribe({
      next: this.onChangeSuccess.bind(this),
      error: this.onChangeError.bind(this)
    });
  }

  private validateForm(): boolean {
    if (this.changePasswordFormGroup.invalid) {
      mapKeys(this.changePasswordFormGroup.controls, (value: AbstractControl, key: string) => {
        if (value.invalid) {
          if (value.errors.required) {
            this.toastMessageService.showErrorToast('errors.password.required.' + key);
          }
          if (value.errors.pattern) {
            this.toastMessageService.showErrorToast('errors.password.newPasswordRules');
          }
        }
      });
      if (this.changePasswordFormGroup.errors) {
        this.toastMessageService.showErrorToast('errors.password.newPasswordMatch');
      }
      return false;
    } else {
      return true;
    }
  }

  isNemPasswordMatch: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const newPass = control.get(this.changePasswordForm.newPassword);
    const newPassRepeat = control.get(this.changePasswordForm.repeatNewPassword);
    return newPass && newPassRepeat && newPass.value !== newPassRepeat.value ? { newPasswordMatch: true } : null;
  }

  onChangeSuccess(response: AuthResponse) {
    const loggedUser = this.userBasicDataService.extractUserDataFromToken(response);
    this.tokenService.setTokenInStorage(response);
    this.userBasicDataService.userData.next(loggedUser);
    this.toastMessageService.showSuccessToast(this.translate.instant('layout.changePasswordDialog.passwordChangedSuccess'));
    this.ref.close();
  }

  onChangeError(response) {
    this.toastMessageService.showErrors(response);
  }

  showCurrentPass() {
    this.currentPassVisible = !this.currentPassVisible;
  }

  showNewPass() {
    this.newPassVisible = !this.newPassVisible;
  }

  showRepeatNewPass() {
    this.repeatNewPassVisible = !this.repeatNewPassVisible;
  }

  onCancel() {
    this.ref.close(true);
  }
}
