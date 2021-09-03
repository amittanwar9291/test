import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FemaleSexFindingUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { FemaleGenderDiagnosisTypeEnum } from '@enums/pelvisMRT/female-sex/female-gender-diagnosis-type.enum';
import { FigoStageTypeEnum } from '@enums/pelvisMRT/female-sex/figo-stage-type.enum';
import { FigoStageDetailsTypeEnum } from '@enums/pelvisMRT/female-sex/figo-stage-details-type.enum';
@Component({
  selector: 'rr-cervix-uteri-mass-differential-diagnosis',
  templateUrl: './cervix-uteri-mass-differential-diagnosis.component.html',
  styleUrls: ['./cervix-uteri-mass-differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CervixUteriMassDifferentialDiagnosisComponent implements OnInit, OnDestroy {
  @Input() model: FemaleSexFindingUiModel;
  w056DifferentialDiagnosisType: DropdownGroupedModel[];

  w057stageIDetailsOptions: DropdownModel[];
  w058stageIIDetailsOptions: DropdownModel[];
  w059stageIIFurtherInformationOptions: DropdownModel[];
  w060stageIIIDetailsOptions: DropdownModel[];
  w061stageIVDetailsOptions: DropdownModel[];

  descriptionTypeEnum = DescriptionTypeEnum;
  femaleGenderDiagnosisTypeEnum = FemaleGenderDiagnosisTypeEnum;
  figoStageTypeEnum = FigoStageTypeEnum;
  figoStageDetailsTypeEnum = FigoStageDetailsTypeEnum;

  subscriptions: Subscription[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.translate
        .stream('pelvisMRT.femaleGender.w056DifferentialDiagnosisType.options')
        .subscribe((out: DropdownGroupedModel[]) => (this.w056DifferentialDiagnosisType = out)),
      this.translate
        .stream('pelvisMRT.femaleGender.w057stageIDetails.options')
        .subscribe((out: DropdownModel[]) => (this.w057stageIDetailsOptions = out)),
      this.translate
        .stream('pelvisMRT.femaleGender.w058stageIIDetails.options')
        .subscribe((out: DropdownModel[]) => (this.w058stageIIDetailsOptions = out)),
      this.translate
        .stream('pelvisMRT.femaleGender.w059stageIIFurtherInformation.options')
        .subscribe((out: DropdownModel[]) => (this.w059stageIIFurtherInformationOptions = out)),
      this.translate
        .stream('pelvisMRT.femaleGender.w060stageIIIDetails.options')
        .subscribe((out: DropdownModel[]) => (this.w060stageIIIDetailsOptions = out)),
      this.translate
        .stream('pelvisMRT.femaleGender.w061stageIVDetails.options')
        .subscribe((out: DropdownModel[]) => (this.w061stageIVDetailsOptions = out))
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  clearDifferentialDiagnosis1DependentFields() {
    this.clearDifferentialDiagnosis2DependentFields();
    this.model.figoStageType1 = FigoStageTypeEnum.None;
    this.model.is1BMacroinvasiveLesion1 = false;
    this.model.figoStageAdditionalDetailsType1 = FigoStageDetailsTypeEnum.None;
    this.model.figoStageDetailsType1 = FigoStageDetailsTypeEnum.None;
  }

  clearDifferentialDiagnosis2DependentFields() {
    this.model.isSubordinate = false;
    this.model.figoStageType2 = FigoStageTypeEnum.None;
    this.model.is1BMacroinvasiveLesion2 = false;
    this.model.figoStageAdditionalDetailsType2 = FigoStageDetailsTypeEnum.None;
    this.model.figoStageDetailsType2 = FigoStageDetailsTypeEnum.None;
  }

  clearFigoStageAdditionalDetailsType1Field() {
    this.model.figoStageAdditionalDetailsType1 = FigoStageDetailsTypeEnum.None;
  }

  clearFigoStageAdditionalDetailsType2Field() {
    this.model.figoStageAdditionalDetailsType2 = FigoStageDetailsTypeEnum.None;
  }
}
