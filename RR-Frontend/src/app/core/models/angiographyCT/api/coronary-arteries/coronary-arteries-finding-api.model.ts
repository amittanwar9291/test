import { FindingBase } from '@models/shared/finding/finding.base';
import { NoStenosisTypeEnum } from '@enums/angiographyCT/coronary-arteries/common/no-stenosis-type.enum';
import { CourseTypeEnum } from '@enums/angiographyCT/coronary-arteries/common/course-type.enum';
import { CoronaryArterialDominanceTypeEnum } from '@enums/angiographyCT/coronary-arteries/coronary-arterial-dominance/coronary-arterial-dominance-type.enum';
import { CoronaryAnomalyTypeEnum } from '@enums/angiographyCT/coronary-arteries/coronary-anomaly/coronary-anomaly-type.enum';
import { OtherDrainageTypeEnum } from '@enums/angiographyCT/coronary-arteries/coronary-anomaly/other-drainage-type.enum';
import { RightToLeftShuntTypeEnum } from '@enums/angiographyCT/coronary-arteries/coronary-anomaly/right-to-left-shunt-type.enum';
import { GradingTypeEnum } from '@enums/angiographyCT/coronary-arteries/calcification/grading-type.enum';
import { StenosisTypeEnum } from '@enums/angiographyCT/coronary-arteries/stenosis-occlusion/stenosis-type.enum';
import { CADRADSScoreTypeEnum } from '@enums/angiographyCT/coronary-arteries/stenosis-occlusion/cadrads-score-type.enum';
import { FindingTypeEnum } from '@enums/angiographyCT/coronary-arteries/finding-type.enum';

export class CoronaryArteriesFindingApiModel extends FindingBase {
  findingType: FindingTypeEnum;

  noStenosisType: NoStenosisTypeEnum;
  isRiva: boolean;
  isLeftCoronaryArtery: boolean;
  isSegment5: boolean;
  isSegment6: boolean;
  isSegment7: boolean;
  isSegment8: boolean;
  isSegment9D1: boolean;
  isSegment10D2: boolean;
  isSegment17RamusIntermedius: boolean;
  isLcx: boolean;
  isSegment11: boolean;
  isSegment12Om1: boolean;
  isSegment13: boolean;
  isSegment14Om2: boolean;
  isSegment15LPda: boolean;
  isSegment18LPlb: boolean;
  isRightCoronaryArtery: boolean;
  isSegment1: boolean;
  isSegment2: boolean;
  isSegment3: boolean;
  isSegment4RPda: boolean;
  isSegment16RPlb: boolean;

  // region CoronaryArterialDominance
  coronaryArterialDominanceType: CoronaryArterialDominanceTypeEnum;
  isRightSuperDominant: boolean;

  // region CoronaryAnomaly
  coronaryAnomalyType: CoronaryAnomalyTypeEnum;
  isBlandWhiteGarlandSyndrome: boolean;
  rcaFromLeftCoronarySinusType: CourseTypeEnum;
  courseRcxType: CourseTypeEnum;
  courseRivaType: CourseTypeEnum;
  lcaFromRightCoronarySinusType: CourseTypeEnum;
  rightToLeftShuntType: RightToLeftShuntTypeEnum;
  otherDrainageType: OtherDrainageTypeEnum;
  isRca: boolean;
  isLca: boolean;
  isRcx: boolean;

  // region Calcification
  agatstonScore: number;
  gradingType: GradingTypeEnum;

  // region StenosisOcclusion
  isNNonDiagnostic: boolean;
  isSStents: boolean;
  isGImplants: boolean;
  isVVulnerablePlaques: boolean;
  isHypodensePlaques: boolean;
  isPositiveRemodeling: boolean;
  isSpottyCalcification: boolean;
  isNapkinRingSign: boolean;
  stenosisType: StenosisTypeEnum;
  isIndexLesion: boolean;
  cadradsScoreType: CADRADSScoreTypeEnum;

  // region ExtracoronaryIntracardiacFindings
  isRightEnlargementAtrium: boolean;
  isRightEnlargementVentricle: boolean;
  isRightMyocardialHypertrophy: boolean;
  isVenousContrastReflux: boolean;
  isRightVentricularDiverticulum: boolean;
  rightVentricularDiverticulumMaxDiameterInMm: number;
  isLeftEnlargementAtrium: boolean;
  isLeftEnlargementVentricle: boolean;
  isLeftMyocardialHypertrophy: boolean;
  isThrombus: boolean;
  isLeftAtrium: boolean;
  isLeftVentricularDiverticulum: boolean;
  leftVentricularDiverticulumMaxDiameterInMm: number;
  isEffusion: boolean;
  effusionMaxDiameterInMm: number;
  isMass: boolean;
  massMaxDiameterInMm: number;
  isPneumopericardium: boolean;
  isCalcification: boolean;
  isPericarditisConstrictiva: boolean;
  isAtrialSeptalDefect: boolean;
  isPatentForamenOvale: boolean;
  isVentricularSeptalDefect: boolean;
  isVentricularSeptalAneurysm: boolean;
  isSeptumVentricularDiverticulum: boolean;
  septumVentricularDiverticulumMaxDiameterInMm: number;
  isBicuspidAorticValve: boolean;
  isCalcifications: boolean;

