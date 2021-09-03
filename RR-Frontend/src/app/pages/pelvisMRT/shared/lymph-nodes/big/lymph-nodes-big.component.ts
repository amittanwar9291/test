import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { LymphNodes } from '@models/pelvisMRT/ui/localizers/lymph-nodes';
import { TranslateService } from '@ngx-translate/core';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';

@Component({
  selector: 'rr-lymph-nodes-big',
  templateUrl: './lymph-nodes-big.component.html',
  styleUrls: ['./lymph-nodes-big.component.scss'],
  providers: [MakeProvider(LymphNodesBigComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LymphNodesBigComponent extends LocalizerBase<LymphNodes> {
  @Output() close = new EventEmitter();

  constructor(public translate: TranslateService) {
    super(LymphNodes);
  }

  closeLargeLocalizer() {
    this.close.emit();
  }
}
