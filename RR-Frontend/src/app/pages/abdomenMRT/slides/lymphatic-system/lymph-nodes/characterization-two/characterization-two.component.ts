import { Component, Input } from '@angular/core';
import { LymphaticSystemFindingUiModel } from '@models/abdomenMRT/ui/lymphatic-system/lymphatic-system-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { FormTypeEnum } from '@enums/abdomenMRT/lymphatic-system/lymph-nodes';
import { CMEnhancementQuantitativeTypeEnum } from '@enums/abdomenMRT/cmenhancement-quantitative-type.enum';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';

@Component({
  selector: 'rr-characterization-two',
  templateUrl: './characterization-two.component.html',
  styleUrls: ['./characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoComponent {
  @Input() model: LymphaticSystemFindingUiModel;
  @Input() isCM: boolean;

  formType = FormTypeEnum;
  cMEnhancementQuantitativeTypeEnum = CMEnhancementQuantitativeTypeEnum;
  homogeneityType = HomogeneityTypeEnum;

  get isHomogeneityType() {
    return [CMEnhancementQuantitativeTypeEnum.Low, CMEnhancementQuantitativeTypeEnum.Strong].includes(
      this.model.cMEnhancementQuantitativeType
    );
  }
}
