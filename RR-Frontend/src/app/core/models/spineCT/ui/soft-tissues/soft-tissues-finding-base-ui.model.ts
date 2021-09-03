import { FindingBase } from '@models/shared/finding/finding.base';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { SoftTissuesFindingTypeEnum } from '@enums/spineCT/soft-tissues/soft-tissues-finding-type.enum';
import { CharacterizationTypeEnum } from '@enums/spineCT/soft-tissues/characterization-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { SoftTissuesDiagnosisTypeEnum } from '@enums/spineCT/soft-tissues/paraspinal-mass/soft-tissues-diagnosis-type.enum';
import { HistologicallyProvenTypeEnum } from '@enums/spineCT/soft-tissues/paraspinal-mass/histologically-proven-type.enum';
import { MarginTypeEnum } from '@enums/spineCT/soft-tissues/paraspinal-mass/margin-type.enum';
import { HomogeneityTypeEnum } from '@enums/spineCT/soft-tissues/paraspinal-mass/homogeneity-type.enum';
import { ShapeTypeEnum } from '@enums/spineCT/soft-tissues/paraspinal-mass/shape-type.enum';
import { DensityTypeEnum } from '@enums/spineCT/soft-tissues/paraspinal-mass/density-type.enum';
import { CalcificationTypeEnum } from '@enums/spineCT/soft-tissues/paraspinal-mass/calcification-type.enum';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/spineCT/soft-tissues/paraspinal-mass/contrast-enhancement-quantitative-type.enum';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/spineCT/soft-tissues/paraspinal-mass/contrast-enhancement-distribution-type.enum';
import { AffectedVesselOrUreterTypeEnum } from '@enums/spineCT/soft-tissues/vessels-ureter/affected-vessel-or-ureter-type.enum';
import { PathologyTypeEnum } from '@enums/spineCT/soft-tissues/vessels-ureter/pathology-type.enum';
import { SideTypeEnum } from '@enums/shared/side-type.enum';
import { MuscularAtrophyTypeEnum } from '@enums/spineCT/soft-tissues/paravertebral-muscles/muscular-atrophy-type.enum';
import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';
import { AxialLocation } from '@models/shared/spine/localizers/axial-location.model';
import { SpineDirectionalLocation } from '@models/shared/spine/localizers/spine-directional-location.model';

export class SoftTissuesFindingBaseUiModel extends FindingBase {
  findingType: SoftTissuesFindingTypeEnum;

  // Common

  maxDiameterInMm: number;
  characterizationType: CharacterizationTypeEnum;
  isCalcification: boolean;
  referencePicture: ReferencePictureUiModel;

  // ParaspinalMass

  descriptionType: DescriptionTypeEnum;
  differentialDiagnosis: SoftTissuesDiagnosisTypeEnum;
  isHistologicallyProven: boolean;
  histologicallyProvenType: HistologicallyProvenTypeEnum;
  spineLocation: SpineLocation;
  spineAxialLocation: AxialLocation;
  secondPlaneInMm: number;
  thirdPlaneInMm: number;
  marginType: MarginTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  shapeType: ShapeTypeEnum;
  densityType: DensityTypeEnum;
  isGasInclusion: boolean;
  measurementInHU: number;
  calcificationType: CalcificationTypeEnum;
  isSclerosis: boolean;
  isSepta: boolean;
  isIntralesionalFat: boolean;
  isCystic: boolean;
  isFluidLevel: boolean;
  isCapsuleOrMembrane: boolean;
  isMassEffect: boolean;
  isInfiltration: boolean;
  isBones: boolean;
  isMuscle: boolean;
  isNerveRoot: boolean;
  spineLocationBones: SpineDirectionalLocation;
  isUrether: boolean;
  isUretherRight: boolean;
  isUretherLeft: boolean;
  isVessels: boolean;
  isSurroundinginflammatoryReaction: boolean;
  isCommunicationWithTheIntraduralSpace: boolean;
  contrastEnhancementQuantitativeType: ContrastEnhancementQuantitativeTypeEnum;
  contrastEnhancementHomogeneityType: HomogeneityTypeEnum;
  contrastEnhancementDistributionType: ContrastEnhancementDistributionTypeEnum;
  differentialDiagnosis1: SoftTissuesDiagnosisTypeEnum;
  isSuspicionOf: boolean;
  differentialDiagnosis2: SoftTissuesDiagnosisTypeEnum;
  isSubordinate: boolean;
  isMoreThanOneLesion: boolean;
  moreThanOneLesionSpineLocation: SpineLocation;

