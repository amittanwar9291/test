import { ModelBase } from '@models/model-base';

import { GenderTypeEnum } from '@enums/shared/gender-type.enum';

import { BmiCalculatorModel } from '../bmi-calculator/bmi-calculator.model';

export class PatientInformationUiModel extends ModelBase {
  bmiCalculator: BmiCalculatorModel;
  gender: GenderTypeEnum;
  age: number;

  constructor() {
    super();

    this.bmiCalculator = new BmiCalculatorModel();
    this.gender = GenderTypeEnum.None;
    this.age = null;
  }
}
