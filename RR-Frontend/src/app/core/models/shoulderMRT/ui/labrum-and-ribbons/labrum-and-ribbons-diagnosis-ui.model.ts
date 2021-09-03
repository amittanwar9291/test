import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

export class LabrumAndRibbonsDiagnosisUiModel extends DropdownModel {
  groupName: string;
  orderNumber: number;

  constructor() {
    super();
    this.groupName = 'None';
    this.orderNumber = 0;
  }
}
