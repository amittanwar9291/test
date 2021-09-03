export class DiagnosisDescriptionUiModel {
  label: string;
  groupName: string;
  colorName: string;
  value: string;
  orderNumber: number;
  infoRrId: string;

  constructor() {
    this.value = 'None';
    this.label = '';
    this.groupName = '';
    this.colorName = '';
    this.orderNumber = 0;
    this.infoRrId = '';
  }
}
