import { CapsuleType } from '@enums/elbowMRT/cartilage/capsule';
import { DetailsType, EtiologyType, OuterbridgeClassificationType } from '@enums/elbowMRT/cartilage/chondral-lesion';
import {
  CompleteRuptureLocalizationType,
  ExtentOfTearType,
  InstabilityRingTheoryType,
  LigamentsLocalizationType
} from '@enums/elbowMRT/cartilage/ligaments';
import {
  CharacterizationType,
  DetectionFragmentationType,
  EpiphysealJointsClassificationType,
  GeneralCharacterizationType,
  StagingType,
  ClassificationSubType
} from '@enums/elbowMRT/cartilage/osteochondral-lesion';
import { FindingBase } from '@models/shared/finding/finding.base';
import { CartilageLocationModel } from '../elbow/cartilage-location.model';
import { CartilagFindingTypeEnum } from '@enums/elbowMRT/cartilage/common/cartilag-finding-type.enum';

export class CartilageLigamentsCapsuleFindingUiModel extends FindingBase {
  findingType: CartilagFindingTypeEnum;

  // Common
  cartilageLocation: CartilageLocationModel;
  sizeInMm: number;
  secondPlaneInMm: number;
  thirdPlaneInMm: number;
  isBoneMarrowEdema: boolean;
  isJointEffusion: boolean;
  isThickening: boolean;

  // OsteochondralLesion
  characterizationType: CharacterizationType;
  isGeneral: boolean;
  generalCharacterizationType: GeneralCharacterizationType;
  isDetailsOsteochondralDefectLooseBody: boolean;
  detectionFragmentationType: DetectionFragmentationType;
  isIntraosseousCystsAdjacentToLesion: boolean;
  isLesionOutlinedByHighSignalFluid: boolean;
  stagingType: StagingType;
  epiphysealJointsClassificationType: EpiphysealJointsClassificationType;
  isHemarthros: boolean;
  classificationSubType: ClassificationSubType;

  // ChondralLesion
  etiologyType: EtiologyType;
  detailsType: DetailsType;
  outerbridgeClassificationType: OuterbridgeClassificationType;
  isSubchondralCysts: boolean;
  isLooseBody: boolean;
  isChondrocalcinosis: boolean;

  // Ligaments
  ligamentsLocalizationType: LigamentsLocalizationType;
  isAnteriorBundle: boolean;
  isPosteriorBundle: boolean;
  isTransversalBundle: boolean;
  isLesionOfThePronatorFlexorTendonComplex: boolean;
  extentOfTearType: ExtentOfTearType;
  isLocalization: boolean;
  completeRuptureLocalizationType: CompleteRuptureLocalizationType;
  isRetraction: boolean;
  isAdjacentSoftTissueEdema: boolean;
  isConcomitantInjuriesOfTheAdjacentMuscleEnthesis: boolean;
  isIllDefinedMargin: boolean;
  isIncreasedSignal: boolean;
  isMoreThan4MmDiameter: boolean;
  isTSign: boolean;
  isWavyAppearance: boolean;
  isRadialCollateralLigament: boolean;
  isLateralUlnarCollateralLigament: boolean;
  isAnnularLigament: boolean;
  isAccessoryLateralCollateralLigament: boolean;
  isAnconeusMuscleLesionExtensorTendonComplex: boolean;
  instabilityRingTheoryType: InstabilityRingTheoryType;

  // Capsule
  capsuleType: CapsuleType;
  isExtraarticularJointEffusion: boolean;
  isProminentPlicaHumeroradialis: boolean;
  isMoreThan3MmMaximumExtension: boolean;
  isIllDefined: boolean;
  isPosterolateral: boolean;
  isLateral: boolean;
  isAnterior: boolean;
  isLocalChondropathy: boolean;
  isLocalSynovialInflammation: boolean;
  isSynovitisWithPannusFormation: boolean;
  isSynovialCMEnhancement: boolean;
  isCartilageDestruction: boolean;

  constructor() {
    super();
    this.findingType = CartilagFindingTypeEnum.None;

    // Common
    this.cartilageLocation = new CartilageLocationModel();
    this.sizeInMm = null;
    this.secondPlaneInMm = null;
    this.thirdPlaneInMm = null;
    this.isBoneMarrowEdema = false;
    this.isJointEffusion = false;
    this.isThickening = false;

    // OsteochondralLesion
    this.characterizationType = CharacterizationType.None;
    this.isGeneral = false;
    this.generalCharacterizationType = GeneralCharacterizationType.None;
    this.isDetailsOsteochondralDefectLooseBody = false;
    this.detectionFragmentationType = DetectionFragmentationType.None;
    this.isIntraosseousCystsAdjacentToLesion = false;
    this.isLesionOutlinedByHighSignalFluid = false;
    this.stagingType = StagingType.None;
    this.epiphysealJointsClassificationType = EpiphysealJointsClassificationType.None;
    this.isHemarthros = false;
    this.classificationSubType = ClassificationSubType.None;

    // ChondralLesion
    this.etiologyType = EtiologyType.None;
    this.detailsType = DetailsType.None;
    this.outerbridgeClassificationType = OuterbridgeClassificationType.None;
    this.isSubchondralCysts = false;
    this.isLooseBody = false;
    this.isChondrocalcinosis = false;

    // Ligaments
    this.ligamentsLocalizationType = LigamentsLocalizationType.None;
    this.isAnteriorBundle = false;
    this.isPosteriorBundle = false;
    this.isTransversalBundle = false;
    this.isLesionOfThePronatorFlexorTendonComplex = false;
    this.extentOfTearType = ExtentOfTearType.None;
    this.isLocalization = false;
    this.completeRuptureLocalizationType = CompleteRuptureLocalizationType.None;
    this.isRetraction = false;
    this.isAdjacentSoftTissueEdema = false;
    this.isConcomitantInjuriesOfTheAdjacentMuscleEnthesis = false;
    this.isIllDefinedMargin = false;
    this.isIncreasedSignal = false;
    this.isMoreThan4MmDiameter = false;
    this.isTSign = false;
    this.isWavyAppearance = false;
    this.isRadialCollateralLigament = false;
    this.isLateralUlnarCollateralLigament = false;
    this.isAnnularLigament = false;
    this.isAccessoryLateralCollateralLigament = false;
    this.isAnconeusMuscleLesionExtensorTendonComplex = false;
    this.instabilityRingTheoryType = InstabilityRingTheoryType.None;

    // Capsule
    this.capsuleType = CapsuleType.None;
    this.isExtraarticularJointEffusion = false;
    this.isProminentPlicaHumeroradialis = false;
    this.isMoreThan3MmMaximumExtension = false;
    this.isIllDefined = false;
    this.isPosterolateral = false;
    this.isLateral = false;
    this.isAnterior = false;
    this.isLocalChondropathy = false;
    this.isLocalSynovialInflammation = false;
    this.isSynovitisWithPannusFormation = false;
    this.isSynovialCMEnhancement = false;
    this.isCartilageDestruction = false;
  }
}