  // LymphNodes

  isCervical: boolean;
  isCervicalRight: boolean;
  isCervicalLeft: boolean;
  isParaaortal: boolean;
  isAortocaval: boolean;
  isParailiacal: boolean;
  isParailiacalRight: boolean;
  isParailiacalLeft: boolean;
  isPresacral: boolean;
  isPresacralRight: boolean;
  isPresacralLeft: boolean;
  isInguinal: boolean;
  isInguinalRight: boolean;
  isInguinalLeft: boolean;
  isFemoral: boolean;
  isFemoralRight: boolean;
  isFemoralLeft: boolean;
  largestLymphNodeSADInMm: number;

  // VesselsUreter

  affectedVesselOrUreterType: AffectedVesselOrUreterTypeEnum;
  isAffectedVesselOrUreterRight: boolean;
  rightPathologyType: PathologyTypeEnum;
  isAffectedVesselOrUreterLeft: boolean;
  leftPathologyType: PathologyTypeEnum;
  pathologyType: PathologyTypeEnum;
  rightMaxDiameterInMm: number;
  leftMaxDiameterInMm: number;

  // ParavertebralMuscles

  isLongissimusCapitisMuscle: boolean;
  longissimusCapitisMuscleSideType: SideTypeEnum;
  isLevatorScapulaeMuscle: boolean;
  levatorScapulaeMuscleSideType: SideTypeEnum;
  isSemispinalisColliMuscle: boolean;
  semispinalisColliMuscleSideType: SideTypeEnum;
  isSemispinalisCapitisMuscle: boolean;
  semispinalisCapitisMuscleSideType: SideTypeEnum;
  isSpleniusCapitisMuscle: boolean;
  spleniusCapitisMuscleSideType: SideTypeEnum;
  isTrapeziusMuscle: boolean;
  isCervicalSpineAutochthonous: boolean;
  cervicalSpineAutochthonousSideType: SideTypeEnum;
  isThoracicOrLumbarSpineAutochthonous: boolean;
  thoracicOrLumbarSpineAutochthonousSideType: SideTypeEnum;
  isIliocostalisMuscle: boolean;
  iliocostalisMuscleSideType: SideTypeEnum;
  isLongissimusMuscle: boolean;
  longissimusMuscleSideType: SideTypeEnum;
  isQuadratusLumborumMuscle: boolean;
  quadratusLumborumMuscleSideType: SideTypeEnum;
  isPsoasMajorMuscle: boolean;
  psoasMajorMuscleSideType: SideTypeEnum;
  isMultifidusMuscle: boolean;
  multifidusMuscleSideType: SideTypeEnum;
  isHematoma: boolean;
  isIntramuscular: boolean;
  isInterfascial: boolean;
  isIntermuscular: boolean;
  isFattyDegeneration: boolean;
  isMuscularHypotrophy: boolean;
  isMuscularAtrophy: boolean;
  muscularAtrophyType: MuscularAtrophyTypeEnum;
  isSuperinfection: boolean;

