import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { BonesFindingUiModel } from '@models/neckMRT/ui/bones/bones-finding-ui.model';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { DiscGeneralLocationModel } from '@models/shared/spine/localizers/disc-general-location.model';

import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';
import { BonesLargeLocalizerConfigModel } from '@models/neckMRT/ui/bones/bones-large-localizer-config.model';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';

import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

import { nameof } from 'ts-simple-nameof';

import { compact } from 'lodash';

@Component({
  selector: 'rr-external-material',
  templateUrl: './external-material.component.html',
  styleUrls: ['./external-material.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ExternalMaterialComponent implements OnInit {
  @Input() model: BonesFindingUiModel;
  @Output() emitLocalizer = new EventEmitter<BonesLargeLocalizerConfigModel>();

  subscriptions: Subscription[] = [];

  selectionAccessibilityMode: typeof SpineSelectionAccessibilityModeEnum;

  constructor(private validationHelperService: ValidationHelperService) {
    this.selectionAccessibilityMode = SpineSelectionAccessibilityModeEnum;
  }

  ngOnInit(): void {
    if (compact(Object.values(this.model.spondylodesisSpineLocations)).length !== 0) {
      this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.spondylodesisSpineLocations));
    }
    if (compact(Object.values(this.model.osteosynthesisSpineLocations)).length !== 0) {
      this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.osteosynthesisSpineLocations));
    }
    if (compact(Object.values(this.model.prothesisSpineLocations)).length !== 0) {
      this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.prothesisSpineLocations));
    }
    if (compact(Object.values(this.model.vertebroplastySpineLocations)).length !== 0) {
      this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.vertebroplastySpineLocations));
    }
  }

  openLargeLocalizer(variant: string): void {
    let localizerConfig: BonesLargeLocalizerConfigModel;

    switch (variant) {
      case 'spondylodesis':
        localizerConfig = new BonesLargeLocalizerConfigModel(
          this.model.spondylodesisSpineLocations,
          SpineLocationLogicTypeEnum.VertebreRange,
          SpineSelectionAccessibilityModeEnum.C0toTH4,
          'neckMRT.bones.localization.value',
          'neckMRT.bones.pleaseSelectTheTop.value'
        );
        break;
      case 'osteosynthesis':
        localizerConfig = new BonesLargeLocalizerConfigModel(
          this.model.osteosynthesisSpineLocations,
          SpineLocationLogicTypeEnum.VertebreRange,
          SpineSelectionAccessibilityModeEnum.C0toTH4,
          'neckMRT.bones.localization.value',
          'neckMRT.bones.pleaseSelectTheTop.value'
        );
        break;
      case 'prothesis':
        localizerConfig = new BonesLargeLocalizerConfigModel(
          this.model.prothesisSpineLocations,
          SpineLocationLogicTypeEnum.DiscEach,
          SpineSelectionAccessibilityModeEnum.C0toTH4,
          'neckMRT.bones.localization.value',
          'neckMRT.bones.pleaseSelectInvolvedDiscsMultiple.value'
        );
        break;
      case 'vertebroplasty':
        localizerConfig = new BonesLargeLocalizerConfigModel(
          this.model.vertebroplastySpineLocations,
          SpineLocationLogicTypeEnum.VertebreEach,
          SpineSelectionAccessibilityModeEnum.C0toTH4,
          'neckMRT.bones.localization.value',
          'neckMRT.bones.pleaseSelectTheAffected.value'
        );
        break;
    }
    this.emitLocalizer.emit(localizerConfig);
  }

  resetSpondylodesisLocalizers(): void {
    this.model.spondylodesisSpineLocations = new SpineLocation();
    this.model.spondylodesisTraumaLocations = new DiscGeneralLocationModel();
    this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.spondylodesisSpineLocations));
    this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.spondylodesisTraumaLocations));
  }

  resetOsteosynthesisLocalizer(): void {
    this.model.osteosynthesisSpineLocations = new SpineLocation();
    this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.osteosynthesisSpineLocations));
  }

  resetProthesisLocalizer(): void {
    this.model.prothesisSpineLocations = new SpineLocation();
    this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.prothesisSpineLocations));
  }

  resetVertebroplastyLocalizer(): void {
    this.model.vertebroplastySpineLocations = new SpineLocation();
    this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.vertebroplastySpineLocations));
  }
}
