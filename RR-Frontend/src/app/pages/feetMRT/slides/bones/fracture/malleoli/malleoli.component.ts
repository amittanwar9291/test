import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FractureFormSubTypeEnum, MedialMalleolusTypeEnum } from '@enums/feetMRT/bones/fracture';
import { DistalTibiaFractureTypeEnum } from '@enums/feetMRT/bones/fracture/distal-tibia-fracture-type.enum';
import { FractureClassificationTypeEnum } from '@enums/feetMRT/bones/fracture/fracture-classification-type.enum';
import { FractureTypeTypeEnum } from '@enums/feetMRT/bones/fracture/fracture-type-type.enum';
import { BonesFindingUiModel } from '@models/feetMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-malleoli',
  templateUrl: './malleoli.component.html',
  styleUrls: ['./malleoli.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MalleoliComponent {
  @Input() model: BonesFindingUiModel;

  fractureClassificationType: typeof FractureClassificationTypeEnum;
  distalTibiaFractureType: typeof DistalTibiaFractureTypeEnum;
  fractureTypeType: typeof FractureTypeTypeEnum;
  fractureFormSubType: typeof FractureFormSubTypeEnum;
  medialMalleolusType: typeof MedialMalleolusTypeEnum;

  constructor() {
    this.initializeEnums();
  }

  initializeEnums() {
    this.fractureClassificationType = FractureClassificationTypeEnum;
    this.distalTibiaFractureType = DistalTibiaFractureTypeEnum;
    this.fractureTypeType = FractureTypeTypeEnum;
    this.fractureFormSubType = FractureFormSubTypeEnum;
    this.medialMalleolusType = MedialMalleolusTypeEnum;
  }

  clearFractureFormSubTypeBooleans() {
    this.model.isFractureOfTheMedialMalleolus = false;
    this.model.isRuptureOfTheDeltoidLigament = false;
    this.model.isProximalTibiofibularJointDislocation = false;
    this.model.isFibulaNeckFracture = false;
    this.model.isSyndesmosisUnstable = false;
    this.model.isWagstaffeLeFortAvulsionFracture = false;
    this.model.isnTillauxChaputTubercleFracture = false;
  }

  clearFractureFormSubType() {
    this.model.fractureFormSubType = this.fractureFormSubType.None;
    this.clearFractureFormSubTypeBooleans();
    this.clearMedialMalleolusType();
  }

  clearMedialMalleolusType() {
    this.model.medialMalleolusType = this.medialMalleolusType.None;
  }

  clearFractureForm() {
    this.model.fractureTypeType = this.fractureTypeType.None;
    this.clearFractureFormSubType();
  }
}
