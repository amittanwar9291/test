import { ReportModelBase } from '@models/report-model-base';
import { AnamnesisIndicationFindingApiModel } from '@models/handMRT/api/anamnesis/anamnesis-indication-finding-api.model';
import { AnamnesisPreviousSurgeriesFindingApiModel } from '@models/handMRT/api/anamnesis/anamnesis-previous-surgeries-finding-api.model';

export class AnamnesisApiModel extends ReportModelBase {
  indications: AnamnesisIndicationFindingApiModel[];
  previousSurgeries: AnamnesisPreviousSurgeriesFindingApiModel[];

  isXRay: boolean;
  monthOfXRay: number;
  yearOfXRay: number;
  isCT: boolean;
  monthOfCT: number;
  yearOfCT: number;
  isMri: boolean;
  monthOfMri: number;
  yearOfMri: number;

  constructor() {
    super();
    this.indications = [new AnamnesisIndicationFindingApiModel()];
    this.previousSurgeries = [new AnamnesisPreviousSurgeriesFindingApiModel()];

    this.isXRay = false;
    this.monthOfXRay = null;
    this.yearOfXRay = null;
    this.isCT = false;
    this.monthOfCT = null;
    this.yearOfCT = null;
    this.isMri = false;
    this.monthOfMri = null;
    this.yearOfMri = null;
  }
}
