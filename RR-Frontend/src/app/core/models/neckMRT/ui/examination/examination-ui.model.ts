import { ReportModelBase } from '@models/report-model-base';
import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';

export class ExaminationUiModel extends ReportModelBase {
  patientInformation: PatientInformationUiModel;
  isMRINeck: boolean;
  constructor() {
    super();
    this.patientInformation = new PatientInformationUiModel();
    this.isMRINeck = false;
  }
}
