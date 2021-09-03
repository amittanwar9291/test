import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FemaleSexFindingUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-ui.model';
import { FemaleGenderDiagnosisTypeEnum } from '@enums/pelvisMRT/female-sex/female-gender-diagnosis-type.enum';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

@Component({
  selector: 'rr-vulva-mass-differential-diagnosis',
  templateUrl: './vulva-mass-differential-diagnosis.component.html',
  styleUrls: ['./vulva-mass-differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class VulvaMassDifferentialDiagnosisComponent implements OnInit, OnDestroy {
  @Input() model: FemaleSexFindingUiModel;
  w065DifferentialDiagnosisType: DropdownGroupedModel[];
  w066DifferentialDiagnosisType: DropdownGroupedModel[];

  descriptionTypeEnum = DescriptionTypeEnum;
  femaleGenderDiagnosisTypeEnum = FemaleGenderDiagnosisTypeEnum;
  subscriptions: Subscription[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.translate
        .stream('pelvisMRT.femaleGender.w065DifferentialDiagnosisType.options')
        .subscribe((out: DropdownGroupedModel[]) => (this.w065DifferentialDiagnosisType = out)),
      this.translate
        .stream('pelvisMRT.femaleGender.w066DifferentialDiagnosisType.options')
        .subscribe((out: DropdownGroupedModel[]) => (this.w066DifferentialDiagnosisType = out))
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  clearDifferentialDiagnosis01DependantFields() {
    this.clearDifferentialDiagnosis02DependantFields();
    this.model.isDegeneration1 = false;
    this.model.isUrethralLeiomyoma1 = false;
    this.model.isUrethralMetastasis1 = false;
  }

  clearDifferentialDiagnosis02DependantFields() {
    this.model.isSubordinate = false;
    this.model.isDegeneration2 = false;
    this.model.isUrethralLeiomyoma2 = false;
    this.model.isUrethralMetastasis2 = false;
  }
}
