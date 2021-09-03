import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FemaleSexFindingUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { Subscription } from 'rxjs';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { TranslateService } from '@ngx-translate/core';
import { FemaleGenderDiagnosisTypeEnum } from '@enums/pelvisMRT/female-sex/female-gender-diagnosis-type.enum';
import { DifferentialDiagnosisTypeEnum } from '@enums/pelvisMRT/female-sex/differential-diagnosis-type.enum';

@Component({
  selector: 'rr-ovary-mass-differential-diagnosis',
  templateUrl: './ovary-mass-differential-diagnosis.component.html',
  styleUrls: ['./ovary-mass-differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OvaryMassDifferentialDiagnosisComponent implements OnInit, OnDestroy {
  @Input() model: FemaleSexFindingUiModel;
  w042DifferentialDiagnosisType: DropdownGroupedModel[];
  w043DifferentialDiagnosisType: DropdownGroupedModel[];

  subscriptions: Subscription[] = [];

  descriptionTypeEnum = DescriptionTypeEnum;
  femaleGenderDiagnosisTypeEnum = FemaleGenderDiagnosisTypeEnum;
  differentialDiagnosisTypeEnum = DifferentialDiagnosisTypeEnum;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.translate
        .stream('pelvisMRT.femaleGender.w042DifferentialDiagnosisType.options')
        .subscribe((out: DropdownGroupedModel[]) => (this.w042DifferentialDiagnosisType = out)),
      this.translate
        .stream('pelvisMRT.femaleGender.w043DifferentialDiagnosisType.options')
        .subscribe((out: DropdownGroupedModel[]) => (this.w043DifferentialDiagnosisType = out))
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  isDD2Disable() {
    return (
      this.model.differentialDiagnosis === FemaleGenderDiagnosisTypeEnum.None &&
      this.model.differentialDiagnosis1 === FemaleGenderDiagnosisTypeEnum.None
    );
  }

  onDD1Change() {
    this.onDD2Change();
    this.model.differentialDiagnosisType1 = DifferentialDiagnosisTypeEnum.None;
    this.model.isFollicularCysts1 = false;
    this.model.isCystadenofibroma1 = false;
    this.model.isTuboovarianAbscess1 = false;
    this.model.isSalpingitis1 = false;
    this.model.isKrukenbergTumor1 = false;
  }

  onDD2Change() {
    this.model.isSubordinate = false;
    this.model.differentialDiagnosisType2 = DifferentialDiagnosisTypeEnum.None;
    this.model.isFollicularCysts2 = false;
    this.model.isCystadenofibroma2 = false;
    this.model.isTuboovarianAbscess2 = false;
    this.model.isSalpingitis2 = false;
    this.model.isKrukenbergTumor2 = false;
  }
}
