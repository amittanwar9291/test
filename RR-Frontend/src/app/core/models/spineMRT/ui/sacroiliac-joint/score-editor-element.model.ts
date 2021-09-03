import { SacroiliacJointScoreUiModel } from '@models/spineMRT/ui/sacroiliac-joint/sacroiliac-joint-score-ui.model';
import { compact, cloneDeep } from 'lodash';

export class ScoreEditorElementModel {
  step: number;
  data: SacroiliacJointScoreUiModel;
  stepScore: number;

  getStepScore(data: SacroiliacJointScoreUiModel): number {
    let sum = 0;
    if (data.isManifestationLeft) {
      sum++;
    }
    if (data.isManifestationRight) {
      sum++;
    }
    if (data.isManifestationLeft) {
      sum++;
    }
    if (data.isSTIRLeft) {
      sum++;
    }
    if (data.isSTIRRight) {
      sum++;
    }
    sum = sum + compact(Object.values(data.scoreLocation)).length;
    return sum;
  }

  constructor(step: number, data: SacroiliacJointScoreUiModel) {
    this.step = step;
    this.data = cloneDeep(data);
    this.stepScore = this.getStepScore(data) || 0;
  }
}
