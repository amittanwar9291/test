import { FindingBase } from '@models/shared/finding/finding.base';
import { LiverSegmentsUiModel } from '@models/abdomenMRT/ui/shared/liver-segments-ui-model';
import {
  LiverFindingTypeEnum,
  LiverDifferentialDiagnosisTypeEnum,
  FocalLocalizationTypeEnum,
  GrowthPatternsTypeEnum,
  LiverHomogeneityTypeEnum,
  WashInArterialPhaseTypeEnum,
  FormTypeEnum,
  MarginTypeEnum,
  FatTypeEnum
} from '@enums/abdomenMRT/liver/';

export class LiverFindingBaseUiModel extends FindingBase {
  findingType: LiverFindingTypeEnum;

  // Common
  differentialDiagnosis: LiverDifferentialDiagnosisTypeEnum;
  washInArterialPhaseType: WashInArterialPhaseTypeEnum;
  t1WSignalType: number;
  t2WSignalType: number;
  liverSegmentsLocations: LiverSegmentsUiModel;
  isSignalDropInChemicalShift: boolean;
  isPeripheralEnhancement: boolean;
  isDiffusionRestriction: boolean;
  isPortalVeinRightBranch: boolean;
  isPortalVeinLeftBranch: boolean;

  // FocalLiverLesion
  focalLocalizationType: FocalLocalizationTypeEnum;
  isRightLobeOfLiver: boolean;
  isLeftLobeOfLiver: boolean;
  isLobusCaudatus: boolean;
  isLobusQuadratus: boolean;
  marginType: MarginTypeEnum;
  homogeneityType: LiverHomogeneityTypeEnum;
  formType: FormTypeEnum;
  earlyArterial: number;
  lateArterial: number;
  portalVenous: number;
  venous: number;
  equilibrium: number;
  liverSpecificContrastEnhancement: number;
  qualityOfEnhancement: LiverHomogeneityTypeEnum;
  isCottonWoolAppearance: boolean;
  isCentripetalFillInIrisDiaphragmPhenomenon: boolean;
  isTriangleSign: boolean;
  isEnhancementToHepaticVeins: boolean;
  isCentrifugalEnhancement: boolean;
  isCentralScar: boolean;
  isWashInArterialPhase: boolean;
  isWashOutVenousPhase: boolean;
  isMaskingVenousPhase: boolean;
  isRingTargetSign: boolean;
  isLateVenousPooling: boolean;
  isFadingEnhancement: boolean;
  isFat: boolean;
  fatType: FatTypeEnum;
  isCalcification: boolean;
  isCapsule: boolean;
  isSepts: boolean;
  isNecrosis: boolean;
  isHemorrhageProducts: boolean;
  isFluidCsfIsointens: boolean;
  isPeripheralMembrane: boolean;
  growthPatternsType: GrowthPatternsTypeEnum;
  isPortalVeinProximal: boolean;
  isRightHepaticVein: boolean;
  isMiddleHepaticVein: boolean;
  isLeftHepaticVein: boolean;
  isAssociatedCholestasis: boolean;
  isRightHepaticDuct: boolean;
  isLeftHepaticDuct: boolean;
  isCommonHepaticDuct: boolean;
  isGallBladder: boolean;
  isMoreThanOneLesionOfTheSameEntity: boolean;

  constructor() {
    super();
    this.findingType = LiverFindingTypeEnum.None;

    // Common
    this.differentialDiagnosis = LiverDifferentialDiagnosisTypeEnum.None;
    this.washInArterialPhaseType = WashInArterialPhaseTypeEnum.None;
    this.isMaskingVenousPhase = false;
    this.isLateVenousPooling = false;
    this.t1WSignalType = 0;
    this.t2WSignalType = 0;
    this.liverSegmentsLocations = new LiverSegmentsUiModel();
    this.isSignalDropInChemicalShift = false;
    this.isPeripheralEnhancement = false;
    this.isDiffusionRestriction = false;
    this.isPortalVeinRightBranch = false;
    this.isPortalVeinLeftBranch = false;

    // FocalLiverLesion
    this.focalLocalizationType = FocalLocalizationTypeEnum.None;
    this.isRightLobeOfLiver = false;
    this.isLeftLobeOfLiver = false;
    this.isLobusCaudatus = false;
    this.isLobusQuadratus = false;
    this.marginType = MarginTypeEnum.None;
    this.homogeneityType = LiverHomogeneityTypeEnum.None;
    this.formType = FormTypeEnum.None;
    this.earlyArterial = 0;
    this.lateArterial = 0;
    this.portalVenous = 0;
    this.venous = 0;
    this.equilibrium = 0;
    this.liverSpecificContrastEnhancement = 0;
    this.qualityOfEnhancement = LiverHomogeneityTypeEnum.None;
    this.isCottonWoolAppearance = false;
    this.isCentripetalFillInIrisDiaphragmPhenomenon = false;
    this.isTriangleSign = false;
    this.isEnhancementToHepaticVeins = false;
    this.isCentrifugalEnhancement = false;
    this.isCentralScar = false;
    this.isWashInArterialPhase = false;
    this.isWashOutVenousPhase = false;
    this.isMaskingVenousPhase = false;
    this.isRingTargetSign = false;
    this.isLateVenousPooling = false;
    this.isFadingEnhancement = false;
    this.isFat = false;
    this.fatType = FatTypeEnum.None;
    this.isCalcification = false;
    this.isCapsule = false;
    this.isSepts = false;
    this.isNecrosis = false;
    this.isHemorrhageProducts = false;
    this.isFluidCsfIsointens = false;
    this.isPeripheralMembrane = false;
    this.growthPatternsType = GrowthPatternsTypeEnum.None;
    this.isPortalVeinProximal = false;
    this.isRightHepaticVein = false;
    this.isMiddleHepaticVein = false;
    this.isLeftHepaticVein = false;
    this.isAssociatedCholestasis = false;
    this.isRightHepaticDuct = false;
    this.isLeftHepaticDuct = false;
    this.isCommonHepaticDuct = false;
    this.isGallBladder = false;
    this.isMoreThanOneLesionOfTheSameEntity = false;
  }
}
