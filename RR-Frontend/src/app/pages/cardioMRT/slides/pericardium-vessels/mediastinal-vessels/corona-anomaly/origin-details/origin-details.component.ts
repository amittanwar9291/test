import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { PericardiumVesselsFindingUiModel } from '@models/cardioMRT/ui/pericardium-vessels/pericardium-vessels-finding-ui.model';

import { DetailsOriginTypeEnum, RCAOrRCXLADOrLMAEnum } from '@enums/cardioMRT/pericardium-vessels';

@Component({
  selector: 'rr-origin-details',
  templateUrl: './origin-details.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OriginDetailsComponent {
  @Input() model: PericardiumVesselsFindingUiModel;

  previousDetailsOriginType: DetailsOriginTypeEnum;
  detailsOriginType: typeof DetailsOriginTypeEnum;
  rcaOrRCXLADOrLMAType: typeof RCAOrRCXLADOrLMAEnum;

  constructor() {
    this.detailsOriginType = DetailsOriginTypeEnum;
    this.rcaOrRCXLADOrLMAType = RCAOrRCXLADOrLMAEnum;
  }

  get isRCALeftOrLMARightCoronalSinusEnabled(): boolean {
    return [DetailsOriginTypeEnum.RCALeftCoronarySinus, DetailsOriginTypeEnum.LMARightCoronarySinus].includes(this.model.detailsOriginType);
  }

  resetRCALeftOrLMARightCoronalSinus(): void {
    if (this.previousDetailsOriginType !== this.model.detailsOriginType) {
      this.model.rcaLeftOrLMARightCoronalSinus = RCAOrRCXLADOrLMAEnum.None;
    }

    this.previousDetailsOriginType = this.model.detailsOriginType;
  }
}
