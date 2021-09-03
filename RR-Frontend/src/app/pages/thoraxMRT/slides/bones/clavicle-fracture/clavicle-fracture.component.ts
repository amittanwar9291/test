import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesFindingUiModel } from '@models/thoraxMRT/ui/bones/bones-finding-ui.model';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { RockwoodInjuryGradeEnum } from '@enums/thoraxMRT/bones/clavicule-fracture/rockwood-injury-grade.enum';
import { TossyInjuryGradeEnum } from '@enums/thoraxMRT/bones/clavicule-fracture/tossy-injury-grade.enum';
import { NotFutherSpecfiedTypeEnum } from '@enums/thoraxMRT/bones/fracture/not-futher-specfied-type.enum';
import { FractureTypeEnum } from '@enums/thoraxMRT/bones/fracture/fracture-type.enum';
import { FractureSubTypeEnum } from '@enums/thoraxMRT/bones/fracture/fracture-sub-type.enum';

@Component({
  selector: 'rr-clavicle-fracture',
  templateUrl: './clavicle-fracture.component.html',
  styleUrls: ['./clavicle-fracture.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ClavicleFractureComponent {
  @Input() model: BonesFindingUiModel;

  locationTypeEnum = LocationTypeEnum;
  fractureTypeEnum = FractureTypeEnum;
  fractureSubTypeEnum = FractureSubTypeEnum;
  notFutherSpecfiedTypeEnum = NotFutherSpecfiedTypeEnum;
  rockwoodInjuryGradeEnum = RockwoodInjuryGradeEnum;
  tossyInjuryGradeEnum = TossyInjuryGradeEnum;

  fractureTypeSiblingsValues = {
    medialEndSegmentClavicleTypeContainer: [
      FractureSubTypeEnum.Extraarticular15_1A,
      FractureSubTypeEnum.PartialArticular15_1B,
      FractureSubTypeEnum.CompleteArticular15_1C
    ],
    diaphysealSegmentClavicleTypeContainer: [
      FractureSubTypeEnum.Simple15_2A,
      FractureSubTypeEnum.Wedge15_2B,
      FractureSubTypeEnum.Multifragmentary15_2C
    ],
    lateralEndSegmentClavicleTypeContainer: [
      FractureSubTypeEnum.Extraarticular15_3A,
      FractureSubTypeEnum.PartialArticular15_3B,
      FractureSubTypeEnum.CompleteArticular15_3C
    ]
  };

  resetSiblingsChildren(siblings: string[]) {
    siblings.forEach(item => {
      if (this.fractureTypeSiblingsValues[item].includes(this.model.fractureSubType)) {
        this.model.fractureSubType = FractureSubTypeEnum.None;
      }
    });
    this.model.notFutherSpecfiedType = NotFutherSpecfiedTypeEnum.None;
  }
}
