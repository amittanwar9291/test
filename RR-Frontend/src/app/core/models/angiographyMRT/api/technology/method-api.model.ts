import { SequenceApiBaseModel } from '@models/shared/newTechnology/api/sequence-api-base.model';
import { MethodTypeEnum } from '@enums/shared/technology/method-type.enum';

export class MethodApiModel extends SequenceApiBaseModel {
  methodType: MethodTypeEnum;

  // First column
  nonContrastEnhancedMRAngiographyType: string;
  contrastEnhancedMRAngiographyType: string;

  isECGTriggering: boolean;

  // Second column
  isMIP: boolean;
  isMPR: boolean;
  isVRT: boolean;

  constructor() {
    super();
    this.methodType = MethodTypeEnum.None;

    // First column
    this.nonContrastEnhancedMRAngiographyType = 'None';
    this.contrastEnhancedMRAngiographyType = 'None';

    this.isECGTriggering = false;

    // Second column
    this.isMIP = false;
    this.isMPR = false;
    this.isVRT = false;
  }
}
