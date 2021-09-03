import { Component, ViewEncapsulation } from '@angular/core';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { AngiographyManUiModel } from '@models/angiographyMRT/ui/angiography/angiography-man-ui.model';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';

@Component({
  selector: 'rr-angiography-man',
  templateUrl: './angiography-man.component.html',
  styleUrls: ['./angiography-man.component.scss'],
  providers: [MakeProvider(AngiographyManComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AngiographyManComponent extends LocalizerBase<AngiographyManUiModel> {
  constructor() {
    super(AngiographyManUiModel);
  }
}
