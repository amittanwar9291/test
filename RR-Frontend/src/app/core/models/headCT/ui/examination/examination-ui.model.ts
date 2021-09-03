import { ReportModelBase } from '@models/report-model-base';
import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';
import { ExaminationIndicationUiModel } from './examination-indication-ui.model';

export class ExaminationUiModel extends ReportModelBase {
  isBrainMRI: boolean;
  isBrainstemMRI: boolean;
  isPituitaryMRI: boolean;
  isOrbitaMRI: boolean;
  isParanasalSinusMRI: boolean;
  isTemporalBone: boolean;
  patientInformation: PatientInformationUiModel;
  findings: ExaminationIndicationUiModel[];
  constructor() {
    super();
    this.isBrainMRI = false;
    this.isBrainstemMRI = false;
    this.isPituitaryMRI = false;
    this.isOrbitaMRI = false;
    this.isParanasalSinusMRI = false;
    this.isTemporalBone = false;
    this.patientInformation = new PatientInformationUiModel();
    this.findings = [new ExaminationIndicationUiModel()];
  }
}
