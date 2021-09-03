import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { NoSpecTypeEnum } from '@enums/spineMRT/bones';
import { OsCoccygisFractureTypeEnum } from '@enums/spineMRT/bones/fracture/os-coccygis/os-coccygis-fracture-type.enum';
import { BonesFindingUiModel } from '@models/spineMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-os-coccygis',
  templateUrl: './os-coccygis.component.html',
  styleUrls: ['./os-coccygis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OsCoccygisComponent {
  @Input() model: BonesFindingUiModel;

  osCoccygisFractureTypeEnum = OsCoccygisFractureTypeEnum;
  noSpecTypeEnum = NoSpecTypeEnum;
}
