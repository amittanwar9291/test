import { PhaseTypeEnum } from '@enums/abdomenMRT/pancreas/';
import {
  CharacteristicsTypeEnum,
  FukuokaCriteriaTypeEnum,
  FukuokaNegativeCystSizeTypeEnum,
  HistologyKnownTypeEnum,
  MassDifferentialDiagnosisTypeEnum
} from '@enums/abdomenMRT/pancreas/mass';
import {
  AcutePancreatitisDiagnosisTypeEnum,
  AcutePancreatitisExpansionTypeEnum,
  AssessmentTypeEnum
} from '@enums/abdomenMRT/pancreas/acute-pancreatitis';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { DiffuseParenchymalDifferentialDiagnosisEnum } from '@enums/abdomenMRT/pancreas/diffuse-parenchymal-changes';
import {
  AnatomicalVariantsAnomalyFindingTypeEnum,
  PancreasAnulareClassificationTypeEnum,
  PancreasDivisumClassificationTypeEnum
} from '@enums/abdomenMRT/pancreas/norm-variant-anomaly';
import { PathologyTypeEnum, PostoperativeFindingTypeEnum } from '@enums/abdomenMRT/pancreas/postinterventional-postoperative-findings';
import { HomogeneityTypeEnum } from '@enums/abdomenMRT/homogeneity-type.enum';
import { FileApiModel } from '@models/shared/uploader/file-api.model';
import { PancreasFindingBaseApiModel } from '@models/abdomenMRT/api/pancreas/pancreas-finding-base-api.model';

export class PancreasFindingApiModel extends PancreasFindingBaseApiModel {
  // common
  descriptionType: DescriptionTypeEnum;
  mainMassDifferentialDiagnosisType1: MassDifferentialDiagnosisTypeEnum;
  isHistologyKnown: boolean;
  histologyKnownType: HistologyKnownTypeEnum;
  isPancreaticCorpus: boolean;
  isPancreaticDuct: boolean;
  isBranchduct: boolean;
  size: number;
  secondPlane: number;
  thirdPlane: number;
  isInternalChangesFat: boolean;
  phaseType: PhaseTypeEnum;
  isMassEffect: boolean;
  isSpleen: boolean;
  isMesocolonTransversum: boolean;
  isStomachSuspicionOf: boolean;
  isExtensionDuctHepatocholedochus: boolean;
  maxDiameter: number;
  isDoubleDuctSign: boolean;
  isVesselInvolvement: boolean;
  isCeliacTrunk: boolean;
  celiacTrunkCharacteristicsType: CharacteristicsTypeEnum;
  splenicArteryCharacteristicsType: CharacteristicsTypeEnum;
  commonHepaticArteryCharacteristicsType: CharacteristicsTypeEnum;
  gastroduodenalArteryCharacteristicsType: CharacteristicsTypeEnum;
  pancreaticoduodenalArteryCharacteristicsType: CharacteristicsTypeEnum;
  isASuperiorMesentericArtery: boolean;
  aSuperiorMesentericArteryCharacteristicsType: CharacteristicsTypeEnum;
  portalVeinCharacteristicsType: CharacteristicsTypeEnum;
  isVSuperiorMesentericArtery: boolean;
  vSuperiorMesentericArteryCharacteristicsType: CharacteristicsTypeEnum;
  isTearDropSign: boolean;
  isVCavaInferior: boolean;
  vCavaInferiorCharacteristicsType: CharacteristicsTypeEnum;
  massDifferentialDiagnosisType1: MassDifferentialDiagnosisTypeEnum;
  massDifferentialDiagnosisType2: MassDifferentialDiagnosisTypeEnum;
  massDifferentialDiagnosisType3: MassDifferentialDiagnosisTypeEnum;
  isLesionAboveOne: boolean;
  fukuokaCriteriaType: FukuokaCriteriaTypeEnum;
  isFollowUpInOneTwoYears: boolean;
  isObstructiveCholestasisWithCysticLesion: boolean;
  isDilatationOfThePancreaticDuct: boolean;
  isHighRiskContrastEnhancingmuralNodule: boolean;
  isDiscussionSurgicalIndication: boolean;
  isClinicalPancreatitis: boolean;
  isDiameterCysticLesionOver3cm: boolean;
  isGrowthAboveFiveMmInTwoYears: boolean;
  isContrastEnhancingMuralNodules: boolean;
  isThickenedWall: boolean;
  isContrastEnhancement: boolean;
  isPancreaticDuctFiveToNineMm: boolean;
  isAbruptChangeInPancreatic: boolean;
  isCAIsIncreased: boolean;
  isLymphNodes: boolean;
  isDiscussionEndosonography: boolean;
  fukuokaNegativeCystSizeType: FukuokaNegativeCystSizeTypeEnum;
  isCTMRIIn6MonthsThen: boolean;
  isCTMRIIn6MonthsThereafter: boolean;
  isEndosonography: boolean;
  isMRIWithEndosonography: boolean;

