import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FemaleSexFindingUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FemaleSexHelperService } from '../../female-sex-helper.service';
import { MarginTypeEnum } from '@enums/pelvisMRT/female-sex/margin-type.enum';
import { HomogenityTypeEnum } from '@enums/pelvisMRT/female-sex/homogenity-type.enum';
import { ContrastEnhancementTypeEnum } from '@enums/pelvisMRT/female-sex/contrast-enhancement-type.enum';

@Component({
  selector: 'rr-cervix-uteri-inflammation-characterization-one',
  templateUrl: './cervix-uteri-inflammation-characterization-one.component.html',
  styleUrls: ['./cervix-uteri-inflammation-characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CervixUteriInflammationCharacterizationOneComponent implements OnInit, OnDestroy {
  @Input() model: FemaleSexFindingUiModel;

  marginTypeEnum = MarginTypeEnum;
  homogenityTypeEnum = HomogenityTypeEnum;
  contrastEnhancementTypeEnum = ContrastEnhancementTypeEnum;

  subscriptions: Subscription[] = [];
  isCM: boolean;

  constructor(private femaleSexHelperService: FemaleSexHelperService) {}

  ngOnInit() {
    this.subscriptions.push(this.femaleSexHelperService.isCM.subscribe(value => (this.isCM = value)));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
