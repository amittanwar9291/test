import { FindingBase } from '@models/shared/finding/finding.base';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { DiscFindingTypeEnum } from '@enums/spineCT/disc/disc-finding-type.enum';
import { NerveRootAffectionTypeEnum } from '@enums/spineCT/disc/nerve-root-affection-type.enum';
import { StenosisTypeEnum } from '@enums/spineCT/disc/stenosis-type.enum';
import { ProtrusionExtrusionDetailsTypeEnum } from '@enums/spineCT/disc/protrusion-extrusion-details-type.enum';
import { ExpansionIntoSpinalCanalTypeEnum } from '@enums/spineCT/disc/expansion-into-spinal-canal-type.enum';
import { GradeTypeEnum } from '@enums/spineCT/disc/grade-type.enum';
import { BulgingDetailsTypeEnum } from '@enums/spineCT/disc/bulging-details-type.enum';
import { SideTypeEnum } from '@enums/shared/side-type.enum';
import { DirectionOfMigrationTypeEnum } from '@enums/spineCT/disc/direction-of-migration-type.enum';
import { LevelCraniocaudalTypeEnum } from '@enums/spineCT/disc/level-craniocaudal-type.enum';
import { PathriaClassificationTypeEnum } from '@enums/spineCT/disc/pathria-classification-type.enum';
import { ForaminalStenosisTypeEnum } from '@enums/spineCT/disc/foraminal-stenosis-type.enum';
import { OsteoproliferativeReactionTypeEnum } from '@enums/spineCT/disc/osteoproliferative-reaction-type.enum';
import { ComplicationTypeEnum } from '@enums/spineCT/disc/complication-type.enum';
import { DiscDiagnosisTypeEnum } from '@enums/spineCT/disc/disc-diagnosis-type.enum';
import { SpineDiscLocationModel } from '@models/shared/spine/localizers/spine-disc-location.model';
import { AxialLocation } from '@models/shared/spine/localizers/axial-location.model';

export class DiscFindingUiModel extends FindingBase {
  findingType: DiscFindingTypeEnum;

  // Common

  spineLocation: SpineLocation;
  isDiscCalcification: boolean;
  isVacuumPhenomenon: boolean;
  nerveRootAffectionType: NerveRootAffectionTypeEnum;
  isNerveRootAffectionRight: boolean;
  isNerveRootAffectionLeft: boolean;
  stenosisType: StenosisTypeEnum;
  isStenosisRight: boolean;
  isStenosisLeft: boolean;
  protrusionExtrusionDetailsType: ProtrusionExtrusionDetailsTypeEnum;
  discLocation: SpineDiscLocationModel;
  expansionIntoSpinalCanalType: ExpansionIntoSpinalCanalTypeEnum;
  isSpinalCanalStenosis: boolean;
  gradeType: GradeTypeEnum;
  sagittalDiameterInMm: number;
  transverseDiameterSpinalCanalWidthInMm: number;
  isOsteochondrosis: boolean;
  isOsteophyteFormation: boolean;
  isFacetJointArthropathy: boolean;
  isFacetJointArthropathyRight: boolean;
  isFacetJointArthropathyLeft: boolean;
  isHypertrophy: boolean;
  isSynovialCyst: boolean;
  isSynovialCystRight: boolean;
  isSynovialCystLeft: boolean;
  maxDiameterInMm: number;
  isSubordinate: boolean;

  // BulgingDegeneration

  isNarrowingOfTheIntervertebralDisc: boolean;
  isBulging: boolean;
  bulgingDetailsType: BulgingDetailsTypeEnum;
  sideType: SideTypeEnum;

  // Migration

  directionOfMigrationType: DirectionOfMigrationTypeEnum;
  craniocaudalExtensionInMm: number;
  levelCraniocaudalType: LevelCraniocaudalTypeEnum;
  isRetrospondylophyte: boolean;

  // FacetJoints

