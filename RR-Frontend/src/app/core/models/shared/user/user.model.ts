export class UserModel {
  id: string;
  externalId: string;
  firstName: string;
  surname: string;
  salutation: string;
  initial: string;
  title: string;
  position: string;
  role: string;
  userName: string;
  password: string;
  approvalLevel: string;
  languageOfProgram: string;
  languageDoctorFindings: string;
  languagePatientFindings: string;
  isActive: boolean;

  constructor() {
    this.id = '';
    this.externalId = '';
    this.firstName = '';
    this.surname = '';
    this.salutation = 'None';
    this.initial = '';
    this.title = 'None';
    this.position = 'None';
    this.role = 'None';
    this.userName = '';
    this.password = '';
    this.approvalLevel = 'None';
    this.languageOfProgram = 'None';
    this.languageDoctorFindings = 'None';
    this.languagePatientFindings = 'None';
    this.isActive = false;
  }
}
