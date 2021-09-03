import { FindingBase } from '@models/shared/finding/finding.base';
import {
  BosniakClassificationTypeEnum,
  CalcificationTypeEnum,
  ExtensionTypeEnum,
  FatTypeEnum,
  FormTypeEnum,
  HistologyKnownTypeEnum,
  KidneysDifferentialDiagnosisTypeEnum,
  KidneysFindingTypeEnum,
  LocalizationTypeEnum,
  MarginTypeEnum,
  ModalityTypeEnum,
  NormVariantOrAnomalyTypeEnum,
  SideTypeEnum
} from '@enums/abdomenMRT/kidneys';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';

export class KidneysFindingBaseUiModel extends FindingBase {
  findingType: KidneysFindingTypeEnum;

  // Common
  kidneysDifferentialDiagnosisType: KidneysDifferentialDiagnosisTypeEnum;
  isMoreThanOneLesionSameEntity: boolean;

  // Mass
  homogeneityType: HomogeneityTypeEnum;
  marginType: MarginTypeEnum;
  t1wSignal: number;
  t2wSignal: number;
  isDisplacing: boolean;
  isDeformationOuterRenalContour: boolean;
  corticomedullaryPhase: number;
  nephrographicPhase: number;

  isHistologyKnown: boolean;
  histologyKnownType: HistologyKnownTypeEnum;
  massSideType: SideTypeEnum;
  isCompletelyIntrarenal: boolean;
  localizationType: LocalizationTypeEnum;
  bosniakClassificationType1: BosniakClassificationTypeEnum;
  bosniakClassificationType2: BosniakClassificationTypeEnum;
  bosniakClassificationType3: BosniakClassificationTypeEnum;
  isLocalization: boolean;
  massSideMoreThanOneLesionType: SideTypeEnum;
  isUpperPoleKidney: boolean;
  isCranialThird: boolean;
  isMiddleThird: boolean;
  isLowerThird: boolean;
  isLowerPoleKidney: boolean;
  isRenalHilus: boolean;
  isDetailsCompletelyIntrarenal: boolean;
  formType: FormTypeEnum;
  isFat: boolean;
  fatType: FatTypeEnum;
  isCysts: boolean;
  isCalcification: boolean;
  calcificationType: CalcificationTypeEnum;
  isSepta: boolean;
  isNodularThickening: boolean;
  isDelicate: boolean;
  isSeptaCalcification: boolean;
  isNecrosis: boolean;
  isCentralScar: boolean;
  isHemosiderin: boolean;
  isExophytic: boolean;
  isAngularInterfaceSign: boolean;
  isFungalConfiguration: boolean;
  isPlaqueLikeGrowthRenalPelvis: boolean;
  isObstructionAndHydronephrosis: boolean;
  isCommunicationWithRenalPelvis: boolean;
  isBeanShaped: boolean;
  isInfiltration: boolean;
  isInfiltrationRenalPelvis: boolean;
  isInfiltrationPerirenalSpace: boolean;
  isInfiltrationMusculature: boolean;
  isInfiltrationAbdominalWall: boolean;
  isInfiltrationAdrenalGlands: boolean;
  isInfiltrationLiver: boolean;
  isInfiltrationSpleen: boolean;
  isInfiltrationIntestine: boolean;
  isInfiltrationBones: boolean;
  excretoryPhase: number;
  isSpokeWheelEnhancementPattern: boolean;
  isDiffusionRestriction: boolean;
  isCapsule: boolean;
  isAssociatedFindingsNodularThickening: boolean;
  isAssociatedFindingsCalcification: boolean;
  isPseudoCapsularExtension: boolean;
  isInfiltrationPerirenalAdiposeTissue: boolean;
  isHemorrhage: boolean;
  isLocoregionalLN: boolean;
  sadInMm: number;
  isVascularInfiltration: boolean;
  vascularInfiltrationType: NormVariantOrAnomalyTypeEnum;
  extensionType: ExtensionTypeEnum;
  isCompleteOcclusion: boolean;
  isIntramuralInfiltration: boolean;
  isRetroperitonealCollateralVessels: boolean;
  isFluidAroundCyst: boolean;
  dD1FollowUpMonths: number;
  dD1ModalityType: ModalityTypeEnum;
  dD2FollowUpMonths: number;
  dD2ModalityType: ModalityTypeEnum;
  dD3FollowUpMonths: number;
  dD3ModalityType: ModalityTypeEnum;

