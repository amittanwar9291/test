import { Component, ViewEncapsulation } from '@angular/core';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { HipBonesUiModel } from '@models/hipMRT/ui/bones/hip-bones-ui.model';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { HipBonesLocalizerElementsEnum } from '@enums/hipMRT/bones/hip-bones-localizer-elements.enum';

@Component({
  selector: 'rr-hips-small',
  templateUrl: './hips-small.component.html',
  styleUrls: ['./hips-small.component.scss'],
  providers: [MakeProvider(HipsSmallComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HipsSmallComponent extends LocalizerBase<HipBonesUiModel> {
  hipLocalizer = HipBonesLocalizerElementsEnum;

  constructor() {
    super(HipBonesUiModel);
  }
}
