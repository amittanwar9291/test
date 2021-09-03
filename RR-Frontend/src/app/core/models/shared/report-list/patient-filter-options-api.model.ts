export class PatientFilterOptionsApiModel {
  patientId: string;
  patientFirstName: string;
  patientLastName: string;
  gender: string;
  birthDate: string;

  constructor() {
    this.patientId = '';
    this.patientFirstName = '';
    this.patientLastName = '';
    this.gender = '';
    this.birthDate = '';
  }
}
