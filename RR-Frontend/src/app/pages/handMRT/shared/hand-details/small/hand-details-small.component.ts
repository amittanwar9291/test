import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { MakeProvider, NgModelAccessorBase } from '@abstractions/ng-model/ngmodel-accessor-base';
import { HandDetails } from '@models/handMRT/ui/hand/localizers/hand-details.model';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';

@Component({
  selector: 'rr-hand-details-small',
  templateUrl: './hand-details-small.component.html',
  styleUrls: ['./hand-details-small.component.scss'],
  providers: [MakeProvider(HandDetailsSmallComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HandDetailsSmallComponent extends NgModelAccessorBase<HandDetails> implements OnInit {
  @Input() side: LocationTypeEnum;
  @Input() isInsightTab: boolean;
  @Input() isComplex = true;

  sideText: string;
  locationType = LocationTypeEnum;

  constructor() {
    super();
    this.ngValue = new HandDetails();
  }

  ngOnInit() {
    this.sideText = this.side === LocationTypeEnum.Left ? 'hand-details.left' : 'hand-details.right';
  }

  isElementSelected(boneName: string): boolean {
    return this.ngValue[boneName];
  }
}
