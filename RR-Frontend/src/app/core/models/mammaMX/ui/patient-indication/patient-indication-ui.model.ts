import { MonthYearModel } from '@models/shared/month-year/month-year.model';
import { ReportModelBase } from '@models/report-model-base';
import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';
import { PatientIndicationFindingUiModel } from '@models/mammaMX/ui/patient-indication/patient-indication-finding-ui.model';
import { MXMammaTypeEnum, MammographyDetailsEnum } from '@enums/mammaMX/patient-indication';

export class PatientIndicationUiModel extends ReportModelBase {
  patientInformation: PatientInformationUiModel;
  mxMammaType: MXMammaTypeEnum;
  dateOfLastMX: MonthYearModel;
  wasMammography: boolean;
  dateOfLastMammography: MonthYearModel;
  mammographyDetails: MammographyDetailsEnum;
  wasMammasonography: boolean;
  dateOfLastMammosonography: MonthYearModel;
  mammasonographyDetails: MammographyDetailsEnum;
  mammographyMRTDetails: MammographyDetailsEnum;
  findings: PatientIndicationFindingUiModel[];

  constructor() {
    super();

    this.patientInformation = new PatientInformationUiModel();
    this.mxMammaType = MXMammaTypeEnum.None;
    this.dateOfLastMX = new MonthYearModel();
    this.wasMammography = false;
    this.dateOfLastMammography = new MonthYearModel();
    this.mammographyDetails = MammographyDetailsEnum.None;
    this.wasMammasonography = false;
    this.dateOfLastMammosonography = new MonthYearModel();
    this.mammasonographyDetails = MammographyDetailsEnum.None;
    this.mammographyMRTDetails = MammographyDetailsEnum.None;
    this.findings = [new PatientIndicationFindingUiModel()];
  }
}
