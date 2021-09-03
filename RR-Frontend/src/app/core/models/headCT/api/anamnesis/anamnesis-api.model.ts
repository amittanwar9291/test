import { ReportModelBase } from '@models/report-model-base';
import { ClinicSymptomsFindingApiModel } from './clinic-symptoms-finding-api.model';
import { PreviousInterventionsTherapiesFindingApiModel } from './previous-interventions-therapies-finding-api.model';

export class AnamnesisApiModel extends ReportModelBase {
  clinicalSymptomFindings: ClinicSymptomsFindingApiModel[];
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

  hours: number;
  days: number;
  months: number;
  years: number;

  constructor() {
    super();

    this.clinicalSymptomFindings = [new ClinicSymptomsFindingApiModel()];
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

    this.hours = null;
    this.days = null;
    this.months = null;
    this.years = null;
  }
}
