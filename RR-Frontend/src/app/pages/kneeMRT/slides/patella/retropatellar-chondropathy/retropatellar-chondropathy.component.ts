import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { PatellaFindingUiModel } from '@models/kneeMRT/ui/patella/patella-finding-ui.model';
import { OuterbridgeClassicifationTypeEnum } from '@enums/kneeMRT/outerbridge-classicifation-type.enum';
import { MorphologyTypeEnum } from '@enums/kneeMRT/patella/retropatellar-chondropathy/morphology-type.enum';

@Component({
  selector: 'rr-retropatellar-chondropathy',
  templateUrl: './retropatellar-chondropathy.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class RetropatellarChondropathyComponent {
  @Input() model: PatellaFindingUiModel;

  outerbridgeClassicifationType: typeof OuterbridgeClassicifationTypeEnum;
  morphologyType: typeof MorphologyTypeEnum;

  constructor() {
    this.outerbridgeClassicifationType = OuterbridgeClassicifationTypeEnum;
    this.morphologyType = MorphologyTypeEnum;
  }
}