  isOsteoarthritis: boolean;
  isUncovertebralArthrosis: boolean;
  isSpondylolysis: boolean;
  isLuxation: boolean;
  isFacetJointArthrosisRight: boolean;
  isFacetJointArthrosisLeft: boolean;
  pathriaClassificationType: PathriaClassificationTypeEnum;
  isCyst: boolean;
  isMultiple: boolean;
  isFacetJointArthrosisForaminalStenosis: boolean;
  facetJointArthrosisForaminalStenosisType: ForaminalStenosisTypeEnum;
  isForaminalStenosisRight: boolean;
  isForaminalStenosisLeft: boolean;
  isUncovertebralArthrosisForaminalStenosis: boolean;
  uncovertebralArthrosisForaminalStenosisType: ForaminalStenosisTypeEnum;
  isUncovertebralArthrosisRight: boolean;
  isUncovertebralArthrosisLeft: boolean;
  isSpondylolysisRight: boolean;
  isSpondylolysisLeft: boolean;
  isLuxationRight: boolean;
  isLuxationLeft: boolean;

  // Spondylodiscitis

  isIncreasedSizeOfTheDisc: boolean;
  isContrastEnhancementOfTheDisc: boolean;
  isIrregularityOfAdjacentVertebralEndplates: boolean;
  spineAxialLocation: AxialLocation;
  isParavertebralInflammatoryResponse: boolean;
  isSoftTissueEdema: boolean;
  isAbscess: boolean;
  isIntraspinal: boolean;
  intraspinalLargestDiameterInMm: number;
  isParavertebral: boolean;
  paravertebralLargestDiameterInMm: number;
  isLocatedAtPsoasMuscle: boolean;
  isActiveDiscitis: boolean;
  isSecondary: boolean;

  // Trauma

  isRuptureOfPosteriorLongitudinalLigament: boolean;
  isRuptureOfAnteriorLongitudinalLigament: boolean;
  isIntervertebralDiscRupture: boolean;
  isAnteriorColumn: boolean;
  isMiddleColumn: boolean;
  isPosteriorColumn: boolean;

  // RheumatoidDiseases

  isEnthesitisChronic: boolean;
  isOsteoproliferativeReaction: boolean;
  isOsteophyte: boolean;
  isSyndesmophyte: boolean;
  isParasyndesmophyte: boolean;
  isMixtaosteophyte: boolean;
  isHyperostoticSpondylophyte: boolean;
  osteoproliferativeReactionType: OsteoproliferativeReactionTypeEnum;
  isRomanusLesion: boolean;
  isSclerosis: boolean;
  isErosion: boolean;
  isAnderssonLesion: boolean;
  complicationType: ComplicationTypeEnum;
  isConsolidated: boolean;
  isOssificationOfTheIntervertebralSpace: boolean;
  isAnteriorLongitudinalLigament: boolean;
  isPosteriorLongitudinalLigament: boolean;
  isLiggFlava: boolean;
  isLiggInterspinosa: boolean;
  isLiggSupraspinosa: boolean;
  isLigNuchae: boolean;
  isCalcification: boolean;
  isOssification: boolean;
  isArthrosis: boolean;
  isArthritis: boolean;
  atlantodentalDistanceInMm: number;
  isAtlantoaxialJointErosions: boolean;
  isDensErosion: boolean;
  isDensProtrusion: boolean;
  referenceChamberlainLineInMm: number;
  isBasilarImpression: boolean;
  isSubluxation: boolean;
  isAnkylosis: boolean;
  isFacetJointsErosions: boolean;
  differentialDiagnosis: DiscDiagnosisTypeEnum;

