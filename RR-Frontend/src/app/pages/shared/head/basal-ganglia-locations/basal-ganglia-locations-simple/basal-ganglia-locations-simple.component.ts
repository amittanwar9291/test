import { Component, ViewEncapsulation } from '@angular/core';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { BasalGangliaLocationsModel } from '@models/shared/head/basal-ganglia-locations.model';

@Component({
  selector: 'rr-basal-ganglia-locations-simple',
  templateUrl: './basal-ganglia-locations-simple.component.html',
  styleUrls: ['./basal-ganglia-locations-simple.component.scss'],
  providers: [MakeProvider(BasalGangliaLocationsSimpleComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BasalGangliaLocationsSimpleComponent extends LocalizerBase<BasalGangliaLocationsModel> {
  constructor() {
    super(BasalGangliaLocationsModel);
  }
}
