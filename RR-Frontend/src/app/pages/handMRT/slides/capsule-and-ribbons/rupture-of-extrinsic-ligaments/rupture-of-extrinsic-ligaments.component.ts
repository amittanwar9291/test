import { Component, Input } from '@angular/core';
import { CapsuleAndRibbonsFindingUiModel } from '@models/handMRT/ui/capsule-and-ribbons/capsule-and-ribbons-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { DorsalTypeEnum } from '@enums/handMRT/capsule-and-ribbons/dorsal-type.enum';
import { PalmarTypeEnum } from '@enums/handMRT/capsule-and-ribbons/palmar-type.enum';

@Component({
  selector: 'rr-rupture-of-extrinsic-ligaments',
  templateUrl: './rupture-of-extrinsic-ligaments.component.html',
  styleUrls: ['./rupture-of-extrinsic-ligaments.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class RuptureOfExtrinsicLigamentsComponent {
  @Input() model: CapsuleAndRibbonsFindingUiModel;

  dorsalType: typeof DorsalTypeEnum;
  palmarType: typeof PalmarTypeEnum;

  constructor() {
    this.initializeEnums();
  }

  public initializeEnums() {
    this.dorsalType = DorsalTypeEnum;
    this.palmarType = PalmarTypeEnum;
  }
}
