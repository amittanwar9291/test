import { ReportModelBase } from '@models/report-model-base';
import { IndicationFindingApiModel } from '@models/neckMRT/api/indication/indication-finding-api.model';
import { PreviousTherapyApiModel } from '@models/neckMRT/api/indication/previous-therapy-api.model';

export class IndicationApiModel extends ReportModelBase {
  indications: IndicationFindingApiModel[];
  previousTherapies: PreviousTherapyApiModel[];
  isMRI: boolean;
  monthOfMRI: number;
  yearOfMRI: number;
  isCT: boolean;
  monthOfCT: number;
  yearOfCT: number;
  isSonography: boolean;
  monthOfSonography: number;
  yearOfSonography: number;

  constructor() {
    super();
    this.indications = [];
    this.previousTherapies = [];
    this.isMRI = false;
    this.monthOfMRI = null;
    this.yearOfMRI = null;
    this.isCT = false;
    this.monthOfCT = null;
    this.yearOfCT = null;
    this.isSonography = false;
    this.monthOfSonography = null;
    this.yearOfSonography = null;
  }
}
