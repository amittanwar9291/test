import {
  AoClassificationTypeEnum,
  BmeExpansionTumorLocationsTypeEnum,
  BonesClassificationTypeEnum,
  BonesDifferentialDiagnosisTypeEnum,
  BonesFindingTypeEnum,
  ComplexDislocationFracturesTypeEnum,
  DiagnosisTypeEnum,
  DirectionTypeEnum,
  DistributionTypeEnum,
  FractureFormDetailsTypeEnum,
  FractureFormSubTypeEnum,
  FractureFormTypeEnum,
  FractureTypeEnum,
  GraduationTypeEnum,
  LocalizationLongitudinalTypeEnum,
  LooseBodyTypeEnum,
  MonteggiaFractureTypeEnum,
  NotFurtherSpecifiedTypeEnum,
  StadiumTypeEnum
} from '@enums/elbowMRT/bones';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { BonesFindingBaseUiModel } from './bones-finding-base.ui.model';

export class BonesFindingUiModel extends BonesFindingBaseUiModel {
  findingType: BonesFindingTypeEnum;

  // Common
  bmeExpansionTumorLocation: BmeExpansionTumorLocationsTypeEnum;
  isSubordinated: boolean;
  isHumerusLateralEpicondyle: boolean;
  isHumerusMedialEpicondyle: boolean;
  isUlnaProximal: boolean;

  // StandardVariantOrMalformation
  isSupracondylarProcess: boolean;
  isSupratrochlearFormen: boolean;
  isRadioulnarSynostosis: boolean;

  // Fracture
  fractureType: FractureTypeEnum;
  classificationType: BonesClassificationTypeEnum;
  graduationType: GraduationTypeEnum;
  aoClassificationType: AoClassificationTypeEnum;
  notFurtherSpecifiedType: NotFurtherSpecifiedTypeEnum;
  fractureFormType: FractureFormTypeEnum;
  fractureFormDetailsType: FractureFormDetailsTypeEnum;
  localizationLongitudinalType: LocalizationLongitudinalTypeEnum;
  isMultifragmentaryFracture: boolean;
  fractureFormSubType: FractureFormSubTypeEnum;

  // Luxation
  directionType: DirectionTypeEnum;
  isDirectionStatusPost: boolean;
  complexDislocationFracturesType: ComplexDislocationFracturesTypeEnum;
  isComplexDislocationFracturesStatusPost: boolean;
  monteggiaFractureType: MonteggiaFractureTypeEnum;

  // BoneMarrowEdema
  isRadialHead: boolean;
  isOlecranon: boolean;
  distributionType: DistributionTypeEnum;
  isSubchondralFracture: boolean;
  isImpaction: boolean;
  isApophysitis: boolean;
  isEpicondylitisHumeri: boolean;
  isRadial: boolean;
  isUlnar: boolean;

  // Arthrosis
  isOsteophytes: boolean;
  isSubchondralSclerosis: boolean;
  isJointSpaceNarrowing: boolean;
  isLooseBody: boolean;
  looseBodyMaxDiameterInMm: number;
  isMoreThanOneLooseBody: boolean;
  looseBodyType: LooseBodyTypeEnum;

  // Osteomyelitis
  isIntraosseousAbscess: boolean;
  intraosseousAbscessSizeInMm: number;
  intraosseousAbscessSecondPlaneInMm: number;
  intraosseousAbscessThirdPlaneInMm: number;
  isPenumbraSign: boolean;
  isPeripheralContrastEnhancement: boolean;
  isIntraosseousAbscessMoreThanOneLesion: boolean;
  isSequester: boolean;
  sequesterSizeInMm: number;
  sequesterSecondPlaneInMm: number;
  sequesterThirdPlaneInMm: number;
  isNoCmEnhancement: boolean;
  isSequesterMoreThanOneLesion: boolean;
  isThinningScalopping: boolean;
  isDestruction: boolean;
  isOsteolysis: boolean;
  isBoneApposition: boolean;
  isPeriostealThickening: boolean;
  isPeriostealRupture: boolean;
  isSubperiostealAbscess: boolean;
  subperiostealAbscessSizeInMm: number;
  subperiostealAbscessSecondPlaneInMm: number;
  subperiostealAbscessThirdPlaneInMm: number;
  stadiumType: StadiumTypeEnum;
  differentialDiagnosisType: BonesDifferentialDiagnosisTypeEnum;

