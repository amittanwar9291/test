import { DetailsTypeEnum } from '@enums/headCT/examination/details-type.enum';
import { ExaminationFindingTypeEnum } from '@enums/headCT/examination/examination-finding-type.enum';
import { HeadacheCourseTypeEnum } from '@enums/headCT/examination/headache-course-type.enum';
import { HuntHessScaleTypeEnum } from '@enums/headCT/examination/hunt-hess-scale-type.enum';
import { IndicationSubTypeEnum } from '@enums/headCT/examination/indication-sub-type.enum';
import { FindingBase } from '@models/shared/finding/finding.base';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';

export class ExaminationIndicationUiModel extends FindingBase {
  findingType: ExaminationFindingTypeEnum;

  // Common
  indicationSubType: IndicationSubTypeEnum;

  // Intracranial Hemorrhage
  isKnownCoagulopathy: boolean;
  isKnownAnticoagulation: boolean;
  detailsType: DetailsTypeEnum;
  huntHessScaleType: HuntHessScaleTypeEnum;

  // Trauma
  isPathologilacFindingInPreviousExamination: boolean;
  isProgressiveClinicalFindings: boolean;
  isMinorTrauma: boolean;
  isMajorTrauma: boolean;
  isPenetratingInjury: boolean;
  isPolytrauma: boolean;
  glasgowComaScale: number;

  // Ischemia
  isIschemia: boolean;
  nihssScore: number;
  aspectScore: number;
  hoursAfterClinicalOnset: number;
  isWakeUpStroke: boolean;

  // Seizure
  date: MonthYearModel;
  isRefractoryEpilepsy: boolean;

  // Perioperative
  isVerificationOfShuntPositioning: boolean;

  // Headache
  isSubacuteTrauma: boolean;
  isExertion: boolean;
  isNeurologicalDeficit: boolean;
  isNeoplasia: boolean;
  isImmuneSupression: boolean;
  isPregnancy: boolean;
  isPapilledema: boolean;
  isThunderclapHeadache: boolean;
  headacheCourseType: HeadacheCourseTypeEnum;

  constructor() {
    super();
    this.findingType = ExaminationFindingTypeEnum.None;

    // Common
    this.indicationSubType = IndicationSubTypeEnum.None;

    // Intracranial Hemorrhage
    this.isKnownCoagulopathy = false;
    this.isKnownAnticoagulation = false;
    this.detailsType = DetailsTypeEnum.None;
    this.huntHessScaleType = HuntHessScaleTypeEnum.None;

    // Trauma
    this.isPathologilacFindingInPreviousExamination = false;
    this.isProgressiveClinicalFindings = false;
    this.isMinorTrauma = false;
    this.isMajorTrauma = false;
    this.isPenetratingInjury = false;
    this.isPolytrauma = false;
    this.glasgowComaScale = null;

    // Ischemia
    this.isIschemia = false;
    this.nihssScore = null;
    this.aspectScore = null;
    this.hoursAfterClinicalOnset = null;
    this.isWakeUpStroke = false;

    // Seizure
    this.date = new MonthYearModel();
    this.isRefractoryEpilepsy = false;

    // Perioperative
    this.isVerificationOfShuntPositioning = false;

    // Headache
    this.isSubacuteTrauma = false;
    this.isExertion = false;
    this.isNeurologicalDeficit = false;
    this.isNeoplasia = false;
    this.isImmuneSupression = false;
    this.isPregnancy = false;
    this.isPapilledema = false;
    this.isThunderclapHeadache = false;
    this.headacheCourseType = HeadacheCourseTypeEnum.None;
  }
}
