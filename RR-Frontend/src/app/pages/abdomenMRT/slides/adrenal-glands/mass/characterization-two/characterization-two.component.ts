import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { AdrenalGlandsFindingUiModel } from '@models/abdomenMRT/ui/adrenal-glands/adrenal-glands-finding-ui.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';

import { DifferentialDiagnosisTypeEnum, GrowthPatternsTypeEnum } from '@enums/abdomenMRT/adrenal-glands';
import { CmEnhancementQuantitativeTypeEnum } from '@enums/abdomenMRT/adrenal-glands/cm-enhancement-quantitative-type.enum';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';

import { AppConfig } from 'app/app.config';

@Component({
  selector: 'rr-characterization-two',
  templateUrl: './characterization-two.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoComponent implements OnInit, OnDestroy {
  @Input() model: AdrenalGlandsFindingUiModel;
  @Input() isCmReinforced: boolean;

  subscriptions: Subscription[];

  diagnosisType = DifferentialDiagnosisTypeEnum;
  growthPatternsType = GrowthPatternsTypeEnum;
  cmEnhancementQuantitativeType = CmEnhancementQuantitativeTypeEnum;
  homogeneityType = HomogeneityTypeEnum;

  massDDOptions1: DropdownGroupedModel[];
  massDDOptions2: DropdownGroupedModel[];

  constructor(public translate: TranslateService) {
    this.subscriptions = [];
  }

  ngOnInit(): void {
    this.initTranslations();
  }

  clearDependantControls(): void {
    this.model.isSuspicionOf = false;
    this.model.isSubordinate = false;
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.abdomenMRT.adrenalGlands.fileUpload;
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('abdomenMRT.adrenalGlands.massDDOptions1.options').subscribe((out: DropdownGroupedModel[]) => {
        this.massDDOptions1 = out;
      }),
      this.translate.stream('abdomenMRT.adrenalGlands.massDDOptions2.options').subscribe((out: DropdownGroupedModel[]) => {
        this.massDDOptions2 = out;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