  // Mass
  descriptionType: DescriptionTypeEnum;
  isHumerusDistal: boolean;
  isRadiusProximal: boolean;
  extensionSizeInMm: number;
  extensionSecondPlaneInMm: number;
  extensionThirdPlaneInMm: number;
  isBoneMarrowEdemae: boolean;
  differentialDiagnosis1: DiagnosisTypeEnum;
  isSuspectedDiagnosis: boolean;
  differentialDiagnosis2: DiagnosisTypeEnum;
  differentialDiagnosis3: DiagnosisTypeEnum;

  constructor() {
    super();
    this.findingType = BonesFindingTypeEnum.None;
    this.bmeExpansionTumorLocation = BmeExpansionTumorLocationsTypeEnum.None;
    this.isSubordinated = false;
    this.isHumerusLateralEpicondyle = false;
    this.isHumerusMedialEpicondyle = false;
    this.isUlnaProximal = false;
    this.isSupracondylarProcess = false;
    this.isSupratrochlearFormen = false;
    this.isRadioulnarSynostosis = false;
    this.fractureType = FractureTypeEnum.None;
    this.classificationType = BonesClassificationTypeEnum.None;
    this.graduationType = GraduationTypeEnum.None;
    this.aoClassificationType = AoClassificationTypeEnum.None;
    this.notFurtherSpecifiedType = NotFurtherSpecifiedTypeEnum.None;
    this.fractureFormType = FractureFormTypeEnum.None;
    this.fractureFormDetailsType = FractureFormDetailsTypeEnum.None;
    this.localizationLongitudinalType = LocalizationLongitudinalTypeEnum.None;
    this.isMultifragmentaryFracture = false;
    this.fractureFormSubType = FractureFormSubTypeEnum.None;
    this.directionType = DirectionTypeEnum.None;
    this.isDirectionStatusPost = false;
    this.complexDislocationFracturesType = ComplexDislocationFracturesTypeEnum.None;
    this.isComplexDislocationFracturesStatusPost = false;
    this.monteggiaFractureType = MonteggiaFractureTypeEnum.None;
    this.isRadialHead = false;
    this.isOlecranon = false;
    this.distributionType = DistributionTypeEnum.None;
    this.isSubchondralFracture = false;
    this.isImpaction = false;
    this.isApophysitis = false;
    this.isEpicondylitisHumeri = false;
    this.isRadial = false;
    this.isUlnar = false;
    this.isOsteophytes = false;
    this.isSubchondralSclerosis = false;
    this.isJointSpaceNarrowing = false;
    this.isLooseBody = false;
    this.looseBodyMaxDiameterInMm = null;
    this.isMoreThanOneLooseBody = false;
    this.looseBodyType = LooseBodyTypeEnum.None;
    this.isIntraosseousAbscess = false;
    this.intraosseousAbscessSizeInMm = null;
    this.intraosseousAbscessSecondPlaneInMm = null;
    this.intraosseousAbscessThirdPlaneInMm = null;
    this.isPenumbraSign = false;
    this.isPeripheralContrastEnhancement = false;
    this.isIntraosseousAbscessMoreThanOneLesion = false;
    this.isSequester = false;
    this.sequesterSizeInMm = null;
    this.sequesterSecondPlaneInMm = null;
    this.sequesterThirdPlaneInMm = null;
    this.isNoCmEnhancement = false;
    this.isSequesterMoreThanOneLesion = false;
    this.isThinningScalopping = false;
    this.isDestruction = false;
    this.isOsteolysis = false;
    this.isBoneApposition = false;
    this.isPeriostealThickening = false;
    this.isPeriostealRupture = false;
    this.isSubperiostealAbscess = false;
    this.subperiostealAbscessSizeInMm = null;
    this.subperiostealAbscessSecondPlaneInMm = null;
    this.subperiostealAbscessThirdPlaneInMm = null;
    this.stadiumType = StadiumTypeEnum.None;
    this.differentialDiagnosisType = BonesDifferentialDiagnosisTypeEnum.None;
    this.descriptionType = DescriptionTypeEnum.None;
    this.isHumerusDistal = false;
    this.isRadiusProximal = false;
    this.extensionSizeInMm = null;
    this.extensionSecondPlaneInMm = null;
    this.extensionThirdPlaneInMm = null;
    this.isBoneMarrowEdemae = false;
    this.differentialDiagnosis1 = DiagnosisTypeEnum.None;
    this.isSuspectedDiagnosis = false;
    this.differentialDiagnosis2 = DiagnosisTypeEnum.None;
    this.differentialDiagnosis3 = DiagnosisTypeEnum.None;
  }
}
