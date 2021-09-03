import { FindingBase } from '@models/shared/finding/finding.base';
import {
  LiverFindingTypeEnum,
  LiverDifferentialDiagnosisTypeEnum,
  FocalLocalizationTypeEnum,
  GrowthPatternsTypeEnum,
  LiverHomogeneityTypeEnum,
  WashInArterialPhaseTypeEnum
} from '@enums/abdomenMRT/liver/';

export class LiverFindingBaseApiModel extends FindingBase {
  findingType: LiverFindingTypeEnum;

  // Common
  differentialDiagnosis: LiverDifferentialDiagnosisTypeEnum;
  washInArterialPhaseType: WashInArterialPhaseTypeEnum;
  isMaskingVenousPhase: boolean;
  isLateVenousPooling: boolean;
  t1WSignalType: string;
  t2WSignalType: string;

  // FocalLiverLesion
  focalLocalizationType: FocalLocalizationTypeEnum;
  isRightLobeOfLiver: boolean;
  homogeneityType: LiverHomogeneityTypeEnum;
  earlyArterial: string;
  lateArterial: string;
  portalVenous: string;
  venous: string;
  liverSpecificContrastEnhancement: string;
  isCentralScar: boolean;
  isWashInArterialPhase: boolean;
  isFat: boolean;
  isCalcification: boolean;
  isCapsule: boolean;
  isNecrosis: boolean;
  isHemorrhageProducts: boolean;
  growthPatternsType: GrowthPatternsTypeEnum;

  constructor() {
    super();
    this.findingType = LiverFindingTypeEnum.None;

    // Common
    this.differentialDiagnosis = LiverDifferentialDiagnosisTypeEnum.None;
    this.washInArterialPhaseType = WashInArterialPhaseTypeEnum.None;
    this.isMaskingVenousPhase = false;
    this.isLateVenousPooling = false;
    this.t1WSignalType = 'None';
    this.t2WSignalType = 'None';

    // FocalLiverLesion
    this.focalLocalizationType = FocalLocalizationTypeEnum.None;
    this.isRightLobeOfLiver = false;
    this.homogeneityType = LiverHomogeneityTypeEnum.None;
    this.earlyArterial = 'None';
    this.lateArterial = 'None';
    this.portalVenous = 'None';
    this.venous = 'None';
    this.liverSpecificContrastEnhancement = 'None';
    this.isCentralScar = false;
    this.isWashInArterialPhase = false;
    this.isFat = false;
    this.isCalcification = false;
    this.isCapsule = false;
    this.isNecrosis = false;
    this.isHemorrhageProducts = false;
    this.growthPatternsType = GrowthPatternsTypeEnum.None;
  }
}
