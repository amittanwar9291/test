import { ModelBase } from '@models/model-base';
import { ScoreLocationModel } from '@models/spineMRT/ui/spine/score-location.model';

export class SacroiliacJointScoreUiModel extends ModelBase {
  scoreLocation: ScoreLocationModel;
  isManifestationRight: boolean;
  isManifestationLeft: boolean;
  isSTIRRight: boolean;
  isSTIRLeft: boolean;
  constructor() {
    super();
    this.scoreLocation = new ScoreLocationModel();
    this.isManifestationRight = false;
    this.isManifestationLeft = false;
    this.isSTIRRight = false;
    this.isSTIRLeft = false;
  }
}
