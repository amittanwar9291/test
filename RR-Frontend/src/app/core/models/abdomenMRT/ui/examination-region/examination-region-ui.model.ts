import { ReportModelBase } from '@models/report-model-base';
import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';

export class ExaminationRegionUiModel extends ReportModelBase {
  isMRIAbdomen: boolean;
  isMRIUpperAbdomen: boolean;
  isMRILiver: boolean;
  isMRIPancreas: boolean;
  isMRCP: boolean;
  isMRISellink: boolean;
  isMRIKidneys: boolean;
  isMRIAdrenalGlands: boolean;
  isMRIRetroperitoneum: boolean;
  patientInformation: PatientInformationUiModel;

  constructor() {
    super();
    this.isMRIAbdomen = false;
    this.isMRIUpperAbdomen = false;
    this.isMRILiver = false;
    this.isMRIPancreas = false;
    this.isMRCP = false;
    this.isMRISellink = false;
    this.isMRIKidneys = false;
    this.isMRIAdrenalGlands = false;
    this.isMRIRetroperitoneum = false;
    this.patientInformation = new PatientInformationUiModel();
  }
}
