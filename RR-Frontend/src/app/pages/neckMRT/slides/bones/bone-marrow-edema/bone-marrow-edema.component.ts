import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { BonesFindingUiModel } from '@models/neckMRT/ui/bones/bones-finding-ui.model';
import { BonesLargeLocalizerConfigModel } from '@models/neckMRT/ui/bones/bones-large-localizer-config.model';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';

import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';

import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

import { nameof } from 'ts-simple-nameof';

import { compact } from 'lodash';

@Component({
  selector: 'rr-bone-marrow-edema',
  templateUrl: './bone-marrow-edema.component.html',
  styleUrls: ['./bone-marrow-edema.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class BoneMarrowEdemaComponent implements OnInit {
  @Input() model: BonesFindingUiModel;
  @Output() emitLocalizer = new EventEmitter<BonesLargeLocalizerConfigModel>();

  selectionAccessibilityMode: typeof SpineSelectionAccessibilityModeEnum;

  constructor(private validationHelperService: ValidationHelperService) {
    this.selectionAccessibilityMode = SpineSelectionAccessibilityModeEnum;
  }

  ngOnInit(): void {
    if (compact(Object.values(this.model.spineLocations)).length !== 0) {
      this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.spineLocations));
    }
  }

  resetVertebraDependentModel(): void {
    this.model.isTendinitisCalcareaLongus = false;
    this.model.isTendinitisRight = false;
    this.model.isTendinitisLeft = false;
    this.model.spineLocations = new SpineLocation();
    this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.spineLocations));
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
