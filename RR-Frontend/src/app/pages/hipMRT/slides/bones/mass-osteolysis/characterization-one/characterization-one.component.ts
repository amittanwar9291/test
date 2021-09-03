import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  MassOrOsteolysisCorticalBoneTypeEnum,
  ContrastEnhancementDistributionTypeEnum,
  ContrastEnhancementQuantitativeTypeEnum,
  HomogeneityTypeEnum,
  MarginTypeEnum
} from '@enums/hipMRT/bones';
import { BonesFindingUiModel } from '@models/hipMRT/ui/bones/bones-finding-ui.model';
@Component({
  selector: 'rr-characterization-one',
  templateUrl: './characterization-one.component.html',
  styleUrls: ['../mass-osteolysis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneComponent {
  @Input() model: BonesFindingUiModel;
  @Input() isContrastEnhanced: boolean;

  marginType = MarginTypeEnum;
  homogeneityType = HomogeneityTypeEnum;
  massOrOsteolysisCorticalBoneType = MassOrOsteolysisCorticalBoneTypeEnum;
  contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum;
  pronouncedHomogeneityType = HomogeneityTypeEnum;
  contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum;

  get isContrastEnhancementQuantitativeNoORNone(): boolean {
    return (
      this.model.contrastEnhancementQuantitativeType === ContrastEnhancementQuantitativeTypeEnum.No ||
      this.model.contrastEnhancementQuantitativeType === ContrastEnhancementQuantitativeTypeEnum.None
    );
  }

  resetContrastEnhancementDistributionType(): void {
    if (this.isContrastEnhancementQuantitativeNoORNone) {
      this.model.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
    }
  }
}
