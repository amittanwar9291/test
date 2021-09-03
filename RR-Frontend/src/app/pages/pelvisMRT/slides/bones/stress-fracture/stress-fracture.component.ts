import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm, ControlContainer } from '@angular/forms';
import { BonesFindingUiModel } from '@models/pelvisMRT/ui/bones/bones-finding-ui.model';
import { BonesLocalizerElementsEnum } from '@enums/pelvisMRT/bones/bones-localizer-elements.enum';
import {
  BoneWidthTypeEnum,
  LocalizationFemoralNeckTypeEnum,
  WideEdemaMeasurementCoronaryTypeEnum
} from '@enums/pelvisMRT/bones/stress-fracture';

@Component({
  selector: 'rr-stress-fracture',
  templateUrl: './stress-fracture.component.html',
  styleUrls: ['./../bones.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class StressFractureComponent {
  @Input() model: BonesFindingUiModel;
  @Output() emitLocalizer = new EventEmitter<{
    elem: BonesLocalizerElementsEnum[];
    isExpansion: boolean;
  }>();

  localizationFemoralNeckType: typeof LocalizationFemoralNeckTypeEnum;
  wideEdemaMeasurementCoronaryType: typeof WideEdemaMeasurementCoronaryTypeEnum;
  boneWidthType: typeof BoneWidthTypeEnum;

  constructor() {
    this.initializeEnums();
  }

  initializeEnums(): void {
    this.localizationFemoralNeckType = LocalizationFemoralNeckTypeEnum;
    this.wideEdemaMeasurementCoronaryType = WideEdemaMeasurementCoronaryTypeEnum;
    this.boneWidthType = BoneWidthTypeEnum;
  }

  openLargeLocalizer(): void {
    this.emitLocalizer.emit({
      elem: [
        BonesLocalizerElementsEnum.LeftFemoralShaft,
        BonesLocalizerElementsEnum.RightFemoralShaft,
        BonesLocalizerElementsEnum.LeftAcetabulum,
        BonesLocalizerElementsEnum.RightAcetabulum,
        BonesLocalizerElementsEnum.LeftFemoralNeck,
        BonesLocalizerElementsEnum.RightFemoralNeck,
        BonesLocalizerElementsEnum.RightFemoralHead,
        BonesLocalizerElementsEnum.LeftFemoralHead
      ],
      isExpansion: false
    });
  }

  isFemoralSelected(): boolean {
    return this.model.hipLocalizer.leftFemoralNeck || this.model.hipLocalizer.rightFemoralNeck;
  }
}
