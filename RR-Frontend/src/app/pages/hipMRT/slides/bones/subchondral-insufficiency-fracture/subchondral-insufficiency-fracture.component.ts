import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BonesFindingUiModel } from '@models/hipMRT/ui/bones/bones-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { IHipLocalizerEventEmitter } from '@interfaces/pages/hipMRT/bones/hip-localizer-event-emitter';
import { HipBonesLocalizerElementsEnum } from '@enums/hipMRT/bones';

@Component({
  selector: 'rr-subchondral-insufficiency-fracture',
  templateUrl: './subchondral-insufficiency-fracture.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SubchondralInsufficiencyFractureComponent {
  @Input() model: BonesFindingUiModel;
  @Input() isContrastEnhanced: boolean;

  @Output() emitLocalizer = new EventEmitter<IHipLocalizerEventEmitter>();

  openLargeLocalizer(): void {
    this.emitLocalizer.emit({
      elem: [HipBonesLocalizerElementsEnum.rightFemoralHead, HipBonesLocalizerElementsEnum.leftFemoralHead],
      isExpansion: false
    });
  }
}
