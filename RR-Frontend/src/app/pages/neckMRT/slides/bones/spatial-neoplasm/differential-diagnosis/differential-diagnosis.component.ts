import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { AppConfig } from 'app/app.config';

import { BonesFindingUiModel } from '@models/neckMRT/ui/bones/bones-finding-ui.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';

import {
  ContrastEnhancementDistributionTypeEnum,
  ContrastEnhancementQuantitativeTypeEnum,
  DifferentialDiagnosisTypeEnum,
  HomogeneityTypeEnum,
  LocalSpreadTypeEnum
} from '@enums/neckMRT/bones';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';
import { BonesLargeLocalizerConfigModel } from '@models/neckMRT/ui/bones/bones-large-localizer-config.model';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';

@Component({
  selector: 'rr-differential-diagnosis',
  templateUrl: './differential-diagnosis.component.html',
  styleUrls: ['./differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnosisComponent {
  @Input() model: BonesFindingUiModel;
  @Input() diffDiagnosisOptionsOptions: DropdownGroupedModel[];
  @Input() diffDiagnosisOptionsRestrictedOptions: DropdownGroupedModel[];
  @Input() isCMReinforced: boolean;
  @Output() emitLocalizer = new EventEmitter<BonesLargeLocalizerConfigModel>();

  descriptionType: typeof DescriptionTypeEnum;
  differentialDiagnosistype: typeof DifferentialDiagnosisTypeEnum;
  contrastEnhancementQuantitativeType: typeof ContrastEnhancementQuantitativeTypeEnum;
  subHomogeneityType: typeof HomogeneityTypeEnum;
  contrastEnhancementDistributionType: typeof ContrastEnhancementDistributionTypeEnum;
  localSpreadType: typeof LocalSpreadTypeEnum;
  selectionAccessibilityMode: typeof SpineSelectionAccessibilityModeEnum;

  constructor() {
    this.descriptionType = DescriptionTypeEnum;
    this.differentialDiagnosistype = DifferentialDiagnosisTypeEnum;
    this.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum;
    this.subHomogeneityType = HomogeneityTypeEnum;
    this.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum;
    this.localSpreadType = LocalSpreadTypeEnum;
    this.selectionAccessibilityMode = SpineSelectionAccessibilityModeEnum;
  }

  isSubHomogeneityTypeDisabled(): boolean {
    return ![ContrastEnhancementQuantitativeTypeEnum.Strong, ContrastEnhancementQuantitativeTypeEnum.Weak].includes(
      this.model.contrastEnhancementQuantitativeType
    );
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.neckMRT.softTissues.fileUpload;
  }

  resetDifferentialDiagnosis1DependentModel(): void {
    this.model.isSuspicionOf = false;
    this.resetDifferentialDiagnosis2DependentModel();
  }

  resetDifferentialDiagnosis2DependentModel(): void {
    this.model.isSubordinate = false;
  }

  resetLocalizer(): void {
    this.model.vertebroplastySpineLocations = new SpineLocation();
  }

  openLargeLocalizer(): void {
    this.emitLocalizer.emit(
      new BonesLargeLocalizerConfigModel(
        this.model.vertebroplastySpineLocations,
        SpineLocationLogicTypeEnum.VertebreEach,
        SpineSelectionAccessibilityModeEnum.C0toTH4,
        'neckMRT.bones.localization.value',
        'neckMRT.bones.pleaseSelectTheAffected.value',
        2
      )
    );
  }
}
