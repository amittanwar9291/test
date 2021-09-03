import { ReportModelBase } from '@models/report-model-base';
import { AnamnesisFindingApiModel } from '@models/elbowMRT/api/anamnesis/anamnesis-finding-api.model';

export class AnamnesisApiModel extends ReportModelBase {
  findings: AnamnesisFindingApiModel[];

  isXRay: boolean;
  xRayMonth: number;
  xRayYear: number;
  isCT: boolean;
  ctMonth: number;
  ctYear: number;
  isMRI: boolean;
  mriMonth: number;
  mriYear: number;

  constructor() {
    super();

    this.findings = [];

    this.isXRay = false;
    this.xRayMonth = 0;
    this.xRayYear = 0;
    this.isCT = false;
    this.ctMonth = 0;
    this.ctYear = 0;
    this.isMRI = false;
    this.mriMonth = 0;
    this.mriYear = 0;
  }
}
