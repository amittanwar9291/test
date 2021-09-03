import { ReportModelBase } from '@models/report-model-base';

import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';

export class LocalizationUiModel extends ReportModelBase {
  spineLocation: SpineLocation;
  patientInformation: PatientInformationUiModel;

  constructor() {
    super();

    this.spineLocation = new SpineLocation();
    this.patientInformation = new PatientInformationUiModel();
  }
}
