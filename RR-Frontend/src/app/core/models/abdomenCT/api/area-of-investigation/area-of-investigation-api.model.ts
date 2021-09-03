import { ReportModelBase } from '@models/report-model-base';
import { PatientInformationApiModel } from '@models/shared/patient-information/patient-information-api.model';

export class AreaOfInvestigationApiModel extends ReportModelBase {
  patientInformation: PatientInformationApiModel;

  constructor() {
    super();
    this.patientInformation = new PatientInformationApiModel();
  }
}
