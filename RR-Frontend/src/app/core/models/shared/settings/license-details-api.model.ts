export class LicenseDetailsApiModel {
  creationDate: string;
  expirationDate: string;
  licensingType: string;
  creditVolume: number;
  currentCredit: number;
  isActive: boolean;
  depletionPercentage: number;

  constructor() {
    this.creationDate = '';
    this.expirationDate = '';
    this.licensingType = '';
    this.creditVolume = 0;
    this.currentCredit = 0;
    this.isActive = false;
    this.depletionPercentage = 0;
  }
}
