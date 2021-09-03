import {
  AnatomicVariantsOrPathologyType,
  CharacterizationType,
  FormType,
  SeverityType,
  ShapeType,
  SideType
} from '@enums/angiographyMRT/abdomen/common';
import { PortalVeinThrombosisType, LevelOfTheObstructionType } from '@enums/angiographyMRT/abdomen/liver-veins';
import {
  ArisesFromCeliacTrunkType,
  DirectOriginFromTheAbdominalAortaType,
  FurtherVariantsType,
  HepatomesentericTrunkType,
  IncompleteHepatomesentericTrunkType,
  MesentericVesselsLocalizationType
} from '@enums/angiographyMRT/abdomen/mesenteric-vessels';
import { DetailsType, PearlLikeChangesType, RenalArteryLocalizationType, StatusType } from '@enums/angiographyMRT/abdomen/renal-artery';
import { OrganSizeType } from '@enums/angiographyMRT/abdomen/renal-vein';

import { FindingType } from '@enums/angiographyMRT/abdomen/finding-type.enum';
import { FindingBase } from '@models/shared/finding/finding.base';

export class AbdomenFindingApiModel extends FindingBase {
  findingType: FindingType;

  // Common
  sideType: SideType;
  anatomicVariantsOrPathologyType: AnatomicVariantsOrPathologyType;
  severityType: SeverityType;
  isHemodynamicallyRelevant: boolean;
  diameterStenosisInMm: number;
  diameterNormalPoststenoticSegmentInMm: number;
  degreeOfStenosisAccordingToNASCETInPercentage: number;
  formType: FormType;
  lengthInMm: number;
  isShortLengthStenosis: boolean;
  isSuspicionOf: boolean;
  shapeType: ShapeType;
  maxDiameterInMm: number;
  characterizationType: CharacterizationType;
  isRenalVeinThrombosis: boolean;

  // RenalArtery
  detailsType: DetailsType;
  isCranial: boolean;
  isCaudal: boolean;
  isOrthotopicRenalVascularizarion: boolean;
  renalArteryLocalizationType: RenalArteryLocalizationType;
  isPrestenoticDilatation: boolean;
  isTandemStenosis: boolean;
  isDissection: boolean;
  isStent: boolean;
  stentLengthInMm: number;
  statusType: StatusType;
  isSubtleChanges: boolean;
  isPearlLikeChanges: boolean;
  pearlLikeChangesType: PearlLikeChangesType;
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
  isTransplantRenalArteryKinking: boolean;
  isTransplantRenalArteryTorsion: boolean;
  isClampingDamageWithAfferentArteryStenosis: boolean;
  isVenousInfarction: boolean;
  isLimitedContrastOfTheRenalParenchyma: boolean;
  isResidualContrast: boolean;

  // RenalVein
  isAnatomicVariants: boolean;
  isMultipleRenalVeins: boolean;
  isDecreasedPerfusion: boolean;
  isT1wHyperintenseCorticalHaemorrhages: boolean;
  organSizeType: OrganSizeType;
  isRetroaortalCourseLeftRenalVein: boolean;
  isBifurcatedPreAndRetroarticLeftRenalVein: boolean;

  // MesentericVessels
  directOriginFromTheAbdominalAortaType: DirectOriginFromTheAbdominalAortaType;
  isHepatomesentericTrunk: boolean;
  hepatomesentericTrunkType: HepatomesentericTrunkType;
  incompleteHepatomesentericTrunkType: IncompleteHepatomesentericTrunkType;
  arisesFromCeliacTrunkType: ArisesFromCeliacTrunkType;
  isLeftHepaticArteryArisesFromLeftGastricArtery: boolean;
  furtherVariantsType: FurtherVariantsType;
  mesentericVesselsLocalizationType: MesentericVesselsLocalizationType;
  isStenosisOrOcclusion: boolean;
  isRiolanAnastomosis: boolean;
  isCollateralFlowViaPancreaticoduodenalArcades: boolean;
  isMultifocalChanges: boolean;
  isFibromuscularDysplasia: boolean;

