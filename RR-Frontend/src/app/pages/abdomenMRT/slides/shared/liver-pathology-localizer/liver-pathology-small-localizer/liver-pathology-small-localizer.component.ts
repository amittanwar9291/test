import { Component, ViewEncapsulation } from '@angular/core';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { LiverPathologyLocationsEnum } from '@enums/abdomenMRT/liver/';
import { LiverPathologyUiModel } from '@models/abdomenMRT/ui/shared/liver-pathology-ui-model';

@Component({
  selector: 'rr-liver-pathology-small-localizer',
  templateUrl: './liver-pathology-small-localizer.component.html',
  styleUrls: ['./liver-pathology-small-localizer.component.scss'],
  providers: [MakeProvider(LiverPathologySmallLocalizerComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LiverPathologySmallLocalizerComponent extends LocalizerBase<LiverPathologyUiModel> {
  liverPathologyLocations = LiverPathologyLocationsEnum;
  constructor() {
    super(LiverPathologyUiModel);
  }
}
