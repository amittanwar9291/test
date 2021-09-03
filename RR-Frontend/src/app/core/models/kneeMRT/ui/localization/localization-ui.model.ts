import { ReportModelBase } from '@models/report-model-base';
import { KneeSimple } from '@models/kneeMRT/ui/knee/knee-simple.model';
import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';

export class LocalizationUiModel extends ReportModelBase {
  kneeLocation: KneeSimple;
  patientInformation: PatientInformationUiModel;

  constructor() {
    super();

    this.kneeLocation = new KneeSimple();
    this.patientInformation = new PatientInformationUiModel();
  }
}
