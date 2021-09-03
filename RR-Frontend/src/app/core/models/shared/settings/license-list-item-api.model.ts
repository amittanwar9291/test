export class LicenseListItemApiModel {
  licenseId: string;
  creationDate: string;
  expirationDate: string;
  licensingType: string;
  creditVolume: number;
  isActive: boolean;

  constructor() {
    this.licenseId = '';
    this.creationDate = '';
    this.expirationDate = '';
    this.licensingType = '';
    this.creditVolume = 0;
    this.isActive = false;
  }
}
