import { ReportModelBase } from '@models/report-model-base';
import { AnamnesisIndicationApiModel } from './anamnesis-indication-api.model';
import { PreviousInterventionApiModel } from './previous-intervention-api.model';

export class AnamnesisApiModel extends ReportModelBase {
  anamnesisIndications: AnamnesisIndicationApiModel[];
  previousInterventions: PreviousInterventionApiModel[];
  isCT: boolean;
  isMRI: boolean;
  isXRay: boolean;
  string: string;

  monthOfCT: number;
  yearOfCT: number;
  monthOfXRay: number;
  yearOfXRay: number;
  monthOfMRI: number;
  yearOfMRI: number;

  constructor() {
    super();
    this.anamnesisIndications = [];
    this.previousInterventions = [];
    this.isCT = false;
    this.isMRI = false;
    this.isXRay = false;
    this.string = '';

    this.monthOfCT = 0;
    this.yearOfCT = 0;
    this.monthOfXRay = 0;
    this.yearOfXRay = 0;
    this.monthOfMRI = 0;
    this.yearOfMRI = 0;
  }
}
