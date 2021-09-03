import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { LungLocalizerUiModel } from '@models/cardioMRT/ui/pericardium-vessels/lung-localizer-ui.model';
import { LungLocalizer } from '@enums/cardioMRT/pericardium-vessels/lung-localizer.enum';

@Component({
  selector: 'rr-cardio-lung-localizer-large',
  templateUrl: './cardio-lung-localizer-large.component.html',
  styleUrls: ['./cardio-lung-localizer-large.component.scss'],
  providers: [MakeProvider(CardioLungLocalizerLargeComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CardioLungLocalizerLargeComponent extends LocalizerBase<LungLocalizerUiModel> {
  @Output() close = new EventEmitter();
  lungLocalizer = LungLocalizer;

  constructor() {
    super(LungLocalizerUiModel);
  }

  closeLargeLocalizer(): void {
    this.close.emit();
  }
}
