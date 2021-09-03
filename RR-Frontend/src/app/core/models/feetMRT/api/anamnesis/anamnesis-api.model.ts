import { ReportModelBase } from '@models/report-model-base';
import { AnamnesisIndicationFindingApiModel } from '@models/feetMRT/api/anamnesis/anamnesis-indication-finding-api.model';

export class AnamnesisApiModel extends ReportModelBase {
  isXRay: boolean;
  xRayMonth: number;
  xRayYear: number;
  isCT: boolean;
  ctMonth: number;
  ctYear: number;
  isMRI: boolean;
  mriMonth: number;
  mriYear: number;
  indications: AnamnesisIndicationFindingApiModel[];

  constructor() {
    super();
    this.isXRay = false;
    this.xRayMonth = null;
    this.xRayYear = null;
    this.isCT = false;
    this.ctMonth = null;
    this.ctYear = null;
    this.isMRI = false;
    this.mriMonth = null;
    this.mriYear = null;
    this.indications = [];
  }
}
