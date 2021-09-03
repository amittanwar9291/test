import { ConsultationTypeEnum } from '@enums/spineMRT/summary/consultation-type.enum';
import { InterventionTypeEnum } from '@enums/spineMRT/summary/intervention-type.enum';
import { ReportModelBase } from '@models/report-model-base';

export class SummaryUiModel extends ReportModelBase {
  isCT: boolean;
  isScintigraphy: boolean;
  isSPECTCT: boolean;
  isPETCT: boolean;
  consultationType: ConsultationTypeEnum;
  isInterventional: boolean;
  interventionType: InterventionTypeEnum;
  isFacetJointInfiltrationRight: boolean;
  isFacetJointInfiltrationLeft: boolean;
  isSIJInfiltrationRight: boolean;
  isSIJInfiltrationLeft: boolean;
  isRegistrationVia: boolean;
  isBiopsy: boolean;

  constructor() {
    super();
    this.isCT = false;
    this.isScintigraphy = false;
    this.isSPECTCT = false;
    this.isPETCT = false;
    this.consultationType = ConsultationTypeEnum.None;
    this.isInterventional = false;
    this.interventionType = InterventionTypeEnum.None;
    this.isFacetJointInfiltrationRight = false;
    this.isFacetJointInfiltrationLeft = false;
    this.isSIJInfiltrationRight = false;
    this.isSIJInfiltrationLeft = false;
    this.isRegistrationVia = false;
    this.isBiopsy = false;
  }
}
