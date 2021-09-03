import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { BonesFindingUiModel } from '@models/neckMRT/ui/bones/bones-finding-ui.model';
import { ExtensionReferenceSpinalCanalTypeEnum, PathologyTypeEnum } from '@enums/neckMRT/bones';
import { BonesLargeLocalizerConfigModel } from '@models/neckMRT/ui/bones/bones-large-localizer-config.model';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';

import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

import { nameof } from 'ts-simple-nameof';

import { compact } from 'lodash';

@Component({
  selector: 'rr-intervertebral-disc',
  templateUrl: './intervertebral-disc.component.html',
  styleUrls: ['./intervertebral-disc.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class IntervertebralDiscComponent implements OnInit {
  @Input() model: BonesFindingUiModel;
  @Output() emitLocalizer = new EventEmitter<BonesLargeLocalizerConfigModel>();

  pathologyType: typeof PathologyTypeEnum;
  extensionReferenceSpinalCanalType: typeof ExtensionReferenceSpinalCanalTypeEnum;

  selectionAccessibilityMode: typeof SpineSelectionAccessibilityModeEnum;

  constructor(private validationHelperService: ValidationHelperService) {
    this.pathologyType = PathologyTypeEnum;
    this.extensionReferenceSpinalCanalType = ExtensionReferenceSpinalCanalTypeEnum;
    this.selectionAccessibilityMode = SpineSelectionAccessibilityModeEnum;
  }

  ngOnInit(): void {
    if (compact(Object.values(this.model.spineLocations)).length !== 0) {
      this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.spineLocations));
    }
  }

  openLargeLocalizer(): void {
    this.emitLocalizer.emit(
      new BonesLargeLocalizerConfigModel(
        this.model.spineLocations,
        SpineLocationLogicTypeEnum.DiscEach,
        SpineSelectionAccessibilityModeEnum.C0toTH4,
        'neckMRT.bones.localization.value',
        'neckMRT.bones.pleaseSelectInvolvedDiscsMultiple.value'
      )
    );
  }
}
