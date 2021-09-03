import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { BonesFindingUiModel } from '@models/neckMRT/ui/bones/bones-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { OsteomyelitisDifferentialDiagnosisTypeEnum } from '@enums/neckMRT/bones';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';
import { BonesLargeLocalizerConfigModel } from '@models/neckMRT/ui/bones/bones-large-localizer-config.model';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';

@Component({
  selector: 'rr-osteomyelitis',
  templateUrl: './osteomyelitis.component.html',
  styleUrls: ['./osteomyelitis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OsteomyelitisComponent {
  @Input() model: BonesFindingUiModel;
  @Input() differentialDiagnosisOptions: DropdownModel[];
  @Input() isCMReinforced: boolean;
  @Output() emitLocalizer = new EventEmitter<BonesLargeLocalizerConfigModel>();

  subscriptions: Subscription[] = [];
  differentialDiagnosisType: typeof OsteomyelitisDifferentialDiagnosisTypeEnum;

  selectionAccessibilityMode: typeof SpineSelectionAccessibilityModeEnum;

  constructor() {
    this.differentialDiagnosisType = OsteomyelitisDifferentialDiagnosisTypeEnum;
    this.selectionAccessibilityMode = SpineSelectionAccessibilityModeEnum;
  }

  resetBothPlanes(): void {
    if (!this.model.sizeInMm) {
      this.model.secondPlaneInMm = null;
      this.resetThirdPlane();
    }
  }

  resetThirdPlane(): void {
    if (!this.model.secondPlaneInMm) {
      this.model.thirdPlaneInMm = null;
    }
  }

  resetDifferentialDiagnosisDependantModel(): void {
    this.model.isSubordinate = false;
  }

  openLargeLocalizer(): void {
    this.emitLocalizer.emit(
      new BonesLargeLocalizerConfigModel(
        this.model.spineLocations,
        SpineLocationLogicTypeEnum.VertebreEach,
        SpineSelectionAccessibilityModeEnum.C0toTH4,
        'neckMRT.bones.localization.value',
        'neckMRT.bones.pleaseSelectTheAffected.value'
      )
    );
  }
}
