import { ReportModelBase } from '@models/report-model-base';
import { PatientInformationApiModel } from '@models/shared/patient-information/patient-information-api.model';

export class LocalizationApiModel extends ReportModelBase {
  patientInformation: PatientInformationApiModel;
  isMultiparametric: boolean;
  isDynamic: boolean;
  investigationType: string;

  constructor() {
    super();

    this.patientInformation = new PatientInformationApiModel();
    this.isMultiparametric = false;
    this.isDynamic = false;
    this.investigationType = 'None';
  }
}
