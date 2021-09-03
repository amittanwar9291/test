import { Component } from '@angular/core';

import { MakeProvider, NgModelAccessorBase } from '@abstractions/ng-model/ngmodel-accessor-base';

import { GenderTypeEnum } from '@enums/shared/gender-type.enum';

@Component({
  selector: 'rr-gender-select',
  templateUrl: './gender-select.component.html',
  providers: [MakeProvider(GenderSelectComponent)]
})
export class GenderSelectComponent extends NgModelAccessorBase<GenderTypeEnum> {
  genderType: typeof GenderTypeEnum;

  constructor() {
    super();

    this.genderType = GenderTypeEnum;
  }

  updateModel(): void {
    this.writeValue(this.ngValue);
  }
}
