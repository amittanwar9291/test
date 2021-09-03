export class LicenseFractionUiModel {
  id: string;
  creditScore: number;
  order: number;
  creationDate: Date;
  expirationDate: Date;
  allocationDate: Date;

  constructor() {
    this.id = '';
    this.creditScore = 0;
    this.order = 0;
    this.creationDate = null;
    this.expirationDate = null;
    this.allocationDate = null;
  }
}
