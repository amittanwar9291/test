import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { CapsuleAndLigamentsFindingUiModel } from '@models/hipMRT/ui/capsule-and-ligaments/capsule-and-ligaments-finding-ui.model';

import { SideTypeEnum } from '@enums/hipMRT/capsule-and-ligaments/side-type.enum';

@Component({
  selector: 'rr-synovia-diffuse-pathology',
  templateUrl: './synovia-diffuse-pathology.component.html',
  styleUrls: ['./synovia-diffuse-pathology.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class SynoviaDiffusePathologyComponent {
  @Input() model: CapsuleAndLigamentsFindingUiModel;
  @Input() isContrastEnhanced: boolean;
  sideType: typeof SideTypeEnum;

  constructor() {
    this.sideType = SideTypeEnum;
  }
}
