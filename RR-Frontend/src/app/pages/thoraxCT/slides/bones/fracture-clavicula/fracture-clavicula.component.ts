import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesFindingUiModel } from '@models/thoraxCT/ui/bones/bones-finding-ui.model';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { ClaviculaeFractureTypeEnum } from '@enums/thoraxCT/bones/claviculae-fracture-type.enum';
import { MedialEndSegmentClaviculaeTypeEnum } from '@enums/thoraxCT/bones/medial-end-segment-claviculae-type.enum';
import { DiaphysealSegmentClaviculaeTypeEnum } from '@enums/thoraxCT/bones/diaphyseal-segment-claviculae-type.enum';
import { LateralEndSegmentClaviculaeTypeEnum } from '@enums/thoraxCT/bones/lateral-end-segment-claviculae-type.enum';
import { RockwoodTypeEnum } from '@enums/thoraxCT/bones/rockwood-type.enum';
import { TossyTypeEnum } from '@enums/thoraxCT/bones/tossy-type.enum';
import { NotFurtherDefinedClassificationTypeEnum } from '@enums/thoraxCT/bones/not-further-defined-classification-type.enum';

@Component({
  selector: 'rr-fracture-clavicula',
  templateUrl: './fracture-clavicula.component.html',
  styleUrls: ['./fracture-clavicula.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FractureClaviculaComponent {
  locationType = LocationTypeEnum;
  claviculaeFractureType = ClaviculaeFractureTypeEnum;
  medialEndSegmentClaviculaeType = MedialEndSegmentClaviculaeTypeEnum;
  diaphysealSegmentClaviculaeType = DiaphysealSegmentClaviculaeTypeEnum;
  lateralEndSegmentClaviculaeType = LateralEndSegmentClaviculaeTypeEnum;
  notFurtherDefinedClassificationType = NotFurtherDefinedClassificationTypeEnum;
  rockwoodTypeEnum = RockwoodTypeEnum;
  tossyTypeEnum = TossyTypeEnum;

  @Input() model: BonesFindingUiModel;
}
