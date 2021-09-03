import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { LungsFlapsModel } from '@models/shared/thorax/localizers/lungs-flaps-model';

@Component({
  selector: 'rr-lungs-flaps-complex',
  templateUrl: './lungs-flaps-complex.component.html',
  styleUrls: ['./lungs-flaps-complex.component.scss'],
  providers: [MakeProvider(LungsFlapsComplexComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LungsFlapsComplexComponent extends LocalizerBase<LungsFlapsModel> {
  @Input() descriptionVersion: 'ver1' | 'ver2';
  @Output() close = new EventEmitter();

  constructor() {
    super(LungsFlapsModel);
  }

  closeLocalizer() {
    this.close.emit();
  }
}
