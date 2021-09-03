import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BladderFindingUiModel } from '@models/pelvisMRT/ui/bladder/bladder-finding-ui.model';
import { HematomaCharacterizationTypeEnum, MuscleAtrophyTypeEnum } from '@enums/pelvisMRT/bladder';

@Component({
  selector: 'rr-muscles-characterization-two',
  templateUrl: './muscles-characterization-two.component.html',
  styleUrls: ['./muscles-characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MusclesCharacterizationTwoComponent {
  @Input() model: BladderFindingUiModel;

  hematomaCharacterizationTypeEnum = HematomaCharacterizationTypeEnum;
  muscleAtrophyTypeEnum = MuscleAtrophyTypeEnum;

  clearTwSignalSliders() {
    this.model.t1wSignal = 0;
    this.model.t2wSignal = 0;
  }
}
