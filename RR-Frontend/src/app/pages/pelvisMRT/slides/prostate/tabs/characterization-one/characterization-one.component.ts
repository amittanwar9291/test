import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ProstateFindingUiModel } from '@models/pelvisMRT/ui/prostate/prostate-finding-ui.model';
import { CapsuleTypeEnum } from '@enums/pelvisMRT/prostate/capsule-type.enum';
import { SignalPowerTypeEnum } from '@enums/pelvisMRT/prostate/signal-power-type.enum';
import { MarginTypeEnum } from '@enums/pelvisMRT/prostate/margin-type.enum';
import { HomogenityTypeEnum } from '@enums/pelvisMRT/prostate/homogenity-type.enum';
import { DwiAdcSignalTypeEnum } from '@enums/pelvisMRT/prostate/dwi-adc-signal-type.enum';
import { DiscreteTypeEnum } from '@enums/pelvisMRT/prostate/discrete-type.enum';
import { DirectionTypeEnum } from '@enums/shared/direction-type.enum';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';
import { SequencesTypeEnum } from '@enums/shared/technology/sequences-type.enum';
import { WeightChangeTypeEnum } from '@enums/pelvisMRT/anamnesis/weight-change-type.enum';

@Component({
  selector: 'rr-characterization-one',
  templateUrl: './characterization-one.component.html',
  styleUrls: ['./characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneComponent {
  @Input() zone = '';
  @Input() model: ProstateFindingUiModel;
  @Input() technologyModel: TechnologyUiModel;
  @Output() openLargeLocaliser = new EventEmitter();

  transitionaZoneTZCapsuleType: typeof CapsuleTypeEnum;
  signalPowerType: typeof SignalPowerTypeEnum;
  limitationType: typeof MarginTypeEnum;
  homogenityType: typeof HomogenityTypeEnum;
  directionType: typeof DirectionTypeEnum;
  increasedDwiSignalType: typeof DwiAdcSignalTypeEnum;
  discreteType: typeof DiscreteTypeEnum;

  weightingType: typeof WeightChangeTypeEnum;

  constructor() {
    this.initializeEnums();
  }

  openLargeLocaliserFn() {
    this.openLargeLocaliser.emit();
  }

  initializeEnums() {
    this.transitionaZoneTZCapsuleType = CapsuleTypeEnum;
    this.signalPowerType = SignalPowerTypeEnum;
    this.limitationType = MarginTypeEnum;
    this.homogenityType = HomogenityTypeEnum;
    this.directionType = DirectionTypeEnum;
    this.increasedDwiSignalType = DwiAdcSignalTypeEnum;
    this.discreteType = DiscreteTypeEnum;
  }

  hasTechnologyDwiBeenSelected() {
    if (!this.technologyModel.sequences.length) {
      return false;
    }

    return !this.technologyModel.sequences.some(sequence => {
      return sequence.weightingType === 'DWI';
    });
  }
}
