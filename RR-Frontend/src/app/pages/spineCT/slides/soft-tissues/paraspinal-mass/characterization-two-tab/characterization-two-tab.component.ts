import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftTissuesFindingUiModel } from '@models/spineCT';
import { Subscription } from 'rxjs/internal/Subscription';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { SpineCtHelperService } from '@services/spineCT/spine-ct-helper.service';
import { SoftTissuesHelperService, SpineCTSoftTissuesLargeLocalizerConfig } from '../../soft-tissues-helper.service';
import { CalcificationTypeEnum } from '@enums/spineCT/soft-tissues/paraspinal-mass/calcification-type.enum';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/spineCT/soft-tissues/paraspinal-mass/contrast-enhancement-quantitative-type.enum';
import { HomogeneityTypeEnum } from '@enums/spineCT/soft-tissues/paraspinal-mass/homogeneity-type.enum';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/spineCT/soft-tissues/paraspinal-mass/contrast-enhancement-distribution-type.enum';
import { SpineDirectionalLocation } from '@models/shared/spine/localizers/spine-directional-location.model';

@Component({
  selector: 'rr-characterization-two-tab',
  templateUrl: './characterization-two-tab.component.html',
  styleUrls: ['./characterization-two-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoTabComponent implements OnInit, OnDestroy {
  @Input() model: SoftTissuesFindingUiModel;

  subscriptions: Subscription[] = [];
  spineLocalizerPermittedSelection: SpineLocation;
  isCMYes: boolean;

  calcificationTypeEnum = CalcificationTypeEnum;
  contrastEnhancementQuantitativeTypeEnum = ContrastEnhancementQuantitativeTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  contrastEnhancementDistributionTypeEnum = ContrastEnhancementDistributionTypeEnum;

  constructor(private spineCtHelperService: SpineCtHelperService, private softTissuesHelperService: SoftTissuesHelperService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.spineCtHelperService.spineLocalizerPermittedSelection.subscribe(v => (this.spineLocalizerPermittedSelection = v))
    );
    this.subscriptions.push(this.softTissuesHelperService.isCMYes.subscribe(v => (this.isCMYes = v)));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  openDirectionalSpineLocalizer(): void {
    this.softTissuesHelperService.largeLocalizerOpenedConfig.next(new SpineCTSoftTissuesLargeLocalizerConfig('directional'));
  }

  clearLocalizer() {
    if (!this.model.isNerveRoot || !this.model.isInfiltration) {
      this.model.spineLocationBones = new SpineDirectionalLocation();
    }
  }

  isCMWeekOrSignificant(): boolean {
    return [ContrastEnhancementQuantitativeTypeEnum.Weak, ContrastEnhancementQuantitativeTypeEnum.Significant].includes(
      this.model.contrastEnhancementQuantitativeType
    );
  }
}
