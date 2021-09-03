import { ReportModelBase } from '@models/report-model-base';
import { PatientInformationApiModel } from '@models/shared/patient-information/patient-information-api.model';

export class StudyAreaApiModel extends ReportModelBase {
  patientInformation: PatientInformationApiModel;
  constructor() {
    super();
    this.patientInformation = new PatientInformationApiModel();
  }
}
