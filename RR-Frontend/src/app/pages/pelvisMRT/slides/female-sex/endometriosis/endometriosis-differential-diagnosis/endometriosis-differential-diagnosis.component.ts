import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FemaleSexFindingUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { FemaleGenderDiagnosisTypeEnum } from '@enums/pelvisMRT/female-sex/female-gender-diagnosis-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
@Component({
  selector: 'rr-endometriosis-differential-diagnosis',
  templateUrl: './endometriosis-differential-diagnosis.component.html',
  styleUrls: ['./endometriosis-differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class EndometriosisDifferentialDiagnosisComponent implements OnInit, OnDestroy {
  @Input() model: FemaleSexFindingUiModel;
  w068DifferentialDiagnosisType: DropdownGroupedModel[];

  femaleGenderDiagnosisTypeEnum = FemaleGenderDiagnosisTypeEnum;
  descriptionTypeEnum = DescriptionTypeEnum;
  subscriptions: Subscription[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.translate
        .stream('pelvisMRT.femaleGender.w068DifferentialDiagnosisType.options')
        .subscribe((out: DropdownGroupedModel[]) => (this.w068DifferentialDiagnosisType = out))
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  clearIsSubordinete() {
    this.model.isSubordinate = false;
  }
}
