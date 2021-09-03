import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FemaleSexFindingUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-ui.model';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { LocalizationTypeEnum } from '@enums/pelvisMRT/female-sex/localization-type.enum';
import { LocalizationSubTypeEnum } from '@enums/pelvisMRT/female-sex/localization-sub-type.enum';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { FemaleGenderDiagnosisTypeEnum } from '@enums/pelvisMRT/female-sex/female-gender-diagnosis-type.enum';
import { MarginTypeEnum } from '@enums/pelvisMRT/female-sex/margin-type.enum';
import { HomogenityTypeEnum } from '@enums/pelvisMRT/female-sex/homogenity-type.enum';
import { FormTypeEnum } from '@enums/pelvisMRT/female-sex/form-type.enum';

@Component({
  selector: 'rr-vagina-mass-characterization-one',
  templateUrl: './vagina-mass-characterization-one.component.html',
  styleUrls: ['./vagina-mass-characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class VaginaMassCharacterizationOneComponent implements OnInit, OnDestroy {
  @Input() model: FemaleSexFindingUiModel;
  w063DifferentialDiagnosisType: DropdownGroupedModel[];

  localizationTypeEnum = LocalizationTypeEnum;
  localizationSubTypeEnum = LocalizationSubTypeEnum;
  descriptionTypeEnum = DescriptionTypeEnum;
  femaleGenderDiagnosisTypeEnum = FemaleGenderDiagnosisTypeEnum;
  marginTypeEnum = MarginTypeEnum;
  homogenityTypeEnum = HomogenityTypeEnum;
  formTypeEnum = FormTypeEnum;

  subscriptions: Subscription[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.translate
        .stream('pelvisMRT.femaleGender.w063DifferentialDiagnosisType.options')
        .subscribe((out: DropdownGroupedModel[]) => (this.w063DifferentialDiagnosisType = out))
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  clearDifferentialDiagnosis1() {
    this.model.isSubordinate = false;
    this.model.isDegeneration2 = false;
    this.model.isBartholinitis2 = false;
    this.model.isAbscess2 = false;

    this.model.isBartholinitis1 = false;
    this.model.isAbscess1 = false;
    this.model.isDegeneration1 = false;
  }

  resetDetailsSignalBehavior(value: number) {
    if (value === 0) {
      this.model.detailsT2wSignalHomogenityType = HomogenityTypeEnum.None;
    }
  }
}
