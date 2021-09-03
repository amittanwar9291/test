import { ReportModelBase } from '@models/report-model-base';

import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';
import { ScanAreaTypesEnum as scanAreaTypesEnum } from '@enums/spineMRT/localization/area-of-examination-types.enum';

export class LocalizationUiModel extends ReportModelBase {
  spineLocation: SpineLocation;
  scanAreaType: scanAreaTypesEnum;
  patientInformation: PatientInformationUiModel;

  constructor() {
    super();

    this.spineLocation = new SpineLocation();
    this.scanAreaType = scanAreaTypesEnum.None;
    this.patientInformation = new PatientInformationUiModel();
  }
}
