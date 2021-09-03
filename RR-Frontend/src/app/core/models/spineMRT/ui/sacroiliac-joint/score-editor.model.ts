import { ScoreEditorElementModel } from '@models/spineMRT/ui/sacroiliac-joint/score-editor-element.model';
import { SacroiliacJointFindingUiModel } from '@models/spineMRT/ui/sacroiliac-joint/sacroiliac-joint-finding-ui.model';

export class ScoreEditorModel {
  scores: ScoreEditorElementModel[];
  scoreSum: number;

  constructor(model: SacroiliacJointFindingUiModel) {
    this.scores = [
      new ScoreEditorElementModel(1, model.score1),
      new ScoreEditorElementModel(2, model.score2),
      new ScoreEditorElementModel(3, model.score3),
      new ScoreEditorElementModel(4, model.score4),
      new ScoreEditorElementModel(5, model.score5),
      new ScoreEditorElementModel(6, model.score6)
    ];
    this.scoreSum = model.sparccScore;
  }
}
