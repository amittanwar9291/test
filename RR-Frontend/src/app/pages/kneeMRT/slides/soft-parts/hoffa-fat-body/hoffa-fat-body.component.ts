import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftPartsFindingUiModel } from '@models/kneeMRT/ui/soft-parts/soft-parts-finding-ui.model';
import { EdemaTypeEnum } from '@enums/kneeMRT/soft-parts';

@Component({
  selector: 'rr-hoffa-fat-body',
  templateUrl: './hoffa-fat-body.component.html',
  styleUrls: ['./hoffa-fat-body.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class HoffaFatBodyComponent {
  @Input() model: SoftPartsFindingUiModel;

  edemaTypeEnum: typeof EdemaTypeEnum;

  constructor() {
    this.edemaTypeEnum = EdemaTypeEnum;
  }

  clearCartilageIsointenserNodulusGreaterThen1Lesion() {
    if (!this.model.isCartilageIsointenserNodulus) {
      this.model.isCartilageIsointenserNodulusGreaterThen1Lesion = false;
    }
  }

  clearFibrosisDetails() {
    if (!this.model.isFibrosis) {
      this.model.isLowSIInT1w = false;
      this.model.isLowSIInT2w = false;
    }
  }
}
