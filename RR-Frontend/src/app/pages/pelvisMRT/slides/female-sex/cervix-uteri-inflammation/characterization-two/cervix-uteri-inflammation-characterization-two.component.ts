import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FemaleSexFindingUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Subscription } from 'rxjs';
import { FemaleSexHelperService } from '../../female-sex-helper.service';
import { TranslateService } from '@ngx-translate/core';
import { FemaleGenderDiagnosisTypeEnum } from '@enums/pelvisMRT/female-sex/female-gender-diagnosis-type.enum';
import { ContrastEnhancementTypeEnum } from '@enums/pelvisMRT/female-sex/contrast-enhancement-type.enum';
import { HomogenityTypeEnum } from '@enums/pelvisMRT/female-sex/homogenity-type.enum';

@Component({
  selector: 'rr-cervix-uteri-inflammation-characterization-two',
  templateUrl: './cervix-uteri-inflammation-characterization-two.component.html',
  styleUrls: ['./cervix-uteri-inflammation-characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CervixUteriInflammationCharacterizationTwoComponent implements OnInit, OnDestroy {
  @Input() model: FemaleSexFindingUiModel;
  w062DifferentialDiagnosisType: DropdownModel[];

  contrastEnhancementTypeEnum = ContrastEnhancementTypeEnum;
  homogenityTypeEnum = HomogenityTypeEnum;
  femaleGenderDiagnosisTypeEnum = FemaleGenderDiagnosisTypeEnum;

  subscriptions: Subscription[] = [];
  isCM: boolean;

  constructor(private femaleSexHelperService: FemaleSexHelperService, private translate: TranslateService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.femaleSexHelperService.isCM.subscribe(value => (this.isCM = value)),
      this.translate
        .stream('pelvisMRT.femaleGender.w062DifferentialDiagnosisType.options')
        .subscribe((out: DropdownModel[]) => (this.w062DifferentialDiagnosisType = out))
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  resetPidCheckbox(dropdownValue): void {
    if (dropdownValue.value !== FemaleGenderDiagnosisTypeEnum.Cervicitis) {
      this.model.isPID = false;
    }
  }
}
