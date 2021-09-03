import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { ArterialTerritoriesLocalizerModel } from '@models/headMRT/ui/arterial-territories-localizer.model';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';

@Component({
  selector: 'rr-arterial-territories-localizer-complex',
  templateUrl: './arterial-territories-localizer-complex.component.html',
  styleUrls: ['./arterial-territories-localizer-complex.component.scss'],
  providers: [MakeProvider(ArterialTerritoriesLocalizerComplexComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ArterialTerritoriesLocalizerComplexComponent extends LocalizerBase<ArterialTerritoriesLocalizerModel> {
  @Output() close = new EventEmitter();

  constructor() {
    super(ArterialTerritoriesLocalizerModel);
  }

  closeLocalizer() {
    this.close.emit();
  }
}
