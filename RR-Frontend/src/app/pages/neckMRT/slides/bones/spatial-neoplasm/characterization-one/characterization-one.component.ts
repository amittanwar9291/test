import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';
import { BonesFindingUiModel } from '@models/neckMRT/ui/bones/bones-finding-ui.model';
import { DifferentialDiagnosisTypeEnum, HistologyKnownTypeEnum } from '@enums/neckMRT/bones';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { BonesLargeLocalizerConfigModel } from '@models/neckMRT/ui/bones/bones-large-localizer-config.model';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { BonesPresetHttpService } from '@services/neckMRT/http/bones/bones-preset-http.service';

@Component({
  selector: 'rr-characterization-one',
  templateUrl: './characterization-one.component.html',
  styleUrls: ['./characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: BonesPresetHttpService
    }
  ]
})
export class CharacterizationOneComponent {
  @Input() model: BonesFindingUiModel;
  @Input() diffDiagnosisOptions: DropdownGroupedModel[];
  @Input() orientationAxialOptions: DropdownModel[];
  @Output() emitLocalizer = new EventEmitter<BonesLargeLocalizerConfigModel>();

  selectionAccessibilityModeEnum: typeof SpineSelectionAccessibilityModeEnum;

  descriptionType: typeof DescriptionTypeEnum;
  differentialDiagnosistype: typeof DifferentialDiagnosisTypeEnum;
  histologyKnownType: typeof HistologyKnownTypeEnum;
  selectionAccessibilityMode: typeof SpineSelectionAccessibilityModeEnum;

  constructor() {
    this.selectionAccessibilityModeEnum = SpineSelectionAccessibilityModeEnum;
    this.descriptionType = DescriptionTypeEnum;
    this.differentialDiagnosistype = DifferentialDiagnosisTypeEnum;
    this.histologyKnownType = HistologyKnownTypeEnum;
    this.selectionAccessibilityMode = SpineSelectionAccessibilityModeEnum;
  }

  resetDifferentialDiagnosisDependantModel(): void {
    this.model.isHistologyKnown = false;
    this.model.histologyKnownType = HistologyKnownTypeEnum.None;
    this.model.isSuspicionOf = false;
    this.model.isSubordinate = false;
  }

  resetLocalizer(): void {
    this.model.spineLocations = new SpineLocation();
  }

  openLargeLocalizer(): void {
    this.emitLocalizer.emit(
      new BonesLargeLocalizerConfigModel(
        this.model.spineLocations,
        SpineLocationLogicTypeEnum.OneVertebre,
        SpineSelectionAccessibilityModeEnum.C0toTH4,
        'neckMRT.bones.localization.value',
        'neckMRT.bones.pleaseSelectTheAffectedSingle.value'
      )
    );
  }
}
