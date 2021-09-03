export class LoggedUser {
  username: string;
  initial: string;
  firstName: string;
  surname: string;
  userId: string;
  language: string;
  role: string;
  defaultPassword: boolean;

  constructor(
    username: string,
    initial: string,
    firstName: string,
    surname: string,
    userId: string,
    language: string,
    role: string,
    defaultPassword: boolean
  ) {
    this.username = username;
    this.initial = initial;
    this.firstName = firstName;
    this.surname = surname;
    this.userId = userId;
    this.language = language.toLowerCase();
    this.role = role;
    this.defaultPassword = defaultPassword;
  }
}

export interface UserForStorage {
  username: string;
  initial: string;
  role: string;
}