  constructor() {
    super();
    this.findingType = SoftTissuesFindingTypeEnum.None;

    // Common

    this.maxDiameterInMm = null;
    this.characterizationType = CharacterizationTypeEnum.None;
    this.isCalcification = false;
    this.isSubordinate = false;
    this.referencePicture = new ReferencePictureUiModel();

    // ParaspinalMass

    this.descriptionType = DescriptionTypeEnum.None;
    this.differentialDiagnosis = SoftTissuesDiagnosisTypeEnum.None;
    this.isHistologicallyProven = false;
    this.histologicallyProvenType = HistologicallyProvenTypeEnum.None;
    this.spineLocation = new SpineLocation();
    this.spineAxialLocation = new AxialLocation();
    this.secondPlaneInMm = null;
    this.thirdPlaneInMm = null;
    this.marginType = MarginTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.shapeType = ShapeTypeEnum.None;
    this.densityType = DensityTypeEnum.None;
    this.isGasInclusion = false;
    this.measurementInHU = null;
    this.calcificationType = CalcificationTypeEnum.None;
    this.isSclerosis = false;
    this.isSepta = false;
    this.isIntralesionalFat = false;
    this.isCystic = false;
    this.isFluidLevel = false;
    this.isCapsuleOrMembrane = false;
    this.isMassEffect = false;
    this.isInfiltration = false;
    this.isBones = false;
    this.isMuscle = false;
    this.isNerveRoot = false;
    this.spineLocationBones = new SpineDirectionalLocation();
    this.isUrether = false;
    this.isUretherRight = false;
    this.isUretherLeft = false;
    this.isVessels = false;
    this.isSurroundinginflammatoryReaction = false;
    this.isCommunicationWithTheIntraduralSpace = false;
    this.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
    this.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
    this.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
    this.differentialDiagnosis1 = SoftTissuesDiagnosisTypeEnum.None;
    this.isSuspicionOf = false;
    this.differentialDiagnosis2 = SoftTissuesDiagnosisTypeEnum.None;
    this.isSubordinate = false;
    this.isMoreThanOneLesion = false;
    this.moreThanOneLesionSpineLocation = new SpineLocation();

    // LymphNodes

    this.isCervical = false;
    this.isCervicalRight = false;
    this.isCervicalLeft = false;
    this.isParaaortal = false;
    this.isAortocaval = false;
    this.isParailiacal = false;
    this.isParailiacalRight = false;
    this.isParailiacalLeft = false;
    this.isPresacral = false;
    this.isPresacralRight = false;
    this.isPresacralLeft = false;
    this.isInguinal = false;
    this.isInguinalRight = false;
    this.isInguinalLeft = false;
    this.isFemoral = false;
    this.isFemoralRight = false;
    this.isFemoralLeft = false;
    this.largestLymphNodeSADInMm = null;

    // VesselsUreter

    this.affectedVesselOrUreterType = AffectedVesselOrUreterTypeEnum.None;
    this.isAffectedVesselOrUreterRight = false;
    this.rightPathologyType = PathologyTypeEnum.None;
    this.isAffectedVesselOrUreterLeft = false;
    this.leftPathologyType = PathologyTypeEnum.None;
    this.pathologyType = PathologyTypeEnum.None;
    this.rightMaxDiameterInMm = null;
    this.leftMaxDiameterInMm = null;

    // ParavertebralMuscles

    this.isLongissimusCapitisMuscle = false;
    this.longissimusCapitisMuscleSideType = SideTypeEnum.None;
    this.isLevatorScapulaeMuscle = false;
    this.levatorScapulaeMuscleSideType = SideTypeEnum.None;
    this.isSemispinalisColliMuscle = false;
    this.semispinalisColliMuscleSideType = SideTypeEnum.None;
    this.isSemispinalisCapitisMuscle = false;
    this.semispinalisCapitisMuscleSideType = SideTypeEnum.None;
    this.isSpleniusCapitisMuscle = false;
    this.spleniusCapitisMuscleSideType = SideTypeEnum.None;
    this.isTrapeziusMuscle = false;
    this.isCervicalSpineAutochthonous = false;
    this.cervicalSpineAutochthonousSideType = SideTypeEnum.None;
    this.isThoracicOrLumbarSpineAutochthonous = false;
    this.thoracicOrLumbarSpineAutochthonousSideType = SideTypeEnum.None;
    this.isIliocostalisMuscle = false;
    this.iliocostalisMuscleSideType = SideTypeEnum.None;
    this.isLongissimusMuscle = false;
    this.longissimusMuscleSideType = SideTypeEnum.None;
    this.isQuadratusLumborumMuscle = false;
    this.quadratusLumborumMuscleSideType = SideTypeEnum.None;
    this.isPsoasMajorMuscle = false;
    this.psoasMajorMuscleSideType = SideTypeEnum.None;
    this.isMultifidusMuscle = false;
    this.multifidusMuscleSideType = SideTypeEnum.None;
    this.isHematoma = false;
    this.isIntramuscular = false;
    this.isInterfascial = false;
    this.isIntermuscular = false;
    this.isFattyDegeneration = false;
    this.isMuscularHypotrophy = false;
    this.isMuscularAtrophy = false;
    this.muscularAtrophyType = MuscularAtrophyTypeEnum.None;
    this.isSuperinfection = false;
  }
}
