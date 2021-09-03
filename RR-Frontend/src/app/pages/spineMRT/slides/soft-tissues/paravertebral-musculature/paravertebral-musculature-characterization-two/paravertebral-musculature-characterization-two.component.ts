import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  BonyAvulsionTypeEnum,
  ClassificationMunichConsensusTypeEnum,
  HematomaCharacterizationTypeEnum,
  MuscleAtrophyTypeEnum
} from '@enums/spineMRT/soft-tissues';
import { SoftTissuesFindingUiModel } from '@models/spineMRT/ui/soft-tissues/soft-tissues-finding-ui.model';

@Component({
  selector: 'rr-paravertebral-musculature-characterization-two',
  templateUrl: './paravertebral-musculature-characterization-two.component.html',
  styleUrls: ['./paravertebral-musculature-characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ParavertebralMusculatureCharacterizationTwoComponent {
  @Input() model: SoftTissuesFindingUiModel;

  setOfMandatoryCheckboxes =
    'isMuscleLesion isHematoma isFattyDegeneration isMuscleHypertrophy isMuscleAtrophy isApophysitis isFascialRupture';

  bonyAvulsionTypeEnum: typeof BonyAvulsionTypeEnum = BonyAvulsionTypeEnum;
  classificationMunichConsensusTypeEnum: typeof ClassificationMunichConsensusTypeEnum = ClassificationMunichConsensusTypeEnum;
  hematomaCharacterizationTypeEnum: typeof HematomaCharacterizationTypeEnum = HematomaCharacterizationTypeEnum;
  muscleAtrophyTypeEnum: typeof MuscleAtrophyTypeEnum = MuscleAtrophyTypeEnum;

  clearSignalSlider() {
    if (!this.model.isHematoma) {
      this.model.signalT1w = 0;
      this.model.signalT2w = 0;
    }
  }
}
