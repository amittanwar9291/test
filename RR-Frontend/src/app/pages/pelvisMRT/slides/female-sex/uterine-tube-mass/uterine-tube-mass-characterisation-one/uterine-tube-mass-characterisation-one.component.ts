import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FemaleSexFindingUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-ui.model';
import { SideTypeEnum } from '@enums/pelvisMRT/female-sex/side-type.enum';
import { SideSubTypeEnum } from '@enums/pelvisMRT/female-sex/side-sub-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { MarginTypeEnum } from '@enums/pelvisMRT/female-sex/margin-type.enum';
import { HomogenityTypeEnum } from '@enums/pelvisMRT/female-sex/homogenity-type.enum';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-uterine-tube-mass-characterisation-one',
  templateUrl: './uterine-tube-mass-characterisation-one.component.html',
  styleUrls: ['./uterine-tube-mass-characterisation-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class UterineTubeMassCharacterisationOneComponent implements OnInit, OnDestroy {
  @Input() model: FemaleSexFindingUiModel;
  w045DifferentialDiagnosisType: DropdownGroupedModel[];
  subscriptions: Subscription[] = [];

  sideTypeEnum = SideTypeEnum;
  sideSubTypeEnum = SideSubTypeEnum;
  descriptionTypeEnum = DescriptionTypeEnum;
  marginTypeEnum = MarginTypeEnum;
  homogenityTypeEnum = HomogenityTypeEnum;

  propertiesToSkipInPresetsClearing = [
    nameof<FemaleSexFindingUiModel>(m => m.sideType),
    nameof<FemaleSexFindingUiModel>(m => m.secondPlaneInMm),
    nameof<FemaleSexFindingUiModel>(m => m.thirdPlaneInMm)
  ];

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

  clearDifferentialDiagnose() {
    this.model.isSubordinate = false;
  }
}
