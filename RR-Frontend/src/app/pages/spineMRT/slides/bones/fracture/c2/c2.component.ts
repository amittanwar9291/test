import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  AxisArcTypeEnum,
  C1c2FractureTypeEnum,
  C1ToC2FractureTypeEnum,
  C2FractureTypeEnum,
  DensityTypeEnum,
  NoSpecTypeEnum,
  StabilityTypeEnum
} from '@enums/spineMRT/bones';
import { BonesFindingUiModel } from '@models/spineMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class C2Component {
  @Input() model: BonesFindingUiModel;

  c2FractureTypeEnum = C2FractureTypeEnum;
  c1c2FractureTypeEnum = C1c2FractureTypeEnum;
  c1ToC2FractureTypeEnum = C1ToC2FractureTypeEnum;
  axisArcTypeEnum = AxisArcTypeEnum;
  densityTypeEnum = DensityTypeEnum;
  stabilityTypeEnum = StabilityTypeEnum;
  noSpecTypeEnum = NoSpecTypeEnum;
}
