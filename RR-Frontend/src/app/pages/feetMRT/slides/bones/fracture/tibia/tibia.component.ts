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
  selector: 'rr-tibia',
  templateUrl: './tibia.component.html',
  styleUrls: ['./tibia.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TibiaComponent {
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

  clearFractureFormSubTypeBooleans() {
    this.model.isAnterior = false;
    this.model.isPosteriorVolkmann = false;
    this.model.isLateral = false;
    this.model.isMedArticularSurfaceInclMedMalleolus = false;
    this.model.isMedial = false;
    this.model.isFrontalCoronal = false;
    this.model.isSagittalPlane = false;
  }

  clearFractureTypeSubType() {
    this.model.fractureFormSubType = FractureFormSubTypeEnum.None;
    this.clearFractureFormSubTypeBooleans();
  }

  clearFractureForm() {
    this.model.fractureTypeType = FractureTypeTypeEnum.None;
    this.clearFractureTypeSubType();
  }

  isFractureClassificatioNotFurtherOrNone(): boolean {
    return [this.fractureClassificationType.DistalTibiaFractureNotFurtherSpecified, this.fractureClassificationType.None].includes(
      this.model.fractureClassificationType
    );
  }
}
