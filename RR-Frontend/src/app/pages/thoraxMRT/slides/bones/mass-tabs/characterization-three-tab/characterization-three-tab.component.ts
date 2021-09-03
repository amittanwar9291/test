import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesFindingUiModel } from '@models/thoraxMRT/ui/bones/bones-finding-ui.model';
import { Subscription } from 'rxjs';
import { BonesHelperService } from '../../bones-helper.service';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/thoraxMRT/bones/contrast-enhancement-quantitative-type.enum';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/thoraxMRT/bones/mass/contrast-enhancement-distribution-type.enum';
import { HomogeneityTypeEnum } from '@enums/thoraxMRT/bones/homogeneity-type.enum';
import { ThoraxMRTBonesFindingTypeEnum } from '@enums/thoraxMRT/bones/thorax-mrt-bones-finding-type.enum';

@Component({
  selector: 'rr-characterization-three-tab',
  templateUrl: './characterization-three-tab.component.html',
  styleUrls: ['./characterization-three-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationThreeTabComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;
  isCMYesSubscription: Subscription;
  isCMYes: boolean;

  contrastEnhancementQuantitativeTypeEnum = ContrastEnhancementQuantitativeTypeEnum;
  contrastEnhancementDistributionTypeEnum = ContrastEnhancementDistributionTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  thoraxMRTBonesFindingTypeEnum = ThoraxMRTBonesFindingTypeEnum;

  constructor(private bonesHelperService: BonesHelperService) {}

  ngOnInit(): void {
    this.isCMYesSubscription = this.bonesHelperService.isCMYes.subscribe((value: boolean) => (this.isCMYes = value));
  }

  ngOnDestroy() {
    this.isCMYesSubscription.unsubscribe();
  }

  homogeneityTypeContainerActive() {
    return [this.contrastEnhancementQuantitativeTypeEnum.Little, this.contrastEnhancementQuantitativeTypeEnum.Strong].includes(
      this.model.contrastEnhancementQuantitativeType
    );
  }
}
