import { FindingBase } from '@models/shared/finding/finding.base';
import { AbdomenFindingTypeEnum } from '@enums/angiographyCT/abdomen/abdomen-finding-type.enum';
import { SideTypeEnum } from '@enums/shared/side-type.enum';
import {
  AnatomicVariantsOrPathologyTypeEnum,
  ArisesFromCeliacTrunkTypeEnum,
  CharacterizationTypeEnum,
  DetailsTypeEnum,
  DirectOriginFromTheAbdominalAortaTypeEnum,
  FurtherVariantsTypeEnum,
  HepatomesentericTrunkTypeEnum,
  IncompleteHepatomesentericTrunkTypeEnum,
  LevelOfTheObstructionTypeEnum,
  MesentericVesselsDifferentialDiagnosisTypeEnum,
  MesentericVesselsLocalizationTypeEnum,
  OrganSizeTypeEnum,
  PearlLikeChangesTypeEnum,
  PortalVeinThrombosisTypeEnum,
  RenalArteryLocalizationTypeEnum,
  SeverityTypeEnum,
  StatusTypeEnum
} from '@enums/angiographyCT/abdomen';
import { FormTypeEnum } from '@enums/shared/angiography/supraaortic-vessels/form-type.enum';
import { ShapeTypeEnum } from '@enums/shared/angiography/supraaortic-vessels/shape-type.enum';

export class AbdomenFindingUiModel extends FindingBase {
  findingType: AbdomenFindingTypeEnum;

  // Common

  sideType: SideTypeEnum;
  anatomicVariantsOrPathologyType: AnatomicVariantsOrPathologyTypeEnum;
  severityType: SeverityTypeEnum;
  isHemodynamicallyRelevant: boolean;
  diameterStenosisInMm: number;
  diameterNormalPoststenoticSegmentInMm: number;
  degreeOfStenosisAccordingToNASCETInPercentage: number;
  formType: FormTypeEnum;
  lengthInMm: number;
  isShortLengthStenosis: boolean;
  isSuspicionOf: boolean;
  shapeType: ShapeTypeEnum;
  maxDiameterInMm: number;
  characterizationType: CharacterizationTypeEnum;
  isRenalVeinThrombosis: boolean;

  // RenalArtery

  detailsType: DetailsTypeEnum;
  isCranial: boolean;
  isCaudal: boolean;
  isOrthotopicRenalVascularizarion: boolean;
  renalArteryLocalizationType: RenalArteryLocalizationTypeEnum;
  isPrestenoticDilatation: boolean;
  isTandemStenosis: boolean;
  isDissection: boolean;
  stentLengthInMm: number;
  statusType: StatusTypeEnum;
  isSubtleChanges: boolean;
  isPearlLikeChanges: boolean;
  pearlLikeChangesType: PearlLikeChangesTypeEnum;
  isAneurysmaticChanges: boolean;
  isInvolvementOfTheVisceralArteries: boolean;
  isSplenicArtery: boolean;
  isSuperiorMesenteryArtery: boolean;
  isInferiorMesenteryArtery: boolean;
  isThrombolization: boolean;
  isEccentricPartialThrombosis: boolean;
  isMarginalCalcifications: boolean;
  isMoreThanOneLesion: boolean;
  isTransplantRenalArteryStenosis: boolean;
  isTransplantRenalArteryStenosisAanular: boolean;
  isClipArtifacts: boolean;
  isTransplantRenalArteryKinking: boolean;
  isTransplantRenalArteryTorsion: boolean;
  isClampingDamageWithAfferentArteryStenosis: boolean;
  isVenousInfarction: boolean;
  isLimitedContrastOfTheRenalParenchyma: boolean;
  isResidualContrast: boolean;
  isQualityCalcification: boolean;
  isQualitySoftPlaque: boolean;

  // RenalVein

  isAnatomicVariants: boolean;
  isMultipleRenalVeins: boolean;
  isDecreasedPerfusion: boolean;
  isCorticalHemorrhages: boolean;
  organSizeType: OrganSizeTypeEnum;
  isRetroaortalCourseLeftRenalVein: boolean;
  isBifurcatedPreAndRetroarticLeftRenalVein: boolean;

