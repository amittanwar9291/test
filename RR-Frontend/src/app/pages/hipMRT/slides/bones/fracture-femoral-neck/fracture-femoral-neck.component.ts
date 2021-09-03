import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { IHipLocalizerEventEmitter } from '@interfaces/pages/hipMRT/bones/hip-localizer-event-emitter';
import { BonesFindingUiModel } from '@models/hipMRT/ui/bones/bones-finding-ui.model';
import {
  HipBonesLocalizerElementsEnum,
  FractureSpecificationTypeEnum,
  Fracture31B1TypeEnum,
  Fracture31B2TypeEnum,
  Fracture31BTypeEnum,
  FractureAO31BClassificationTypeEnum,
  ShearFractureTypeEnum
} from '@enums/hipMRT/bones';
@Component({
  selector: 'rr-fracture-femoral-neck',
  templateUrl: './fracture-femoral-neck.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FractureFemoralNeckComponent {
  @Input() model: BonesFindingUiModel;

  @Output() emitLocalizer = new EventEmitter<IHipLocalizerEventEmitter>();

  fractureSpecificationType = FractureSpecificationTypeEnum;
  fractureAO31BClassificationType = FractureAO31BClassificationTypeEnum;
  fracture31BType = Fracture31BTypeEnum;
  fracture31B1Type = Fracture31B1TypeEnum;
  fracture31B2Type = Fracture31B2TypeEnum;
  shearFractureType = ShearFractureTypeEnum;

  openLargeLocalizer(): void {
    this.emitLocalizer.emit({
      elem: [HipBonesLocalizerElementsEnum.leftFemoralNeck, HipBonesLocalizerElementsEnum.rightFemoralNeck],
      isExpansion: false
    });
  }

  get isFractAO31FemNeckAndFract31BTypeBasicOrNone(): boolean {
    return (
      this.model.fractureAO31BClassificationType === FractureAO31BClassificationTypeEnum.FemoralNeckFracture &&
      this.model.fracture31BType !== Fracture31BTypeEnum.None &&
      this.model.fracture31BType !== Fracture31BTypeEnum.Basicervical
    );
  }
}
