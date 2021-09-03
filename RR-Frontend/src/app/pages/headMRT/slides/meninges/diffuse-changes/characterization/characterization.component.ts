import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MeningesFindingUiModel } from '@models/headMRT/ui/meninges/meninges-finding-ui.model';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/headMRT/common/contrast-enhancement-quantitative-type.enum';
import { HomogeneityTypeEnum } from '@enums/headMRT/common/homogeneity-type.enum';

@Component({
  selector: 'rr-characterization',
  templateUrl: './characterization.component.html',
  styleUrls: ['./characterization.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationComponent {
  @Input() model: MeningesFindingUiModel;
  @Input() isDWIInAnySequence: boolean;
  @Input() isContrastEnhanced: boolean;

  contrastEnhancementQuantitativeTypeEnum = ContrastEnhancementQuantitativeTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;

  isWeakOrSignificant(): boolean {
    return [ContrastEnhancementQuantitativeTypeEnum.Weak, ContrastEnhancementQuantitativeTypeEnum.Significant].includes(
      this.model.contrastEnhancementQuantitativeType
    );
  }
}
