import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { AgeTypeEnum, MuscularAtrophyTypeEnum } from '@enums/feetMRT/soft-tissue';
import { SoftTissueFindingUiModel } from '@models/feetMRT/ui/soft-tissue/soft-tissue-finding-ui.model';

@Component({
  selector: 'rr-characterization-two-muscle-lesion',
  templateUrl: './characterization-two-muscle-lesion.component.html',
  styleUrls: ['./characterization-two-muscle-lesion.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoMuscleLesionComponent {
  @Input() model: SoftTissueFindingUiModel;

  ageTypeEnum: typeof AgeTypeEnum;
  muscularAtrophyTypeEnum: typeof MuscularAtrophyTypeEnum;

  constructor() {
    this.ageTypeEnum = AgeTypeEnum;
    this.muscularAtrophyTypeEnum = MuscularAtrophyTypeEnum;
  }

  clearSliders(): void {
    this.model.signalT1w = 0;
    this.model.signalT2w = 0;
  }
}
