import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SideTypeEnum } from '@enums/headMRT/basal-nuclei/side-type.enum';
import { BasalNucleiFindingUiModel } from '@models/headMRT/ui/basal-nuclei/basal-nuclei-finding-ui.model';
import { Subscription } from 'rxjs';
import { BasalNucleiHelperService } from '../../basal-nuclei-helper.service';
import { ContrastEnhancementBasalNucleiTypeEnum } from '@enums/headMRT/basal-nuclei/contrast-enhancement-basal-nuclei-type.enum';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/headMRT/common/contrast-enhancement-distribution-type.enum';
import { HomogeneityTypeEnum } from '@enums/headMRT/common/homogeneity-type.enum';

@Component({
  selector: 'rr-characterization-two',
  templateUrl: './characterization-two.component.html',
  styleUrls: ['./characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoComponent {
  @Input() model: BasalNucleiFindingUiModel;

  isCMYesSubscription: Subscription;
  isCMYes: boolean;

  constructor(private basalNucleiHelperService: BasalNucleiHelperService) {
    this.isCMYesSubscription = this.basalNucleiHelperService.isCMYes.subscribe(value => (this.isCMYes = value));
  }

  sideType = SideTypeEnum;
  contrastEnhancementType = ContrastEnhancementBasalNucleiTypeEnum;
  contrastEnhancementHomogeneityType = HomogeneityTypeEnum;
  contrastDistributionType = ContrastEnhancementDistributionTypeEnum;

  checkIfLowOrStrong(): boolean {
    return (
      this.model.contrastEnhancementType === ContrastEnhancementBasalNucleiTypeEnum.Low ||
      this.model.contrastEnhancementType === ContrastEnhancementBasalNucleiTypeEnum.Strong
    );
  }

  resetContrastDistribution() {
    if (!this.checkIfLowOrStrong()) {
      this.model.contrastDistributionType = ContrastEnhancementDistributionTypeEnum.None;
    }
  }
}
