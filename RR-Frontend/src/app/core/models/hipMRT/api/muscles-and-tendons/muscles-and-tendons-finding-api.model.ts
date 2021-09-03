import { FindingBase } from '@models/shared/finding/finding.base';

import {
  BonyAvulsionTypeEnum,
  BursitisLocalizationTypeEnum,
  BursitisMarginTypeEnum,
  CharacterizationHaematomaTypeEnum,
  ClassificationMCStatementEnum,
  EdemaLikeSignalIntensityTypeEnum,
  FindingTypeEnum,
  IntramuscularLocalizationTypeEnum,
  MuscularAtrophyTypeEnum,
  MusculatureLocalizationTypeEnum,
  PathologyTypeEnum,
  RuptureLocalizationTypeEnum,
  TendonsLocalizationTypeEnum,
  TendonsMorphologyTypeEnum,
  TendonsPathologyTypeEnum
} from '@enums/hipMRT/muscles-and-tendons';
import { DirectionTypeEnum } from '@enums/shared/direction-type.enum';

export class MusclesAndTendonsFindingApiModel extends FindingBase {
  // Common
  findingType: FindingTypeEnum;
  sideType: DirectionTypeEnum;
  isMuscularAtrophy: boolean;

  // Musculature
  musculatureLocalizationType: MusculatureLocalizationTypeEnum;
  intramuscularLocalizationType: IntramuscularLocalizationTypeEnum;
  pathologyType: PathologyTypeEnum;
  classificationMCStatement: ClassificationMCStatementEnum;
  isMaximumDiameterOfRuptureBelow5Mm: boolean;
  isMaximumDiameterOfRuptureAboveOrEqual5Mm: boolean;
  retractionInMm: number;
  isWavyCourseOfTheFibers: boolean;
  isBonyAvulsion: boolean;
  bonyAvulsionType: BonyAvulsionTypeEnum;
  isIntracorticalEdema: boolean;
  isIntramuscular: boolean;
  isIntermuscular: boolean;
  t1wSignalCharacteristics: string;
  t2wSignalCharacteristics: string;
  characterizationHaematomaType: CharacterizationHaematomaTypeEnum;
  isEdemaLikeSignalIntensity: boolean;
  edemaLikeSignalIntensityType: EdemaLikeSignalIntensityTypeEnum;
  isFattyDegeneration: boolean;
  muscularAtrophyType: MuscularAtrophyTypeEnum;
  isApophysitis: boolean;
  isFascialTear: boolean;
  isMuscleHerniation: boolean;
  isReducedIschiofemoralDistance: boolean;
  reducedIschiofemoralMinimumDistanceInMm: number;

  // Tendons
  tendonsLocalizationType: TendonsLocalizationTypeEnum;
  tendonsPathologyType: TendonsPathologyTypeEnum;
  ruptureLocalizationType: RuptureLocalizationTypeEnum;
  isRetraction: boolean;
  retractionMeasurementInMm: number;
  isHaematoma: boolean;
  isBoneBruise: boolean;
  tendonsMorphologyType: TendonsMorphologyTypeEnum;
  isPDwSignalIncrease: boolean;
  isBursitis: boolean;
  isGanglion: boolean;

  // Bursitis
  bursitisLocalizationType: BursitisLocalizationTypeEnum;
  bursitisMarginType: BursitisMarginTypeEnum;
  maxDiameterBursaInMm: number;
  isHemorrhage: boolean;
  isCalcifications: boolean;
  isPerifocalSoftTissueEdema: boolean;
  isSepticBursitis: boolean;
  isAbscess: boolean;
  isRupturedBursa: boolean;
  isSecondaryOsteomyelitis: boolean;

  constructor() {
    super();
    this.findingType = FindingTypeEnum.None;
    this.sideType = DirectionTypeEnum.None;
    this.isMuscularAtrophy = false;

    // Musculature
    this.musculatureLocalizationType = MusculatureLocalizationTypeEnum.None;
    this.intramuscularLocalizationType = IntramuscularLocalizationTypeEnum.None;
    this.pathologyType = PathologyTypeEnum.None;
    this.classificationMCStatement = ClassificationMCStatementEnum.None;
    this.isMaximumDiameterOfRuptureBelow5Mm = false;
    this.isMaximumDiameterOfRuptureAboveOrEqual5Mm = false;
    this.retractionInMm = null;
    this.isWavyCourseOfTheFibers = false;
    this.isBonyAvulsion = false;
    this.bonyAvulsionType = BonyAvulsionTypeEnum.None;
    this.isIntracorticalEdema = false;
    this.isIntramuscular = false;
    this.isIntermuscular = false;
    this.t1wSignalCharacteristics = 'None';
    this.t2wSignalCharacteristics = 'None';
    this.characterizationHaematomaType = CharacterizationHaematomaTypeEnum.None;
    this.isEdemaLikeSignalIntensity = false;
    this.edemaLikeSignalIntensityType = EdemaLikeSignalIntensityTypeEnum.None;
    this.isFattyDegeneration = false;
    this.muscularAtrophyType = MuscularAtrophyTypeEnum.None;
    this.isApophysitis = false;
    this.isFascialTear = false;
    this.isMuscleHerniation = false;
    this.isReducedIschiofemoralDistance = false;
    this.reducedIschiofemoralMinimumDistanceInMm = null;

    // Tendons
    this.tendonsLocalizationType = TendonsLocalizationTypeEnum.None;
    this.tendonsPathologyType = TendonsPathologyTypeEnum.None;
    this.ruptureLocalizationType = RuptureLocalizationTypeEnum.None;
    this.isRetraction = false;
    this.retractionMeasurementInMm = null;
    this.isHaematoma = false;
    this.isBoneBruise = false;
    this.tendonsMorphologyType = TendonsMorphologyTypeEnum.None;
    this.isPDwSignalIncrease = false;
    this.isBursitis = false;
    this.isGanglion = false;

    // Bursitis
    this.bursitisLocalizationType = BursitisLocalizationTypeEnum.None;
    this.bursitisMarginType = BursitisMarginTypeEnum.None;
    this.maxDiameterBursaInMm = null;
    this.isHemorrhage = false;
    this.isCalcifications = false;
    this.isPerifocalSoftTissueEdema = false;
    this.isSepticBursitis = false;
    this.isAbscess = false;
    this.isRupturedBursa = false;
    this.isSecondaryOsteomyelitis = false;
  }
}
