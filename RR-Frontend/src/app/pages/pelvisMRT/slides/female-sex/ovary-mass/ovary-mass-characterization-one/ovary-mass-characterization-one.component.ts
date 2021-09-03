import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FemaleSexFindingUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { MarginTypeEnum } from '@enums/pelvisMRT/female-sex/margin-type.enum';
import { HomogenityTypeEnum } from '@enums/pelvisMRT/female-sex/homogenity-type.enum';
import { DifferentialDiagnosisTypeEnum } from '@enums/pelvisMRT/female-sex/differential-diagnosis-type.enum';
import { nameof } from 'ts-simple-nameof';
import { FemaleGenderDiagnosisTypeEnum } from '@enums/pelvisMRT/female-sex/female-gender-diagnosis-type.enum';

@Component({
  selector: 'rr-ovary-mass-characterization-one',
  templateUrl: './ovary-mass-characterization-one.component.html',
  styleUrls: ['./ovary-mass-characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OvaryMassCharacterizationOneComponent implements OnInit, OnDestroy {
  @Input() model: FemaleSexFindingUiModel;
  w042DifferentialDiagnosisType: DropdownGroupedModel[];

  translateSubscriptions: Subscription[] = [];

  descriptionTypeEnum = DescriptionTypeEnum;
  marginTypeEnum = MarginTypeEnum;
  homogenityTypeEnum = HomogenityTypeEnum;
  femaleGenderDiagnosisTypeEnum = FemaleGenderDiagnosisTypeEnum;

  propertiesToSkipInPresetsClearing = [nameof<FemaleSexFindingUiModel>(m => m.isRight), nameof<FemaleSexFindingUiModel>(m => m.isLeft)];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.translateSubscriptions.push(
      this.translate
        .stream('pelvisMRT.femaleGender.w042DifferentialDiagnosisType.options')
        .subscribe((out: DropdownGroupedModel[]) => (this.w042DifferentialDiagnosisType = out))
    );
  }

  ngOnDestroy() {
    this.translateSubscriptions.forEach(sub => sub.unsubscribe());
  }

  clearDifferentialDiagnose02DependantFields() {
    this.model.isSubordinate = false;
    this.model.differentialDiagnosisType2 = DifferentialDiagnosisTypeEnum.None;
    this.model.isFollicularCysts2 = false;
    this.model.isCystadenofibroma2 = false;
    this.model.isTuboovarianAbscess2 = false;
    this.model.isSalpingitis2 = false;
    this.model.isKrukenbergTumor2 = false;
  }
}
