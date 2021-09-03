import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';

import { HipBonesUiModel } from '@models/hipMRT/ui/bones/hip-bones-ui.model';

import { BonesLocalizerElementsEnum } from '@enums/pelvisMRT/bones/bones-localizer-elements.enum';

@Component({
  selector: 'rr-hips-large',
  templateUrl: './hips-large.component.html',
  styleUrls: ['./hips-large.component.scss'],
  providers: [MakeProvider(HipsLargeComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HipsLargeComponent extends LocalizerBase<HipBonesUiModel> {
  @Input() activeElements: BonesLocalizerElementsEnum[] = [];
  @Output() close = new EventEmitter();
  hipLocalizer = BonesLocalizerElementsEnum;

  constructor() {
    super(HipBonesUiModel);
  }

  isElementInactive(element: BonesLocalizerElementsEnum) {
    return !this.activeElements.includes(element);
  }

  closeLargeLocalizer(): void {
    this.close.emit();
  }
}
