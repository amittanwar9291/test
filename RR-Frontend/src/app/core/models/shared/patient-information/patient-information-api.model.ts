import { ModelBase } from '@models/model-base';

import { GenderTypeEnum } from '@enums/shared/gender-type.enum';

import { PatientInformationBmiApiModel } from './patient-information-bmi-api.model';

export class PatientInformationApiModel extends ModelBase {
  weight: number;
  height: number;
  bmi: PatientInformationBmiApiModel;
  gender: GenderTypeEnum;
  age: number;

  constructor() {
    super();

    this.weight = 0;
    this.height = 0;
    this.bmi = new PatientInformationBmiApiModel();
    this.gender = GenderTypeEnum.None;
    this.age = null;
  }
}
