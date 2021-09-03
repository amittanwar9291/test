import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BonesFindingUiModel } from '@models/hipMRT/ui/bones/bones-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { IHipLocalizerEventEmitter } from '@interfaces/pages/hipMRT/bones/hip-localizer-event-emitter';
import {
  CoxarthrosisDifferentialDiagnosisTypeEnum,
  HipBonesLocalizerElementsEnum,
  StimulatedBoneMarrowTypeEnum
} from '@enums/hipMRT/bones';
@Component({
  selector: 'rr-transient-bone-marrow-edema',
  templateUrl: './transient-bone-marrow-edema.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TransientBoneMarrowEdemaComponent {
  @Input() model: BonesFindingUiModel;
  @Input() isContrastEnhanced: boolean;

  @Output() emitLocalizer = new EventEmitter<IHipLocalizerEventEmitter>();

  isSubchondralLesion = false;
  coxarthrosisDifferentialDiagnosisType = CoxarthrosisDifferentialDiagnosisTypeEnum;
  stimulatedBoneMarrowType = StimulatedBoneMarrowTypeEnum;

  openLargeLocalizer(): void {
    this.emitLocalizer.emit({
      elem: [
        HipBonesLocalizerElementsEnum.rightFemoralHead,
        HipBonesLocalizerElementsEnum.rightFemoralNeck,
        HipBonesLocalizerElementsEnum.leftFemoralHead,
        HipBonesLocalizerElementsEnum.leftFemoralNeck
      ],
      isExpansion: true
    });
  }
}
