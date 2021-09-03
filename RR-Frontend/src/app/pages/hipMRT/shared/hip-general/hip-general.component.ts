import { Component, ViewEncapsulation } from '@angular/core';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { HipGeneralUiModel } from '@models/hipMRT/ui/localization/hip-general-ui.model';
import { HipLocalizationLocalizerElements } from '@enums/hipMRT/localization/hip-localization-localizer-elements.enum';

@Component({
  selector: 'rr-hip-general',
  templateUrl: './hip-general.component.html',
  styleUrls: ['./hip-general.component.scss'],
  providers: [MakeProvider(HipGeneralComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HipGeneralComponent extends LocalizerBase<HipGeneralUiModel> {
  constructor() {
    super(HipGeneralUiModel);
  }

  hipLocalizer = HipLocalizationLocalizerElements;
}
