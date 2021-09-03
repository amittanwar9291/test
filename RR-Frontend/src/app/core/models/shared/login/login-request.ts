export class LoginRequest {
  username: string;
  password: string;
  instituteId: string;
  application: string;
  rememberMe: boolean;

  constructor(username: string, password: string, instituteId: string, rememberMe: boolean) {
    this.username = username;
    this.password = password;
    this.instituteId = instituteId;
    this.application = 'RR';
    this.rememberMe = rememberMe;
  }
}
