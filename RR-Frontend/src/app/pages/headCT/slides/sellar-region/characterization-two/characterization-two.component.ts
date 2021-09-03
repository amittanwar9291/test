import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SellarRegionFindingUiModel } from '@models/headCT/ui/sellar-region/sellar-region-finding-ui.model';
import { SideTypeEnum } from '@enums/shared/side-type.enum';
import { ContrastDistributionTypeEnum } from '@enums/headCT/common/contrast-distribution-type.enum';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { ContrastQuantitativeTypeEnum } from '@enums/shared/head/cortex/common';
import { MidlineShiftSideTypeEnum } from '@enums/headCT/common/midline-shift-side-type.enum';

@Component({
  selector: 'rr-characterization-two',
  templateUrl: './characterization-two.component.html',
  styleUrls: ['./characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoComponent {
  @Input() model: SellarRegionFindingUiModel;
  @Input() isCMYes: boolean;

  sideTypeEnum = SideTypeEnum;
  MidlineShiftSideTypeEnum = MidlineShiftSideTypeEnum;
  contrastEnhancementQuantitativeTypeEnum = ContrastQuantitativeTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  contrastEnhancementDistributionTypeEnum = ContrastDistributionTypeEnum;

  isCmWeakOrSignificant() {
    return [ContrastQuantitativeTypeEnum.Low, ContrastQuantitativeTypeEnum.Strong].includes(this.model.contrastQuantitativeType);
  }
}
