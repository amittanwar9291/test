import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { CapsuleAndLigamentsFindingUiModel } from '@models/hipMRT/ui/capsule-and-ligaments/capsule-and-ligaments-finding-ui.model';

import { SideTypeEnum } from '@enums/hipMRT/capsule-and-ligaments/side-type.enum';
import { DistinctionTypeEnum, LocalizationTypeEnum } from '@enums/hipMRT/capsule-and-ligaments/ligamentous-lesion';

@Component({
  selector: 'rr-ligamentous-lesion',
  templateUrl: './ligamentous-lesion.component.html',
  styleUrls: ['./ligamentous-lesion.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class LigamentousLesionComponent {
  @Input() model: CapsuleAndLigamentsFindingUiModel;

  sideType: typeof SideTypeEnum;
  localizationType: typeof LocalizationTypeEnum;
  distinctionType: typeof DistinctionTypeEnum;

  constructor() {
    this.sideType = SideTypeEnum;
    this.localizationType = LocalizationTypeEnum;
    this.distinctionType = DistinctionTypeEnum;
  }
}
