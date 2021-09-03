import { MonthYearModel } from '@models/shared/month-year/month-year.model';
import { ReportModelBase } from '@models/report-model-base';
import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';
import { PatientIndicationFindingUiModel } from '@models/mammaMRT/ui/patient-indication/patient-indication-finding-ui.model';

import { MammaMRITypeEnum, MammographyDetailsEnum } from '@enums/mammaMRT/patient-indication';

export class PatientIndicationUiModel extends ReportModelBase {
  patientInformation: PatientInformationUiModel;
  mriMammaType: MammaMRITypeEnum;
  dateOfLastMRT: MonthYearModel;
  wasMammography: boolean;
  dateOfLastMammography: MonthYearModel;
  mammographyDetails: MammographyDetailsEnum;
  wasMammasonography: boolean;
  dateOfLastMammosonography: MonthYearModel;
  mammasonographyDetails: MammographyDetailsEnum;
  findings: PatientIndicationFindingUiModel[];

  constructor() {
    super();

    this.patientInformation = new PatientInformationUiModel();
    this.mriMammaType = MammaMRITypeEnum.None;
    this.dateOfLastMRT = new MonthYearModel();
    this.wasMammography = false;
    this.dateOfLastMammography = new MonthYearModel();
    this.mammographyDetails = MammographyDetailsEnum.None;
    this.wasMammasonography = false;
    this.dateOfLastMammosonography = new MonthYearModel();
    this.mammasonographyDetails = MammographyDetailsEnum.None;
    this.findings = [new PatientIndicationFindingUiModel()];
  }
}
