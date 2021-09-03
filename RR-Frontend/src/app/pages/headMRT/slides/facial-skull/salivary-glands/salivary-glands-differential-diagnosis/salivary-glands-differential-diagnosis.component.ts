import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/headMRT/common/contrast-enhancement-quantitative-type.enum';
import { HomogeneityTypeEnum } from '@enums/headMRT/common/homogeneity-type.enum';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/headMRT/common/contrast-enhancement-distribution-type.enum';
import { Subscription } from 'rxjs/internal/Subscription';
import { FacialSkullHelperService } from '../../facial-skull-helper.service';
import { SalivaryGlandsDiagnosisTypeEnum } from '@enums/headMRT/facial-skull/SalivaryGlands/salivary-glands-diagnosis-type.enum';

@Component({
  selector: 'rr-salivary-glands-differential-diagnosis',
  templateUrl: './salivary-glands-differential-diagnosis.component.html',
  styleUrls: ['./salivary-glands-differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SalivaryGlandsDifferentialDiagnosisComponent {
  @Input() model: FacialSkullFindingUiModel;
  @Input() w058: DropdownModel[];
  @Input() w059: DropdownModel[];

  salivaryGlandsDiagnosisTypeEnum = SalivaryGlandsDiagnosisTypeEnum;
  descriptionTypeEnum = DescriptionTypeEnum;
  contrastEnhancementQuantitativeTypeEnum = ContrastEnhancementQuantitativeTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  contrastEnhancementDistributionTypeEnum = ContrastEnhancementDistributionTypeEnum;

  isCMSubscription: Subscription;
  isCMYes: boolean;

  constructor(private facialSkullHelperService: FacialSkullHelperService) {
    this.isCMSubscription = this.facialSkullHelperService.isCMYes.subscribe(v => (this.isCMYes = v));
  }

  onSalivaryGlandsDiagnosis1TypeChange(): void {
    this.model.isSuspicionOf = false;
    this.model.isSubordinate = false;
  }

  onSalivaryGlandsDiagnosis2TypeChange(): void {
    this.model.isSubordinate = false;
  }

  isCMWeakOrSignificant(): boolean {
    return [ContrastEnhancementQuantitativeTypeEnum.Weak, ContrastEnhancementQuantitativeTypeEnum.Significant].includes(
      this.model.contrastEnhancementType
    );
  }
}
