import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SoftTissueFindingUiModel } from '@models/hipMRT/ui/soft-tissue/soft-tissue-finding-ui.model';

import { SideTypeEnum } from '@enums/hipMRT/capsule-and-ligaments/side-type.enum';
import { ShapeTypeEnum } from '@enums/hipMRT/capsule-and-ligaments/synovia-mass';
import { MarginTypeEnum } from '@enums/hipMRT/capsule-and-ligaments/synovia-mass/margin-type.enum';
import { HomogeneityTypeEnum } from '@enums/hipMRT/capsule-and-ligaments/synovia-mass/homogeneity-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

@Component({
  selector: 'rr-characterization-three',
  templateUrl: './characterization-three.component.html',
  styleUrls: ['./characterization-three.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationThreeComponent {
  @Input() model: SoftTissueFindingUiModel;
  @Input() diffDiagnosisFullOptions: DropdownModel[];
  @Input() diffDiagnosisRestrictedOptions: DropdownModel[];

  descriptionType: typeof DescriptionTypeEnum;
  sideType: typeof SideTypeEnum;
  marginType: typeof MarginTypeEnum;
  characterizationIIHomogeneityType: typeof HomogeneityTypeEnum;
  shapeType: typeof ShapeTypeEnum;

  constructor() {
    this.descriptionType = DescriptionTypeEnum;
    this.sideType = SideTypeEnum;
    this.marginType = MarginTypeEnum;
    this.characterizationIIHomogeneityType = HomogeneityTypeEnum;
    this.shapeType = ShapeTypeEnum;
  }
}
