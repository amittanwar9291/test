import { ModelBase } from '@models/model-base';
import { GenderTypeEnum } from '@enums/shared/gender-type.enum';

export class PatientUiModel extends ModelBase {
  lastName: string;
  firstName: string;
  birthDate: Date;
  gender: GenderTypeEnum;

  constructor() {
    super();

    this.lastName = '';
    this.firstName = '';
    this.birthDate = null;
    this.gender = GenderTypeEnum.None;
  }
}
