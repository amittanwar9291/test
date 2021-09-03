import { FindingBase } from '@models/shared/finding/finding.base';

import { TearTypeEnum } from '@enums/elbowMRT/musles-and-tendons/tear-type.enum';
import { TendinopathyPronatorThickeningTypeEnum } from '@enums/elbowMRT/musles-and-tendons/tendinopathy-pronator-thickening-type.enum';
import { ScopeTypeEnum } from '@enums/elbowMRT/musles-and-tendons/scope-type.enum';
import { LocalizationWithinTheMuscleTypeEnum } from '@enums/elbowMRT/musles-and-tendons/localization-within-the-muscle-type.enum';
import { ClassificationMunichConsensusTypeEnum } from '@enums/elbowMRT/musles-and-tendons/classification-munich-consensus-type.enum';
import { PathologyTypeEnum } from '@enums/elbowMRT/musles-and-tendons/pathology-type.enum';
import { MuscularAtrophyTypeEnum } from '@enums/elbowMRT/musles-and-tendons/muscular-atrophy-type.enum';
import { HematomaCharacterizationTypeEnum } from '@enums/elbowMRT/musles-and-tendons/hematoma-characterization-type.enum';
import { LocalizationTypeEnum } from '@enums/elbowMRT/musles-and-tendons/localization-type.enum';
import { MusclesAndTendonsFindingTypeEnum } from '@enums/elbowMRT/musles-and-tendons/muscles-and-tendons-finding-type.enum';
import { BicipitalAponeurosisTypeEnum } from '@enums/elbowMRT/musles-and-tendons/bicipital-aponeurosis-type.enum';

export class TendonsAndMusclesFindingUiModel extends FindingBase {
  findingType: MusclesAndTendonsFindingTypeEnum;

  // Common
  pathologyType: PathologyTypeEnum;
  scopeType: ScopeTypeEnum;
  isBonyAvulsion: boolean;
  retractionInMm: number;
  isHematoma: boolean;

  // Epicondylitis
  localizationType: LocalizationTypeEnum;
  isLateralJointCapsuleThickening: boolean;
  isEnthesiopathyDeepExtensorTendons: boolean;
  isT2wHyperintensity: boolean;
  isDetailsThickening: boolean;
  isEnthesiopathyRestrictedTendonExtensorCarpiRadialisBrevisMuscle: boolean;
  isRuptureDeepExtensorTendons: boolean;
  tearOfDeepExtensorType: TearTypeEnum;
  isRetraction: boolean;
  isRuptureRestrictedTendonExtensorCarpiRadialisBrevisMuscle: boolean;
  isLigamentThickening: boolean;
  isRupture: boolean;
  isRadialCollateralLigamentThickening: boolean;
  isRadialCollateralLigamentRupture: boolean;
  isFocalBoneMarrowEdema: boolean;
  isBonyErosion: boolean;
  isEnthesiophytes: boolean;
  isPeritendinousEdema: boolean;
  isVascularization: boolean;
  isArticularEffusion: boolean;
  isBursitis: boolean;
  isNecrosisSign: boolean;
  isThickeningJointCapsuleMedial: boolean;
  isUlnarNerveNeuritis: boolean;
  isEnthesiopathyFlexorOrPronatorTendons: boolean;
  tendinopathyPronatorThickeningType: TendinopathyPronatorThickeningTypeEnum;
  isTendonTear: boolean;
  tendonTearType: TearTypeEnum;
  isCompleteRuptureRetraction: boolean;
  completeRuptureRetractionType: TendinopathyPronatorThickeningTypeEnum;
  isThickening: boolean;
  isMCLRupture: boolean;

  // LesionOfTheDistalBicepsTendon
  isSoftTissueEdema: boolean;
  isPartialRuptureMoreThan50Percent: boolean;
  bicipitalAponeurosisType: BicipitalAponeurosisTypeEnum;
  isBursitisBicipitoradialis: boolean;
  isBoneMarrowEdema: boolean;

  // LesionOfTheTricepsTendon
  isSuperficial: boolean;
  isDeep: boolean;
  isBursitisOlecranii: boolean;

