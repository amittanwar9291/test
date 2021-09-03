import { ReportModelBase } from '@models/report-model-base';
import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';

export class StudyAreaUiModel extends ReportModelBase {
  patientInformation: PatientInformationUiModel;
  constructor() {
    super();
    this.patientInformation = new PatientInformationUiModel();
  }
}
