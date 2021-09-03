import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

import { LungsModel } from '@models/thoraxCT/ui/thorax/lungs.model';

import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { TranslateService } from '@ngx-translate/core';
import { LoggingService } from '@services/shared/logging/logging.service';
import { CustomTranslateService } from '@services/shared';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';

@Component({
  selector: 'rr-lungs-complex',
  templateUrl: './lungs-complex.component.html',
  styleUrls: ['./lungs-complex.component.scss'],
  providers: [MakeProvider(LungsComplexComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LungsComplexComponent extends LocalizerBase<LungsModel> {
  @Output() close = new EventEmitter();

  constructor(public translate: TranslateService, public logger: LoggingService, public customTranslate: CustomTranslateService) {
    super(LungsModel);
  }

  closeLargeLocalizer() {
    this.close.emit();
  }
}
