import { Component, ViewEncapsulation } from '@angular/core';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { AngiographyCTManUiModel } from '@models/angiographyCT/ui/angiography/angiography-CT-man-ui.model';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';

@Component({
  selector: 'rr-angiography-ct',
  templateUrl: './angiography-man.component.html',
  styleUrls: ['./angiography-man.component.scss'],
  providers: [MakeProvider(AngiographyctManComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AngiographyctManComponent extends LocalizerBase<AngiographyCTManUiModel> {
  constructor() {
    super(AngiographyCTManUiModel);
  }
}
