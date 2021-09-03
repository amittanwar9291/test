import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DistalTibiaFractureTypeEnum, FractureClassificationTypeEnum, FractureTypeTypeEnum } from '@enums/feetMRT/bones/fracture';
import { BonesFindingUiModel } from '@models/feetMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-os-cuboideum',
  templateUrl: './os-cuboideum.component.html',
  styleUrls: ['./os-cuboideum.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OsCuboideumComponent implements OnInit {
  @Input() model: BonesFindingUiModel;

  fractureTypeType: typeof FractureTypeTypeEnum;
  distalTibiaFractureType: typeof DistalTibiaFractureTypeEnum;
  fractureClassificationType: typeof FractureClassificationTypeEnum;

  previouslySelectedFractureClassificationType: string;

  constructor() {
    this.initializeEnums();
  }

  ngOnInit(): void {
    this.previouslySelectedFractureClassificationType = this.model.fractureClassificationType;
  }

  private initializeEnums() {
    this.fractureTypeType = FractureTypeTypeEnum;
    this.distalTibiaFractureType = DistalTibiaFractureTypeEnum;
    this.fractureClassificationType = FractureClassificationTypeEnum;
  }

  isFractureFormGroupVisible(): boolean {
    return [
      this.fractureClassificationType.Avulsion84A,
      this.fractureClassificationType.PartialArticular84B,
      this.fractureClassificationType.CompleteArticular84C
    ].includes(this.model.fractureClassificationType);
  }

  onFractureClassificationTypeChange(): void {
    if (this.model.fractureClassificationType === this.previouslySelectedFractureClassificationType) {
      return;
    }
    this.previouslySelectedFractureClassificationType = this.model.fractureClassificationType;
    this.model.fractureTypeType = FractureTypeTypeEnum.None;
  }
}
