import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { IHipLocalizerEventEmitter } from '@interfaces/pages/hipMRT/bones/hip-localizer-event-emitter';
import { BonesFindingUiModel } from '@models/hipMRT/ui/bones/bones-finding-ui.model';
import {
  HipBonesLocalizerElementsEnum,
  FractureSpecificationTypeEnum,
  Fracture31A1TypeEnum,
  Fracture31A2TypeEnum,
  Fracture31A3TypeEnum,
  Fracture31ATypeEnum,
  Fracture32ATypeEnum,
  Fracture32BTypeEnum,
  Fracture32CTypeEnum,
  Fracture32TypeEnum,
  FractureAO31A32ClassificationTypeEnum,
  TrochantericAvulsionTearTypeEnum
} from '@enums/hipMRT/bones';

@Component({
  selector: 'rr-fracture-femoral-shaft',
  templateUrl: './fracture-femoral-shaft.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FractureFemoralShaftComponent {
  @Input() model: BonesFindingUiModel;

  @Output() emitLocalizer = new EventEmitter<IHipLocalizerEventEmitter>();

  fractureClassificationType = FractureAO31A32ClassificationTypeEnum;
  fracture32Type = Fracture32TypeEnum;
  fracture32AType = Fracture32ATypeEnum;
  fracture32BType = Fracture32BTypeEnum;
  fracture32CType = Fracture32CTypeEnum;
  fracture31AType = Fracture31ATypeEnum;
  fracture31A1Type = Fracture31A1TypeEnum;
  trochantericAvulsionTearType = TrochantericAvulsionTearTypeEnum;
  fracture31A2Type = Fracture31A2TypeEnum;
  fracture31A3Type = Fracture31A3TypeEnum;
  fractureSpecificationType = FractureSpecificationTypeEnum;

  openLargeLocalizer(): void {
    this.emitLocalizer.emit({
      elem: [HipBonesLocalizerElementsEnum.leftFemoralShaft, HipBonesLocalizerElementsEnum.rightFemoralShaft],
      isExpansion: false
    });
  }

  get isFemoralShaftOrTrochantericRegion(): boolean {
    return (
      this.model.fractureClassificationType === FractureAO31A32ClassificationTypeEnum.TrochantericRegion ||
      this.model.fractureClassificationType === FractureAO31A32ClassificationTypeEnum.FemoralShaft
    );
  }

  get isFracture32NoneAndFracture31ANone(): boolean {
    return this.model.fracture32Type === Fracture32TypeEnum.None && this.model.fracture31AType === Fracture31ATypeEnum.None;
  }
}
