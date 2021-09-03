import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { SacroiliacJointFindingUiModel } from '@models/spineMRT/ui/sacroiliac-joint/sacroiliac-joint-finding-ui.model';
import { mapKeys, uniq } from 'lodash';
import { ScoreEditorElementModel } from '@models/spineMRT/ui/sacroiliac-joint/score-editor-element.model';
import { SacroiliacJointScoreUiModel } from '@models/spineMRT/ui/sacroiliac-joint/sacroiliac-joint-score-ui.model';

@Component({
  selector: 'rr-sparcc-score-localizer-simple',
  templateUrl: './sparcc-score-localizer-simple.component.html',
  styleUrls: ['./sparcc-score-localizer-simple.component.scss'],
  providers: [MakeProvider(SparccScoreLocalizerSimpleComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SparccScoreLocalizerSimpleComponent {
  @Input() model: SacroiliacJointFindingUiModel;
  constructor() {}

  isSelected(element: string): boolean {
    const allSelection: string[] = [];
    this.getModelSelections().forEach((item: SacroiliacJointScoreUiModel) => {
      mapKeys(item.scoreLocation, (value, key) => {
        if (value) {
          allSelection.push(key);
        }
      });
    });
    return uniq(allSelection).includes(element);
  }

  private getModelSelections(): SacroiliacJointScoreUiModel[] {
    return [this.model.score1, this.model.score2, this.model.score3, this.model.score4, this.model.score5, this.model.score6];
  }
}
