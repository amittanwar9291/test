import { Component, ViewEncapsulation } from '@angular/core';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { LymphNodes } from '@models/pelvisMRT/ui/localizers/lymph-nodes';
import { TranslateService } from '@ngx-translate/core';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';

@Component({
  selector: 'rr-lymph-nodes-small',
  templateUrl: './lymph-nodes-small.component.html',
  styleUrls: ['./lymph-nodes-small.component.scss'],
  providers: [MakeProvider(LymphNodesSmallComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LymphNodesSmallComponent extends LocalizerBase<LymphNodes> {
  constructor(public translate: TranslateService) {
    super(LymphNodes);
  }
}
