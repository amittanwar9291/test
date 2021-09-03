import { FeatureApiModel } from '@models/shared/settings/feature-api.model';

export class InstituteApiModel {
  id: string;
  name: string;
  instituteToken: string;
  duplicateExternalIdentifierAllowed: boolean;
  address: FeatureApiModel;

  constructor() {
    this.id = '';
    this.name = '';
    this.instituteToken = '';
    this.duplicateExternalIdentifierAllowed = false;
    this.address = new FeatureApiModel();
  }
}
