import { Component } from '@angular/core';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { CarotidArteryUiModel } from '@models/shared/angiography/localizers/carotid-artery-ui-model';
import { ArteryLocalisationTypeEnum } from '@enums/shared/angiography/artery-localisation-type.enum';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';

@Component({
  selector: 'rr-carotid-artery-small-localizer',
  templateUrl: './carotid-artery-small-localizer.component.html',
  styleUrls: ['./carotid-artery-small-localizer.component.scss'],
  providers: [MakeProvider(CarotidArterySmallLocalizerComponent)]
})
export class CarotidArterySmallLocalizerComponent extends LocalizerBase<CarotidArteryUiModel> {
  arteryLocalisationType = ArteryLocalisationTypeEnum;

  constructor() {
    super(CarotidArteryUiModel);
  }
}
