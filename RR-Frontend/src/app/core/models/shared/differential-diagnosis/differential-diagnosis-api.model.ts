import { ModelBase } from '@models/model-base';

export class DifferentialDiagnosisApiModel extends ModelBase {
  name: string;
  defaultName: string;
  orderNumber: number;
  groupSetName: string;
  groupName: string;

  constructor() {
    super();

    this.name = '';
    this.defaultName = '';
    this.orderNumber = 0;
    this.groupSetName = '';
    this.groupName = '';
  }
}