  constructor() {
    super();

    this.findingType = KidneysFindingTypeEnum.None;

    // Common
    this.kidneysDifferentialDiagnosisType = KidneysDifferentialDiagnosisTypeEnum.None;
    this.isMoreThanOneLesionSameEntity = false;

    // Mass
    this.marginType = MarginTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.t1wSignal = 0;
    this.t2wSignal = 0;
    this.isDisplacing = false;
    this.isDeformationOuterRenalContour = false;
    this.corticomedullaryPhase = 0;
    this.nephrographicPhase = 0;

    this.isHistologyKnown = false;
    this.histologyKnownType = HistologyKnownTypeEnum.None;
    this.massSideType = SideTypeEnum.None;
    this.isCompletelyIntrarenal = false;
    this.localizationType = LocalizationTypeEnum.None;
    this.bosniakClassificationType1 = BosniakClassificationTypeEnum.None;
    this.bosniakClassificationType2 = BosniakClassificationTypeEnum.None;
    this.bosniakClassificationType3 = BosniakClassificationTypeEnum.None;
    this.isLocalization = false;
    this.massSideMoreThanOneLesionType = SideTypeEnum.None;
    this.isUpperPoleKidney = false;
    this.isCranialThird = false;
    this.isMiddleThird = false;
    this.isLowerThird = false;
    this.isLowerPoleKidney = false;
    this.isRenalHilus = false;
    this.isDetailsCompletelyIntrarenal = false;
    this.formType = FormTypeEnum.None;
    this.isFat = false;
    this.fatType = FatTypeEnum.None;
    this.isCysts = false;
    this.isCalcification = false;
    this.calcificationType = CalcificationTypeEnum.None;
    this.isSepta = false;
    this.isNodularThickening = false;
    this.isDelicate = false;
    this.isSeptaCalcification = false;
    this.isNecrosis = false;
    this.isCentralScar = false;
    this.isHemosiderin = false;
    this.isExophytic = false;
    this.isAngularInterfaceSign = false;
    this.isFungalConfiguration = false;
    this.isPlaqueLikeGrowthRenalPelvis = false;
    this.isObstructionAndHydronephrosis = false;
    this.isCommunicationWithRenalPelvis = false;
    this.isBeanShaped = false;
    this.isInfiltration = false;
    this.isInfiltrationRenalPelvis = false;
    this.isInfiltrationPerirenalSpace = false;
    this.isInfiltrationMusculature = false;
    this.isInfiltrationAbdominalWall = false;
    this.isInfiltrationAdrenalGlands = false;
    this.isInfiltrationLiver = false;
    this.isInfiltrationSpleen = false;
    this.isInfiltrationIntestine = false;
    this.isInfiltrationBones = false;
    this.excretoryPhase = 0;
    this.isSpokeWheelEnhancementPattern = false;
    this.isDiffusionRestriction = false;
    this.isCapsule = false;
    this.isAssociatedFindingsNodularThickening = false;
    this.isAssociatedFindingsCalcification = false;
    this.isPseudoCapsularExtension = false;
    this.isInfiltrationPerirenalAdiposeTissue = false;
    this.isHemorrhage = false;
    this.isLocoregionalLN = false;
    this.sadInMm = null;
    this.isVascularInfiltration = false;
    this.vascularInfiltrationType = NormVariantOrAnomalyTypeEnum.None;
    this.extensionType = ExtensionTypeEnum.None;
    this.isCompleteOcclusion = false;
    this.isIntramuralInfiltration = false;
    this.isRetroperitonealCollateralVessels = false;
    this.isFluidAroundCyst = false;
    this.dD1FollowUpMonths = null;
    this.dD1ModalityType = ModalityTypeEnum.None;
    this.dD2FollowUpMonths = null;
    this.dD2ModalityType = ModalityTypeEnum.None;
    this.dD3FollowUpMonths = null;
    this.dD3ModalityType = ModalityTypeEnum.None;
  }
}
