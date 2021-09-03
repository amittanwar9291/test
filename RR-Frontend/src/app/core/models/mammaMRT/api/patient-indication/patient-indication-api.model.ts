import { ReportModelBase } from '@models/report-model-base';
import { PatientInformationApiModel } from '@models/shared/patient-information/patient-information-api.model';
import { PatientIndicationFindingApiModel } from '@models/mammaMRT/api/patient-indication/patient-indication-finding-api.model';

import { MammaMRITypeEnum, MammographyDetailsEnum } from '@enums/mammaMRT/patient-indication';

export class PatientIndicationApiModel extends ReportModelBase {
  patientInformation: PatientInformationApiModel;
  mriMammaType: MammaMRITypeEnum;
  yearOfLastMRT: number;
  monthOfLastMRT: number;
  wasMammography: boolean;
  yearOfLastMammography: number;
  monthOfLastMammography: number;
  mammographyDetails: MammographyDetailsEnum;
  wasMammasonography: boolean;
  yearOfLastMammosonography: number;
  monthOfLastMammosonography: number;
  mammasonographyDetails: MammographyDetailsEnum;
  findings: PatientIndicationFindingApiModel[];

  constructor() {
    super();

    this.patientInformation = new PatientInformationApiModel();
    this.mriMammaType = MammaMRITypeEnum.None;
    this.yearOfLastMRT = 0;
    this.monthOfLastMRT = 0;
    this.wasMammography = false;
    this.yearOfLastMammography = 0;
    this.monthOfLastMammography = 0;
    this.mammographyDetails = MammographyDetailsEnum.None;
    this.wasMammasonography = false;
    this.yearOfLastMammosonography = 0;
    this.monthOfLastMammosonography = 0;
    this.mammasonographyDetails = MammographyDetailsEnum.None;
    this.findings = [new PatientIndicationFindingApiModel()];
  }
}
