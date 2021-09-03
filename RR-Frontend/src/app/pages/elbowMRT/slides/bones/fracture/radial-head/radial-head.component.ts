import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  AoClassificationTypeEnum,
  BonesClassificationTypeEnum,
  FractureFormTypeEnum,
  GraduationTypeEnum,
  NotFurtherSpecifiedTypeEnum
} from '@enums/elbowMRT/bones';
import { BonesFindingUiModel } from '@models/elbowMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-radial-head',
  templateUrl: './radial-head.component.html',
  styleUrls: ['./radial-head.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class RadialHeadComponent {
  @Input() model: BonesFindingUiModel;

  bonesClassificationTypeEnum = BonesClassificationTypeEnum;
  graduationTypeEnum = GraduationTypeEnum;
  aoClassificationTypeEnum = AoClassificationTypeEnum;
  notFurtherSpecifiedTypeEnum = NotFurtherSpecifiedTypeEnum;
  fractureFormTypeEnum = FractureFormTypeEnum;

  clearAOClassificationTypeDetails(value: AoClassificationTypeEnum): string {
    return this.model.aoClassificationType !== value ? 'RadialHeadFractureNotFurtherSpecified-block fractureFormType-block' : '';
  }
}
