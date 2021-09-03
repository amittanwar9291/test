import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FemaleSexFindingUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { FemaleSexHelperService } from '../../female-sex-helper.service';
import { Subscription } from 'rxjs';
import { ContrastEnhancementTypeEnum } from '@enums/pelvisMRT/female-sex/contrast-enhancement-type.enum';
import { DceMriTypeEnum } from '@enums/pelvisMRT/female-sex/ovary-mass/dce-mri-type.enum';
import { PeritonealNodulesTypeEnum } from '@enums/pelvisMRT/female-sex/ovary-mass/peritoneal-nodules-type.enum';
import { SideTypeEnum } from '@enums/pelvisMRT/female-sex/side-type.enum';
import { HomogenityTypeEnum } from '@enums/pelvisMRT/female-sex/homogenity-type.enum';
import { HeterogeneousTypeEnum } from '@enums/pelvisMRT/female-sex/heterogeneous-type.enum';

@Component({
  selector: 'rr-ovary-mass-characterization-two',
  templateUrl: './ovary-mass-characterization-two.component.html',
  styleUrls: ['./ovary-mass-characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OvaryMassCharacterizationTwoComponent implements OnInit, OnDestroy {
  @Input() model: FemaleSexFindingUiModel;

  simpleAnswer = SimpleAnswerEnum;
  contrastEnhancementTypeEnum = ContrastEnhancementTypeEnum;
  homogenityTypeEnum = HomogenityTypeEnum;
  heterogeneousTypeEnum = HeterogeneousTypeEnum;
  dceMriTypeEnum = DceMriTypeEnum;
  peritonealNodulesTypeEnum = PeritonealNodulesTypeEnum;
  sideTypeEnum = SideTypeEnum;

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

  isCMHomogenityDisable(): boolean {
    return [ContrastEnhancementTypeEnum.None, ContrastEnhancementTypeEnum.No].includes(this.model.contrastEnhancementType1);
  }
}
