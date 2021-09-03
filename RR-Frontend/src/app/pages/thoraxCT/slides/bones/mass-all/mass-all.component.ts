import { Component, Input } from '@angular/core';
import { BonesFindingUiModel } from '@models/thoraxCT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-mass-all',
  templateUrl: './mass-all.component.html',
  styleUrls: ['./mass-all.component.scss']
})
export class MassAllComponent {
  @Input() model: BonesFindingUiModel;
}
