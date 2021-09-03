import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { SpineDirectionalLocation } from '@models/shared/spine/localizers/spine-directional-location.model';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';

export class SpineSoftTissueLocalizerConfig {
  localizerModel: SpineLocation | SpineDirectionalLocation;
  localizerLogicType?: SpineLocationLogicTypeEnum;
  localizerTitle: string;
  localizationDescription: string;
  localizerPropertyName?: string;
  discLocalization: boolean;

  constructor(
    localizerModel: SpineLocation | SpineDirectionalLocation,
    localizerLogicType: SpineLocationLogicTypeEnum,
    localizerTitle: string,
    localizationDescription: string,
    localizerPropertyName: string,
    discLocalization: boolean
  ) {
    this.localizerModel = localizerModel;
    this.localizerLogicType = localizerLogicType;
    this.localizerTitle = localizerTitle;
    this.localizationDescription = localizationDescription;
    this.localizerPropertyName = localizerPropertyName;
    this.discLocalization = discLocalization;
  }
}