  signalT1wFSType: string;
  serialNumber: string;
  pictureNumber: string;
  imageFileId: string;
  uploadedImageFile: FileApiModel;
  isUncinateProcess: boolean;
  isPancreaticHead: boolean;
  isPancreaticTail: boolean;
  isSubordinate: boolean;
  isPancreaticBody: boolean;
  isSuspicionOf: boolean;
  isCharacterizationIPancreaticHead: boolean;
  isCharacterizationIPancreaticCorpus: boolean;
  isCharacterizationIPancreaticTail: boolean;
  isIrregularConfiguration: boolean;
  isStringOfPearlsConfiguration: boolean;
  isFillingDefects: boolean;
  isConcretion: boolean;
  isPapillaDuodeniMajor: boolean;
  diameter: number;
  isIntraductalGas: boolean;
  measurementDilatation: number;
  isDilationUpstreamDuct: boolean;
  dilationUpstreamDuct: number;
  isDuodenum: boolean;
  isStomach: boolean;
  isSplenicArtery: boolean;
  isCommonHepaticArtery: boolean;
  isPortalVein: boolean;
  isFat: boolean;
  isCysts: boolean;
  isSepts: boolean;
  isNecrosis: boolean;
  isSignalVoids: boolean;
  isDuodenalStenosis: boolean;
  isGastroduodenalArtery: boolean;
  isPancreaticoduodenalArtery: boolean;
  isPseudoaneurysm: boolean;
  isParenchymalFattyDegeneration: boolean;
  isParenchymalAtrophy: boolean;
  isParenchymalAtrophyUncinateProcess: boolean;
  isParenchymalAtrophyPancreaticHead: boolean;
  isParenchymalAtrophyPancreaticBody: boolean;
  isParenchymalAtrophyPancreaticTail: boolean;
  isWalledOffNecrosis: boolean;
  isDiffusionRestriction: boolean;

  // NormVariantAnomaly

  anatomicalVariantsAnomalyFindingType: AnatomicalVariantsAnomalyFindingTypeEnum;
  pancreasDivisumClassificationType: PancreasDivisumClassificationTypeEnum;
  isStenosisOfTheMinorPapilla: boolean;
  pancreaticDuctDilatation: number;
  pancreasAnulareClassificationType: PancreasAnulareClassificationTypeEnum;
  isObstructionOfTheAbberantPancreaticDuct: boolean;

  // AcutePancreatitis

