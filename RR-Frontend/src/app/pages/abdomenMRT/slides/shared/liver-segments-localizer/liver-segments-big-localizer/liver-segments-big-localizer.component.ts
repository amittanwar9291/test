import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { LiverSegmentsUiModel } from '@models/abdomenMRT/ui/shared/liver-segments-ui-model';
import { LiverSegmentsLocationsEnum } from '@enums/shared/abdomen/liver-segments-locations.enum';

@Component({
  selector: 'rr-liver-segments-big-localizer',
  templateUrl: './liver-segments-big-localizer.component.html',
  styleUrls: ['./liver-segments-big-localizer.component.scss'],
  providers: [MakeProvider(LiverSegmentsBigLocalizerComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LiverSegmentsBigLocalizerComponent extends LocalizerBase<LiverSegmentsUiModel> {
  @Output() close = new EventEmitter();

  liverSegmentsLocations = LiverSegmentsLocationsEnum;

  constructor() {
    super(LiverSegmentsUiModel);
  }

  closeLargeLocalizer() {
    this.close.emit();
  }
}
