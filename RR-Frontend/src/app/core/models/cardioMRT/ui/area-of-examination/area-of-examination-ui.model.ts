import { ReportModelBase } from '@models/report-model-base';
import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';

export class AreaOfExaminationUiModel extends ReportModelBase {
  patientInformation: PatientInformationUiModel;
  isSpecificHeartMRT: boolean;
  bsa: number;

  constructor() {
    super();

    this.patientInformation = new PatientInformationUiModel();
    this.isSpecificHeartMRT = true;
    this.bsa = 0;
  }
}
