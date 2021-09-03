import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FemaleSexFindingUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-ui.model';
import { FemaleSexHelperService } from '../../female-sex-helper.service';
import { Subscription } from 'rxjs';
import { ContrastEnhancementTypeEnum } from '@enums/pelvisMRT/female-sex/contrast-enhancement-type.enum';
import { HomogenityTypeEnum } from '@enums/pelvisMRT/female-sex/homogenity-type.enum';
import { SurroundingDetailsTypeEnum } from '@enums/pelvisMRT/female-sex/surrounding-details-type.enum';

@Component({
  selector: 'rr-oi-characterization-one',
  templateUrl: './characterization-one.component.html',
  styleUrls: ['./characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneComponent implements OnInit, OnDestroy {
  @Input() model: FemaleSexFindingUiModel;

  contrastEnhancementTypeEnum = ContrastEnhancementTypeEnum;
  homogenityTypeEnum = HomogenityTypeEnum;
  surroundingDetailsTypeEnum = SurroundingDetailsTypeEnum;

  subscriptions: Subscription[] = [];
  isCM: boolean;

  constructor(private femaleSexHelperService: FemaleSexHelperService) {}

  ngOnInit() {
    this.subscriptions.push(this.femaleSexHelperService.isCM.subscribe(value => (this.isCM = value)));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  isCMHomogenity1Disable(): boolean {
    return [ContrastEnhancementTypeEnum.None, ContrastEnhancementTypeEnum.No].includes(this.model.contrastEnhancementType1);
  }

  isCMHomogenity2Disable(): boolean {
    return [ContrastEnhancementTypeEnum.None, ContrastEnhancementTypeEnum.No].includes(this.model.contrastEnhancementType2);
  }
}
