import { ReportModelBase } from '@models/report-model-base';
import { TechnologyFindingApiModel } from '@models/mammaMX/api/technology/technology-finding-api.model';

export class TechnologyApiModel extends ReportModelBase {
  isMammography: boolean;
  breastLocationCC: string;
  breastLocationMLO: string;
  findings: TechnologyFindingApiModel[];
  isUltrasound: boolean;
  breastLocationSonography: string;
  isColorCodedDopplerUltrasound: boolean;
  isElastography: boolean;
  isUltrasoundGuidedBreastBiopsy: boolean;
  isPunchBiopsyRight: boolean;
  isPunchBiopsyLeft: boolean;
  isVeryDenseParenchyma: boolean;
  isParenchymaNotCompletelyVisible: boolean;
  isProjectionError: boolean;
  isArtifact: boolean;
  isOther: boolean;

  constructor() {
    super();
    this.isMammography = false;
    this.breastLocationCC = 'None';
    this.breastLocationMLO = 'None';
    this.findings = [];
    this.isUltrasound = false;
    this.breastLocationSonography = 'None';
    this.isColorCodedDopplerUltrasound = false;
    this.isElastography = false;
    this.isUltrasoundGuidedBreastBiopsy = false;
    this.isPunchBiopsyRight = false;
    this.isPunchBiopsyLeft = false;
    this.isVeryDenseParenchyma = false;
    this.isParenchymaNotCompletelyVisible = false;
    this.isProjectionError = false;
    this.isArtifact = false;
    this.isOther = false;
  }
}
