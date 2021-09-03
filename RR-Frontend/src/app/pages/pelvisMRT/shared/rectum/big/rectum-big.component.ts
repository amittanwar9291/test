import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { Rectum } from '@models/pelvisMRT/ui/localizers/rectum';
import { TranslateService } from '@ngx-translate/core';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';

@Component({
  selector: 'rr-rectum-big',
  templateUrl: './rectum-big.component.html',
  styleUrls: ['./rectum-big.component.scss'],
  providers: [MakeProvider(RectumBigComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class RectumBigComponent extends LocalizerBase<Rectum> {
  @Output() close = new EventEmitter();

  constructor(public translate: TranslateService) {
    super(Rectum);
  }

  closeLargeLocalizer() {
    this.close.emit();
  }
}
