import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { BonesFindingUiModel } from '@models/pelvisMRT/ui/bones/bones-finding-ui.model';

import { BonesLocalizerElementsEnum } from '@enums/pelvisMRT/bones/bones-localizer-elements.enum';
import * as enums from '@enums/pelvisMRT/bones/fracture-proximal-femur';
import * as enumsCommon from '@enums/pelvisMRT/bones';
@Component({
  selector: 'rr-proximal-femur',
  templateUrl: './proximal-femur.component.html',
  styleUrls: ['./proximal-femur.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ProximalFemurComponent {
  @Input() model: BonesFindingUiModel;

  @Output() emitLocalizer = new EventEmitter<{
    elem: BonesLocalizerElementsEnum[];
    isExpansion: boolean;
  }>();

  fpfClassificationType = enums.FpfClassificationTypeEnum;
  pffNotFurtherSpecifiedType = enumsCommon.NotFurtherSpecifiedTypeEnum;
  trochantericRegionFractureFormType = enums.TrochantericRegionFractureFormTypeEnum;
  simplePertrochantericType = enums.SimplePertrochantericTypeEnum;
  trochantericRuptureType = enums.TrochantericRuptureTypeEnum;
  multiFragmentalPertrochantericType = enums.MultiFragmentalPertrochantericTypeEnum;
  intertrochantericType = enums.IntertrochantericTypeEnum;
  femoralNeckFractureFormType = enums.FemoralNeckFractureFormTypeEnum;
  subcapitalType = enums.SubcapitalTypeEnum;
  transcervicalType = enums.TranscervicalTypeEnum;
  femoralHeadFractureFormType = enums.FemoralHeadFractureFormTypeEnum;
  shearFractureType = enums.ShearFractureTypeEnum;
  shearFractureAngleType = enums.ShearFractureAngleTypeEnum;
  depressionFractureType = enums.DepressionFractureTypeEnum;

  isFractureFormAvailable(): boolean {
    return ![this.fpfClassificationType.None, this.fpfClassificationType.ProximalFemurFractureNotSpecified].includes(
      this.model.fpfClassificationType
    );
  }

  isFemoralNeckFractureChosen(): boolean {
    return this.model.hipLocalizer.leftFemoralNeck || this.model.hipLocalizer.rightFemoralNeck;
  }

  isFemoralHeadFractureChosen(): boolean {
    return this.model.hipLocalizer.leftFemoralHead || this.model.hipLocalizer.rightFemoralHead;
  }

  openLargeLocalizer(): void {
    this.emitLocalizer.emit({
      elem: [
        BonesLocalizerElementsEnum.LeftFemoralNeck,
        BonesLocalizerElementsEnum.LeftFemoralHead,
        BonesLocalizerElementsEnum.RightFemoralNeck,
        BonesLocalizerElementsEnum.RightFemoralHead
      ],
      isExpansion: false
    });
  }
}
