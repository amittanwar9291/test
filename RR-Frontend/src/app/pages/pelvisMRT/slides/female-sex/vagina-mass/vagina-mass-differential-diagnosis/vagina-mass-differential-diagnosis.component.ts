import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FemaleSexFindingUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-ui.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { Subscription } from 'rxjs';
import { FemaleGenderDiagnosisTypeEnum } from '@enums/pelvisMRT/female-sex/female-gender-diagnosis-type.enum';
import { TranslateService } from '@ngx-translate/core';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';

@Component({
  selector: 'rr-vagina-mass-differential-diagnosis',
  templateUrl: './vagina-mass-differential-diagnosis.component.html',
  styleUrls: ['./vagina-mass-differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class VaginaMassDifferentialDiagnosisComponent implements OnInit, OnDestroy {
  @Input() model: FemaleSexFindingUiModel;
  w063DifferentialDiagnosisType: DropdownGroupedModel[];
  w064DifferentialDiagnosisType: DropdownGroupedModel[];

  subscriptions: Subscription[] = [];

  descriptionTypeEnum = DescriptionTypeEnum;
  femaleGenderDiagnosisTypeEnum = FemaleGenderDiagnosisTypeEnum;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.translate
        .stream('pelvisMRT.femaleGender.w063DifferentialDiagnosisType.options')
        .subscribe((out: DropdownGroupedModel[]) => (this.w063DifferentialDiagnosisType = out)),
      this.translate
        .stream('pelvisMRT.femaleGender.w064DifferentialDiagnosisType.options')
        .subscribe((out: DropdownGroupedModel[]) => (this.w064DifferentialDiagnosisType = out))
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  resetDifferentialDiagnosis1DependantFields() {
    this.resetDifferentialDiagnosis2DependantFields();
    this.model.isDegeneration1 = false;
    this.model.isBartholinitis1 = false;
    this.model.isAbscess1 = false;
  }

  resetDifferentialDiagnosis2DependantFields() {
    this.model.isSubordinate = false;
    this.model.isDegeneration2 = false;
    this.model.isBartholinitis2 = false;
    this.model.isAbscess2 = false;
  }
}
