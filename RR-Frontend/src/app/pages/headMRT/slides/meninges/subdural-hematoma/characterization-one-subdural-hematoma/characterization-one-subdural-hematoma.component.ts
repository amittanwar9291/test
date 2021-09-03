import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MeningesFindingUiModel } from '@models/headMRT/ui/meninges/meninges-finding-ui.model';
import { SignalVoidTypeEnum } from '@enums/headMRT/common/signal-void-type.enum';

@Component({
  selector: 'rr-characterization-one-subdural-hematoma',
  templateUrl: './characterization-one-subdural-hematoma.component.html',
  styleUrls: ['./characterization-one-subdural-hematoma.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneSubduralHematomaComponent {
  @Input() model: MeningesFindingUiModel;
  @Input() isDWIInAnySequence: boolean[];

  signalVoidType = SignalVoidTypeEnum;
}
