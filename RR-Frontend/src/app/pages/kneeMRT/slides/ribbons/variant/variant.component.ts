import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { KneeCross } from '@models/kneeMRT/ui/knee/knee-cross.model';
import { RibbonsFindingUiModel } from '@models/kneeMRT/ui/ribbons/ribbons-finding-ui.model';

import { RibbonsFindingTypeEnum, DiscoidMeniscusTypeEnum } from '@enums/kneeMRT/ribbons';

@Component({
  selector: 'rr-variant',
  templateUrl: './variant.component.html',
  styleUrls: ['../ribbons.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class VariantComponent {
  @Input() model: RibbonsFindingUiModel;

  findingType: typeof RibbonsFindingTypeEnum;
  discoidMeniscusType: typeof DiscoidMeniscusTypeEnum;

  constructor() {
    this.findingType = RibbonsFindingTypeEnum;
    this.discoidMeniscusType = DiscoidMeniscusTypeEnum;
  }

  clearPhysiologicalT2wLocalization() {
    if (!this.model.isPhysiologicalT2Hyperintensity) {
      this.model.meniscusLocalization1 = new KneeCross();
    }
  }

  clearMeniscusLocalization() {
    if (!this.model.isMeniscalOssile) {
      this.model.meniscusLocalization2 = new KneeCross();
    }
  }

  getActivePart(): 'inner' | 'outer' {
    if (this.model.findingType === this.findingType.InnerMeniscusVarian) {
      return 'inner';
    }
    if (this.model.findingType === this.findingType.OuterMeniscusVariant) {
      return 'outer';
    }
  }
}
