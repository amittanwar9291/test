import { ReportModelBase } from '@models/report-model-base';
import { PatientInformationApiModel } from '@models/shared/patient-information/patient-information-api.model';
import { ExaminationIndicationApiModel } from '@models/headMRT/api/examination/examination-indication-api.model';

export class ExaminationApiModel extends ReportModelBase {
  isBrainMRI: boolean;
  isBrainstemMRI: boolean;
  isPituitaryMRI: boolean;
  isOrbitaMRI: boolean;
  isParanasalSinusMRI: boolean;
  patientInformation: PatientInformationApiModel;
  findings: ExaminationIndicationApiModel[];

  constructor() {
    super();
    this.isBrainMRI = false;
    this.isBrainstemMRI = false;
    this.isPituitaryMRI = false;
    this.isOrbitaMRI = false;
    this.isParanasalSinusMRI = false;
    this.patientInformation = new PatientInformationApiModel();
    this.findings = [new ExaminationIndicationApiModel()];
  }
}
