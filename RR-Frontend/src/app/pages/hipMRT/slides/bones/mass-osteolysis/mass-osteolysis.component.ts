import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { HipBonesLocalizerElementsEnum } from '@enums/hipMRT/bones';
import { IHipLocalizerEventEmitter } from '@interfaces/pages/hipMRT/bones/hip-localizer-event-emitter';
import { BonesFindingUiModel } from '@models/hipMRT/ui/bones/bones-finding-ui.model';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { BonesPresetsHttpService } from '@services/hipMRT/http/bones/bones-presets-http.service';

@Component({
  selector: 'rr-mass-osteolysis',
  templateUrl: './mass-osteolysis.component.html',
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: BonesPresetsHttpService
    }
  ],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MassOsteolysisComponent {
  @Input() model: BonesFindingUiModel;
  @Input() isContrastEnhanced: boolean;

  @Output() emitLocalizer = new EventEmitter<IHipLocalizerEventEmitter>();

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
      isExpansion: false
    });
  }
}