  // MesentericVessels

  directOriginFromTheAbdominalAortaType: DirectOriginFromTheAbdominalAortaTypeEnum;
  isHepatomesentericTrunk: boolean;
  hepatomesentericTrunkType: HepatomesentericTrunkTypeEnum;
  incompleteHepatomesentericTrunkType: IncompleteHepatomesentericTrunkTypeEnum;
  arisesFromCeliacTrunkType: ArisesFromCeliacTrunkTypeEnum;
  isLeftHepaticArteryArisesFromLeftGastricArtery: boolean;
  furtherVariantsType: FurtherVariantsTypeEnum;
  mesentericVesselsLocalizationType: MesentericVesselsLocalizationTypeEnum;
  isStenosisOrOcclusion: boolean;
  isRiolanAnastomosis: boolean;
  isCollateralFlowViaPancreaticoduodenalArcades: boolean;
  isMultifocalChanges: boolean;
  isIschemicBowelWall: boolean;
  isFreeGas: boolean;
  isAscites: boolean;
  isHemorrhagic: boolean;
  isActiveBleeding: boolean;
  isDuodenum: boolean;
  isJejunum: boolean;
  isIleum: boolean;
  isCecum: boolean;
  isAscendingColon: boolean;
  isRightColonicFlexure: boolean;
  isTransverseColon: boolean;
  isLeftColonicFlexure: boolean;
  isDescendingColon: boolean;
  isSigmoidColon: boolean;
  mesentericVesselsDifferentialDiagnosisType: MesentericVesselsDifferentialDiagnosisTypeEnum;
  stenosisSeverityType: SeverityTypeEnum;

  // LiverVeins

  isSignsOfPortalHypertension: boolean;
  maxPortalVeinDiameterInMm: number;
  isPortalVeinThrombosis: boolean;
  portalVeinThrombosisType: PortalVeinThrombosisTypeEnum;
  minVesselDiameterInMm: number;
  isObstructionHepatovenousOutflow: boolean;
  levelOfTheObstructionType: LevelOfTheObstructionTypeEnum;
  isPersistentDottedHyperContrastEnhancement: boolean;
  isDecreasedPerfusionOfTheLiverPeriphery: boolean;
  isCollaterals: boolean;
  isPortoportalCollaterals: boolean;
  isPortosystemicCollateralPathways: boolean;
  isProminentPeriportalCollaterals: boolean;

