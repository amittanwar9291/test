export class NewPasswordRequest {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
  rememberMe: boolean;

  constructor(oldPassword: string, newPassword: string, confirmPassword: string, rememberMe: boolean) {
    this.oldPassword = oldPassword;
    this.newPassword = newPassword;
    this.confirmPassword = confirmPassword;
    this.rememberMe = rememberMe;
  }
}
