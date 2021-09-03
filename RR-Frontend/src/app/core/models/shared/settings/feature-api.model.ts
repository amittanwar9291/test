import { FeaturePropertiesApiModel } from '@models/shared/settings/feature-properties-api.model';

export class FeatureApiModel {
  properties: FeaturePropertiesApiModel;

  constructor() {
    this.properties = new FeaturePropertiesApiModel();
  }
}
