import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { A0ClassificationTypeEnum } from '@enums/spineCT/bones/fracture/a0Classification-type.enum';
import { NoFutherDefinedType } from '@enums/spineCT/bones/fracture/no-futher-defined-type.enum';

import { BonesFindingUiModel } from '@models/spineCT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-fracture-os-coccygis',
  templateUrl: './fracture-os-coccygis.component.html',
  styleUrls: ['../fracture.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FractureOsCoccygisComponent {
  @Input() model: BonesFindingUiModel;

  a0ClassificationTypeEnum = A0ClassificationTypeEnum;
  noFutherDefinedTypeEnum = NoFutherDefinedType;

  clearCoccygisNoFutherDefinedType() {
    this.model.coccygisNoFutherDefinedType = NoFutherDefinedType.None;
  }
}
