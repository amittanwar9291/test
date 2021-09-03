import { ReportModelBase } from '@models/report-model-base';
import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';
import { InvestigationTypeEnum } from '@enums/pelvisMRT/localization/investigation-type.enum';

export class LocalizationUiModel extends ReportModelBase {
  patientInformation: PatientInformationUiModel;
  isMultiparametric: boolean;
  isDynamic: boolean;
  investigationType: InvestigationTypeEnum;

  constructor() {
    super();

    this.patientInformation = new PatientInformationUiModel();
    this.isMultiparametric = false;
    this.isDynamic = false;
    this.investigationType = InvestigationTypeEnum.None;
  }
}
