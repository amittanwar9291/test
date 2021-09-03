import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MakeProvider, NgModelAccessorBase } from '@abstractions/ng-model/ngmodel-accessor-base';
import { WristModel } from '@models/handMRT/ui/hand/localizers/wrist.model';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';

@Component({
  selector: 'rr-wrist-small',
  templateUrl: './wrist-small.component.html',
  styleUrls: ['./wrist-small.component.scss'],
  providers: [MakeProvider(WristSmallComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class WristSmallComponent extends NgModelAccessorBase<WristModel> {
  @Input() side: LocationTypeEnum;
  locationType: typeof LocationTypeEnum;

  constructor() {
    super();
    this.side = this.side || LocationTypeEnum.Left;
    this.ngValue = new WristModel();
    this.locationType = LocationTypeEnum;
  }

  public isElementSelected(boneName: string): boolean {
    return this.ngValue[boneName];
  }

  public getTransformation(): string {
    return this.side === LocationTypeEnum.Left ? 'translate(390 255.807) scale(-1,1)' : 'translate(76 255.807)';
  }
}
