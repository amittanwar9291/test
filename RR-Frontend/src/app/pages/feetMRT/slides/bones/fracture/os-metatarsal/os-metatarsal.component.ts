import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  DistalTibiaFractureTypeEnum,
  FractureClassificationTypeEnum,
  FractureFormSubTypeEnum,
  FractureTypeTypeEnum
} from '@enums/feetMRT/bones/fracture';
import { BonesFindingUiModel } from '@models/feetMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-os-metatarsal',
  templateUrl: './os-metatarsal.component.html',
  styleUrls: ['./os-metatarsal.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OsMetatarsalComponent {
  @Input() model: BonesFindingUiModel;

  fractureTypeType: typeof FractureTypeTypeEnum;
  fractureFormSubType: typeof FractureFormSubTypeEnum;
  distalTibiaFractureType: typeof DistalTibiaFractureTypeEnum;
  fractureClassificationType: typeof FractureClassificationTypeEnum;

  constructor() {
    this.initializeEnums();
  }

  private initializeEnums() {
    this.fractureTypeType = FractureTypeTypeEnum;
    this.fractureFormSubType = FractureFormSubTypeEnum;
    this.distalTibiaFractureType = DistalTibiaFractureTypeEnum;
    this.fractureClassificationType = FractureClassificationTypeEnum;
  }

  addAreaNumberToLabel(label: string): string {
    const { threeDimensionalLocalization } = this.model;
    const area = Object.keys(threeDimensionalLocalization).filter(key => threeDimensionalLocalization[key])[0];
    return label.replace('X', area.substr(area.length - 1));
  }

  isFormSubTypeVisible() {
    const allowedFractureClassification = [
      this.fractureClassificationType.ProximalEndSegment871,
      this.fractureClassificationType.DistalEndSegment873
    ];

    if (allowedFractureClassification.includes(this.model.fractureClassificationType)) {
      return this.model.fractureTypeType !== this.fractureTypeType.None;
    }

    return false;
  }
}
