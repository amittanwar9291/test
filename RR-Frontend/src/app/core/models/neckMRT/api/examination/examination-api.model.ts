import { ReportModelBase } from '@models/report-model-base';
import { PatientInformationApiModel } from '@models/shared/patient-information/patient-information-api.model';

export class ExaminationApiModel extends ReportModelBase {
  patientInformation: PatientInformationApiModel;
  isMRINeck: boolean;
  constructor() {
    super();
    this.patientInformation = new PatientInformationApiModel();
    this.isMRINeck = false;
  }
}
