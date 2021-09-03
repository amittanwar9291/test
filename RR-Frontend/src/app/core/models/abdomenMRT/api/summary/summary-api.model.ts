import { ReportModelBase } from '@models/report-model-base';
import {
  CourseTypeEnum,
  FurtherParametersDetailsTypeEnum,
  FurtherParametersLymphaticInvasionTypeEnum,
  FurtherParametersPerineuralInvasionTypeEnum,
  FurtherParametersRResidualTypeEnum,
  FurtherParametersVenousInvasionTypeEnum,
  GradingTypeEnum,
  LiRADSTreatmentResponseCategoryTypeEnum,
  MStageSubTypeEnum,
  NStageSentinelNodeTypeEnum,
  NStageTypeEnum,
  PeriodTypeEnum,
  RemissionDetailsTypeEnum,
  StageSubTypeEnum,
  TStageTypeEnum
} from '@enums/abdomenMRT/summary/';

export class SummaryApiModel extends ReportModelBase {
  // Course

  courseType: CourseTypeEnum;
  isQuantity: boolean;
  isSize: boolean;
  remissionDetailsType: RemissionDetailsTypeEnum;
  isCt: boolean;
  isWithIVContrastAgent: boolean;
  isArterialPhase: boolean;
  isPortalVenousPhase: boolean;
  isUrographicPhase: boolean;
  isNonEnhanced: boolean;
  isContrastEnhancedMri: boolean;
  isHepatocyteSpecificContrastAgent: boolean;
  isMRCP: boolean;
  isUltrasoundExamination: boolean;
  isContrastEnhancedUltrasoundExaminationCeus: boolean;
  isTransesophageal: boolean;
  isTransrectal: boolean;
  isTransvaginal: boolean;
  isFollowUp: boolean;
  periodType: PeriodTypeEnum;
  isGastroscopy: boolean;
  isERCP: boolean;
  isColonoscopy: boolean;
  isBiopsy: boolean;
  isSonographicallyGuided: boolean;
  isCTGuided: boolean;
  isMriGuided: boolean;
  isOpen: boolean;
  isDrainage: boolean;
  isPercutaneous: boolean;
  isTransgastric: boolean;
  isTranshepatic: boolean;
  isPTCD: boolean;
  isClinicalCorrelation: boolean;
  isCorrelationWithLaboratoryFindings: boolean;
  isInterdisciplinaryDiscussionInTumourBoard: boolean;
  isRecommendedConsultation: boolean;
  isInternalMedicine: boolean;
  isSurgery: boolean;
  isEndocrinology: boolean;
  isGynecology: boolean;
  isUrology: boolean;

  // TNM

  tStageType: TStageTypeEnum;
  tStageSubType: StageSubTypeEnum;
  nStageType: NStageTypeEnum;
  nStageSentinelNodeType: NStageSentinelNodeTypeEnum;
  nStageSubType: StageSubTypeEnum;
  mStageType: StageSubTypeEnum;
  isPUL: boolean;
  isMAR: boolean;
  isOSS: boolean;
  isPLE: boolean;
  isHEP: boolean;
  isPER: boolean;
  isBRA: boolean;
  isADR: boolean;
  isLYM: boolean;
  isSKI: boolean;
  isOTH: boolean;
  mStageSubType: MStageSubTypeEnum;
  gradingType: GradingTypeEnum;
  furtherParametersDetailsType: FurtherParametersDetailsTypeEnum;
  furtherParametersRResidualType: FurtherParametersRResidualTypeEnum;
  furtherParametersLymphaticInvasionType: FurtherParametersLymphaticInvasionTypeEnum;
  furtherParametersVenousInvasionType: FurtherParametersVenousInvasionTypeEnum;
  furtherParametersPerineuralInvasionType: FurtherParametersPerineuralInvasionTypeEnum;

  // Li-RADS

  liRADSCategoryType: string;
  liRADSTreatmentResponseCategoryType: LiRADSTreatmentResponseCategoryTypeEnum;
  constructor() {
    super();

    // Course

    this.courseType = CourseTypeEnum.None;
    this.isQuantity = false;
    this.isSize = false;
    this.remissionDetailsType = RemissionDetailsTypeEnum.None;
    this.isCt = false;
    this.isWithIVContrastAgent = false;
    this.isArterialPhase = false;
    this.isPortalVenousPhase = false;
    this.isUrographicPhase = false;
    this.isNonEnhanced = false;
    this.isContrastEnhancedMri = false;
    this.isHepatocyteSpecificContrastAgent = false;
    this.isMRCP = false;
    this.isUltrasoundExamination = false;
    this.isContrastEnhancedUltrasoundExaminationCeus = false;
    this.isTransesophageal = false;
    this.isTransrectal = false;
    this.isTransvaginal = false;
    this.isFollowUp = false;
    this.periodType = PeriodTypeEnum.None;
    this.isGastroscopy = false;
    this.isERCP = false;
    this.isColonoscopy = false;
    this.isBiopsy = false;
    this.isSonographicallyGuided = false;
    this.isCTGuided = false;
    this.isMriGuided = false;
    this.isOpen = false;
    this.isDrainage = false;
    this.isPercutaneous = false;
    this.isTransgastric = false;
    this.isTranshepatic = false;
    this.isPTCD = false;
    this.isClinicalCorrelation = false;
    this.isCorrelationWithLaboratoryFindings = false;
    this.isInterdisciplinaryDiscussionInTumourBoard = false;
    this.isRecommendedConsultation = false;
    this.isInternalMedicine = false;
    this.isSurgery = false;
    this.isEndocrinology = false;
    this.isGynecology = false;
    this.isUrology = false;

    // TNM

    this.tStageType = TStageTypeEnum.None;
    this.tStageSubType = StageSubTypeEnum.None;
    this.nStageType = NStageTypeEnum.None;
    this.nStageSentinelNodeType = NStageSentinelNodeTypeEnum.None;
    this.nStageSubType = StageSubTypeEnum.None;
    this.mStageType = StageSubTypeEnum.None;
    this.isPUL = false;
    this.isMAR = false;
    this.isOSS = false;
    this.isPLE = false;
    this.isHEP = false;
    this.isPER = false;
    this.isBRA = false;
    this.isADR = false;
    this.isLYM = false;
    this.isSKI = false;
    this.isOTH = false;
    this.mStageSubType = MStageSubTypeEnum.None;
    this.gradingType = GradingTypeEnum.None;
    this.furtherParametersDetailsType = FurtherParametersDetailsTypeEnum.None;
    this.furtherParametersRResidualType = FurtherParametersRResidualTypeEnum.None;
    this.furtherParametersLymphaticInvasionType = FurtherParametersLymphaticInvasionTypeEnum.None;
    this.furtherParametersVenousInvasionType = FurtherParametersVenousInvasionTypeEnum.None;
    this.furtherParametersPerineuralInvasionType = FurtherParametersPerineuralInvasionTypeEnum.None;

    // Li-RADS

    this.liRADSCategoryType = 'None';
    this.liRADSTreatmentResponseCategoryType = LiRADSTreatmentResponseCategoryTypeEnum.None;
  }
}
