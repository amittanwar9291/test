import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { OsteochondralInterfaceFindingUiModel } from '@models/kneeMRT/ui/osteochondral-interface/osteochondral-interface-finding-ui.model';

import { ChondralLesionTypeEnum } from '@enums/kneeMRT/osteochondral-interface/trauma-chondral-lesion';

@Component({
  selector: 'rr-trauma-chondral-lesion',
  templateUrl: './trauma-chondral-lesion.component.html',
  styleUrls: ['./../osteochondral-interface.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class TraumaChondralLesionComponent {
  @Input() model: OsteochondralInterfaceFindingUiModel;

  chondralLesionType: typeof ChondralLesionTypeEnum;
  private previousChondralLesionType: ChondralLesionTypeEnum;

  constructor() {
    this.chondralLesionType = ChondralLesionTypeEnum;
    this.previousChondralLesionType = ChondralLesionTypeEnum.None;
  }

  clearChondralLesionTypesOptions(): void {
    this.previousChondralLesionType = this.model.chondralLesionType;
  }
}
