import { SequenceUiBaseModel } from '@models/shared/newTechnology/ui/sequence-ui-base.model';
import { MethodTypeEnum } from '@enums/shared/technology/method-type.enum';

export class MethodUiModel extends SequenceUiBaseModel {
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
