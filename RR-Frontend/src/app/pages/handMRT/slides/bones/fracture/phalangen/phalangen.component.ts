import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FractureClassificationTypeEnum, FractureFormNotSpecifiedTypeEnum, FractureFormTypeEnum } from '@enums/handMRT/bones';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { BonesFindingUiModel } from '@models/handMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-phalangen',
  templateUrl: './phalangen.component.html',
  styleUrls: ['./phalangen.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PhalangenComponent {
  @Input() model: BonesFindingUiModel;

  fractureClassificationTypeEnum = FractureClassificationTypeEnum;
  fractureFormTypeEnum = FractureFormTypeEnum;
  fractureFormNotSpecifiedTypeEnum = FractureFormNotSpecifiedTypeEnum;

  constructor(private enumMapper: EnumMapper) {}

  clearDetails(value: FractureClassificationTypeEnum) {
    return this.model.fractureClassificationType !== value ? 'fractureClassificationType-details' : '';
  }

  formatPhalanxLabel(label: string): string {
    const selectedLocalization = this.enumMapper.mapToString(this.model.involvedBonesLocalizer);
    let newLabel = '';
    if (selectedLocalization.includes('Proximal')) {
      newLabel = label.replace('Y', '1');
    }
    if (selectedLocalization.includes('Middle')) {
      newLabel = label.replace('Y', '2');
    }
    if (selectedLocalization.includes('Distal')) {
      newLabel = label.replace('Y', '3');
    }
    newLabel = newLabel.replace('X', selectedLocalization[1]);
    return newLabel;
  }
}