  isFluidAccumulation: boolean;
  isIsolated: boolean;
  isConnectionToTheDuctusPancreaticus: boolean;
  isMultifocal: boolean;
  isCommunicating: boolean;
  isBursaOmentalis: boolean;
  isPeritonealCavity: boolean;
  isAnteriorPararenalSpace: boolean;
  isPelvis: boolean;
  isParenchymalNecrosis: boolean;
  acutePancreatitisExpansionType: AcutePancreatitisExpansionTypeEnum;
  isGas: boolean;
  isDebris: boolean;
  isAdjacentEdematousIntestinalWallChange: boolean;
  isExtrahepaticCholestasis: boolean;
  ductHepatocholedochusDiameter: number;
  isExtrahepaticCholestasisAdjacent: boolean;
  extrahepaticCholestasis: number;
  isCholecystitis: boolean;
  isAbscess: boolean;
  isIntrapancreatic: boolean;
  isExtrapancreatic: boolean;
  abscessExpansion: number;
  isFistula: boolean;
  isColon: boolean;
  isThrombosis: boolean;
  isSplenicVein: boolean;
  isSplenicVeinCompleteOcclusion: boolean;
  isPortalVeinCompleteOcclusion: boolean;
  isBleeding: boolean;
  isPseudoaneurysmSplenicArtery: boolean;
  isPseudoaneurysmGastroduodenalArtery: boolean;
  isPseudoaneurysmPancreaticoduodenalArtery: boolean;
  isTruncusCoelicus: boolean;
  isFatTissueNecrosis: boolean;
  assessmentType: AssessmentTypeEnum;
  isAcuteOnChronic: boolean;
  isAcutePeripancreaticFluidCollection: boolean;
  isPseudocysts: boolean;
  acutePancreatitisDiagnosisType: AcutePancreatitisDiagnosisTypeEnum;
  isAcuteNecroticFluidCollection: boolean;
  isParenchymatous: boolean;
  isPeripancreatic: boolean;

  // DiffuseParenchymalChanges

  diffuseParenchymalChangesHomogeneityType: HomogeneityTypeEnum;
  isEnhancementOfTheCapsule: boolean;
  isDiffuseSmallestFatNecroses: boolean;
  isMultipleLesions: boolean;
  diameterLargestLesion: number;
  isPseudocyst: boolean;
  isPseudocystEnhancementOfTheCapsule: boolean;
  isPseudocystMultipleLesions: boolean;
  pseudocystDiameterLargestLesion: number;
  characterizationIIIHomogeneityType: HomogeneityTypeEnum;
  diffuseParenchymalDifferentialDiagnosis1: DiffuseParenchymalDifferentialDiagnosisEnum;
  diffuseParenchymalDifferentialDiagnosis2: DiffuseParenchymalDifferentialDiagnosisEnum;

  // PostinterventionalPostoperativeFindings

