import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DistalTibiaFractureTypeEnum, FractureClassificationTypeEnum, FractureTypeTypeEnum } from '@enums/feetMRT/bones/fracture';
import { BonesFindingUiModel } from '@models/feetMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-phalanx',
  templateUrl: './phalanx.component.html',
  styleUrls: ['./phalanx.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PhalanxComponent {
  @Input() model: BonesFindingUiModel;

  fractureTypeType: typeof FractureTypeTypeEnum;
  distalTibiaFractureType: typeof DistalTibiaFractureTypeEnum;
  fractureClassificationType: typeof FractureClassificationTypeEnum;

  constructor() {
    this.initializeEnums();
  }

  private initializeEnums() {
    this.fractureTypeType = FractureTypeTypeEnum;
    this.distalTibiaFractureType = DistalTibiaFractureTypeEnum;
    this.fractureClassificationType = FractureClassificationTypeEnum;
  }

  addAreaNumberToLabel(label: string): string {
    const { threeDimensionalLocalization } = this.model;
    const area = Object.keys(threeDimensionalLocalization).filter(key => threeDimensionalLocalization[key])[0];

    label = label.replace('X', area.substr(area.length - 1));

    if (area.startsWith('proximal')) {
      label = label.replace('Y', '1');
    }
    if (area.startsWith('middle')) {
      label = label.replace('Y', '2');
    }
    if (area.startsWith('distal')) {
      label = label.replace('Y', '3');
    }

    return label;
  }

  fractureTypeHeaderShown(): boolean {
    const condition1 = ![
      this.fractureClassificationType.None,
      this.fractureClassificationType.ProximalePhalanxFractureNotFurtherSpecified,
      this.fractureClassificationType.DistalEndSegment883
    ].includes(this.model.fractureClassificationType);
    const condition2 =
      this.model.fractureClassificationType === this.fractureClassificationType.DistalEndSegment883 && this.noDistalSelectedOnLocalizer();
    return condition1 || condition2;
  }

  noDistalSelectedOnLocalizer(): boolean {
    return (
      !this.model.threeDimensionalLocalization.distalPhalanxD1 &&
      !this.model.threeDimensionalLocalization.distalPhalanxD2 &&
      !this.model.threeDimensionalLocalization.distalPhalanxD3 &&
      !this.model.threeDimensionalLocalization.distalPhalanxD4 &&
      !this.model.threeDimensionalLocalization.distalPhalanxD5
    );
  }
}
