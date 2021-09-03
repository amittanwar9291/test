import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { TendonsAndMusclesFindingUiModel } from '@models/elbowMRT/ui/tendons-and-muscles/tendons-and-muscles-finding-ui.model';

import { LocalizationWithinTheMuscleTypeEnum } from '@enums/elbowMRT/musles-and-tendons/localization-within-the-muscle-type.enum';
import { ClassificationMunichConsensusTypeEnum } from '@enums/elbowMRT/musles-and-tendons/classification-munich-consensus-type.enum';
import { MuscularAtrophyTypeEnum } from '@enums/elbowMRT/musles-and-tendons/muscular-atrophy-type.enum';
import { HematomaCharacterizationTypeEnum } from '@enums/elbowMRT/musles-and-tendons/hematoma-characterization-type.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

@Component({
  selector: 'rr-musculature',
  templateUrl: './musculature.component.html',
  styleUrls: ['./musculature.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MusculatureComponent implements OnInit, OnDestroy {
  @Input() model: TendonsAndMusclesFindingUiModel;

  subscriptions: Subscription[] = [];
  localizationMuscleCompartmentsOptions: DropdownModel[];

  localizationWithinMuscleType: typeof LocalizationWithinTheMuscleTypeEnum;
  classificationMunichConsensusType: typeof ClassificationMunichConsensusTypeEnum;
  muscularAtrophyType: typeof MuscularAtrophyTypeEnum;
  hematomaCharacterizationType: typeof HematomaCharacterizationTypeEnum;

  constructor(private translate: TranslateService) {
    this.localizationWithinMuscleType = LocalizationWithinTheMuscleTypeEnum;
    this.classificationMunichConsensusType = ClassificationMunichConsensusTypeEnum;
    this.muscularAtrophyType = MuscularAtrophyTypeEnum;
    this.hematomaCharacterizationType = HematomaCharacterizationTypeEnum;
  }

  ngOnInit(): void {
    this.initTranslations();
  }

  clearSliders() {
    this.model.signalT2w = 0;
    this.model.signalT1w = 0;
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate
        .stream('elbowMRT.tendonsAndMuscles.localizationMuscleCompartmentsOptions.options')
        .subscribe((out: DropdownModel[]) => {
          this.localizationMuscleCompartmentsOptions = Object.values(out);
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(item => item.unsubscribe());
  }
}
