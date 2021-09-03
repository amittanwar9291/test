import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  C3FractureFormTypeEnum,
  C3FractureTypeEnum,
  DifferentialDiagnosisTypeEnum,
  NoSpecTypeEnum,
  ValuationOfFractureTypeEnum
} from '@enums/spineMRT/bones';
import { BonesFindingUiModel } from '@models/spineMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-other-parts',
  templateUrl: './other-parts.component.html',
  styleUrls: ['./other-parts.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OtherPartsComponent {
  @Input() model: BonesFindingUiModel;
  @Input() currentSelected: string;

  c3FractureTypeEnum = C3FractureTypeEnum;
  c3FractureFormTypeEnum = C3FractureFormTypeEnum;
  valuationOfFractureTypeEnum = ValuationOfFractureTypeEnum;
  differentialDiagnosisTypeEnum = DifferentialDiagnosisTypeEnum;
  noSpecTypeEnum = NoSpecTypeEnum;

  convertSelectedPart(): string {
    switch (this.currentSelected.charAt(0)) {
      case 'C':
        return this.currentSelected;
      case 'T':
        return 'BWS';
      case 'L':
        return 'LWS';
      default:
        return '';
    }
  }

  resetOnValuationChange(value: ValuationOfFractureTypeEnum): string {
    return value !== this.model.valuationOfFractureType ? 'c3FractureFormType-block' : '';
  }
}
