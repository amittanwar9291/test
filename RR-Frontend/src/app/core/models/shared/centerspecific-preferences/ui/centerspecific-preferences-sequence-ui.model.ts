import { OtherApplicationsTypeEnum } from '@enums/headMRT/technology/other-applications-type.enum';
import { SequenceUiBaseModel } from '@models/shared/newTechnology/ui/sequence-ui-base.model';
import { OrientationTypeEnum } from '@enums/pelvisMRT/technology/orientation-type.enum';
import { ParaaxialDorsalTiltingTypeEnum } from '@enums/feetMRT/technology/paraaxial-dorsal-tilting-type.enum';
import { MethodTypeEnum } from '@enums/shared/technology/method-type.enum';

export class CenterspecificPreferencesSequenceUiModel extends SequenceUiBaseModel {
  // common properties that are present in more than one MRI module
  isPostContrast: boolean;
  isSubtraction: boolean; // used in mammaMRT, cardioMRT and headMRT
  isECGTriggering: boolean;
  isB0: boolean;
  isB50: boolean;
  isB100: boolean;
  isB800: boolean;
  isB1000: boolean;
  isADCMap: boolean;
  isHighResolution: boolean;
  isChemicalShiftImaging: boolean;
  isCineImaging: boolean;
  isMrcp: boolean;

  // mammaMRT specific properties
  siliconeSensitive: boolean;
  siliconeSuppressing: boolean;
  isDynamicsFollowingGdApplication: boolean;
  isLateStage: boolean;

  // cardioMRT specific properties
  examinationTechniqueType: string;

  // pelvisMRT specific properties
  isDefaecography: boolean;
  isB1400: boolean;
  isCalculated: boolean;
  pelvisOrientationType: OrientationTypeEnum;

  // feetMRT specific properties
  paraaxialDorsalTiltingType: ParaaxialDorsalTiltingTypeEnum;

  // angiographyMRT specific properties
  nonContrastEnhancedMRAngiographyType: string;
  contrastEnhancedMRAngiographyType: string;
  isMIP: boolean;
  isMPR: boolean;
  isVRT: boolean;

  // thoraxMRT specific property
  isRespiratoryTriggering: boolean;

  // neckMRT specific property
  isBreathHoldingTechnique: boolean;
  isSedation: boolean;
  isPostContrastSubtraction: boolean;
  isPostContrastPerfusion: boolean;

  // headMRT specific property
  otherApplicationsType: OtherApplicationsTypeEnum;
  isCompressedSense: boolean;
  isDynamicsAfterContrastInjection: boolean;
  isEpiDwi: boolean;
  isHasteNonEpiDwi: boolean;

  constructor() {
    super();

    // common properties that are present in more than one MRI module
    this.isPostContrast = false;
    this.isSubtraction = false;
    this.isECGTriggering = false;
    this.isB0 = false;
    this.isB50 = false;
    this.isB100 = false;
    this.isB800 = false;
    this.isB1000 = false;
    this.isADCMap = false;
    this.isHighResolution = false;
    this.isChemicalShiftImaging = false;
    this.isCineImaging = false;
    this.isMrcp = false;

    // mammaMRT specific properties
    this.siliconeSensitive = false;
    this.siliconeSuppressing = false;
    this.isDynamicsFollowingGdApplication = false;
    this.isLateStage = false;

    // cardioMRT specific properties
    this.examinationTechniqueType = 'None';

    // pelvisMRT specifix properties
    this.isDefaecography = false;
    this.isB1400 = false;
    this.isCalculated = false;
    this.pelvisOrientationType = OrientationTypeEnum.None;

    // feetMRT specific properties
    this.paraaxialDorsalTiltingType = ParaaxialDorsalTiltingTypeEnum.None;

    // angiographyMRT specific properties
    this.nonContrastEnhancedMRAngiographyType = 'None';
    this.contrastEnhancedMRAngiographyType = 'None';
    this.isMIP = false;
    this.isMPR = false;
    this.isVRT = false;

    // thoraxMRT specific property
    this.isRespiratoryTriggering = false;

    // neckMRT specific property
    this.isBreathHoldingTechnique = false;
    this.isSedation = false;
    this.isPostContrastSubtraction = false;
    this.isPostContrastPerfusion = false;

    // headMRT specific property
    this.otherApplicationsType = OtherApplicationsTypeEnum.None;
    this.isCompressedSense = false;
    this.isDynamicsAfterContrastInjection = false;
    this.isEpiDwi = false;
    this.isHasteNonEpiDwi = false;
    this.isCalculated = false;
  }
}
