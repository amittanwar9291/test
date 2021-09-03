import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { BonesLocalizerElementsEnum } from '@enums/pelvisMRT/bones/bones-localizer-elements.enum';
import { BonesFindingUiModel } from '@models/pelvisMRT/ui/bones/bones-finding-ui.model';
import {
  FbClassificationTypeEnum,
  FbFractureFormA1SubTypeEnum,
  FbFractureFormA2SubTypeEnum,
  FbFractureFormA3SubTypeEnum,
  FbFractureFormATypeEnum,
  FbFractureFormB1SubTypeEnum,
  FbFractureFormB2SubTypeEnum,
  FbFractureFormB3SubTypeEnum,
  FbFractureFormBTypeEnum,
  FbFractureFormC1SubTypeEnum,
  FbFractureFormC2SubTypeEnum,
  FbFractureFormC3SubTypeEnum,
  FbFractureFormCTypeEnum
} from '@enums/pelvisMRT/bones/fracture-pelvis';
import { NotFurtherSpecifiedTypeEnum } from '@enums/pelvisMRT/bones';

@Component({
  selector: 'rr-fracture-pelvis',
  templateUrl: './fracture-pelvis.component.html',
  styleUrls: ['./../bones.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class FracturePelvisComponent {
  @Input() model: BonesFindingUiModel;

  @Output() emitLocalizer = new EventEmitter<{
    elem: BonesLocalizerElementsEnum[];
    isExpansion: boolean;
  }>();

  fbClassificationType = FbClassificationTypeEnum;
  pelvicFractureNotFurtherSpecifiedType = NotFurtherSpecifiedTypeEnum;
  fbFractureFormAType = FbFractureFormATypeEnum;
  fbFractureFormBType = FbFractureFormBTypeEnum;
  fbFractureFormCType = FbFractureFormCTypeEnum;
  fbFractureFormA1SubType = FbFractureFormA1SubTypeEnum;
  fbFractureFormA2SubType = FbFractureFormA2SubTypeEnum;
  fbFractureFormA3SubType = FbFractureFormA3SubTypeEnum;
  fbFractureFormB1SubType = FbFractureFormB1SubTypeEnum;
  fbFractureFormB2SubType = FbFractureFormB2SubTypeEnum;
  fbFractureFormB3SubType = FbFractureFormB3SubTypeEnum;
  fbFractureFormC1SubType = FbFractureFormC1SubTypeEnum;
  fbFractureFormC2SubType = FbFractureFormC2SubTypeEnum;
  fbFractureFormC3SubType = FbFractureFormC3SubTypeEnum;

  isFractureFormAvailable(): boolean {
    return ![this.fbClassificationType.None, this.fbClassificationType.PelvicFractureNotFurther].includes(this.model.fbClassificationType);
  }

  openLargeLocalizer(): void {
    this.emitLocalizer.emit({
      elem: [
        BonesLocalizerElementsEnum.LeftOsIlium,
        BonesLocalizerElementsEnum.LeftOsPubis,
        BonesLocalizerElementsEnum.LeftOsIschium,
        BonesLocalizerElementsEnum.RightOsIlium,
        BonesLocalizerElementsEnum.RightOsPubis,
        BonesLocalizerElementsEnum.RightOsIschium
      ],
      isExpansion: true
    });
  }
}
