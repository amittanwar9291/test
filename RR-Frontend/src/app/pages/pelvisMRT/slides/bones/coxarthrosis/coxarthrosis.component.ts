import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { BonesLocalizerElementsEnum } from '@enums/pelvisMRT/bones/bones-localizer-elements.enum';
import { BonesFindingUiModel } from '@models/pelvisMRT/ui/bones/bones-finding-ui.model';
import { ChondropathyIntensityTypeEnum, ExpansionTypeEnum, IntensityTypeEnum } from '@enums/pelvisMRT/bones/coxarthrosis';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

@Component({
  selector: 'rr-coxarthrosis',
  templateUrl: './coxarthrosis.component.html',
  styleUrls: ['./../bones.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CoxarthrosisComponent {
  @Input() model: BonesFindingUiModel;
  @Input() technologyModel: TechnologyUiModel;
  @Output() emitLocalizer = new EventEmitter<{
    elem: BonesLocalizerElementsEnum[];
    isExpansion: boolean;
  }>();

  chondropathyIntensityType: typeof ChondropathyIntensityTypeEnum;
  expansionType: typeof ExpansionTypeEnum;
  intensityType: typeof IntensityTypeEnum;
  simpleAnswer: typeof SimpleAnswerEnum;

  constructor() {
    this.initializeEnums();
  }

  initializeEnums(): void {
    this.chondropathyIntensityType = ChondropathyIntensityTypeEnum;
    this.expansionType = ExpansionTypeEnum;
    this.intensityType = IntensityTypeEnum;
    this.simpleAnswer = SimpleAnswerEnum;
  }

  openLargeLocalizer(): void {
    this.emitLocalizer.emit({
      elem: [
        BonesLocalizerElementsEnum.RightAcetabulum,
        BonesLocalizerElementsEnum.LeftAcetabulum,
        BonesLocalizerElementsEnum.RightFemoralHead,
        BonesLocalizerElementsEnum.LeftFemoralHead
      ],
      isExpansion: false
    });
  }
}