  // Musculature
  localizationMuscleCompartmentsType: string;
  localizationWithinMuscleType: LocalizationWithinTheMuscleTypeEnum;
  classificationMunichConsensusType: ClassificationMunichConsensusTypeEnum;
  isMuscleLesion: boolean;
  isRuptureDiameterBelow5Mm: boolean;
  isCrossDiameterRuptureOverOrEqual5Mm: boolean;
  isWavyAppearanceOfTheFibers: boolean;
  isIntracorticalEdema: boolean;
  isFattyInfiltration: boolean;
  isMuscularAtrophy: boolean;
  muscularAtrophyType: MuscularAtrophyTypeEnum;
  isApophysitis: boolean;
  isFascialLaceration: boolean;
  isMuscleHerniation: boolean;
  isIntramuscular: boolean;
  isInterfascial: boolean;
  isIntermuscular: boolean;
  signalT2w: number;
  signalT1w: number;
  hematomaCharacterizationType: HematomaCharacterizationTypeEnum;

  constructor() {
    super();
    this.findingType = MusclesAndTendonsFindingTypeEnum.None;

    // Common
    this.pathologyType = PathologyTypeEnum.None;
    this.scopeType = ScopeTypeEnum.None;
    this.isBonyAvulsion = false;
    this.retractionInMm = null;
    this.isHematoma = false;

    // Epicondylitis
    this.localizationType = LocalizationTypeEnum.None;
    this.isLateralJointCapsuleThickening = false;
    this.isEnthesiopathyDeepExtensorTendons = false;
    this.isT2wHyperintensity = false;
    this.isDetailsThickening = false;
    this.isEnthesiopathyRestrictedTendonExtensorCarpiRadialisBrevisMuscle = false;
    this.isThickening = false;
    this.isRuptureDeepExtensorTendons = false;
    this.tearOfDeepExtensorType = TearTypeEnum.None;
    this.isRetraction = false;
    this.isRuptureRestrictedTendonExtensorCarpiRadialisBrevisMuscle = false;
    this.isLigamentThickening = false;
    this.isRupture = false;
    this.isRadialCollateralLigamentThickening = false;
    this.isRadialCollateralLigamentRupture = false;
    this.isFocalBoneMarrowEdema = false;
    this.isBonyErosion = false;
    this.isEnthesiophytes = false;
    this.isPeritendinousEdema = false;
    this.isVascularization = false;
    this.isArticularEffusion = false;
    this.isBursitis = false;
    this.isNecrosisSign = false;
    this.isThickeningJointCapsuleMedial = false;
    this.isUlnarNerveNeuritis = false;
    this.isEnthesiopathyFlexorOrPronatorTendons = false;
    this.tendinopathyPronatorThickeningType = TendinopathyPronatorThickeningTypeEnum.None;
    this.isTendonTear = false;
    this.tendonTearType = TearTypeEnum.None;
    this.isCompleteRuptureRetraction = false;
    this.completeRuptureRetractionType = TendinopathyPronatorThickeningTypeEnum.None;
    this.isMCLRupture = false;

    // LesionOfTheDistalBicepsTendon
    this.pathologyType = PathologyTypeEnum.None;
    this.isSoftTissueEdema = false;
    this.isPartialRuptureMoreThan50Percent = false;
    this.bicipitalAponeurosisType = BicipitalAponeurosisTypeEnum.None;
    this.isBursitisBicipitoradialis = false;
    this.isBoneMarrowEdema = false;

    // LesionOfTheTricepsTendon
    this.isSuperficial = false;
    this.isDeep = false;
    this.isBursitisOlecranii = false;

    // Musculature
    this.localizationMuscleCompartmentsType = 'None';
    this.localizationWithinMuscleType = LocalizationWithinTheMuscleTypeEnum.None;
    this.classificationMunichConsensusType = ClassificationMunichConsensusTypeEnum.None;
    this.isMuscleLesion = false;
    this.isRuptureDiameterBelow5Mm = false;
    this.isCrossDiameterRuptureOverOrEqual5Mm = false;
    this.isWavyAppearanceOfTheFibers = false;
    this.isIntracorticalEdema = false;
    this.isFattyInfiltration = false;
    this.isMuscularAtrophy = false;
    this.muscularAtrophyType = MuscularAtrophyTypeEnum.None;
    this.isApophysitis = false;
    this.isFascialLaceration = false;
    this.isMuscleHerniation = false;
    this.isIntramuscular = false;
    this.isInterfascial = false;
    this.isIntermuscular = false;
    this.signalT2w = 0;
    this.signalT1w = 0;
    this.hematomaCharacterizationType = HematomaCharacterizationTypeEnum.None;
  }
}
