import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BasalNucleiFindingUiModel } from '@models/headCT/ui/basal-nuclei/basal-nuclei-finding-ui.model';
import { Subscription } from 'rxjs';
import { BasalNucleiHelperService } from '../../basal-nuclei-helper.service';
import { HomogeneityTypeEnum } from '@enums/headCT/common/homogeneity-type.enum';
import { ContrastEnhancementBasalNucleiTypeEnum } from '@enums/headCT/basal-nuclei/contrast-enhancement-type.enum';
import { ContrastDistributionTypeEnum } from '@enums/headCT/common/contrast-distribution-type.enum';
import { MidlineShiftSideTypeEnum } from '@enums/headCT/common/midline-shift-side-type.enum';

@Component({
  selector: 'rr-characterization-two',
  templateUrl: './characterization-two.component.html',
  styleUrls: ['./characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoComponent implements OnDestroy {
  @Input() model: BasalNucleiFindingUiModel;

  isCMYesSubscription: Subscription;
  isCMYes: boolean;

  constructor(private basalNucleiHelperService: BasalNucleiHelperService) {
    this.isCMYesSubscription = this.basalNucleiHelperService.isCMYes.subscribe(value => (this.isCMYes = value));
  }

  midlineShiftSideType = MidlineShiftSideTypeEnum;
  contrastEnhancementType = ContrastEnhancementBasalNucleiTypeEnum;
  contrastEnhancementHomogeneityType = HomogeneityTypeEnum;
  contrastDistributionType = ContrastDistributionTypeEnum;

  checkIfLowOrStrong(): boolean {
    return (
      this.model.contrastEnhancementType === ContrastEnhancementBasalNucleiTypeEnum.Low ||
      this.model.contrastEnhancementType === ContrastEnhancementBasalNucleiTypeEnum.Strong
    );
  }

  ngOnDestroy(): void {
    this.isCMYesSubscription.unsubscribe();
  }
}
