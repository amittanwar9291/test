import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { HandJoints } from '@models/handMRT/ui/hand/localizers/hand-joints.model';

@Component({
  selector: 'rr-hand-joints-small',
  templateUrl: './hand-joints-small.component.html',
  styleUrls: ['./hand-joints-small.component.scss'],
  providers: [MakeProvider(HandJointsSmallComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HandJointsSmallComponent extends LocalizerBase<HandJoints> {
  @Input() side: LocationTypeEnum;
  locationSideType = LocationTypeEnum;

  constructor() {
    super(HandJoints);
    this.side = LocationTypeEnum.Left;
  }
}
