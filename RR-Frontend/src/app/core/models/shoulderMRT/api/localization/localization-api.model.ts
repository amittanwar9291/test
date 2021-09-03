import { ReportModelBase } from '@models/report-model-base';
import { PatientInformationApiModel } from '@models/shared/patient-information/patient-information-api.model';

export class LocalizationApiModel extends ReportModelBase {
  localization: string;
  patientInformation: PatientInformationApiModel;

  constructor() {
    super();

    this.localization = 'None';
    this.patientInformation = new PatientInformationApiModel();
  }
}
