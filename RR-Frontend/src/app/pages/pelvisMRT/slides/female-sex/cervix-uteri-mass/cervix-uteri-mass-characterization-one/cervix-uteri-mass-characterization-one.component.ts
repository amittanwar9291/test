import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FemaleSexFindingUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { LocalizationTypeEnum } from '@enums/pelvisMRT/female-sex/localization-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { MarginTypeEnum } from '@enums/pelvisMRT/female-sex/margin-type.enum';
import { HomogenityTypeEnum } from '@enums/pelvisMRT/female-sex/homogenity-type.enum';
import { FigoStageTypeEnum } from '@enums/pelvisMRT/female-sex/figo-stage-type.enum';
import { FigoStageDetailsTypeEnum } from '@enums/pelvisMRT/female-sex/figo-stage-details-type.enum';
import { FemaleGenderDiagnosisTypeEnum } from '@enums/pelvisMRT/female-sex/female-gender-diagnosis-type.enum';

@Component({
  selector: 'rr-cervix-uteri-mass-characterization-one',
  templateUrl: './cervix-uteri-mass-characterization-one.component.html',
  styleUrls: ['./cervix-uteri-mass-characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CervixUteriMassCharacterizationOneComponent implements OnInit, OnDestroy {
  @Input() model: FemaleSexFindingUiModel;
  w056DifferentialDiagnosisType: DropdownModel[];

  subscriptions: Subscription[] = [];

  localizationTypeEnum = LocalizationTypeEnum;
  descriptionTypeEnum = DescriptionTypeEnum;
  marginTypeEnum = MarginTypeEnum;
  homogenityTypeEnum = HomogenityTypeEnum;
  femaleGenderDiagnosisTypeEnum = FemaleGenderDiagnosisTypeEnum;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.translate
        .stream('pelvisMRT.femaleGender.w056DifferentialDiagnosisType.options')
        .subscribe((out: DropdownModel[]) => (this.w056DifferentialDiagnosisType = out))
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  resetDetailsSignalBehavior(value: number) {
    if (value === 0) {
      this.model.detailsT2wSignalHomogenityType = HomogenityTypeEnum.None;
    }
  }

  resetDifferentialDiagnosis(): void {
    this.model.isSubordinate = false;
    this.model.figoStageType2 = FigoStageTypeEnum.None;
    this.model.is1BMacroinvasiveLesion2 = false;
    this.model.figoStageAdditionalDetailsType2 = FigoStageDetailsTypeEnum.None;
    this.model.figoStageDetailsType2 = FigoStageDetailsTypeEnum.None;
  }
}
