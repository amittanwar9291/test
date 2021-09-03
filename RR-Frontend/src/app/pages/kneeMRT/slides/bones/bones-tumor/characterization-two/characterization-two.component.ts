import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { KneeBonesFindingUiModel } from '@models/kneeMRT/ui/bones/knee-bones-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { LocalSpreadTypeEnum, BonesClassificationTypeEnum, HistologicallySecuredTypeEnum, BonesDiagnosisType } from '@enums/kneeMRT/bones/';

@Component({
  selector: 'rr-characterization-two',
  templateUrl: './characterization-two.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoComponent {
  @Input() model: KneeBonesFindingUiModel;
  @Input() diagnosisList1: DropdownModel[];
  @Input() diagnosisList2: DropdownModel[];

  localSpreadType: typeof LocalSpreadTypeEnum;
  classificationType: typeof BonesClassificationTypeEnum;
  histologicallySecuredType: typeof HistologicallySecuredTypeEnum;
  bonesDiagnosisType: typeof BonesDiagnosisType;

  constructor() {
    this.localSpreadType = LocalSpreadTypeEnum;
    this.classificationType = BonesClassificationTypeEnum;
    this.histologicallySecuredType = HistologicallySecuredTypeEnum;
    this.bonesDiagnosisType = BonesDiagnosisType;
  }

  get isTClassificationDisabled(): boolean {
    return ![
      this.bonesDiagnosisType.Chondrosarcoma as string,
      this.bonesDiagnosisType.Osteosarcoma as string,
      this.bonesDiagnosisType.EwingSarcoma as string
    ].includes(this.model.differentialDiagnosis);
  }

  shouldDifferentialDiagnosis2BeDisabled(): boolean {
    return this.model.descriptionType === 'IDescribe'
      ? this.model.differentialDiagnosis1 === 'None'
      : this.model.differentialDiagnosis === 'None';
  }

  clearSubordinate() {
    this.model.isDifferentialDiagnosisSubordinate = false;
  }
}
