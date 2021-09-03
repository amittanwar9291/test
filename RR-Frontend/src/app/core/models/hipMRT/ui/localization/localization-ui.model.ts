import { ReportModelBase } from '@models/report-model-base';
import { HipGeneralUiModel } from '@models/hipMRT/ui/localization/hip-general-ui.model';
import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';

export class LocalizationUiModel extends ReportModelBase {
  hipLocalization: HipGeneralUiModel;
  patientInformation: PatientInformationUiModel;

  constructor() {
    super();

    this.hipLocalization = new HipGeneralUiModel();
    this.patientInformation = new PatientInformationUiModel();
  }
}
