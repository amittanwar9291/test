import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesFindingUiModel } from '@models/thoraxMRT/ui/bones/bones-finding-ui.model';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { NotFutherSpecfiedTypeEnum } from '@enums/thoraxMRT/bones/fracture/not-futher-specfied-type.enum';
import { FractureTypeEnum } from '@enums/thoraxMRT/bones/fracture/fracture-type.enum';
import { FractureSubTypeEnum } from '@enums/thoraxMRT/bones/fracture/fracture-sub-type.enum';

@Component({
  selector: 'rr-scapular-fracture',
  templateUrl: './scapular-fracture.component.html',
  styleUrls: ['./scapular-fracture.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ScapularFractureComponent {
  @Input() model: BonesFindingUiModel;

  locationTypeEnum = LocationTypeEnum;
  fractureTypeEnum = FractureTypeEnum;
  fractureSubTypeEnum = FractureSubTypeEnum;
  notFutherSpecfiedTypeEnum = NotFutherSpecfiedTypeEnum;

  fractureTypeSiblingsValues = {
    processTypeContainer: [FractureSubTypeEnum.CoracoidProcess14A1, FractureSubTypeEnum.Acromion14A2, FractureSubTypeEnum.Spine14A3],
    bodyTypeContainer: [FractureSubTypeEnum.ExitsTheBodyAt2OrLessPoints14B1, FractureSubTypeEnum.ExitsTheBodyAt3OrMorePoints14B2],
    glenoidFossaTypeContainer: [
      FractureSubTypeEnum.Extraarticular14F0,
      FractureSubTypeEnum.SimpleArticular14F1,
      FractureSubTypeEnum.MultifragmentaryArticular14F2
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
