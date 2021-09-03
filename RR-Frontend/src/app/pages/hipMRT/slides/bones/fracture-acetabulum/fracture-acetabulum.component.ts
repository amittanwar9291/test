import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { IHipLocalizerEventEmitter } from '@interfaces/pages/hipMRT/bones/hip-localizer-event-emitter';
import { BonesFindingUiModel } from '@models/hipMRT/ui/bones/bones-finding-ui.model';
import {
  HipBonesLocalizerElementsEnum,
  FractureSpecificationTypeEnum,
  Fracture62A1TypeEnum,
  Fracture62A2TypeEnum,
  Fracture62A3TypeEnum,
  Fracture62ATypeEnum,
  Fracture62B1TypeEnum,
  Fracture62B2TypeEnum,
  Fracture62B3TypeEnum,
  Fracture62BTypeEnum,
  Fracture62CTypeEnum,
  FractureAO62ClassificationTypeEnum
} from '@enums/hipMRT/bones';
@Component({
  selector: 'rr-fracture-acetabulum',
  templateUrl: './fracture-acetabulum.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FractureAcetabulumComponent {
  @Input() model: BonesFindingUiModel;

  @Output() emitLocalizer = new EventEmitter<IHipLocalizerEventEmitter>();

  fractureSpecificationType = FractureSpecificationTypeEnum;
  fractureAO62ClassificationType = FractureAO62ClassificationTypeEnum;
  fracture62AType = Fracture62ATypeEnum;
  fracture62A1Type = Fracture62A1TypeEnum;
  fracture62A2Type = Fracture62A2TypeEnum;
  fracture62A3Type = Fracture62A3TypeEnum;
  fracture62BType = Fracture62BTypeEnum;
  fracture62B1Type = Fracture62B1TypeEnum;
  fracture62B2Type = Fracture62B2TypeEnum;
  fracture62B3Type = Fracture62B3TypeEnum;
  fracture62CType = Fracture62CTypeEnum;

  openLargeLocalizer(): void {
    this.emitLocalizer.emit({
      elem: [HipBonesLocalizerElementsEnum.leftAcetabulum, HipBonesLocalizerElementsEnum.rightAcetabulum],
      isExpansion: false
    });
  }

  get isFractAO62NotFurtherOrNone(): boolean {
    return (
      this.model.fractureAO62ClassificationType === FractureAO62ClassificationTypeEnum.NotFurtherSpecified ||
      this.model.fractureAO62ClassificationType === FractureAO62ClassificationTypeEnum.None
    );
  }

  get isFr62AFr62BNoneOrFrAO62OfBoth(): boolean {
    return (
      (this.model.fracture62AType === Fracture62ATypeEnum.None && this.model.fracture62BType === Fracture62BTypeEnum.None) ||
      this.model.fractureAO62ClassificationType === FractureAO62ClassificationTypeEnum.FractureOfBoth
    );
  }
}
