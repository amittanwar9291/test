import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FemaleSexFindingUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-ui.model';
import { Subscription } from 'rxjs';
import { FemaleSexHelperService } from '../../female-sex-helper.service';
import { ContrastEnhancementTypeEnum } from '@enums/pelvisMRT/female-sex/contrast-enhancement-type.enum';
import { HomogenityTypeEnum } from '@enums/pelvisMRT/female-sex/homogenity-type.enum';

@Component({
  selector: 'rr-vagina-mass-characterization-two',
  templateUrl: './vagina-mass-characterization-two.component.html',
  styleUrls: ['./vagina-mass-characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class VaginaMassCharacterizationTwoComponent implements OnInit, OnDestroy {
  @Input() model: FemaleSexFindingUiModel;

  contrastEnhancementTypeEnum = ContrastEnhancementTypeEnum;
  homogenityTypeEnum = HomogenityTypeEnum;

  subscriptions: Subscription[] = [];
  isCM: boolean;
  isDWI: boolean;

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
