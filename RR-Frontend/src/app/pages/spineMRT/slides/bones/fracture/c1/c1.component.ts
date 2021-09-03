import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { GehweilerTypeEnum, NoSpecTypeEnum } from '@enums/spineMRT/bones';
import { BonesFindingUiModel } from '@models/spineMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class C1Component {
  @Input() model: BonesFindingUiModel;

  gehweilerTypeEnum = GehweilerTypeEnum;
  locationTypeEnum = LocationTypeEnum;
  noSpecTypeEnum = NoSpecTypeEnum;
}
