import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FemaleSexFindingUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Subscription } from 'rxjs';
import { FemaleSexHelperService } from '../../female-sex-helper.service';
import { TranslateService } from '@ngx-translate/core';
import { SideTypeEnum } from '@enums/pelvisMRT/female-sex/side-type.enum';
import { ContrastEnhancementTypeEnum } from '@enums/pelvisMRT/female-sex/contrast-enhancement-type.enum';
import { FemaleGenderDiagnosisTypeEnum } from '@enums/pelvisMRT/female-sex/female-gender-diagnosis-type.enum';

@Component({
  selector: 'rr-uterine-tube-inflammation-characterization-two',
  templateUrl: './uterine-tube-inflammation-characterization-two.component.html',
  styleUrls: ['./uterine-tube-inflammation-characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class UterineTubeInflammationCharacterizationTwoComponent implements OnInit, OnDestroy {
  @Input() model: FemaleSexFindingUiModel;
  w046DifferentialDiagnosisType: DropdownModel[];
  w047DifferentialDiagnosisType: DropdownModel[];

  sideTypeEnum = SideTypeEnum;
  contrastEnhancementTypeEnum = ContrastEnhancementTypeEnum;
  femaleGenderDiagnosisTypeEnum = FemaleGenderDiagnosisTypeEnum;

  subscriptions: Subscription[] = [];
  isCM: boolean;

  constructor(private femaleSexHelperService: FemaleSexHelperService, private translate: TranslateService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.femaleSexHelperService.isCM.subscribe(value => (this.isCM = value)),
      this.translate
        .stream('pelvisMRT.femaleGender.w046DifferentialDiagnosisType.options')
        .subscribe((out: DropdownModel[]) => (this.w046DifferentialDiagnosisType = out)),
      this.translate
        .stream('pelvisMRT.femaleGender.w047DifferentialDiagnosisType.options')
        .subscribe((out: DropdownModel[]) => (this.w047DifferentialDiagnosisType = out))
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  clearSubordinate() {
    this.model.isSubordinate = false;
  }
}