  constructor() {
    super();
    this.findingType = AbdomenFindingTypeEnum.None;
    // Common

    this.sideType = SideTypeEnum.None;
    this.anatomicVariantsOrPathologyType = AnatomicVariantsOrPathologyTypeEnum.None;
    this.severityType = SeverityTypeEnum.None;
    this.isHemodynamicallyRelevant = false;
    this.diameterStenosisInMm = null;
    this.diameterNormalPoststenoticSegmentInMm = null;
    this.degreeOfStenosisAccordingToNASCETInPercentage = null;
    this.formType = FormTypeEnum.None;
    this.lengthInMm = null;
    this.isShortLengthStenosis = false;
    this.isSuspicionOf = false;
    this.shapeType = ShapeTypeEnum.None;
    this.maxDiameterInMm = null;
    this.characterizationType = CharacterizationTypeEnum.None;
    this.isRenalVeinThrombosis = false;

    // RenalArtery

    this.detailsType = DetailsTypeEnum.None;
    this.isCranial = false;
    this.isCaudal = false;
    this.isOrthotopicRenalVascularizarion = false;
    this.renalArteryLocalizationType = RenalArteryLocalizationTypeEnum.None;
    this.isPrestenoticDilatation = false;
    this.isTandemStenosis = false;
    this.isDissection = false;
    this.stentLengthInMm = null;
    this.statusType = StatusTypeEnum.None;
    this.isSubtleChanges = false;
    this.isPearlLikeChanges = false;
    this.pearlLikeChangesType = PearlLikeChangesTypeEnum.None;
    this.isAneurysmaticChanges = false;
    this.isInvolvementOfTheVisceralArteries = false;
    this.isSplenicArtery = false;
    this.isSuperiorMesenteryArtery = false;
    this.isInferiorMesenteryArtery = false;
    this.isThrombolization = false;
    this.isEccentricPartialThrombosis = false;
    this.isMarginalCalcifications = false;
    this.isMoreThanOneLesion = false;
    this.isTransplantRenalArteryStenosis = false;
    this.isTransplantRenalArteryStenosisAanular = false;
    this.isClipArtifacts = false;
    this.isTransplantRenalArteryKinking = false;
    this.isTransplantRenalArteryTorsion = false;
    this.isClampingDamageWithAfferentArteryStenosis = false;
    this.isVenousInfarction = false;
    this.isLimitedContrastOfTheRenalParenchyma = false;
    this.isResidualContrast = false;
    this.isQualityCalcification = false;
    this.isQualitySoftPlaque = false;

    // RenalVein

    this.isAnatomicVariants = false;
    this.isMultipleRenalVeins = false;
    this.isDecreasedPerfusion = false;
    this.isCorticalHemorrhages = false;
    this.organSizeType = OrganSizeTypeEnum.None;
    this.isRetroaortalCourseLeftRenalVein = false;
    this.isBifurcatedPreAndRetroarticLeftRenalVein = false;

    // MesentericVessels

    this.directOriginFromTheAbdominalAortaType = DirectOriginFromTheAbdominalAortaTypeEnum.None;
    this.isHepatomesentericTrunk = false;
    this.hepatomesentericTrunkType = HepatomesentericTrunkTypeEnum.None;
    this.incompleteHepatomesentericTrunkType = IncompleteHepatomesentericTrunkTypeEnum.None;
    this.arisesFromCeliacTrunkType = ArisesFromCeliacTrunkTypeEnum.None;
    this.isLeftHepaticArteryArisesFromLeftGastricArtery = false;
    this.furtherVariantsType = FurtherVariantsTypeEnum.None;
    this.mesentericVesselsLocalizationType = MesentericVesselsLocalizationTypeEnum.None;
    this.isStenosisOrOcclusion = false;
    this.isRiolanAnastomosis = false;
    this.isCollateralFlowViaPancreaticoduodenalArcades = false;
    this.isMultifocalChanges = false;
    this.isIschemicBowelWall = false;
    this.isFreeGas = false;
    this.isAscites = false;
    this.isHemorrhagic = false;
    this.isActiveBleeding = false;
    this.isDuodenum = false;
    this.isJejunum = false;
    this.isIleum = false;
    this.isCecum = false;
    this.isAscendingColon = false;
    this.isRightColonicFlexure = false;
    this.isTransverseColon = false;
    this.isLeftColonicFlexure = false;
    this.isDescendingColon = false;
    this.isSigmoidColon = false;
    this.mesentericVesselsDifferentialDiagnosisType = MesentericVesselsDifferentialDiagnosisTypeEnum.None;
    this.stenosisSeverityType = SeverityTypeEnum.None;

    // LiverVeins

    this.isSignsOfPortalHypertension = false;
    this.maxPortalVeinDiameterInMm = null;
    this.isPortalVeinThrombosis = false;
    this.portalVeinThrombosisType = PortalVeinThrombosisTypeEnum.None;
    this.minVesselDiameterInMm = null;
    this.isObstructionHepatovenousOutflow = false;
    this.levelOfTheObstructionType = LevelOfTheObstructionTypeEnum.None;
    this.isPersistentDottedHyperContrastEnhancement = false;
    this.isDecreasedPerfusionOfTheLiverPeriphery = false;
    this.isCollaterals = false;
    this.isPortoportalCollaterals = false;
    this.isPortosystemicCollateralPathways = false;
    this.isProminentPeriportalCollaterals = false;
  }
}
