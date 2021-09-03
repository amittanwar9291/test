import { Component, ViewEncapsulation } from '@angular/core';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { PelvisBonesModel } from '@models/pelvisMRT/ui/pelvic-floor/pelvis-bones.model';
import { TranslateService } from '@ngx-translate/core';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';

@Component({
  selector: 'rr-pelvis-bones',
  templateUrl: './pelvis-bones.component.html',
  styleUrls: ['./pelvis-bones.component.scss'],
  providers: [MakeProvider(PelvisBonesComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PelvisBonesComponent extends LocalizerBase<PelvisBonesModel> {
  constructor(public translate: TranslateService) {
    super(PelvisBonesModel);
  }
}
