import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BladderFindingUiModel } from '@models/pelvisMRT/ui/bladder/bladder-finding-ui.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { GenderTypeEnum } from '@enums/shared/gender-type.enum';
import { CMEnhancementTypeEnum } from '@enums/shared/cm-enhancement-type.enum';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { BladderDiagnosisTypeEnum } from '@enums/pelvisMRT/bladder';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { BladderHelperService } from '../../bladder-helper.service';

@Component({
  selector: 'rr-soft-tissue-mass-characterization-two',
  templateUrl: './soft-tissue-mass-characterization-two.component.html',
  styleUrls: ['./soft-tissue-mass-characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SoftTissueMassCharacterizationTwoComponent implements OnInit, OnDestroy {
  @Input() model: BladderFindingUiModel;
  gender: GenderTypeEnum;
  isCM: boolean;
  w037: DropdownGroupedModel[];
  w038: DropdownGroupedModel[];

  genderTypeEnum = GenderTypeEnum;
  contrastEnhancementTypeEnum = CMEnhancementTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  descriptionTypeEnum = DescriptionTypeEnum;
  bladderDiagnosisTypeEnum = BladderDiagnosisTypeEnum;

  subscriptions: Subscription[] = [];

  constructor(private translate: TranslateService, private bladderHelperService: BladderHelperService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.bladderHelperService.gender.subscribe((value: GenderTypeEnum) => (this.gender = value)),
      this.bladderHelperService.isCM.subscribe((value: boolean) => (this.isCM = value)),
      this.translate.stream('pelvisMRT.bladder.w037.options').subscribe((out: DropdownGroupedModel[]) => (this.w037 = out)),
      this.translate.stream('pelvisMRT.bladder.w038.options').subscribe((out: DropdownGroupedModel[]) => (this.w038 = out))
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  clearSubordinate() {
    this.model.isSubordinate = false;
  }
}
