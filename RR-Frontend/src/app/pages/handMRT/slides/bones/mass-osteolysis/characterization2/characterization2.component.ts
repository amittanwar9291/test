import { Component, Input } from '@angular/core';
import { BonesFindingUiModel } from '@models/handMRT/ui/bones/bones-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { LocalExpansionTypeEnum } from '@enums/handMRT/bones/';

@Component({
  selector: 'rr-handmrt-characterization2',
  templateUrl: './characterization2.component.html',
  styleUrls: ['./characterization2.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class Characterization2Component {
  @Input() model: BonesFindingUiModel;
  localExpansionTypeEnum = LocalExpansionTypeEnum;
}
