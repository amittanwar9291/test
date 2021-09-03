import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CortexFindingUiModel } from '@models/headCT/ui/cortex/cortex-finding-ui-model';
import { Subscription } from 'rxjs';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import {
  HomogeneityTypeEnum,
  ContrastQuantitativeTypeEnum,
  CorticalThinningTypeEnum,
  RegionTypeEnum
} from '@enums/shared/head/cortex/common';
import { CortexHelperService } from '../../cortex-helper.service';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/headCT/common/contrast-enhancement-quantitative-type.enum';

@Component({
  selector: 'rr-focal-characterization-two',
  templateUrl: './focal-characterization-two.component.html',
  styleUrls: ['./focal-characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FocalCharacterizationTwoComponent implements OnInit, OnDestroy {
  @Input() model: CortexFindingUiModel;
  @Input() isContrastEnhanced: boolean;

  subscriptions: Subscription[] = [];
  midlineShiftOptions: DropdownModel[];
  regionOptions: DropdownModel[];
  contrastEnhancementDistributionOptions: DropdownModel[];

  corticalThinningEnum = CorticalThinningTypeEnum;
  contrastEnhancementQuantitativeEnum = ContrastQuantitativeTypeEnum;
  contrastEnhancementHomogeneityEnum = HomogeneityTypeEnum;
  contrastEnhancementDistributionEnum = ContrastEnhancementQuantitativeTypeEnum;

  excludedRegionTypValue: RegionTypeEnum[];

  constructor(private translateService: TranslateService, private cortexHelperService: CortexHelperService) {}

  ngOnInit() {
    this.initTranslations();
    this.subscriptions.push(
      this.cortexHelperService.excludedValueFromRegionDropdown.subscribe((value: RegionTypeEnum[]) => {
        this.excludedRegionTypValue = value;
      })
    );
  }

  getExcludedRegionException(): RegionTypeEnum[] {
    return this.excludedRegionTypValue ? this.excludedRegionTypValue.filter(item => item !== this.model.regionType) : [];
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translateService.stream('headCT.cortex.sideW030.options').subscribe((out: DropdownModel[]) => {
        this.midlineShiftOptions = out;
      }),
      this.translateService.stream('headCT.cortex.regionW024.options').subscribe((out: DropdownModel[]) => {
        this.regionOptions = out;
      }),
      this.translateService.stream('headCT.cortex.contrastEnhancementDistributionW031.options').subscribe((out: DropdownModel[]) => {
        this.contrastEnhancementDistributionOptions = out;
      })
    );
  }

  checkIfWeakOrSignificant(): boolean {
    return (
      this.model.contrastEnhancementType === ContrastEnhancementQuantitativeTypeEnum.Low ||
      this.model.contrastEnhancementType === ContrastEnhancementQuantitativeTypeEnum.Strong
    );
  }

  removeRegionDropDownValue() {
    this.cortexHelperService.excludedValueFromRegionDropdown.next(this.excludedRegionTypValue);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
