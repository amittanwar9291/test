import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FemaleSexFindingUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FemaleSexHelperService } from '../../female-sex-helper.service';
import { DepthOfInfiltrationTypeEnum } from '@enums/pelvisMRT/female-sex/endometriosis/depth-of-infiltration-type.enum';
import { SubperitonealInfiltrationTypeEnum } from '@enums/pelvisMRT/female-sex/endometriosis/subperitoneal-infiltration-type.enum';
import { ContrastEnhancementTypeEnum } from '@enums/pelvisMRT/female-sex/contrast-enhancement-type.enum';
import { HomogenityTypeEnum } from '@enums/pelvisMRT/female-sex/homogenity-type.enum';
import { ComplicationsTypeEnum } from '@enums/pelvisMRT/female-sex/endometriosis/complications-type.enum';

@Component({
  selector: 'rr-endometriosis-characterization-three',
  templateUrl: './endometriosis-characterization-three.component.html',
  styleUrls: ['./endometriosis-characterization-three.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class EndometriosisCharacterizationThreeComponent implements OnInit, OnDestroy {
  @Input() model: FemaleSexFindingUiModel;

  depthOfInfiltrationTypeEnum = DepthOfInfiltrationTypeEnum;
  subperitonealInfiltrationTypeEnum = SubperitonealInfiltrationTypeEnum;
  contrastEnhancementTypeEnum = ContrastEnhancementTypeEnum;
  homogenityTypeEnum = HomogenityTypeEnum;
  complicationsTypeEnum = ComplicationsTypeEnum;

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
