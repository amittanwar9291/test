import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FemaleSexFindingUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-ui.model';
import { Subscription } from 'rxjs';
import { FemaleSexHelperService } from '../../female-sex-helper.service';
import { TransitionZoneTypeEnum } from '@enums/pelvisMRT/female-sex/corpus-uteri-mass/transition-zone-type.enum';
import { ContrastEnhancementTypeEnum } from '@enums/pelvisMRT/female-sex/contrast-enhancement-type.enum';
import { HomogenityTypeEnum } from '@enums/pelvisMRT/female-sex/homogenity-type.enum';
import { HeterogeneousTypeEnum } from '@enums/pelvisMRT/female-sex/heterogeneous-type.enum';
import { WideningObstructionTypeEnum } from '@enums/pelvisMRT/female-sex/widening-obstruction-type.enum';

@Component({
  selector: 'rr-corpus-uteri-mass-characterization-three',
  templateUrl: './corpus-uteri-mass-characterization-three.component.html',
  styleUrls: ['./corpus-uteri-mass-characterization-three.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CorpusUteriMassCharacterizationThreeComponent implements OnInit, OnDestroy {
  @Input() model: FemaleSexFindingUiModel;

  transitionZoneTypeEnum = TransitionZoneTypeEnum;
  contrastEnhancementTypeEnum = ContrastEnhancementTypeEnum;
  homogenityTypeEnum = HomogenityTypeEnum;
  heterogeneousTypeEnum = HeterogeneousTypeEnum;
  wideningObstructionTypeEnum = WideningObstructionTypeEnum;

  subscriptions: Subscription[] = [];
  isCM: boolean;
  isDWI: boolean;

  constructor(private femaleSexHelperService: FemaleSexHelperService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.femaleSexHelperService.isCM.subscribe(value => {
        this.isCM = value;
      }),
      this.femaleSexHelperService.isDWI.subscribe(value => {
        this.isDWI = value;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
