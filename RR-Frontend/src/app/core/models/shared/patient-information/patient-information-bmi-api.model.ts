import { ModelBase } from '@models/model-base';

export class PatientInformationBmiApiModel extends ModelBase {
  value: number;
  category: string;

  constructor() {
    super();

    this.value = 0;
    this.category = 'None';
  }
}
