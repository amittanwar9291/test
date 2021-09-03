import { FindingBase } from '@models/shared/finding/finding.base';
import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';
import { ContrastEnhancementQuantitativeEnum, PancreasFindingTypeEnum, PhaseTypeEnum } from '@enums/abdomenMRT/pancreas/';
import {
  CharacteristicsTypeEnum,
  FormTypeEnum,
  FukuokaCriteriaTypeEnum,
  FukuokaNegativeCystSizeTypeEnum,
  GrowthPatternsTypeEnum,
  MarginTypeEnum,
  ContrastEnhancementDistributionEnum
} from '@enums/abdomenMRT/pancreas/mass';
import { HomogeneityTypeEnum } from '@enums/abdomenMRT/homogeneity-type.enum';
import { PancreaticDuctPathologyTypeEnum } from '@enums/abdomenMRT/pancreas/acute-pancreatitis';

export class PancreasFindingBaseUiModel extends FindingBase {
  findingType: PancreasFindingTypeEnum;

  // common
  referencePicture: ReferencePictureUiModel;
  isUncinateProcess: boolean;
  isPancreaticHead: boolean;
  isPancreaticTail: boolean;
  signalT1wType: number;
  signalT1wFSType: number;
  signalT2wType: number;
  isCysts: boolean;
  isCalcification: boolean;
  isCapsule: boolean;
  isSepts: boolean;
  isNecrosis: boolean;
  isSignalVoids: boolean;
  isHemorrhage: boolean;
  isHemosiderin: boolean;
  measurementDilatation: number;
  isDilationUpstreamDuct: boolean;
  dilationUpstreamDuct: number;
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
  isDuodenum: boolean;
  isStomach: boolean;
  contrastEnhancementDistribution: ContrastEnhancementDistributionEnum;
  isDiffusionRestriction: boolean;
  isParenchymalFattyDegeneration: boolean;
  isParenchymalAtrophy: boolean;
  isParenchymalAtrophyUncinateProcess: boolean;
  isParenchymalAtrophyPancreaticHead: boolean;
  isParenchymalAtrophyPancreaticBody: boolean;
  isParenchymalAtrophyPancreaticTail: boolean;
  isCommonHepaticArtery: boolean;
  isDuodenalStenosis: boolean;
  isGastroduodenalArtery: boolean;
  isPancreaticoduodenalArtery: boolean;
  isPortalVein: boolean;

  // Mass
  isPancreaticCorpus: boolean;
  isPancreaticDuct: boolean;
  isBranchduct: boolean;
  marginType: MarginTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  formType: FormTypeEnum;
  isInternalChangesFat: boolean;
  growthPatternsType: GrowthPatternsTypeEnum;
  isMassEffect: boolean;
  isSpleen: boolean;
  isMesocolonTransversum: boolean;
  isStomachSuspicionOf: boolean;
  contrastEnhancementQuantitative: ContrastEnhancementQuantitativeEnum;
  contrastEnhancementHomogeneityType: HomogeneityTypeEnum;
  phaseType: PhaseTypeEnum;
  isExtensionDuctHepatocholedochus: boolean;
  maxDiameter: number;
  isDoubleDuctSign: boolean;
  isVesselInvolvement: boolean;
  isCeliacTrunk: boolean;
  celiacTrunkCharacteristicsType: CharacteristicsTypeEnum;
  isSplenicArtery: boolean;
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
  isLesionAboveOne: boolean;
  isFollowUpInOneTwoYears: boolean;
  fukuokaCriteriaType: FukuokaCriteriaTypeEnum;
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

  // AcutePancreatitis
  pancreaticDuctPathologyType: PancreaticDuctPathologyTypeEnum;

  constructor() {
    super();
    this.findingType = PancreasFindingTypeEnum.None;

    // common
    this.referencePicture = new ReferencePictureUiModel();
    this.isUncinateProcess = false;
    this.isPancreaticHead = false;
    this.isPancreaticTail = false;
    this.signalT1wType = 0;
    this.signalT1wFSType = 0;
    this.signalT2wType = 0;
    this.isCysts = false;
    this.isCalcification = false;
    this.isCapsule = false;
    this.isSepts = false;
    this.isNecrosis = false;
    this.isSignalVoids = false;
    this.isHemorrhage = false;
    this.isHemosiderin = false;
    this.measurementDilatation = null;
    this.isDilationUpstreamDuct = false;
    this.dilationUpstreamDuct = null;
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
    this.isDuodenum = false;
    this.isStomach = false;
    this.contrastEnhancementDistribution = ContrastEnhancementDistributionEnum.None;
    this.isDiffusionRestriction = false;
    this.isParenchymalFattyDegeneration = false;
    this.isParenchymalAtrophy = false;
    this.isParenchymalAtrophyUncinateProcess = false;
    this.isParenchymalAtrophyPancreaticHead = false;
    this.isParenchymalAtrophyPancreaticBody = false;
    this.isParenchymalAtrophyPancreaticTail = false;
    this.isSplenicArtery = false;
    this.isCommonHepaticArtery = false;
    this.isDuodenalStenosis = false;
    this.isGastroduodenalArtery = false;
    this.isPancreaticoduodenalArtery = false;
    this.isPortalVein = false;

    // Mass
    this.isPancreaticCorpus = false;
    this.isPancreaticDuct = false;
    this.isBranchduct = false;
    this.marginType = MarginTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.formType = FormTypeEnum.None;
    this.isInternalChangesFat = false;
    this.growthPatternsType = GrowthPatternsTypeEnum.None;
    this.isMassEffect = false;
    this.isSpleen = false;
    this.isMesocolonTransversum = false;
    this.isStomachSuspicionOf = false;
    this.contrastEnhancementQuantitative = ContrastEnhancementQuantitativeEnum.None;
    this.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
    this.phaseType = PhaseTypeEnum.None;
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
    this.isLesionAboveOne = false;
    this.isFollowUpInOneTwoYears = false;
    this.fukuokaCriteriaType = FukuokaCriteriaTypeEnum.None;
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

    // AcutePancreatitis
    this.pancreaticDuctPathologyType = PancreaticDuctPathologyTypeEnum.None;
  }
}
