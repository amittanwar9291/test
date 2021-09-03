import { ReportModelBase } from '@models/report-model-base';
import { TechnologyFindingUiModel } from '@models/mammaMX/ui/technology/technology-finding-ui.model';
import { BreastSimple } from '../../../shared/mamma/breast/breast-simple.model';

export class TechnologyUiModel extends ReportModelBase {
  isMammography: boolean;
  breastLocationCC: BreastSimple;
  breastLocationMLO: BreastSimple;
  findings: TechnologyFindingUiModel[];
  isUltrasound: boolean;
  breastLocationSonography: BreastSimple;
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
    this.breastLocationCC = new BreastSimple();
    this.breastLocationMLO = new BreastSimple();
    this.findings = [new TechnologyFindingUiModel()];
    this.isUltrasound = false;
    this.breastLocationSonography = new BreastSimple();
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
