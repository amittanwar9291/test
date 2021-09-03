import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm, ControlContainer } from '@angular/forms';

import { BonesFindingUiModel } from '@models/pelvisMRT/ui/bones/bones-finding-ui.model';
import { BonesLocalizerElementsEnum } from '@enums/pelvisMRT/bones/bones-localizer-elements.enum';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

@Component({
  selector: 'rr-subchondral-insufficiency-fracture',
  templateUrl: './subchondral-insufficiency-fracture.component.html',
  styleUrls: ['./../bones.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SubchondralInsufficiencyFractureComponent {
  @Input() model: BonesFindingUiModel;
  @Input() technologyModel: TechnologyUiModel;
  @Output() emitLocalizer = new EventEmitter<{
    elem: BonesLocalizerElementsEnum[];
    isExpansion: boolean;
  }>();
  simpleAnswer: typeof SimpleAnswerEnum;

  constructor() {
    this.simpleAnswer = SimpleAnswerEnum;
  }

  openLargeLocalizer(): void {
    this.emitLocalizer.emit({
      elem: [BonesLocalizerElementsEnum.RightFemoralHead, BonesLocalizerElementsEnum.LeftFemoralHead],
      isExpansion: false
    });
  }
}
