import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { PancreasFindingUiModel } from '@models/abdomenMRT/ui/pancreas/pancreas-finding-ui.model';

import { Subscription } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { PancreaticDuctPathologyTypeEnum } from '@enums/abdomenMRT/pancreas/mass/pancreatic-duct-pathology-type.enum';
import { GrowthPatternsTypeEnum } from '@enums/abdomenMRT/pancreas/mass/growth-patterns-type.enum';
import { HomogeneityTypeEnum } from '@enums/abdomenMRT/pancreas/mass/homogeneity-type.enum';
import { PhaseTypeEnum } from '@enums/abdomenMRT/pancreas/mass/phase-type.enum';
import { ContrastEnhancementQuantitativeEnum } from '@enums/abdomenMRT/pancreas';

@Component({
  selector: 'rr-mass-characterization-two',
  templateUrl: './mass-characterization-two.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MassCharacterizationTwoComponent implements OnInit, OnDestroy {
  @Input() model: PancreasFindingUiModel;
  @Input() isCMReinforced: boolean;
  @Input() isDWI: boolean;

  subscriptions: Subscription[] = [];

  pancreaticDuctPathologyType = PancreaticDuctPathologyTypeEnum;
  growthPatternsType = GrowthPatternsTypeEnum;
  contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeEnum;
  homogeneityType = HomogeneityTypeEnum;
  phaseType = PhaseTypeEnum;

  contrastEnhancementDistributionOptions: DropdownModel[];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.initTranslations();
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('abdomenMRT.pancreas.contrastEnhancementDistributionOptions.options').subscribe((out: DropdownModel[]) => {
        this.contrastEnhancementDistributionOptions = Object.values(out);
      })
    );
  }

  isSubHomogeneityTypeDisabled(): boolean {
    return ![ContrastEnhancementQuantitativeEnum.Low, ContrastEnhancementQuantitativeEnum.Strong].includes(
      this.model.contrastEnhancementQuantitative
    );
  }

  resetMeasurementDilatation(): void {
    this.model.measurementDilatation = null;
    this.model.isDilationUpstreamDuct = false;
    this.model.dilationUpstreamDuct = null;

    this.model.isDoubleDuctSign = false;
  }

  showStenosisOrAbortDetails(): boolean {
    return (
      this.model.pancreaticDuctPathologyType === PancreaticDuctPathologyTypeEnum.Stenosis ||
      this.model.pancreaticDuctPathologyType === PancreaticDuctPathologyTypeEnum.Abort
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subs => subs.unsubscribe());
  }
}
