import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { BonesFindingUiModel } from '@models/pelvisMRT/ui/bones/bones-finding-ui.model';
import {
  BonesDiagnosisTypeEnum,
  TClassificationTypeEnum,
  HistologicallySecuredTypeEnum,
  LocalSpreadTypeEnum
} from '@enums/pelvisMRT/bones/tumor';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

@Component({
  selector: 'rr-characterization-two',
  templateUrl: './characterization-two.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoComponent {
  @Input() model: BonesFindingUiModel;
  @Input() diagnosisList1: DropdownModel[];
  @Input() diagnosisList2: DropdownModel[];

  localSpreadType = LocalSpreadTypeEnum;
  classificationType = TClassificationTypeEnum;
  histologicallySecuredType = HistologicallySecuredTypeEnum;
  diagnosisType = BonesDiagnosisTypeEnum;

  clearDependantFields(): void {
    this.model.isSubordinated = false;
    this.clearClassificationButtons();
  }

  clearClassificationButtons() {
    if (!this.classificationTypeEnable()) {
      this.model.classificationType = this.classificationType.None;
    }
  }

  classificationTypeEnable(): boolean {
    const referenceList = [BonesDiagnosisTypeEnum.EwingSarcoma, BonesDiagnosisTypeEnum.Osteosarcoma, BonesDiagnosisTypeEnum.Chondrosarcoma];
    return (
      referenceList.includes(this.model.differentialDiagnosis) ||
      referenceList.includes(this.model.differentialDiagnosis3) ||
      referenceList.includes(this.model.differentialDiagnosis2) ||
      referenceList.includes(this.model.differentialDiagnosis1)
    );
  }
}
