import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { FemaleSexFindingUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { FemaleGenderDiagnosisTypeEnum } from '@enums/pelvisMRT/female-sex/female-gender-diagnosis-type.enum';

@Component({
  selector: 'rr-uterine-tube-mass-differential-diagnosis',
  templateUrl: './uterine-tube-mass-differential-diagnosis.component.html',
  styleUrls: ['./uterine-tube-mass-differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class UterineTubeMassDifferentialDiagnosisComponent implements OnInit, OnDestroy {
  @Input() model: FemaleSexFindingUiModel;
  w045DifferentialDiagnosisType: DropdownGroupedModel[];

  descriptionTypeEnum = DescriptionTypeEnum;
  femaleGenderDiagnosisTypeEnum = FemaleGenderDiagnosisTypeEnum;

  subscriptions: Subscription[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.translate
        .stream('pelvisMRT.femaleGender.w045DifferentialDiagnosisType.options')
        .subscribe((out: DropdownGroupedModel[]) => (this.w045DifferentialDiagnosisType = out))
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  isSecondDifferentialDisabled(): boolean {
    return (
      this.model.differentialDiagnosis === FemaleGenderDiagnosisTypeEnum.None &&
      this.model.differentialDiagnosis1 === FemaleGenderDiagnosisTypeEnum.None
    );
  }

  resetSubordinated() {
    this.model.isSubordinate = false;
  }
}
