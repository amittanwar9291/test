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
  selector: 'rr-diaphyseal-ulna',
  templateUrl: './diaphyseal-ulna.component.html',
  styleUrls: ['./diaphyseal-ulna.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DiaphysealUlnaComponent {
  @Input() model: BonesFindingUiModel;

  aoClassificationTypeEnum = AoClassificationTypeEnum;
  notFurtherSpecifiedTypeEnum = NotFurtherSpecifiedTypeEnum;
  fractureFormTypeEnum = FractureFormTypeEnum;
  localizationLongitudinalTypeEnum = LocalizationLongitudinalTypeEnum;

  clearAOClassificationTypeDetails(value: AoClassificationTypeEnum): string {
    return this.model.aoClassificationType !== value ? 'aoClassificationTypeDetails-block UlnarShaftFracture-block' : '';
  }
}
