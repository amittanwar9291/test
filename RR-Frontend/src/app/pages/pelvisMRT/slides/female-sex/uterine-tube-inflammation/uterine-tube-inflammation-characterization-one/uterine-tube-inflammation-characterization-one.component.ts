import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FemaleSexFindingUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-ui.model';
import { Subscription } from 'rxjs';
import { FemaleSexHelperService } from '../../female-sex-helper.service';
import { ContrastEnhancementTypeEnum } from '@enums/pelvisMRT/female-sex/contrast-enhancement-type.enum';
import { HomogenityTypeEnum } from '@enums/pelvisMRT/female-sex/homogenity-type.enum';
import { SurroundingDetailsTypeEnum } from '@enums/pelvisMRT/female-sex/surrounding-details-type.enum';

@Component({
  selector: 'rr-uterine-tube-inflammation-characterization-one',
  templateUrl: './uterine-tube-inflammation-characterization-one.component.html',
  styleUrls: ['./uterine-tube-inflammation-characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class UterineTubeInflammationCharacterizationOneComponent implements OnInit, OnDestroy {
  @Input() model: FemaleSexFindingUiModel;

  contrastEnhancementTypeEnum = ContrastEnhancementTypeEnum;
  homogenityTypeEnum = HomogenityTypeEnum;
  surroundingDetailsTypeEnum = SurroundingDetailsTypeEnum;

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

  resetSignalBehaviorBlock() {
    if (!this.model.isIntraluminalFluid || !this.model.isDilatedLumen) {
      this.model.t1wSignal = 0;
      this.model.t2wSignal = 0;
    }
  }

  resetDetails() {
    if (this.model.additionalT2wSignal === 0) {
      this.model.surroundingDetailsType = SurroundingDetailsTypeEnum.None;
    }
  }
}
