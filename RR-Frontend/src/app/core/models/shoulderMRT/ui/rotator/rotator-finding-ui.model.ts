import { FindingBase } from '@models/shared/finding/finding.base';
import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';

import {
  AcJointClassificationTypeEnum,
  AfflicationTypeEnum,
  BayneClassificationTypeEnum,
  AtrophyClassificationTypeEnum,
  ClassificationAccGoutallierTypeEnum,
  ClassificationAccZanettiTypeEnum,
  CrossTypeEnum,
  InsertionOrFootprintTypeEnum,
  LafosseClassificationTypeEnum,
  LengthwiseTypeEnum,
  LesionTypeEnum,
  MorphologyTypeEnum,
  PartialLesionLocationTypeEnum,
  PartialRuptureTypeEnum,
  PatteClassificationTypeEnum,
  RockwoodTypeEnum,
  RotatorCuffClassificationTypeEnum,
  RotatorFindingTypeEnum,
  SnyderClassificationTypeEnum,
  TendonPartTypeEnum,
  TendonRetractionClassificationTypeEnum,
  TendonRetractionBayneClassificationTypeEnum,
  TendonRetractionClassificationByPatentTypeEnum,
  TossyTypeEnum,
  PartialLesionUpperThirdTypeEnum,
  BursaSideTypeEnum
} from '@enums/shoulderMRT/rotator';

export class RotatorFindingUiModel extends FindingBase {
  // Common
  findingType: RotatorFindingTypeEnum;
  referencePicture: ReferencePictureUiModel;

  // ACJoint
  afflicationType: AfflicationTypeEnum;
  isApophysitis: boolean;

  isOsteophytes: boolean;
  isCapsularHypertrophy: boolean;
  isSubchondralCysts: boolean;
  isSubchondralEdema: boolean;
  isArticularEffusion: boolean;
  isSclerosis: boolean;
  isOsteolysisOrLateralClavicles: boolean;
  isCorticalThinning: boolean;
  isCorticalBoneErosion: boolean;

  acJointClassificationType: AcJointClassificationTypeEnum;
  tossyType: TossyTypeEnum;
  rockwoodType: RockwoodTypeEnum;

  isLocalization: boolean;

  // RotatorCuff
  lesionType: LesionTypeEnum;

  patteClassificationType: PatteClassificationTypeEnum;

  isTendonRetraction: boolean;
  tendonRetractionClassificationType: TendonRetractionClassificationTypeEnum;
  isAccordingToBayneAndBateman: boolean;
  tendonRetractionBayneClassificationType: TendonRetractionBayneClassificationTypeEnum;
  tendonRetractionClassificationByPatentType: TendonRetractionClassificationByPatentTypeEnum;

  isAtrophy: boolean;
  isAccordingToGoutallier: boolean;
  atrophyClassificationType: AtrophyClassificationTypeEnum;
  classificationAccGoutallierType: ClassificationAccGoutallierTypeEnum;
  classificationAccZanettiType: ClassificationAccZanettiTypeEnum;

  partialLesionLocationType: PartialLesionLocationTypeEnum;
  tendonPartType: TendonPartTypeEnum;
  partialRuptureType: PartialRuptureTypeEnum;

  crossType: CrossTypeEnum;
  bursaSideType: BursaSideTypeEnum;
  lengthwise: LengthwiseTypeEnum;
  insertionOrFootprintType: InsertionOrFootprintTypeEnum;

  expansivenessLengthInMM: number;
  expansivenessDepthInMM: number;
  rotatorCuffClassificationType: RotatorCuffClassificationTypeEnum;
  classificationBayneClassificationType: BayneClassificationTypeEnum;
  classificationSnyderClassificationType: SnyderClassificationTypeEnum;

  lafosseClassificationType: LafosseClassificationTypeEnum;
  partialLesionUpperThirdType: PartialLesionUpperThirdTypeEnum;

  localizationType: LengthwiseTypeEnum;

  morphologyType: MorphologyTypeEnum;
  isSignalIncreaseInPDAndT1w: boolean;
  areHumeralHeadCysts: boolean;
  cystsAtTheHeadOfTheHumerusLargestAxialDiameter: number;
  calcificationOrTendinitisCalcarea: boolean;
  limeOrTendinitisCalcareaLargestAxialDiameter: number;
  isOsteitis: boolean;

  constructor() {
    super();

    // Common
    this.findingType = RotatorFindingTypeEnum.None;
    this.referencePicture = new ReferencePictureUiModel();

    // ACJoint
    this.afflicationType = AfflicationTypeEnum.None;
    this.isApophysitis = false;

    this.isOsteophytes = false;
    this.isCapsularHypertrophy = false;
    this.isSubchondralCysts = false;
    this.isSubchondralEdema = false;
    this.isArticularEffusion = false;
    this.isSclerosis = false;
    this.isOsteolysisOrLateralClavicles = false;
    this.isCorticalThinning = false;
    this.isCorticalBoneErosion = false;

    this.acJointClassificationType = AcJointClassificationTypeEnum.None;
    this.tossyType = TossyTypeEnum.None;
    this.rockwoodType = RockwoodTypeEnum.None;

    this.isLocalization = false;

    // RotatorCuff
    this.lesionType = LesionTypeEnum.None;

    this.patteClassificationType = PatteClassificationTypeEnum.None;

    this.isTendonRetraction = false;
    this.tendonRetractionClassificationType = TendonRetractionClassificationTypeEnum.None;
    this.isAccordingToBayneAndBateman = false;
    this.tendonRetractionBayneClassificationType = TendonRetractionBayneClassificationTypeEnum.None;
    this.tendonRetractionClassificationByPatentType = TendonRetractionClassificationByPatentTypeEnum.None;

    this.isAtrophy = false;
    this.isAccordingToGoutallier = false;
    this.atrophyClassificationType = AtrophyClassificationTypeEnum.None;
    this.classificationAccGoutallierType = ClassificationAccGoutallierTypeEnum.None;
    this.classificationAccZanettiType = ClassificationAccZanettiTypeEnum.None;

    this.partialLesionLocationType = PartialLesionLocationTypeEnum.None;
    this.tendonPartType = TendonPartTypeEnum.None;
    this.partialRuptureType = PartialRuptureTypeEnum.None;

    this.crossType = CrossTypeEnum.None;
    this.bursaSideType = BursaSideTypeEnum.None;
    this.lengthwise = LengthwiseTypeEnum.None;
    this.insertionOrFootprintType = InsertionOrFootprintTypeEnum.None;

    this.expansivenessLengthInMM = null;
    this.expansivenessDepthInMM = null;
    this.rotatorCuffClassificationType = RotatorCuffClassificationTypeEnum.None;
    this.classificationBayneClassificationType = BayneClassificationTypeEnum.None;
    this.classificationSnyderClassificationType = SnyderClassificationTypeEnum.None;

    this.lafosseClassificationType = LafosseClassificationTypeEnum.None;
    this.partialLesionUpperThirdType = PartialLesionUpperThirdTypeEnum.None;

    this.localizationType = LengthwiseTypeEnum.None;

    this.morphologyType = MorphologyTypeEnum.None;
    this.isSignalIncreaseInPDAndT1w = false;
    this.areHumeralHeadCysts = false;
    this.cystsAtTheHeadOfTheHumerusLargestAxialDiameter = null;
    this.calcificationOrTendinitisCalcarea = false;
    this.limeOrTendinitisCalcareaLargestAxialDiameter = null;
    this.isOsteitis = false;
  }
}
