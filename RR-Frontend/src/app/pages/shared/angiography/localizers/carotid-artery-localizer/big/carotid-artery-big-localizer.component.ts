import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { CarotidArteryUiModel } from '@models/shared/angiography/localizers/carotid-artery-ui-model';
import { ArteryLocalisationTypeEnum } from '@enums/shared/angiography/artery-localisation-type.enum';

@Component({
  selector: 'rr-carotid-artery-big-localizer',
  templateUrl: './carotid-artery-big-localizer.component.html',
  styleUrls: ['./carotid-artery-big-localizer.component.scss'],
  providers: [MakeProvider(CarotidArteryBigLocalizerComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CarotidArteryBigLocalizerComponent extends LocalizerBase<CarotidArteryUiModel> {
  @Output() close = new EventEmitter();

  arteryLocalisationType = ArteryLocalisationTypeEnum;

  constructor() {
    super(CarotidArteryUiModel);
  }

  closeLargeLocalizer() {
    this.close.emit();
  }
}