  // LiverVeins
  isSignsOfPortalHypertension: boolean;
  maxPortalVeinDiameterInMm: number;
  isPortalVeinThrombosis: boolean;
  portalVeinThrombosisType: PortalVeinThrombosisType;
  minVesselDiameterInMm: number;
  isObstructionHepatovenousOutflow: boolean;
  levelOfTheObstructionType: LevelOfTheObstructionType;
  isPersistentDottedHyperContrastEnhancement: boolean;
  isDecreasedPerfusionOfTheLiverPeriphery: boolean;
  isCollaterals: boolean;
  isPortoportalCollaterals: boolean;
  isPortosystemicCollateralPathways: boolean;
  isProminentPeriportalCollaterals: boolean;

  constructor() {
    super();

    this.findingType = FindingType.None;
    this.sideType = SideType.None;
    this.anatomicVariantsOrPathologyType = AnatomicVariantsOrPathologyType.None;
    this.severityType = SeverityType.None;
    this.isHemodynamicallyRelevant = false;
    this.diameterStenosisInMm = null;
    this.diameterNormalPoststenoticSegmentInMm = null;
    this.degreeOfStenosisAccordingToNASCETInPercentage = null;
    this.formType = FormType.None;
    this.lengthInMm = null;
    this.isShortLengthStenosis = false;
    this.isSuspicionOf = false;
    this.shapeType = ShapeType.None;
    this.maxDiameterInMm = null;
    this.characterizationType = CharacterizationType.None;
    this.isRenalVeinThrombosis = false;
    this.detailsType = DetailsType.None;
    this.isCranial = false;
    this.isCaudal = false;
    this.isOrthotopicRenalVascularizarion = false;
    this.renalArteryLocalizationType = RenalArteryLocalizationType.None;
    this.isPrestenoticDilatation = false;
    this.isTandemStenosis = false;
    this.isDissection = false;
    this.isStent = false;
    this.stentLengthInMm = null;
    this.statusType = StatusType.None;
    this.isSubtleChanges = false;
    this.isPearlLikeChanges = false;
    this.pearlLikeChangesType = PearlLikeChangesType.None;
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
    this.isTransplantRenalArteryKinking = false;
    this.isTransplantRenalArteryTorsion = false;
    this.isClampingDamageWithAfferentArteryStenosis = false;
    this.isVenousInfarction = false;
    this.isLimitedContrastOfTheRenalParenchyma = false;
    this.isResidualContrast = false;
    this.isAnatomicVariants = false;
    this.isMultipleRenalVeins = false;
    this.isDecreasedPerfusion = false;
    this.isT1wHyperintenseCorticalHaemorrhages = false;
    this.organSizeType = OrganSizeType.None;
    this.isRetroaortalCourseLeftRenalVein = false;
    this.isBifurcatedPreAndRetroarticLeftRenalVein = false;
    this.directOriginFromTheAbdominalAortaType = DirectOriginFromTheAbdominalAortaType.None;
    this.isHepatomesentericTrunk = false;
    this.hepatomesentericTrunkType = HepatomesentericTrunkType.None;
    this.incompleteHepatomesentericTrunkType = IncompleteHepatomesentericTrunkType.None;
    this.arisesFromCeliacTrunkType = ArisesFromCeliacTrunkType.None;
    this.isLeftHepaticArteryArisesFromLeftGastricArtery = false;
    this.furtherVariantsType = FurtherVariantsType.None;
    this.mesentericVesselsLocalizationType = MesentericVesselsLocalizationType.None;
    this.isStenosisOrOcclusion = false;
    this.isRiolanAnastomosis = false;
    this.isCollateralFlowViaPancreaticoduodenalArcades = false;
    this.isMultifocalChanges = false;
    this.isFibromuscularDysplasia = false;
    this.isSignsOfPortalHypertension = false;
    this.maxPortalVeinDiameterInMm = null;
    this.isPortalVeinThrombosis = false;
    this.portalVeinThrombosisType = PortalVeinThrombosisType.None;
    this.minVesselDiameterInMm = null;
    this.isObstructionHepatovenousOutflow = false;
    this.levelOfTheObstructionType = LevelOfTheObstructionType.None;
    this.isPersistentDottedHyperContrastEnhancement = false;
    this.isDecreasedPerfusionOfTheLiverPeriphery = false;
    this.isCollaterals = false;
    this.isPortoportalCollaterals = false;
    this.isPortosystemicCollateralPathways = false;
    this.isProminentPeriportalCollaterals = false;
  }
}
