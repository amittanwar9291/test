import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DistalTibiaFractureTypeEnum, FractureClassificationTypeEnum, FractureTypeTypeEnum } from '@enums/feetMRT/bones/fracture';
import { BonesFindingUiModel } from '@models/feetMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-os-cuneiform',
  templateUrl: './os-cuneiform.component.html',
  styleUrls: ['./os-cuneiform.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OsCuneiformComponent {
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
}
