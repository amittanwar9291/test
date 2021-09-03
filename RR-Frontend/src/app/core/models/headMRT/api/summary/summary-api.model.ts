import { ReportModelBase } from '@models/report-model-base';
import { CourseTypeEnum, PeriodTypeEnum, RegressiveTypeEnum } from '@enums/headMRT/summary/';
import { SummaryFindingApiModel } from '@models/headMRT/api/summary/summary-finding-api.model';

export class SummaryApiModel extends ReportModelBase {
  findings: SummaryFindingApiModel[];
  isCta: boolean;
  isMra: boolean;
  isMriWithIvContrastAgent: boolean;
  isPetCt: boolean;
  isScintigraphy: boolean;
  isCcdSonographyNeckVessels: boolean;
  isBiopsy: boolean;
  periodType: PeriodTypeEnum;
  isNeurology: boolean;
  isNeurosurgery: boolean;
  isEnt: boolean;
  isOphthalmology: boolean;
  isCardiology: boolean;
  isInternalMedicine: boolean;
  courseType: CourseTypeEnum;
  regressiveType: RegressiveTypeEnum;

  constructor() {
    super();
    this.findings = [new SummaryFindingApiModel()];
    this.isCta = false;
    this.isMra = false;
    this.isMriWithIvContrastAgent = false;
    this.isPetCt = false;
    this.isScintigraphy = false;
    this.isCcdSonographyNeckVessels = false;
    this.isBiopsy = false;
    this.periodType = PeriodTypeEnum.None;
    this.isNeurology = false;
    this.isNeurosurgery = false;
    this.isEnt = false;
    this.isOphthalmology = false;
    this.isCardiology = false;
    this.isInternalMedicine = false;
    this.courseType = CourseTypeEnum.None;
    this.regressiveType = RegressiveTypeEnum.None;
  }
}
