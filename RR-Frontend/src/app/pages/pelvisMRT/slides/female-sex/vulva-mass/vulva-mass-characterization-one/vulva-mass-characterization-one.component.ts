import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FemaleSexFindingUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-ui.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { LocalizationTypeEnum } from '@enums/pelvisMRT/female-sex/localization-type.enum';
import { SideTypeEnum } from '@enums/pelvisMRT/female-sex/side-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { MarginTypeEnum } from '@enums/pelvisMRT/female-sex/margin-type.enum';
import { HomogenityTypeEnum } from '@enums/pelvisMRT/female-sex/homogenity-type.enum';
import { FormTypeEnum } from '@enums/pelvisMRT/female-sex/form-type.enum';
import { FemaleGenderDiagnosisTypeEnum } from '@enums/pelvisMRT/female-sex/female-gender-diagnosis-type.enum';

@Component({
  selector: 'rr-vulva-mass-characterization-one',
  templateUrl: './vulva-mass-characterization-one.component.html',
  styleUrls: ['./vulva-mass-characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class VulvaMassCharacterizationOneComponent implements OnInit, OnDestroy {
  @Input() model: FemaleSexFindingUiModel;
  w065DifferentialDiagnosisType: DropdownGroupedModel[];

  localizationTypeEnum = LocalizationTypeEnum;
  sideTypeEnum = SideTypeEnum;
  descriptionTypeEnum = DescriptionTypeEnum;
  marginTypeEnum = MarginTypeEnum;
  homogenityTypeEnum = HomogenityTypeEnum;
  formTypeEnum = FormTypeEnum;
  femaleGenderDiagnosisTypeEnum = FemaleGenderDiagnosisTypeEnum;

  subscriptions: Subscription[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.translate
        .stream('pelvisMRT.femaleGender.w065DifferentialDiagnosisType.options')
        .subscribe((out: DropdownGroupedModel[]) => (this.w065DifferentialDiagnosisType = out))
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  clearDifferentialDiagnosis01DependantFields() {
    this.model.isSubordinate = false;
    this.model.isDegeneration2 = false;
    this.model.isUrethralLeiomyoma2 = false;
    this.model.isUrethralMetastasis2 = false;
    this.model.isDegeneration1 = false;
    this.model.isUrethralLeiomyoma1 = false;
    this.model.isUrethralMetastasis1 = false;
  }

  resetDetailsSignalBehavior(value: number) {
    if (value === 0) {
      this.model.detailsT2wSignalHomogenityType = HomogenityTypeEnum.None;
    }
  }
}
