import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BladderFindingUiModel } from '@models/pelvisMRT/ui/bladder/bladder-finding-ui.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { GenderTypeEnum } from '@enums/shared/gender-type.enum';
import {
  InfiltrativeGrowthTypeEnum,
  GrowthPatternsTypeEnum,
  SecondaryWallThickeningTypeEnum,
  BladderDiagnosisTypeEnum
} from '@enums/pelvisMRT/bladder';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { BladderHelperService } from '../../bladder-helper.service';

@Component({
  selector: 'rr-thickening-characterization-two',
  templateUrl: './thickening-characterization-two.component.html',
  styleUrls: ['./thickening-characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ThickeningCharacterizationTwoComponent implements OnInit, OnDestroy {
  @Input() model: BladderFindingUiModel;
  gender: GenderTypeEnum;
  w034: DropdownGroupedModel[];
  w035: DropdownGroupedModel[];

  growthPatternsTypeEnum = GrowthPatternsTypeEnum;
  infiltrativeGrowthTypeEnum = InfiltrativeGrowthTypeEnum;
  genderTypeEnum = GenderTypeEnum;
  secondaryWallThickeningTypeEnum = SecondaryWallThickeningTypeEnum;
  bladderDiagnosisTypeEnum = BladderDiagnosisTypeEnum;

  subscriptions: Subscription[] = [];
  maleOnlyDiagnoses = [
    BladderDiagnosisTypeEnum.StatusPostTransurethralResectionTUR,
    BladderDiagnosisTypeEnum.InfiltratedByProstateSeminalVesicleCarcinoma
  ];
  femaleOnlyDiagnoses = [BladderDiagnosisTypeEnum.Endometriosis, BladderDiagnosisTypeEnum.InfiltratedByUterusOvarianCarcinoma];

  constructor(private translate: TranslateService, private bladderHelperService: BladderHelperService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.bladderHelperService.gender.subscribe((value: GenderTypeEnum) => {
        this.gender = value;
      }),
      this.translate.stream('pelvisMRT.bladder.w034.options').subscribe((out: DropdownGroupedModel[]) => {
        this.w034 = out;
      }),
      this.translate.stream('pelvisMRT.bladder.w035.options').subscribe((out: DropdownGroupedModel[]) => {
        this.w035 = out;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  getAlwaysExcludedOptions(): BladderDiagnosisTypeEnum[] {
    return this.gender === GenderTypeEnum.Male
      ? this.femaleOnlyDiagnoses
      : this.gender === GenderTypeEnum.Female
      ? this.maleOnlyDiagnoses
      : [];
  }

  clearSubordinate() {
    this.model.isSubordinate = false;
  }
}