  monthOfOperation: number;
  yearOfOperation: number;
  postoperativeFindingType: PostoperativeFindingTypeEnum;
  pathologyType: PathologyTypeEnum;
  constructor() {
    super();

    // common

    this.signalT1wFSType = 'None';
    this.serialNumber = '';
    this.pictureNumber = '';
    this.imageFileId = null;
    this.uploadedImageFile = null;
    this.isUncinateProcess = false;
    this.isPancreaticHead = false;
    this.isPancreaticTail = false;
    this.isSubordinate = false;
    this.isPancreaticBody = false;
    this.isSuspicionOf = false;
    this.isCharacterizationIPancreaticHead = false;
    this.isCharacterizationIPancreaticCorpus = false;
    this.isCharacterizationIPancreaticTail = false;
    this.isIrregularConfiguration = false;
    this.isStringOfPearlsConfiguration = false;
    this.isFillingDefects = false;
    this.isConcretion = false;
    this.isPapillaDuodeniMajor = false;
    this.diameter = null;
    this.isIntraductalGas = false;
    this.measurementDilatation = null;
    this.isDilationUpstreamDuct = false;
    this.dilationUpstreamDuct = null;
    this.isDuodenum = false;
    this.isStomach = false;
    this.isSplenicArtery = false;
    this.isCommonHepaticArtery = false;
    this.isPortalVein = false;
    this.isFat = false;
    this.isCysts = false;
    this.isSepts = false;
    this.isNecrosis = false;
    this.isSignalVoids = false;
    this.isDuodenalStenosis = false;
    this.isGastroduodenalArtery = false;
    this.isPancreaticoduodenalArtery = false;
    this.isPseudoaneurysm = false;
    this.isParenchymalFattyDegeneration = false;
    this.isParenchymalAtrophy = false;
    this.isParenchymalAtrophyUncinateProcess = false;
    this.isParenchymalAtrophyPancreaticHead = false;
    this.isParenchymalAtrophyPancreaticBody = false;
    this.isParenchymalAtrophyPancreaticTail = false;
    this.isWalledOffNecrosis = false;
    this.isDiffusionRestriction = false;

    this.descriptionType = DescriptionTypeEnum.None;
    this.mainMassDifferentialDiagnosisType1 = MassDifferentialDiagnosisTypeEnum.None;
    this.isHistologyKnown = false;
    this.histologyKnownType = HistologyKnownTypeEnum.None;
    this.isPancreaticCorpus = false;
    this.isPancreaticDuct = false;
    this.isBranchduct = false;
    this.size = null;
    this.secondPlane = null;
    this.thirdPlane = null;
    this.isInternalChangesFat = false;
    this.phaseType = PhaseTypeEnum.None;
    this.isMassEffect = false;
    this.isSpleen = false;
    this.isMesocolonTransversum = false;
    this.isStomachSuspicionOf = false;
    this.isExtensionDuctHepatocholedochus = false;
    this.maxDiameter = null;
    this.isDoubleDuctSign = false;
    this.isVesselInvolvement = false;
    this.isCeliacTrunk = false;
    this.celiacTrunkCharacteristicsType = CharacteristicsTypeEnum.None;
    this.splenicArteryCharacteristicsType = CharacteristicsTypeEnum.None;
    this.commonHepaticArteryCharacteristicsType = CharacteristicsTypeEnum.None;
    this.gastroduodenalArteryCharacteristicsType = CharacteristicsTypeEnum.None;
    this.pancreaticoduodenalArteryCharacteristicsType = CharacteristicsTypeEnum.None;
    this.isASuperiorMesentericArtery = false;
    this.aSuperiorMesentericArteryCharacteristicsType = CharacteristicsTypeEnum.None;
    this.portalVeinCharacteristicsType = CharacteristicsTypeEnum.None;
    this.isVSuperiorMesentericArtery = false;
    this.vSuperiorMesentericArteryCharacteristicsType = CharacteristicsTypeEnum.None;
    this.isTearDropSign = false;
    this.isVCavaInferior = false;
    this.vCavaInferiorCharacteristicsType = CharacteristicsTypeEnum.None;
    this.massDifferentialDiagnosisType1 = MassDifferentialDiagnosisTypeEnum.None;
    this.massDifferentialDiagnosisType2 = MassDifferentialDiagnosisTypeEnum.None;
    this.massDifferentialDiagnosisType3 = MassDifferentialDiagnosisTypeEnum.None;
    this.isLesionAboveOne = false;
    this.fukuokaCriteriaType = FukuokaCriteriaTypeEnum.None;
    this.isFollowUpInOneTwoYears = false;
    this.isObstructiveCholestasisWithCysticLesion = false;
    this.isDilatationOfThePancreaticDuct = false;
    this.isHighRiskContrastEnhancingmuralNodule = false;
    this.isDiscussionSurgicalIndication = false;
    this.isClinicalPancreatitis = false;
    this.isDiameterCysticLesionOver3cm = false;
    this.isGrowthAboveFiveMmInTwoYears = false;
    this.isContrastEnhancingMuralNodules = false;
    this.isThickenedWall = false;
    this.isContrastEnhancement = false;
    this.isPancreaticDuctFiveToNineMm = false;
    this.isAbruptChangeInPancreatic = false;
    this.isCAIsIncreased = false;
    this.isLymphNodes = false;
    this.isDiscussionEndosonography = false;
    this.fukuokaNegativeCystSizeType = FukuokaNegativeCystSizeTypeEnum.None;
    this.isCTMRIIn6MonthsThen = false;
    this.isCTMRIIn6MonthsThereafter = false;
    this.isEndosonography = false;
    this.isMRIWithEndosonography = false;

    // NormVariantAnomaly

    this.anatomicalVariantsAnomalyFindingType = AnatomicalVariantsAnomalyFindingTypeEnum.None;
    this.pancreasDivisumClassificationType = PancreasDivisumClassificationTypeEnum.None;
    this.isStenosisOfTheMinorPapilla = false;
    this.pancreaticDuctDilatation = null;
    this.pancreasAnulareClassificationType = PancreasAnulareClassificationTypeEnum.None;
    this.isObstructionOfTheAbberantPancreaticDuct = false;

    // AcutePancreatitis

    this.isFluidAccumulation = false;
    this.isIsolated = false;
    this.isConnectionToTheDuctusPancreaticus = false;
    this.isMultifocal = false;
    this.isCommunicating = false;
    this.isBursaOmentalis = false;
    this.isPeritonealCavity = false;
    this.isAnteriorPararenalSpace = false;
    this.isPelvis = false;
    this.isParenchymalNecrosis = false;
    this.acutePancreatitisExpansionType = AcutePancreatitisExpansionTypeEnum.None;
    this.isGas = false;
    this.isDebris = false;
    this.isAdjacentEdematousIntestinalWallChange = false;
    this.isExtrahepaticCholestasis = false;
    this.ductHepatocholedochusDiameter = null;
    this.isExtrahepaticCholestasisAdjacent = false;
    this.extrahepaticCholestasis = null;
    this.isCholecystitis = false;
    this.isAbscess = false;
    this.isIntrapancreatic = false;
    this.isExtrapancreatic = false;
    this.abscessExpansion = null;
    this.isFistula = false;
    this.isColon = false;
    this.isThrombosis = false;
    this.isSplenicVein = false;
    this.isSplenicVeinCompleteOcclusion = false;
    this.isPortalVeinCompleteOcclusion = false;
    this.isBleeding = false;
    this.isPseudoaneurysmSplenicArtery = false;
    this.isPseudoaneurysmGastroduodenalArtery = false;
    this.isPseudoaneurysmPancreaticoduodenalArtery = false;
    this.isTruncusCoelicus = false;
    this.isFatTissueNecrosis = false;
    this.assessmentType = AssessmentTypeEnum.None;
    this.isAcuteOnChronic = false;
    this.isAcutePeripancreaticFluidCollection = false;
    this.isPseudocysts = false;
    this.acutePancreatitisDiagnosisType = AcutePancreatitisDiagnosisTypeEnum.None;
    this.isAcuteNecroticFluidCollection = false;
    this.isParenchymatous = false;
    this.isPeripancreatic = false;

    // DiffuseParenchymalChanges

    this.diffuseParenchymalChangesHomogeneityType = HomogeneityTypeEnum.None;
    this.isEnhancementOfTheCapsule = false;
    this.isDiffuseSmallestFatNecroses = false;
    this.isMultipleLesions = false;
    this.diameterLargestLesion = null;
    this.isPseudocyst = false;
    this.isPseudocystEnhancementOfTheCapsule = false;
    this.isPseudocystMultipleLesions = false;
    this.pseudocystDiameterLargestLesion = null;
    this.characterizationIIIHomogeneityType = HomogeneityTypeEnum.None;
    this.diffuseParenchymalDifferentialDiagnosis1 = DiffuseParenchymalDifferentialDiagnosisEnum.None;
    this.diffuseParenchymalDifferentialDiagnosis2 = DiffuseParenchymalDifferentialDiagnosisEnum.None;

    // PostinterventionalPostoperativeFindings

    this.monthOfOperation = null;
    this.yearOfOperation = null;
    this.postoperativeFindingType = PostoperativeFindingTypeEnum.None;
    this.pathologyType = PathologyTypeEnum.None;
  }
}
