import { LungsFlapsMulticolorLocalizerUi } from '@models/shared/thorax/localizers/lungs-flaps-multicolor-localizer-ui';

export class MorphologyEditorResult {
  model: LungsFlapsMulticolorLocalizerUi;
  score: number;

  constructor(model: LungsFlapsMulticolorLocalizerUi, score: number) {
    this.model = model;
    this.score = score;
  }
}
