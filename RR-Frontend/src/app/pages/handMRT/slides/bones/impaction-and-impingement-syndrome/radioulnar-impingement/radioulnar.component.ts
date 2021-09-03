import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { RadioulnarEarlyPhaseTypeEnum, RadioulnarImpingementTypeEnum, RadioulnarLatePhaseTypeEnum } from '@enums/handMRT/bones/';
import { BonesFindingUiModel } from '@models/handMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-radioulnar',
  templateUrl: './radioulnar.component.html',
  styleUrls: ['./radioulnar.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class RadioulnarComponent {
  @Input() model: BonesFindingUiModel;

  radioulnarImpingementType = RadioulnarImpingementTypeEnum;
  radioulnarEarlyPhaseType = RadioulnarEarlyPhaseTypeEnum;
  radioulnarLatePhaseType = RadioulnarLatePhaseTypeEnum;
}
