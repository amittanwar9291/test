import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';

export class IntervertebralDiscJointsLargeLocalizerConfig {
  logicType: SpineLocationLogicTypeEnum;
  localizationDescription: string;
  constructor(logicType: SpineLocationLogicTypeEnum, localizationDescription: string) {
    this.logicType = logicType;
    this.localizationDescription = localizationDescription;
  }
}
