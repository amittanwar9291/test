import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { C0StabilityTypeEnum } from '@enums/spineCT/bones/fracture/c0/c0Stability-type.enum';
import { RotationOrTranslationTypeEnum } from '@enums/spineCT/bones/fracture/c0/rotation-or-translation-type.enum';
import { NoFutherDefinedType } from '@enums/spineCT/bones/fracture/no-futher-defined-type.enum';

import { BonesFindingUiModel } from '@models/spineCT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-fracture-c0',
  templateUrl: './fracture-c0.component.html',
  styleUrls: ['../fracture.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FractureC0Component {
  @Input() model: BonesFindingUiModel;

  c0StabilityTypeEnum = C0StabilityTypeEnum;
  rotationOrTranslationTypeEnum = RotationOrTranslationTypeEnum;
  noFutherDefinedTypeEnum = NoFutherDefinedType;
}
