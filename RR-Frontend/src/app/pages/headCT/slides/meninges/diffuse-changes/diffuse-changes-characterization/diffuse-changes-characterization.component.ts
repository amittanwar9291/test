import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MeningesFindingUiModel } from '@models/headCT/ui/meninges/meninges-finding-ui.model';
import { CysticPartsTypeEnum } from '@enums/headCT/meninges/cystic-parts-type.enum';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/headCT/common/contrast-enhancement-quantitative-type.enum';
import { Subscription } from 'rxjs/internal/Subscription';
import { MeningesHelperService } from '../../meninges-helper.service';
import { DensityTypeEnum } from '@enums/headCT/common/density-type.enum';
import { HomogeneityTypeEnum } from '@enums/headCT/common/homogeneity-type.enum';

@Component({
  selector: 'rr-diffuse-changes-characterization',
  templateUrl: './diffuse-changes-characterization.component.html',
  styleUrls: ['./diffuse-changes-characterization.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DiffuseChangesCharacterizationComponent implements OnDestroy {
  @Input() model: MeningesFindingUiModel;
  isCMYes: boolean;
  isCMYesSubscription: Subscription;

  cysticPartsTypeEnum = CysticPartsTypeEnum;
  densityTypeEnum = DensityTypeEnum;
  contrastEnhancementQuantitativeTypeEnum = ContrastEnhancementQuantitativeTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;

  constructor(private meningesHelperService: MeningesHelperService) {
    this.isCMYesSubscription = meningesHelperService.isCMYes.subscribe(v => (this.isCMYes = v));
  }

  ngOnDestroy() {
    this.isCMYesSubscription.unsubscribe();
  }

  isCMWeakOrSignificant(): boolean {
    return [ContrastEnhancementQuantitativeTypeEnum.Low, ContrastEnhancementQuantitativeTypeEnum.Strong].includes(
      this.model.contrastEnhancementType
    );
  }
}
