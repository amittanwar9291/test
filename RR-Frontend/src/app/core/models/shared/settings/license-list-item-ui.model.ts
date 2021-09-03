import { LicensingType } from '@enums/settings/licensing-type.enum';

export class LicenseListItemUiModel {
  licenseId: string;
  creationDate: Date;
  expirationDate: Date;
  licensingType: LicensingType;
  creditVolume: number;
  isActive: boolean;
  order: number;

  constructor() {
    this.licenseId = '';
    this.creationDate = null;
    this.expirationDate = null;
    this.licensingType = LicensingType.Offline;
    this.creditVolume = 0;
    this.isActive = false;
    this.order = 0;
  }
}
