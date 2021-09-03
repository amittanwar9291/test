import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { C0StabilityTypeEnum, NoSpecTypeEnum, RotationOrTranslationTypeEnum, StabilityTypeEnum } from '@enums/spineMRT/bones';
import { BonesFindingUiModel } from '@models/spineMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-c0',
  templateUrl: './c0.component.html',
  styleUrls: ['./c0.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class C0Component {
  @Input() model: BonesFindingUiModel;

  c0StabilityTypeEnum = C0StabilityTypeEnum;
  rotationOrTranslationTypeEnum = RotationOrTranslationTypeEnum;
  noSpecTypeEnum = NoSpecTypeEnum;
}
