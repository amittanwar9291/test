import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesFindingUiModel } from '@models/thoraxMRT/ui/bones/bones-finding-ui.model';
import { ThoraxMRTBonesFindingTypeEnum } from '@enums/thoraxMRT/bones/thorax-mrt-bones-finding-type.enum';

@Component({
  selector: 'rr-characterization-two-tab',
  templateUrl: './characterization-two-tab.component.html',
  styleUrls: ['./characterization-two-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoTabComponent {
  @Input() model: BonesFindingUiModel;
  thoraxMRTBonesFindingTypeEnum = ThoraxMRTBonesFindingTypeEnum;
}
