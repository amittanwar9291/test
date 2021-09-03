import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';

export class MyelonSpineComplexLocalizerOptions {
  logicType: SpineLocationLogicTypeEnum;
  localizerTitle: string;
  localizationDescription: string;
  isNonTarget: boolean;

  constructor(
    logicType: SpineLocationLogicTypeEnum,
    localizerTitle: string,
    localizationDescription: string,
    isNonTarget: boolean = false
  ) {
    this.logicType = logicType;
    this.localizerTitle = localizerTitle;
    this.localizationDescription = localizationDescription;
    this.isNonTarget = isNonTarget;
  }
}
