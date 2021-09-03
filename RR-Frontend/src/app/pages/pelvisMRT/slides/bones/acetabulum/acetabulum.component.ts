import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesLocalizerElementsEnum } from '@enums/pelvisMRT/bones/bones-localizer-elements.enum';
import { BonesFindingUiModel } from '@models/pelvisMRT/ui/bones/bones-finding-ui.model';
import {
  FaClassificationTypeEnum,
  FractureBothColumnsCompleteJointInvolvementTypeEnum,
  FractureWallPartialJointInvolvementEnum,
  TransverseFracturePartialJointInvolvementTypeEnum
} from '@enums/pelvisMRT/bones/fracture-acetabulum';
import { NotFurtherSpecifiedTypeEnum } from '@enums/pelvisMRT/bones';

@Component({
  selector: 'rr-acetabulum',
  templateUrl: './acetabulum.component.html',
  styleUrls: ['./../bones.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AcetabulumComponent {
  @Input() model: BonesFindingUiModel;

  @Output() emitLocalizer = new EventEmitter<{
    elem: BonesLocalizerElementsEnum[];
    isExpansion: boolean;
  }>();

  faClassificationType: typeof FaClassificationTypeEnum;
  fractureWallPartialJointInvolvement: typeof FractureWallPartialJointInvolvementEnum;
  transverseFracturePartialJointInvolvementType: typeof TransverseFracturePartialJointInvolvementTypeEnum;
  fractureBothColumnsCompleteJointInvolvementType: typeof FractureBothColumnsCompleteJointInvolvementTypeEnum;
  acetabularFractureNotFurtherSpecifiedType: typeof NotFurtherSpecifiedTypeEnum;

  constructor() {
    this.faClassificationType = FaClassificationTypeEnum;
    this.fractureWallPartialJointInvolvement = FractureWallPartialJointInvolvementEnum;
    this.transverseFracturePartialJointInvolvementType = TransverseFracturePartialJointInvolvementTypeEnum;
    this.fractureBothColumnsCompleteJointInvolvementType = FractureBothColumnsCompleteJointInvolvementTypeEnum;
    this.acetabularFractureNotFurtherSpecifiedType = NotFurtherSpecifiedTypeEnum;
  }

  openLargeLocalizer(): void {
    this.emitLocalizer.emit({
      elem: [BonesLocalizerElementsEnum.LeftAcetabulum, BonesLocalizerElementsEnum.RightAcetabulum],
      isExpansion: false
    });
  }
}
