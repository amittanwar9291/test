import { Component, ViewEncapsulation } from '@angular/core';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LiverSegmentsUiModel } from '@models/abdomenMRT/ui/shared/liver-segments-ui-model';
import { LiverSegmentsLocationsEnum } from '@enums/shared/abdomen/liver-segments-locations.enum';

@Component({
  selector: 'rr-liver-segments-small-localizer',
  templateUrl: './liver-segments-small-localizer.component.html',
  styleUrls: ['./liver-segments-small-localizer.component.scss'],
  providers: [MakeProvider(LiverSegmentsSmallLocalizerComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LiverSegmentsSmallLocalizerComponent extends LocalizerBase<LiverSegmentsUiModel> {
  liverSegmentsLocations = LiverSegmentsLocationsEnum;
  constructor() {
    super(LiverSegmentsUiModel);
  }
}
