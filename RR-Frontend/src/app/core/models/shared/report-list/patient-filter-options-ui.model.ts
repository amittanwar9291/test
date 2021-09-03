import { GenderTypeEnum } from '@enums/shared/gender-type.enum';
import { Guid } from '@models/shared/guid/guid';

export class PatientFilterOptionsUiModel {
  patientId: string;
  patientFirstName: string;
  patientLastName: string;
  gender: GenderTypeEnum;
  birthDate: Date;

  constructor() {
    this.patientId = Guid.createEmpty();
    this.patientFirstName = '';
    this.patientLastName = '';
    this.gender = GenderTypeEnum.None;
    this.birthDate = null;
  }
}
