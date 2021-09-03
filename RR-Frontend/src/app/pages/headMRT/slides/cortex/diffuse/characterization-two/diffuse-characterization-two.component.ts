import { Component, Input, OnInit } from '@angular/core';
import { CortexFindingUiModel } from '@models/headMRT/ui/cortex/cortex-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { CorticalThinningTypeEnum } from '@enums/headMRT/cortex/common';
import { TranslateService } from '@ngx-translate/core';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/headMRT/common/contrast-enhancement-quantitative-type.enum';
import { HomogeneityTypeEnum } from '@enums/headMRT/common/homogeneity-type.enum';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/headMRT/common/contrast-enhancement-distribution-type.enum';

@Component({
  selector: 'rr-diffuse-characterization-two',
  templateUrl: './diffuse-characterization-two.component.html',
  styleUrls: ['./diffuse-characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DiffuseCharacterizationTwoComponent implements OnInit {
  @Input() model: CortexFindingUiModel;
  @Input() isContrastEnhanced: boolean;

  subscriptions: Subscription[] = [];
  midlineShiftOptions: DropdownModel[];
  regionOptions: DropdownModel[];

  corticalThinningEnum = CorticalThinningTypeEnum;
  contrastEnhancementQuantitativeEnum = ContrastEnhancementQuantitativeTypeEnum;
  contrastEnhancementHomogeneityEnum = HomogeneityTypeEnum;
  contrastEnhancementDistributionEnum = ContrastEnhancementDistributionTypeEnum;

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.initTranslations();
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translateService.stream('headMRT.cortex.midlineShiftW022').subscribe((out: DropdownModel[]) => {
        this.midlineShiftOptions = Object.values(out);
      }),
      this.translateService.stream('headMRT.cortex.regionW068').subscribe((out: DropdownModel[]) => {
        this.regionOptions = Object.values(out);
      })
    );
  }
}
