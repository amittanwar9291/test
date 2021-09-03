import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ImpactionImpingementSyndromeTypeEnum } from '@enums/handMRT/bones/';
import { BonesFindingUiModel } from '@models/handMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-impaction-and-impingement-syndrome',
  templateUrl: './impaction-and-impingement-syndrome.component.html',
  styleUrls: ['./impaction-and-impingement-syndrome.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ImpactionAndImpingementSyndromeComponent {
  @Input() model: BonesFindingUiModel;

  impactionImpingementSyndromeType = ImpactionImpingementSyndromeTypeEnum;
}
