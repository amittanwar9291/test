import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  AoClassificationTypeEnum,
  FractureFormTypeEnum,
  LocalizationLongitudinalTypeEnum,
  NotFurtherSpecifiedTypeEnum
} from '@enums/elbowMRT/bones';
import { BonesFindingUiModel } from '@models/elbowMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-diaphyseal-radius',
  templateUrl: './diaphyseal-radius.component.html',
  styleUrls: ['./diaphyseal-radius.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DiaphysealRadiusComponent {
  @Input() model: BonesFindingUiModel;

  aoClassificationTypeEnum = AoClassificationTypeEnum;
  notFurtherSpecifiedTypeEnum = NotFurtherSpecifiedTypeEnum;
  fractureFormTypeEnum = FractureFormTypeEnum;
  localizationLongitudinalTypeEnum = LocalizationLongitudinalTypeEnum;

  clearAOClassificationTypeDetails(value: AoClassificationTypeEnum): string {
    return this.model.aoClassificationType !== value ? 'aoClassificationTypeDetails-block RadialShaftFracture-block' : '';
  }
}
