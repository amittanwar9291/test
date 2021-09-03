import { Component, Input } from '@angular/core';

import { MakeProvider, NgModelAccessorBase } from '@abstractions/ng-model/ngmodel-accessor-base';

import { DirectionTypeEnum } from '@enums/shared/direction-type.enum';

@Component({
  selector: 'rr-side',
  templateUrl: './side.component.html',
  providers: [MakeProvider(SideComponent)]
})
export class SideComponent extends NgModelAccessorBase<DirectionTypeEnum> {
  @Input() name: string;
  directionType = DirectionTypeEnum;

  onSideClick(): void {
    this.writeValue(this.ngValue);
  }
}
