import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ComplexDislocationFracturesTypeEnum, DirectionTypeEnum, MonteggiaFractureTypeEnum } from '@enums/elbowMRT/bones';
import { BonesFindingUiModel } from '@models/elbowMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-dislocation',
  templateUrl: './dislocation.component.html',
  styleUrls: ['./dislocation.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DislocationComponent {
  @Input() model: BonesFindingUiModel;

  directionTypeEnum = DirectionTypeEnum;
  complexDislocationFracturesTypeEnum = ComplexDislocationFracturesTypeEnum;
  monteggiaFractureTypeEnum = MonteggiaFractureTypeEnum;
}
