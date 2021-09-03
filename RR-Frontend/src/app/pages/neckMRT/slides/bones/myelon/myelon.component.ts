import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { BonesFindingUiModel } from '@models/neckMRT/ui/bones/bones-finding-ui.model';
import {
  CharacterizationTypeEnum,
  DifferentialDiagnosisTypeEnum,
  MyelonDifferentialDiagnosisTypeEnum,
  MyelonPathologyTypeEnum
} from '@enums/neckMRT/bones';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { BonesLargeLocalizerConfigModel } from '@models/neckMRT/ui/bones/bones-large-localizer-config.model';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { SpinalCanalLocation } from '@models/shared/spine/localizers/spinal-canal-location.model';

import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';

import { nameof } from 'ts-simple-nameof';

import { compact } from 'lodash';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

@Component({
  selector: 'rr-myelon',
  templateUrl: './myelon.component.html',
  styleUrls: ['./myelon.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MyelonComponent implements OnInit {
  @Input() model: BonesFindingUiModel;
  @Input() differentialDiagnosisOptions: DropdownModel[];
  @Output() emitLocalizer = new EventEmitter<BonesLargeLocalizerConfigModel>();

  descriptionType: typeof DescriptionTypeEnum;
  myelonPathologyType: typeof MyelonPathologyTypeEnum;
  characterizationType: typeof CharacterizationTypeEnum;
  selectionAccessibilityMode: typeof SpineSelectionAccessibilityModeEnum;
  differentialDiagnosisType: typeof DifferentialDiagnosisTypeEnum;

  constructor(private validationHelperService: ValidationHelperService) {
    this.descriptionType = DescriptionTypeEnum;
    this.myelonPathologyType = MyelonPathologyTypeEnum;
    this.characterizationType = CharacterizationTypeEnum;
    this.selectionAccessibilityMode = SpineSelectionAccessibilityModeEnum;
    this.differentialDiagnosisType = DifferentialDiagnosisTypeEnum;
  }

  ngOnInit(): void {
    if (compact(Object.values(this.model.spineLocations)).length !== 0) {
      this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.spineLocations));
    }
  }

  resetMyelopathyDependentModel(): void {
    this.model.isIncreasedT2Signal = false;
    this.model.characterizationType = CharacterizationTypeEnum.None;
    this.resetSpineLocation();
  }

  resetSyringohydromyeliaDependentModel(): void {
    this.model.extensionCraniocaudalInMm = null;
    this.model.extensionSagittalInMm = null;
    this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.extensionCraniocaudalInMm));
    this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.extensionSagittalInMm));

    this.resetSpineLocation();
  }

  resetSpinalCanalMassDependentModel(): void {
    this.model.myelonDifferentialDiagnosis1 = MyelonDifferentialDiagnosisTypeEnum.None;
    this.model.myelonDifferentialDiagnosis2 = MyelonDifferentialDiagnosisTypeEnum.None;
    this.model.spinalCanalLocations = new SpinalCanalLocation();

    this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.myelonDifferentialDiagnosis1));
    this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.myelonDifferentialDiagnosis2));
    this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.spinalCanalLocations));
    this.resetSpineLocation();
  }

  private resetSpineLocation(): void {
    this.model.spineLocations = new SpineLocation();
    this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.spineLocations));
  }

  openLargeLocalizer(): void {
    this.emitLocalizer.emit(
      new BonesLargeLocalizerConfigModel(
        this.model.spineLocations,
        SpineLocationLogicTypeEnum.VertebreRange,
        SpineSelectionAccessibilityModeEnum.C0toTH4,
        'neckMRT.bones.localization.value',
        'neckMRT.bones.pleaseSelectTheTop.value'
      )
    );
  }
}
