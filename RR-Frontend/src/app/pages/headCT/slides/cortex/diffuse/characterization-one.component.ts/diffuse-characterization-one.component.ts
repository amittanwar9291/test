import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CortexFindingUiModel } from '@models/headCT/ui/cortex/cortex-finding-ui-model';
import { Subscription } from 'rxjs';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { MarginTypeEnum, HomogeneityTypeEnum, ShapeTypeEnum, RegionTypeEnum } from '@enums/shared/head/cortex/common';
import { CortexHelperService } from '../../cortex-helper.service';

@Component({
  selector: 'rr-diffuse-characterization-one',
  templateUrl: './diffuse-characterization-one.component.html',
  styleUrls: ['./diffuse-characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DiffuseCharacterizationOneComponent implements OnInit, OnDestroy {
  @Input() model: CortexFindingUiModel;
  @Input() regionDropDownValues: RegionTypeEnum[];

  subscriptions: Subscription[] = [];
  midlineShiftOptions: DropdownModel[];
  regionOptions: DropdownModel[];
  marginEnum = MarginTypeEnum;
  homogeneityEnum = HomogeneityTypeEnum;
  shapeEnum = ShapeTypeEnum;

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

  private initTranslations(): void {
    this.subscriptions.push(
      this.translateService.stream('headCT.cortex.sideW030.options').subscribe((out: DropdownModel[]) => {
        this.midlineShiftOptions = out;
      }),
      this.translateService.stream('headCT.cortex.regionW024.options').subscribe((out: DropdownModel[]) => {
        this.regionOptions = out;
      })
    );
  }

  getExcludedRegionException(): RegionTypeEnum[] {
    return this.excludedRegionTypValue ? this.excludedRegionTypValue.filter(item => item !== this.model.regionType) : [];
  }

  removeRegionDropDownValue() {
    this.cortexHelperService.excludedValueFromRegionDropdown.next(this.excludedRegionTypValue);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
