import { ReportModelBase } from '@models/report-model-base';
import { PatientInformationApiModel } from '@models/shared/patient-information/patient-information-api.model';

export class LocalizationApiModel extends ReportModelBase {
  localization: string;
  patientInformation: PatientInformationApiModel;
  isAnkleJoint: boolean;
  isFoot: boolean;
  isForefoot: boolean;

  constructor() {
    super();
    this.localization = 'None';
    this.patientInformation = new PatientInformationApiModel();
    this.isAnkleJoint = false;
    this.isFoot = false;
    this.isForefoot = false;
  }
}
