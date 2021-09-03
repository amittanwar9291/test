import { ReportModelBase } from '@models/report-model-base';
import { AngiographyManUiModel } from '@models/angiographyMRT/ui/angiography/angiography-man-ui.model';
import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';

export class LocalizationUiModel extends ReportModelBase {
  localization: AngiographyManUiModel;
  patientInformation: PatientInformationUiModel;

  constructor() {
    super();
    this.localization = new AngiographyManUiModel();
    this.patientInformation = new PatientInformationUiModel();
  }
}
