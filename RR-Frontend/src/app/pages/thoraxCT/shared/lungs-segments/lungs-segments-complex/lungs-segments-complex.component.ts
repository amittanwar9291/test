import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { LungsSegmentsModel } from '@models/thoraxCT/ui/thorax/lungs-segments.model';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { TranslateService } from '@ngx-translate/core';
import { LoggingService } from '@services/shared/logging/logging.service';
import { CustomTranslateService } from '@services/shared';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';

@Component({
  selector: 'rr-lungs-segments-complex',
  templateUrl: './lungs-segments-complex.component.html',
  styleUrls: ['./lungs-segments-complex.component.scss'],
  providers: [MakeProvider(LungsSegmentsComplexComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LungsSegmentsComplexComponent extends LocalizerBase<LungsSegmentsModel> {
  @Output() close = new EventEmitter();

  constructor(public translate: TranslateService, public logger: LoggingService, public customTranslate: CustomTranslateService) {
    super(LungsSegmentsModel);
  }

  closeLargeLocalizer() {
    this.close.emit();
  }
}
