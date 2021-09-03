import { LungsFlapsMulticolorLocalizerUi } from '@models/shared/thorax/localizers/lungs-flaps-multicolor-localizer-ui';

export class MorphologyEditorDialogData {
  localizerModel: LungsFlapsMulticolorLocalizerUi;
  score: number;
  title: string;
  rrids: string[];
  selectedLocalizer: string;

  constructor(localizerModel: LungsFlapsMulticolorLocalizerUi, score: number, title: string, rrids: string[], selectedLocalizer: string) {
    this.localizerModel = localizerModel;
    this.score = score;
    this.title = title;
    this.rrids = rrids;
    this.selectedLocalizer = selectedLocalizer;
  }
}
