import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { UlnocarpalEtiologyTypeEnum } from '@enums/handMRT/bones/';
import { BonesFindingUiModel } from '@models/handMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-ulnocarpal-impaction',
  templateUrl: './ulnocarpal-impaction.component.html',
  styleUrls: ['./ulnocarpal-impaction.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class UlnocarpalImpactionComponent {
  @Input() model: BonesFindingUiModel;

  ulnocarpalEtiologyType = UlnocarpalEtiologyTypeEnum;
}
