import { ModelBase } from '@models/model-base';

export class PatientApiModel extends ModelBase {
  lastName: string;
  firstName: string;
  birthDate: string;
  gender: string;
  externalIdentifier: string;

  constructor() {
    super();

    this.lastName = '';
    this.firstName = '';
    this.birthDate = '';
    this.gender = '';
    this.externalIdentifier = '';
  }
}
