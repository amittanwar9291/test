import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { CapsuleAndLigamentsFindingUiModel } from '@models/hipMRT/ui/capsule-and-ligaments/capsule-and-ligaments-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { SideTypeEnum } from '@enums/hipMRT/capsule-and-ligaments/side-type.enum';
import { DistributionPatternTypeEnum, ShapeTypeEnum } from '@enums/hipMRT/capsule-and-ligaments/synovia-mass';
import { MarginTypeEnum } from '@enums/hipMRT/capsule-and-ligaments/synovia-mass/margin-type.enum';
import { HomogeneityTypeEnum } from '@enums/hipMRT/capsule-and-ligaments/synovia-mass/homogeneity-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

@Component({
  selector: 'rr-characterization-one',
  templateUrl: './characterization-one.component.html',
  styleUrls: ['./characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneComponent {
  @Input() model: CapsuleAndLigamentsFindingUiModel;
  @Input() isContrastEnhanced: boolean;
  @Input() diffDiagnosisFullOptions: DropdownModel[];

  descriptionType: typeof DescriptionTypeEnum;
  sideType: typeof SideTypeEnum;
  marginType: typeof MarginTypeEnum;
  characterizationIIHomogeneityType: typeof HomogeneityTypeEnum;
  shapeType: typeof ShapeTypeEnum;
  distributionPatternType: typeof DistributionPatternTypeEnum;

  constructor() {
    this.descriptionType = DescriptionTypeEnum;
    this.sideType = SideTypeEnum;
    this.marginType = MarginTypeEnum;
    this.characterizationIIHomogeneityType = HomogeneityTypeEnum;
    this.shapeType = ShapeTypeEnum;
    this.distributionPatternType = DistributionPatternTypeEnum;
  }
}
