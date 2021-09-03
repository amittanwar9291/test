import { ReportModelBase } from '@models/report-model-base';
import { ShoulderSimple } from '@models/shoulderMRT/ui/shoulder/shoulder-simple.model';
import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';

export class LocalizationUiModel extends ReportModelBase {
  localization: ShoulderSimple;
  patientInformation: PatientInformationUiModel;

  constructor() {
    super();

    this.localization = new ShoulderSimple();
    this.patientInformation = new PatientInformationUiModel();
  }
}
