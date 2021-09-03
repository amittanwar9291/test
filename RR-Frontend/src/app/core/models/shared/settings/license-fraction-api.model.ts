export class LicenseFractionApiModel {
  instituteId: string;
  creditScore: number;
  order: number;
  creationDate: string;
  expirationDate: string;
  allocationDate: string;

  constructor() {
    this.instituteId = '';
    this.creditScore = 0;
    this.order = 0;
    this.creationDate = '';
    this.expirationDate = '';
    this.allocationDate = '';
  }
}
