import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { FacialSkullHelperService } from '../../facial-skull-helper.service';
import { ParanasalSinusesDiagnosisTypeEnum } from '@enums/headMRT/facial-skull/ParanasalSinuses/paranasal-sinuses-diagnosis-type.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/headMRT/common/contrast-enhancement-quantitative-type.enum';
import { HomogeneityTypeEnum } from '@enums/headMRT/common/homogeneity-type.enum';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/headMRT/common/contrast-enhancement-distribution-type.enum';

@Component({
  selector: 'rr-paranasal-sinuses-differential-diagnosis',
  templateUrl: './paranasal-sinuses-differential-diagnosis.component.html',
  styleUrls: ['./paranasal-sinuses-differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ParanasalSinusesDifferentialDiagnosisComponent implements OnDestroy {
  @Input() model: FacialSkullFindingUiModel;
  @Input() w053: DropdownGroupedModel[];
  @Input() w054: DropdownGroupedModel[];

  w074: DropdownModel[];
  subscriptions: Subscription[] = [];
  isCMYes: boolean;

  paranasalSinusesDiagnosisTypeEnum = ParanasalSinusesDiagnosisTypeEnum;
  descriptionType = DescriptionTypeEnum;
  contrastEnhancementQuantitativeTypeEnum = ContrastEnhancementQuantitativeTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  contrastEnhancementDistributionTypeEnum = ContrastEnhancementDistributionTypeEnum;

  constructor(private facialSkullHelperService: FacialSkullHelperService, private translate: TranslateService) {
    this.subscriptions.push(
      this.facialSkullHelperService.isCMYes.subscribe(v => (this.isCMYes = v)),
      this.translate.stream('headMRT.facialSkull.w074.options').subscribe((out: DropdownModel[]) => (this.w074 = out))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onParanasalSinusesDiagnosis1TypeChange(): void {
    this.model.isSuspicionOf = false;
    this.model.isSubordinate = false;
  }

  onParanasalSinusesDiagnosis2TypeChange(): void {
    this.model.isSubordinate = false;
  }

  isCMWeakOrSignificant(): boolean {
    return [ContrastEnhancementQuantitativeTypeEnum.Weak, ContrastEnhancementQuantitativeTypeEnum.Significant].includes(
      this.model.contrastEnhancementType
    );
  }
}
