import { LicensingType } from '@enums/settings/licensing-type.enum';

export class LicenseDetailsUiModel {
  creationDate: Date;
  expirationDate: Date;
  licensingType: LicensingType;
  creditVolume: number;
  currentCredit: number;
  isActive: boolean;
  depletionPercentage: number;

  constructor() {
    this.creationDate = null;
    this.expirationDate = null;
    this.licensingType = LicensingType.Offline;
    this.creditVolume = 0;
    this.currentCredit = 0;
    this.isActive = false;
    this.depletionPercentage = 0;
  }
}
