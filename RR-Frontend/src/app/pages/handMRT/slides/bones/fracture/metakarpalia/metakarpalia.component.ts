import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FractureClassificationTypeEnum, FractureFormNotSpecifiedTypeEnum, FractureFormTypeEnum } from '@enums/handMRT/bones';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { BonesFindingUiModel } from '@models/handMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-metakarpalia',
  templateUrl: './metakarpalia.component.html',
  styleUrls: ['./metakarpalia.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MetakarpaliaComponent {
  @Input() model: BonesFindingUiModel;

  fractureClassificationTypeEnum = FractureClassificationTypeEnum;
  fractureFormTypeEnum = FractureFormTypeEnum;
  fractureFormNotSpecifiedTypeEnum = FractureFormNotSpecifiedTypeEnum;

  constructor(private enumMapper: EnumMapper) {}

  clearDetails(value: FractureClassificationTypeEnum) {
    return this.model.fractureClassificationType !== value ? 'fractureClassificationType-details' : '';
  }

  formatMetacarpalLabel(label: string): string {
    return label.replace('X', this.enumMapper.mapToString(this.model.involvedBonesLocalizer)[1]);
  }
}
