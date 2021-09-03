import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesFindingUiModel } from '@models/hipMRT/ui/bones/bones-finding-ui.model';
import { AcetabulumTypeEnum, AlignmentTypeEnum, PositioningTypeEnum } from '@enums/hipMRT/bones';

@Component({
  selector: 'rr-alignment',
  templateUrl: './alignment.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AlignmentComponent {
  @Input() model: BonesFindingUiModel;

  acetabulumType = AcetabulumTypeEnum;
  alignmentType = AlignmentTypeEnum;
  positioningType = PositioningTypeEnum;

  get isAlignmentTypePathology(): boolean {
    return this.model.alignmentType === AlignmentTypeEnum.Pathology;
  }
}
