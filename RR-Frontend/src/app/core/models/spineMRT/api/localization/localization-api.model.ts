import { ReportModelBase } from '@models/report-model-base';

import { PatientInformationApiModel } from '@models/shared/patient-information/patient-information-api.model';
import { ScanAreaTypesEnum } from '@enums/spineMRT/localization/area-of-examination-types.enum';

export class LocalizationApiModel extends ReportModelBase {
  spineLocation: string;
  scanAreaType: ScanAreaTypesEnum;
  patientInformation: PatientInformationApiModel;

  constructor() {
    super();

    this.spineLocation = 'None';
    this.scanAreaType = ScanAreaTypesEnum.None;
    this.patientInformation = new PatientInformationApiModel();
  }
}
