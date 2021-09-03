import { ReportModelBase } from '@models/report-model-base';
import { ClinicFindingApiModel } from '@models/headMRT/api/anamnesis/clinic-finding-api.model';
import { PreviousInterventionsTherapiesFindingApiModel } from '@models/headMRT/api/anamnesis/previous-interventions-therapies-finding-api.model';

export class AnamnesisApiModel extends ReportModelBase {
  clinicalSymptomFindings: ClinicFindingApiModel[];
  previousInterventionsTherapiesFindings: PreviousInterventionsTherapiesFindingApiModel[];
  isMRI: boolean;
  isCT: boolean;
  isPETCT: boolean;
  isDSA: boolean;
  monthOfMRI: number;
  monthOfCT: number;
  monthOfPETCT: number;
  monthOfDSA: number;
  yearOfMRI: number;
  yearOfCT: number;
  yearOfPETCT: number;
  yearOfDSA: number;

  constructor() {
    super();
    this.clinicalSymptomFindings = [new ClinicFindingApiModel()];
    this.previousInterventionsTherapiesFindings = [new PreviousInterventionsTherapiesFindingApiModel()];
    this.isMRI = false;
    this.isCT = false;
    this.isPETCT = false;
    this.isDSA = false;
    this.monthOfMRI = null;
    this.monthOfCT = null;
    this.monthOfPETCT = null;
    this.monthOfDSA = null;
    this.yearOfMRI = null;
    this.yearOfCT = null;
    this.yearOfPETCT = null;
    this.yearOfDSA = null;
  }
}
