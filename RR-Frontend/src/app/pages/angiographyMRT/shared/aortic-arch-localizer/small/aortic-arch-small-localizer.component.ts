import { Component, Input } from '@angular/core';
import { AorticArch } from '@models/angiographyMRT/ui/localizers/aortic-arch.model';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-aortic-arch-small-localizer',
  templateUrl: './aortic-arch-small-localizer.component.html',
  styleUrls: ['./aortic-arch-small-localizer.component.scss']
})
export class AorticArchSmallLocalizerComponent {
  @Input() aorticArch: AorticArch;
  @Input() isArcusAortaeDivided: boolean;

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

  constructor() {
    this.aorticArch = this.aorticArch || new AorticArch();
  }

  isElementChecked(arteryPart: string): boolean {
    return this.aorticArch[arteryPart];
  }
}
