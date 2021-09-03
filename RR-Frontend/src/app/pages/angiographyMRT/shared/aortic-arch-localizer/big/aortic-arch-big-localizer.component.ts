import { Component, Output, EventEmitter, ViewEncapsulation, Input } from '@angular/core';

import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';

import { AorticArch } from '@models/angiographyMRT/ui/localizers/aortic-arch.model';

import { TranslateService } from '@ngx-translate/core';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-aortic-arch-big-localizer',
  templateUrl: './aortic-arch-big-localizer.component.html',
  styleUrls: ['./aortic-arch-big-localizer.component.scss'],
  providers: [MakeProvider(AorticArchBigLocalizerComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AorticArchBigLocalizerComponent extends LocalizerBase<AorticArch> {
  @Input() isArcusAortaeDivided: boolean;
  @Output() close = new EventEmitter();

  elements = {
    aorticRoot: nameof<AorticArch>(m => m.aorticRoot),
    ascendingAorta: nameof<AorticArch>(m => m.ascendingAorta),
    aorticArch: nameof<AorticArch>(m => m.aorticArch),
    descendingAorta: nameof<AorticArch>(m => m.descendingAorta),
    suprarenalAbdominalAorta: nameof<AorticArch>(m => m.suprarenalAbdominalAorta),
    infrarenalAbdominalAorta: nameof<AorticArch>(m => m.infrarenalAbdominalAorta),
    rightCommonIliacArtery: nameof<AorticArch>(m => m.rightCommonIliacArtery),
    leftCommonIliacArtery: nameof<AorticArch>(m => m.leftCommonIliacArtery),
    rightExternalIliacArtery: nameof<AorticArch>(m => m.rightExternalIliacArtery),
    leftExternalIliacArtery: nameof<AorticArch>(m => m.leftExternalIliacArtery),
    arcusAortaeBetweenTruncusAndCarotis: nameof<AorticArch>(m => m.arcusAortaeBetweenTruncusAndCarotis),
    arcusAortaeBetweenCarotisAndSubclavia: nameof<AorticArch>(m => m.arcusAortaeBetweenCarotisAndSubclavia)
  };

  constructor(public translate: TranslateService) {
    super(AorticArch);
  }

  closeLargeLocalizer() {
    this.close.emit();
  }
}
