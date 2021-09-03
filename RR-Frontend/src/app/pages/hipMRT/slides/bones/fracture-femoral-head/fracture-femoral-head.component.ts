import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { IHipLocalizerEventEmitter } from '@interfaces/pages/hipMRT/bones/hip-localizer-event-emitter';
import { BonesFindingUiModel } from '@models/hipMRT/ui/bones/bones-finding-ui.model';
import {
  HipBonesLocalizerElementsEnum,
  FractureSpecificationTypeEnum,
  Fracture31C1TypeEnum,
  Fracture31C2TypeEnum,
  Fracture31CTypeEnum,
  FractureAO31CClassificationTypeEnum
} from '@enums/hipMRT/bones';
@Component({
  selector: 'rr-fracture-femoral-head',
  templateUrl: './fracture-femoral-head.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FractureFemoralHeadComponent {
  @Input() model: BonesFindingUiModel;

  @Output() emitLocalizer = new EventEmitter<IHipLocalizerEventEmitter>();

  fractureSpecificationType = FractureSpecificationTypeEnum;
  fractureAO31CClassificationType = FractureAO31CClassificationTypeEnum;
  fracture31CType = Fracture31CTypeEnum;
  fracture31C1Type = Fracture31C1TypeEnum;
  fracture31C2Type = Fracture31C2TypeEnum;

  openLargeLocalizer(): void {
    this.emitLocalizer.emit({
      elem: [HipBonesLocalizerElementsEnum.leftFemoralHead, HipBonesLocalizerElementsEnum.rightFemoralHead],
      isExpansion: false
    });
  }
}
