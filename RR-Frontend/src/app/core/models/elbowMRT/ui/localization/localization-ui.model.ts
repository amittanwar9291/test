import { ReportModelBase } from '@models/report-model-base';
import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';
import { ElbowSimpleModel } from '@models/elbowMRT/ui/elbow/elbow-simple.model';

export class LocalizationUiModel extends ReportModelBase {
  localization: ElbowSimpleModel;
  patientInformation: PatientInformationUiModel;

  constructor() {
    super();
    this.localization = new ElbowSimpleModel();
    this.patientInformation = new PatientInformationUiModel();
  }
}
