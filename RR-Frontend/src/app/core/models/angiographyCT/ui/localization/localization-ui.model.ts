import { ReportModelBase } from '@models/report-model-base';
import { AngiographyCTManUiModel } from '@models/angiographyCT/ui/angiography/angiography-CT-man-ui.model';
import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';

export class LocalizationUiModel extends ReportModelBase {
  localization: AngiographyCTManUiModel;
  patientInformation: PatientInformationUiModel;

  constructor() {
    super();
    this.localization = new AngiographyCTManUiModel();
    this.patientInformation = new PatientInformationUiModel();
  }
}
