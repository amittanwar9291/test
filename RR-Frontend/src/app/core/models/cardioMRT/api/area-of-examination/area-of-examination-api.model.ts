import { ReportModelBase } from '@models/report-model-base';
import { PatientInformationApiModel } from '@models/shared/patient-information/patient-information-api.model';

export class AreaOfExaminationApiModel extends ReportModelBase {
  patientInformation: PatientInformationApiModel;
  isSpecificHeartMRT: boolean;
  bsa: number;

  constructor() {
    super();

    this.patientInformation = new PatientInformationApiModel();
    this.isSpecificHeartMRT = true;
    this.bsa = 0;
  }
}
