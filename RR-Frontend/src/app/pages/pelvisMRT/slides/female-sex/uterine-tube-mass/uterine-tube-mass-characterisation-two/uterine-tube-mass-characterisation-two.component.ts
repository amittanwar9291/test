import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FemaleSexFindingUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-ui.model';
import { Subscription } from 'rxjs';
import { FemaleSexHelperService } from '../../female-sex-helper.service';
import { ComplexCysticTypeEnum } from '@enums/pelvisMRT/female-sex/uterine-tube-mass/complex-cystic-type.enum';
import { ContrastEnhancementTypeEnum } from '@enums/pelvisMRT/female-sex/contrast-enhancement-type.enum';
import { HomogenityTypeEnum } from '@enums/pelvisMRT/female-sex/homogenity-type.enum';

@Component({
  selector: 'rr-uterine-tube-mass-characterisation-two',
  templateUrl: './uterine-tube-mass-characterisation-two.component.html',
  styleUrls: ['./uterine-tube-mass-characterisation-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class UterineTubeMassCharacterisationTwoComponent implements OnInit, OnDestroy {
  @Input() model: FemaleSexFindingUiModel;

  subscriptions: Subscription[] = [];
  isCM: boolean;
  isDWI: boolean;

  complexCysticTypeEnum = ComplexCysticTypeEnum;
  contrastEnhancementTypeEnum = ContrastEnhancementTypeEnum;
  homogenityTypeEnum = HomogenityTypeEnum;

  constructor(private femaleSexHelperService: FemaleSexHelperService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.femaleSexHelperService.isCM.subscribe(value => (this.isCM = value)),
      this.femaleSexHelperService.isDWI.subscribe(value => (this.isDWI = value))
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
