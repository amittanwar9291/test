import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { BonesLocalizerElementsEnum } from '@enums/pelvisMRT/bones/bones-localizer-elements.enum';
import { TbmeDifferentialDiagnosisTypeEnum } from '@enums/pelvisMRT/bones/transient-bone-marrow-edema';
import { BonesFindingUiModel } from '@models/pelvisMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-transient-bone-marrow-edema',
  templateUrl: './transient-bone-marrow-edema.component.html',
  styleUrls: ['./../bones.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TransientBoneMarrowEdemaComponent implements OnInit {
  @Input() model: BonesFindingUiModel;
  @Output() emitLocalizer = new EventEmitter<{
    elem: BonesLocalizerElementsEnum[];
    isExpansion: boolean;
  }>();

  tbmeDifferentialDiagnosisType: typeof TbmeDifferentialDiagnosisTypeEnum;

  constructor() {
    this.initializeEnums();
  }

  ngOnInit() {
    this.model.isTbmeBoneMarrowEdema = true;
    this.model.isAbsentSubchondralLesion = true;
  }

  initializeEnums(): void {
    this.tbmeDifferentialDiagnosisType = TbmeDifferentialDiagnosisTypeEnum;
  }

  openLargeLocalizer(): void {
    this.emitLocalizer.emit({
      elem: [
        BonesLocalizerElementsEnum.RightFemoralHead,
        BonesLocalizerElementsEnum.LeftFemoralHead,
        BonesLocalizerElementsEnum.RightFemoralNeck,
        BonesLocalizerElementsEnum.LeftFemoralNeck
      ],
      isExpansion: false
    });
  }
}
