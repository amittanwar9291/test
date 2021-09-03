import { ReportModelBase } from '@models/report-model-base';
import { PatientInformationApiModel } from '@models/shared/patient-information/patient-information-api.model';
import { PatientIndicationFindingApiModel } from '@models/mammaMX/api/patient-indication/patient-indication-finding-api.model';
import { MXMammaTypeEnum, MammographyDetailsEnum } from '@enums/mammaMX/patient-indication';

export class PatientIndicationApiModel extends ReportModelBase {
  patientInformation: PatientInformationApiModel;
  mxMammaType: MXMammaTypeEnum;
  yearOfLastMX: number;
  monthOfLastMX: number;
  wasMammography: boolean;
  yearOfLastMammography: number;
  monthOfLastMammography: number;
  mammographyDetails: MammographyDetailsEnum;
  wasMammasonography: boolean;
  yearOfLastMammosonography: number;
  monthOfLastMammosonography: number;
  mammasonographyDetails: MammographyDetailsEnum;
  mammographyMRTDetails: MammographyDetailsEnum;
  findings: PatientIndicationFindingApiModel[];

  constructor() {
    super();

    this.patientInformation = new PatientInformationApiModel();
    this.mxMammaType = MXMammaTypeEnum.None;
    this.yearOfLastMX = 0;
    this.monthOfLastMX = 0;
    this.wasMammography = false;
    this.yearOfLastMammography = 0;
    this.monthOfLastMammography = 0;
    this.mammographyDetails = MammographyDetailsEnum.None;
    this.wasMammasonography = false;
    this.yearOfLastMammosonography = 0;
    this.monthOfLastMammosonography = 0;
    this.mammasonographyDetails = MammographyDetailsEnum.None;
    this.mammographyMRTDetails = MammographyDetailsEnum.None;
    this.findings = [new PatientIndicationFindingApiModel()];
  }
}
