import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import {
  LocalizationRelatedJointSpaceLevelType,
  LocalizationAxialType,
  HistologyConfirmedType,
  HematomaCharacterizationType,
  IntensityType,
  AssociatedFindingsType,
  ArticularEffusionLocalizationType,
  LocalizationType,
  MarginType,
  NeuritisLocalizationType,
  NUlnarisType,
  NMedianusType,
  CompressionType,
  AneurysmLocalizationType
} from '@enums/elbowMRT/soft-tissue/';
import { SoftTissueFindingBaseUiModel } from './soft-tissue-finding-base-ui.model';

export class SoftTissueFindingUiModel extends SoftTissueFindingBaseUiModel {
  //  Common
  localizationRelatedJointSpaceLevelType: LocalizationRelatedJointSpaceLevelType;
  maxDiameterInMm: number;
  localizationAxialType: LocalizationAxialType;

  //  SoftTissueTumor
  descriptionType: DescriptionTypeEnum;
  isHistologicallyConfirmed: boolean;
  histologyConfirmedType: HistologyConfirmedType;
  extensionSizeInMm: number;
  extensionLevel2InMm: number;
  extensionLevel3InMm: number;
  differentialDiagnosis1Type: string;
  isSuspectedDiagnosis: boolean;
  differentialDiagnosis2Type: string;
  isSecondary: boolean;
  differentialDiagnosis3Type: string;

  // Hematoma
  isAnterior: boolean;
  isPosterior: boolean;
  isMedial: boolean;
  isLateral: boolean;
  hematomaCharacterizationType: HematomaCharacterizationType;

  // ArticularEffusion
  intensityType: IntensityType;
  associatedFindingsType: AssociatedFindingsType;
  isExtraarticularArticularEffusion: boolean;
  isLooseBody: boolean;
  articularEffusionLocalizationType: ArticularEffusionLocalizationType;
  isIsointenseToCartilage: boolean;
  isIsointenseToBone: boolean;
  isForeignBody: boolean;

  // Bursitis
  localizationType: LocalizationType;
  maxDiameterBursaInMm: number;
  marginType: MarginType;
  isDistendedFluidFilledBursa: boolean;
  isEdematous: boolean;
  isInflammatoryChangesOfTheAdjacent: boolean;
  isSecondaryOsteomyelitis: boolean;
  isBursitisCalcarea: boolean;

  // Neuritis
  neuritisLocalizationType: NeuritisLocalizationType;
  nUlnarisType: NUlnarisType;
  isBicipitoradialBursitis: boolean;
  nMedianusType: NMedianusType;
  isHypertrophy: boolean;
  isSurroundingFibrosis: boolean;
  isCompression: boolean;
  compressionType: CompressionType;
  isContrastEnhancement: boolean;

  // Aneurysm
  aneurysmLocalizationType: AneurysmLocalizationType;

  constructor() {
    super();

    //  Common
    this.localizationRelatedJointSpaceLevelType = LocalizationRelatedJointSpaceLevelType.None;
    this.maxDiameterInMm = null;
    this.localizationAxialType = LocalizationAxialType.None;

    //  SoftTissueTumor
    this.descriptionType = DescriptionTypeEnum.None;
    this.isHistologicallyConfirmed = false;
    this.histologyConfirmedType = HistologyConfirmedType.None;
    this.extensionSizeInMm = null;
    this.extensionLevel2InMm = null;
    this.extensionLevel3InMm = null;
    this.differentialDiagnosis1Type = 'None';
    this.isSuspectedDiagnosis = false;
    this.differentialDiagnosis2Type = 'None';
    this.isSecondary = false;
    this.differentialDiagnosis3Type = 'None';

    // Hematoma
    this.isAnterior = false;
    this.isPosterior = false;
    this.isMedial = false;
    this.isLateral = false;
    this.hematomaCharacterizationType = HematomaCharacterizationType.None;

    // ArticularEffusion
    this.intensityType = IntensityType.None;
    this.associatedFindingsType = AssociatedFindingsType.None;
    this.isExtraarticularArticularEffusion = false;
    this.isLooseBody = false;
    this.articularEffusionLocalizationType = ArticularEffusionLocalizationType.None;
    this.isIsointenseToCartilage = false;
    this.isIsointenseToBone = false;
    this.isForeignBody = false;

    // Bursitis
    this.localizationType = LocalizationType.None;
    this.maxDiameterBursaInMm = null;
    this.marginType = MarginType.None;
    this.isDistendedFluidFilledBursa = false;
    this.isEdematous = false;
    this.isInflammatoryChangesOfTheAdjacent = false;
    this.isSecondaryOsteomyelitis = false;
    this.isBursitisCalcarea = false;

    // Neuritis
    this.neuritisLocalizationType = NeuritisLocalizationType.None;
    this.nUlnarisType = NUlnarisType.None;
    this.isBicipitoradialBursitis = false;
    this.nMedianusType = NMedianusType.None;
    this.isHypertrophy = false;
    this.isSurroundingFibrosis = false;
    this.isCompression = false;
    this.compressionType = CompressionType.None;
    this.isContrastEnhancement = false;

    // Aneurysm
    this.aneurysmLocalizationType = AneurysmLocalizationType.None;
  }
}
