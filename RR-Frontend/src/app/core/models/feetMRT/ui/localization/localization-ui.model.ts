import { ReportModelBase } from '@models/report-model-base';
import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';
import { FeetSimpleModel } from '@models/feetMRT/ui/localizers/feet-simple.model';

export class LocalizationUiModel extends ReportModelBase {
  localization: FeetSimpleModel;
  patientInformation: PatientInformationUiModel;
  isAnkleJoint: boolean;
  isFoot: boolean;
  isForefoot: boolean;

  constructor() {
    super();
    this.localization = new FeetSimpleModel();
    this.patientInformation = new PatientInformationUiModel();
    this.isAnkleJoint = false;
    this.isFoot = false;
    this.isForefoot = false;
  }
}
