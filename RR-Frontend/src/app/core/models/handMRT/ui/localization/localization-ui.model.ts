import { ReportModelBase } from '@models/report-model-base';
import { HandSimple } from '@models/handMRT/ui/hand/localizers/hand-simple.model';
import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';

export class LocalizationUiModel extends ReportModelBase {
  localization: HandSimple;
  patientInformation: PatientInformationUiModel;

  constructor() {
    super();
    this.localization = new HandSimple();
    this.patientInformation = new PatientInformationUiModel();
  }
}
