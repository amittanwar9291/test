import { ClassificationTypeEnum } from '@enums/mammaMX/lymph-nodes';
import { Guid } from '@models/shared/guid/guid';

export class LymphNodeDetailsApiModel {
  id: string;
  classificationType: ClassificationTypeEnum;
  shortAxisDiameterInMm: number;
  longitudinalDiameterInMm: number;
  isDisturbedInternalArchitecture: boolean;
  isHilarObliteration: boolean;
  isIrregularCorticalWidth: boolean;
  isIncreasedVascularization: boolean;
  isCapsularInfiltration: boolean;
  isLesion: boolean;

  constructor() {
    this.id = Guid.createEmpty();
    this.classificationType = ClassificationTypeEnum.None;
    this.shortAxisDiameterInMm = null;
    this.longitudinalDiameterInMm = null;
    this.isDisturbedInternalArchitecture = false;
    this.isHilarObliteration = false;
    this.isIrregularCorticalWidth = false;
    this.isIncreasedVascularization = false;
    this.isCapsularInfiltration = false;
    this.isLesion = false;
  }
}
