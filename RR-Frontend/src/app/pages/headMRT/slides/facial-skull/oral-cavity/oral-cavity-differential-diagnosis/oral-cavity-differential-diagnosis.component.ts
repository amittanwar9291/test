import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { FacialSkullHelperService } from '../../facial-skull-helper.service';
import { OralCavityDiagnosisTypeEnum } from '@enums/headMRT/facial-skull/OralCavity/oral-cavity-diagnosis-type.enum';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/headMRT/common/contrast-enhancement-quantitative-type.enum';
import { HomogeneityTypeEnum } from '@enums/headMRT/common/homogeneity-type.enum';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/headMRT/common/contrast-enhancement-distribution-type.enum';

@Component({
  selector: 'rr-oral-cavity-differential-diagnosis',
  templateUrl: './oral-cavity-differential-diagnosis.component.html',
  styleUrls: ['./oral-cavity-differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OralCavityDifferentialDiagnosisComponent {
  @Input() model: FacialSkullFindingUiModel;
  @Input() w055: DropdownGroupedModel[];
  @Input() w056: DropdownGroupedModel[];

  oralCavityDiagnosisTypeEnum = OralCavityDiagnosisTypeEnum;
  descriptionTypeEnum = DescriptionTypeEnum;
  contrastEnhancementQuantitativeTypeEnum = ContrastEnhancementQuantitativeTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  contrastEnhancementDistributionTypeEnum = ContrastEnhancementDistributionTypeEnum;

  isCMSubscription: Subscription;
  isCMYes: boolean;

  constructor(private facialSkullHelperService: FacialSkullHelperService) {
    this.isCMSubscription = this.facialSkullHelperService.isCMYes.subscribe(v => (this.isCMYes = v));
  }

  onOralCavityDiagnosis1TypeChange(): void {
    this.model.isSuspicionOf = false;
    this.model.isSubordinate = false;
  }

  onOralCavityDiagnosis2TypeChange(): void {
    this.model.isSubordinate = false;
  }

  isCMWeakOrSignificant(): boolean {
    return [ContrastEnhancementQuantitativeTypeEnum.Weak, ContrastEnhancementQuantitativeTypeEnum.Significant].includes(
      this.model.contrastEnhancementType
    );
  }
}
