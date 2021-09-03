import { FindingBase } from '@models/shared/finding/finding.base';
import {
  MusculatureFindingType,
  AgeType,
  ClassificationMunichConsensusTypeEnum,
  MuscularAtrophyTypeEnum
} from '@enums/shoulderMRT/soft-parts';

export class MusculatureApiModel extends FindingBase {
  findingType: MusculatureFindingType;

  // MuscularHaematoma
  isIntramuscular: boolean;
  isInterfacial: boolean;
  isIntermuscular: boolean;
  t1w: string;
  t2w: string;
  ageType: AgeType;

  // MuscleLesion
  classificationMunichConsensusType: ClassificationMunichConsensusTypeEnum;
  isCrossDiameterRuptureBelow5Mm: boolean;
  isCrossDiameterRuptureOver5Mm: boolean;
  retractionInMm: number;
  isWavyCourseFibres: boolean;
  isOsseousAvulsion: boolean;

  // OtherFindings
  isFattyDegeneration: boolean;
  isMuscularHypotrophy: boolean;
  isMuscularAtrophy: boolean;
  muscularAtrophyType: MuscularAtrophyTypeEnum;
  isApophysitis: boolean;
  isFascialTear: boolean;
  isMuscleHerniation: boolean;

  constructor() {
    super();

    this.findingType = MusculatureFindingType.None;

    // MuscularHaematoma
    this.isIntramuscular = false;
    this.isInterfacial = false;
    this.isIntermuscular = false;
    this.t1w = 'None';
    this.t2w = 'None';
    this.ageType = AgeType.None;

    // MuscleLesion
    this.classificationMunichConsensusType = ClassificationMunichConsensusTypeEnum.None;
    this.isCrossDiameterRuptureBelow5Mm = false;
    this.isCrossDiameterRuptureOver5Mm = false;
    this.retractionInMm = null;
    this.isWavyCourseFibres = false;
    this.isOsseousAvulsion = false;

    // OtherFindings
    this.isFattyDegeneration = false;
    this.isMuscularHypotrophy = false;
    this.isMuscularAtrophy = false;
    this.muscularAtrophyType = MuscularAtrophyTypeEnum.None;
    this.isApophysitis = false;
    this.isFascialTear = false;
    this.isMuscleHerniation = false;
  }
}
