import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { HipBonesLocalizerElementsEnum, OsteomyelitisDifferentialDiagnosisTypeEnum, StageTypeEnum } from '@enums/hipMRT/bones';
import { IHipLocalizerEventEmitter } from '@interfaces/pages/hipMRT/bones/hip-localizer-event-emitter';
import { BonesFindingUiModel } from '@models/hipMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-osteomyelitis',
  templateUrl: './osteomyelitis.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OsteomyelitisComponent {
  @Input() model: BonesFindingUiModel;
  @Input() isContrastEnhanced: boolean;

  @Output() emitLocalizer = new EventEmitter<IHipLocalizerEventEmitter>();

  stageType = StageTypeEnum;
  osteomyelitisDifferentialDiagnosisType = OsteomyelitisDifferentialDiagnosisTypeEnum;

  openLargeLocalizer(): void {
    this.emitLocalizer.emit({
      elem: [
        HipBonesLocalizerElementsEnum.rightOsIlium,
        HipBonesLocalizerElementsEnum.rightOsPubis,
        HipBonesLocalizerElementsEnum.rightOsIschium,
        HipBonesLocalizerElementsEnum.rightAcetabulum,
        HipBonesLocalizerElementsEnum.rightFemoralHead,
        HipBonesLocalizerElementsEnum.rightFemoralNeck,
        HipBonesLocalizerElementsEnum.rightFemoralShaft,
        HipBonesLocalizerElementsEnum.leftOsIlium,
        HipBonesLocalizerElementsEnum.leftOsPubis,
        HipBonesLocalizerElementsEnum.leftOsIschium,
        HipBonesLocalizerElementsEnum.leftAcetabulum,
        HipBonesLocalizerElementsEnum.leftFemoralHead,
        HipBonesLocalizerElementsEnum.leftFemoralNeck,
        HipBonesLocalizerElementsEnum.leftFemoralShaft
      ],
      isExpansion: true
    });
  }

  resetRelevantAbscessValues(): void {
    if (this.model.abscessSizeInMm === null) {
      this.model.abscessSecondSizeInMm = null;
      this.model.abscessThirdSizeInMm = null;
    } else if (this.model.abscessSecondSizeInMm === null) {
      this.model.abscessThirdSizeInMm = null;
    }
  }

  resetRelevantSequesterValues(): void {
    if (this.model.sequesterSizeInMm === null) {
      this.model.sequesterSecondSizeInMm = null;
      this.model.sequesterThirdSizeInMm = null;
    } else if (this.model.sequesterSecondSizeInMm === null) {
      this.model.sequesterThirdSizeInMm = null;
    }
  }

  resetIsSecondary(): void {
    this.model.isSecondary = false;
  }
}
