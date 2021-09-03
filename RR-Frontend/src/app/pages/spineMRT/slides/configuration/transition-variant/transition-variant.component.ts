import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SacralizedL5TypeEnum } from '@enums/spineMRT/configuration/transition-variant/sacralized-l5-type.enum';
import { LumbosacralTypeEnum } from '@enums/spineMRT/configuration/transition-variant/lumbosacral-type.enum';
import { ConfigurationFindingUiModel } from '@models/spineMRT/ui/configuration/configuration-finding-ui.model';

@Component({
  selector: 'rr-spine-mrt-configuration-transition-variant',
  templateUrl: './transition-variant.component.html',
  styleUrls: ['./transition-variant.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TransitionVariantComponent {
  @Input() model: ConfigurationFindingUiModel;

  lumbosacralTypeEnum: typeof LumbosacralTypeEnum;
  sacralizedL5TypeEnum: typeof SacralizedL5TypeEnum;

  constructor() {
    this.lumbosacralTypeEnum = LumbosacralTypeEnum;
    this.sacralizedL5TypeEnum = SacralizedL5TypeEnum;
  }

  clearModel(isModel: boolean, type1?: string, type2?: string, type3?: string) {
    if (!isModel) {
      this.model[type1] = false;
      if (type2 && type3) {
        this.model[type2] = false;
        this.model[type3] = 'None';
      }
    }
  }

  clearRadio(isModel: boolean, radioType: string) {
    if (!isModel) {
      this.model[radioType] = 'None';
    }
  }
}
