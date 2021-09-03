import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LocalExpansionTypeEnum } from '@enums/hipMRT/bones';
import { BonesFindingUiModel } from '@models/hipMRT/ui/bones/bones-finding-ui.model';
@Component({
  selector: 'rr-characterization-two',
  templateUrl: './characterization-two.component.html',
  styleUrls: ['../mass-osteolysis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoComponent {
  @Input() model: BonesFindingUiModel;

  localExpansionType = LocalExpansionTypeEnum;
}
