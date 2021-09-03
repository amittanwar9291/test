import { Component, ViewEncapsulation } from '@angular/core';

import { BreastPizzaSlices } from '@models/shared/mamma/breast/breast-pizza-slices.model';

import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';

import { mapValues } from 'lodash';

@Component({
  selector: 'rr-breast-pizza-slices',
  templateUrl: './breast-pizza-slices.component.html',
  styleUrls: ['./breast-pizza-slices.component.scss'],
  providers: [MakeProvider(BreastPizzaSlicesComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BreastPizzaSlicesComponent extends LocalizerBase<BreastPizzaSlices> {
  constructor() {
    super(BreastPizzaSlices);
  }

  selectElement(name: string): void {
    this.resetPropertiesOfSelectedSide(name, name.slice(0, 1));
    super.selectElement(name);
  }

  resetPropertiesOfSelectedSide(sideName: string, sideNameShortened: string): void {
    if (sideName.includes(sideNameShortened)) {
      this.ngValue = mapValues(this.ngValue, (value, key) => {
        return key.includes(sideNameShortened) && key !== sideName ? false : value;
      });
    }
  }
}