  constructor() {
    super();

    this.findingType = DiscFindingTypeEnum.None;

    // Common

    this.spineLocation = new SpineLocation();
    this.isDiscCalcification = false;
    this.isVacuumPhenomenon = false;
    this.nerveRootAffectionType = NerveRootAffectionTypeEnum.None;
    this.isNerveRootAffectionRight = false;
    this.isNerveRootAffectionLeft = false;
    this.stenosisType = StenosisTypeEnum.None;
    this.isStenosisRight = false;
    this.isStenosisLeft = false;
    this.protrusionExtrusionDetailsType = ProtrusionExtrusionDetailsTypeEnum.None;
    this.discLocation = new SpineDiscLocationModel();
    this.expansionIntoSpinalCanalType = ExpansionIntoSpinalCanalTypeEnum.None;
    this.isSpinalCanalStenosis = false;
    this.gradeType = GradeTypeEnum.None;
    this.sagittalDiameterInMm = null;
    this.transverseDiameterSpinalCanalWidthInMm = null;
    this.isOsteochondrosis = false;
    this.isOsteophyteFormation = false;
    this.isFacetJointArthropathy = false;
    this.isFacetJointArthropathyRight = false;
    this.isFacetJointArthropathyLeft = false;
    this.isHypertrophy = false;
    this.isSynovialCyst = false;
    this.isSynovialCystRight = false;
    this.isSynovialCystLeft = false;
    this.maxDiameterInMm = null;
    this.isSubordinate = false;

    // BulgingDegeneration

    this.isNarrowingOfTheIntervertebralDisc = false;
    this.isBulging = false;
    this.bulgingDetailsType = BulgingDetailsTypeEnum.None;
    this.sideType = SideTypeEnum.None;

    // Migration

    this.directionOfMigrationType = DirectionOfMigrationTypeEnum.None;
    this.craniocaudalExtensionInMm = null;
    this.levelCraniocaudalType = LevelCraniocaudalTypeEnum.None;
    this.isRetrospondylophyte = false;

    // FacetJoints

    this.isOsteoarthritis = false;
    this.isUncovertebralArthrosis = false;
    this.isSpondylolysis = false;
    this.isLuxation = false;
    this.isFacetJointArthrosisRight = false;
    this.isFacetJointArthrosisLeft = false;
    this.pathriaClassificationType = PathriaClassificationTypeEnum.None;
    this.isCyst = false;
    this.isMultiple = false;
    this.isFacetJointArthrosisForaminalStenosis = false;
    this.facetJointArthrosisForaminalStenosisType = ForaminalStenosisTypeEnum.None;
    this.isForaminalStenosisRight = false;
    this.isForaminalStenosisLeft = false;
    this.isUncovertebralArthrosisForaminalStenosis = false;
    this.uncovertebralArthrosisForaminalStenosisType = ForaminalStenosisTypeEnum.None;
    this.isUncovertebralArthrosisRight = false;
    this.isUncovertebralArthrosisLeft = false;
    this.isSpondylolysisRight = false;
    this.isSpondylolysisLeft = false;
    this.isLuxationRight = false;
    this.isLuxationLeft = false;

    // Spondylodiscitis

    this.isIncreasedSizeOfTheDisc = false;
    this.isContrastEnhancementOfTheDisc = false;
    this.isIrregularityOfAdjacentVertebralEndplates = false;
    this.spineAxialLocation = new AxialLocation();
    this.isParavertebralInflammatoryResponse = false;
    this.isSoftTissueEdema = false;
    this.isAbscess = false;
    this.isIntraspinal = false;
    this.intraspinalLargestDiameterInMm = null;
    this.isParavertebral = false;
    this.paravertebralLargestDiameterInMm = null;
    this.isLocatedAtPsoasMuscle = false;
    this.isActiveDiscitis = false;
    this.isSecondary = false;

    // Trauma

    this.isRuptureOfPosteriorLongitudinalLigament = false;
    this.isRuptureOfAnteriorLongitudinalLigament = false;
    this.isIntervertebralDiscRupture = false;
    this.isAnteriorColumn = false;
    this.isMiddleColumn = false;
    this.isPosteriorColumn = false;

    // RheumatoidDiseases

    this.isEnthesitisChronic = false;
    this.isOsteoproliferativeReaction = false;
    this.isOsteophyte = false;
    this.isSyndesmophyte = false;
    this.isParasyndesmophyte = false;
    this.isMixtaosteophyte = false;
    this.isHyperostoticSpondylophyte = false;
    this.osteoproliferativeReactionType = OsteoproliferativeReactionTypeEnum.None;
    this.isRomanusLesion = false;
    this.isSclerosis = false;
    this.isErosion = false;
    this.isAnderssonLesion = false;
    this.complicationType = ComplicationTypeEnum.None;
    this.isConsolidated = false;
    this.isOssificationOfTheIntervertebralSpace = false;
    this.isAnteriorLongitudinalLigament = false;
    this.isPosteriorLongitudinalLigament = false;
    this.isLiggFlava = false;
    this.isLiggInterspinosa = false;
    this.isLiggSupraspinosa = false;
    this.isLigNuchae = false;
    this.isCalcification = false;
    this.isOssification = false;
    this.isArthrosis = false;
    this.isArthritis = false;
    this.atlantodentalDistanceInMm = null;
    this.isAtlantoaxialJointErosions = false;
    this.isDensErosion = false;
    this.isDensProtrusion = false;
    this.referenceChamberlainLineInMm = null;
    this.isBasilarImpression = false;
    this.isSubluxation = false;
    this.isAnkylosis = false;
    this.isFacetJointsErosions = false;
    this.differentialDiagnosis = DiscDiagnosisTypeEnum.None;
  }
}
