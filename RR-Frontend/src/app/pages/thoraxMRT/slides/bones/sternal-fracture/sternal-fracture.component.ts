import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesFindingUiModel } from '@models/thoraxMRT/ui/bones/bones-finding-ui.model';
import { NotFutherSpecfiedTypeEnum } from '@enums/thoraxMRT/bones/fracture/not-futher-specfied-type.enum';
import { FractureTypeEnum } from '@enums/thoraxMRT/bones/fracture/fracture-type.enum';
import { FractureSubTypeEnum } from '@enums/thoraxMRT/bones/fracture/fracture-sub-type.enum';

@Component({
  selector: 'rr-sternal-fracture',
  templateUrl: './sternal-fracture.component.html',
  styleUrls: ['./sternal-fracture.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SternalFractureComponent {
  @Input() model: BonesFindingUiModel;

  fractureTypeEnum = FractureTypeEnum;
  fractureSubTypeEnum = FractureSubTypeEnum;
  notFutherSpecfiedTypeEnum = NotFutherSpecfiedTypeEnum;

  fractureTypeSiblingsValues = {
    sternalManubriumTypeContainer: [
      FractureSubTypeEnum.TransverseFracture16_3_1_A,
      FractureSubTypeEnum.ObliqueFracture16_3_1_B,
      FractureSubTypeEnum.MultifragmentaryFracture16_3_1_C
    ],
    medialEndSegmentClavicleTypeContainer: [
      FractureSubTypeEnum.TransverseFracture16_3_2_A,
      FractureSubTypeEnum.ObliqueFracture16_3_2_B,
      FractureSubTypeEnum.MultifragmentaryFracture16_3_2_C
    ],
    diaphysealSegmentClavicleTypeContainer: [
      FractureSubTypeEnum.TransverseFracture16_3_3_A,
      FractureSubTypeEnum.ObliqueFracture16_3_3_B,
      FractureSubTypeEnum.MultifragmentaryFracture16_3_3_C
    ]
  };

  resetSiblingsChildren(siblings: string[]) {
    siblings.forEach(item => {
      if (this.fractureTypeSiblingsValues[item]?.includes(this.model.fractureSubType)) {
        this.model.fractureSubType = FractureSubTypeEnum.None;
      }
    });
    this.model.notFutherSpecfiedType = NotFutherSpecfiedTypeEnum.None;
  }
}
