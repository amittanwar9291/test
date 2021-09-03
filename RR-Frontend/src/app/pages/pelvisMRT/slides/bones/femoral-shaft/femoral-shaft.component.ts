import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { BonesFindingUiModel } from '@models/pelvisMRT/ui/bones/bones-finding-ui.model';

import { BonesLocalizerElementsEnum } from '@enums/pelvisMRT/bones/bones-localizer-elements.enum';
import {
  FfsFractureFormTypeEnum,
  FfsLocalizationTypeEnum,
  SimpleFractureTypeEnum,
  WedgeFractureTypeEnum,
  MultiFragmentaryFractureTypeEnum
} from '@enums/pelvisMRT/bones/fracture-femoral-shaft';
import { NotFurtherSpecifiedTypeEnum } from '@enums/pelvisMRT/bones';

@Component({
  selector: 'rr-femoral-shaft',
  templateUrl: './femoral-shaft.component.html',
  styleUrls: ['./femoral-shaft.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FemoralShaftComponent {
  @Input() model: BonesFindingUiModel;

  @Output() emitLocalizer = new EventEmitter<{
    elem: BonesLocalizerElementsEnum[];
    isExpansion: boolean;
  }>();

  ffsLocalizationType: typeof FfsLocalizationTypeEnum;
  ffsFractureFormType: typeof FfsFractureFormTypeEnum;
  simpleFractureType: typeof SimpleFractureTypeEnum;
  wedgeFractureType: typeof WedgeFractureTypeEnum;
  multiFragmentaryFractureType: typeof MultiFragmentaryFractureTypeEnum;
  fsfNotFurtherSpecifiedType: typeof NotFurtherSpecifiedTypeEnum;

  constructor() {
    this.ffsLocalizationType = FfsLocalizationTypeEnum;
    this.ffsFractureFormType = FfsFractureFormTypeEnum;
    this.simpleFractureType = SimpleFractureTypeEnum;
    this.wedgeFractureType = WedgeFractureTypeEnum;
    this.multiFragmentaryFractureType = MultiFragmentaryFractureTypeEnum;
    this.fsfNotFurtherSpecifiedType = NotFurtherSpecifiedTypeEnum;
  }

  openLargeLocalizer(): void {
    this.emitLocalizer.emit({
      elem: [BonesLocalizerElementsEnum.LeftFemoralShaft, BonesLocalizerElementsEnum.RightFemoralShaft],
      isExpansion: false
    });
  }
}