  // region FollowUpAfterBypass

  isAnastomoticStenosis: boolean;
  isCoronaryFistula: boolean;

  // region FollowUpAfterStent
  isLimited: boolean;

  constructor() {
    super();
    this.findingType = FindingTypeEnum.None;

    this.noStenosisType = NoStenosisTypeEnum.None;
    this.isRiva = false;
    this.isLeftCoronaryArtery = false;
    this.isSegment5 = false;
    this.isSegment6 = false;
    this.isSegment7 = false;
    this.isSegment8 = false;
    this.isSegment9D1 = false;
    this.isSegment10D2 = false;
    this.isSegment17RamusIntermedius = false;
    this.isLcx = false;
    this.isSegment11 = false;
    this.isSegment12Om1 = false;
    this.isSegment13 = false;
    this.isSegment14Om2 = false;
    this.isSegment15LPda = false;
    this.isSegment18LPlb = false;
    this.isRightCoronaryArtery = false;
    this.isSegment1 = false;
    this.isSegment2 = false;
    this.isSegment3 = false;
    this.isSegment4RPda = false;
    this.isSegment16RPlb = false;

    // region CoronaryArterialDominance
    this.coronaryArterialDominanceType = CoronaryArterialDominanceTypeEnum.None;
    this.isRightSuperDominant = false;

    // region CoronaryAnomaly
    this.coronaryAnomalyType = CoronaryAnomalyTypeEnum.None;
    this.isBlandWhiteGarlandSyndrome = false;
    this.rcaFromLeftCoronarySinusType = CourseTypeEnum.None;
    this.courseRcxType = CourseTypeEnum.None;
    this.courseRivaType = CourseTypeEnum.None;
    this.lcaFromRightCoronarySinusType = CourseTypeEnum.None;
    this.rightToLeftShuntType = RightToLeftShuntTypeEnum.None;
    this.otherDrainageType = OtherDrainageTypeEnum.None;
    this.isRca = false;
    this.isLca = false;
    this.isRcx = false;

    // region Calcification
    this.agatstonScore = null;
    this.gradingType = GradingTypeEnum.None;

    // region StenosisOcclusion
    this.isNNonDiagnostic = false;
    this.isSStents = false;
    this.isGImplants = false;
    this.isVVulnerablePlaques = false;
    this.isHypodensePlaques = false;
    this.isPositiveRemodeling = false;
    this.isSpottyCalcification = false;
    this.isNapkinRingSign = false;
    this.stenosisType = StenosisTypeEnum.None;
    this.isIndexLesion = false;
    this.cadradsScoreType = CADRADSScoreTypeEnum.None;

    // region ExtracoronaryIntracardiacFindings
    this.isRightEnlargementAtrium = false;
    this.isRightEnlargementVentricle = false;
    this.isRightMyocardialHypertrophy = false;
    this.isVenousContrastReflux = false;
    this.isRightVentricularDiverticulum = false;
    this.rightVentricularDiverticulumMaxDiameterInMm = null;
    this.isLeftEnlargementAtrium = false;
    this.isLeftEnlargementVentricle = false;
    this.isLeftMyocardialHypertrophy = false;
    this.isThrombus = false;
    this.isLeftAtrium = false;
    this.isLeftVentricularDiverticulum = false;
    this.leftVentricularDiverticulumMaxDiameterInMm = null;
    this.isEffusion = false;
    this.effusionMaxDiameterInMm = null;
    this.isMass = false;
    this.massMaxDiameterInMm = null;
    this.isPneumopericardium = false;
    this.isCalcification = false;
    this.isPericarditisConstrictiva = false;
    this.isAtrialSeptalDefect = false;
    this.isPatentForamenOvale = false;
    this.isVentricularSeptalDefect = false;
    this.isVentricularSeptalAneurysm = false;
    this.isSeptumVentricularDiverticulum = false;
    this.septumVentricularDiverticulumMaxDiameterInMm = null;
    this.isBicuspidAorticValve = false;
    this.isCalcifications = false;

    // region FollowUpAfterBypass

    this.isAnastomoticStenosis = false;
    this.isCoronaryFistula = false;

    // region FollowUpAfterStent
    this.isLimited = false;
  }
}
