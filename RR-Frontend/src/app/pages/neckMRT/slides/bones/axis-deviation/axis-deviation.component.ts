import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { BonesFindingUiModel } from '@models/neckMRT/ui/bones/bones-finding-ui.model';
import { AxialDeviationTypeEnum } from '@enums/neckMRT/bones';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { BonesLargeLocalizerConfigModel } from '@models/neckMRT/ui/bones/bones-large-localizer-config.model';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';

import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

import { nameof } from 'ts-simple-nameof';

import { compact } from 'lodash';

@Component({
  selector: 'rr-axis-deviation',
  templateUrl: './axis-deviation.component.html',
  styleUrls: ['./axis-deviation.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AxisDeviationComponent implements OnInit {
  @Input() model: BonesFindingUiModel;
  @Output() emitLocalizer = new EventEmitter<BonesLargeLocalizerConfigModel>();

  axialDeviationType: typeof AxialDeviationTypeEnum;
  selectionAccessibilityMode: typeof SpineSelectionAccessibilityModeEnum;

  constructor(private validationHelperService: ValidationHelperService) {
    this.axialDeviationType = AxialDeviationTypeEnum;
    this.selectionAccessibilityMode = SpineSelectionAccessibilityModeEnum;
  }

  ngOnInit(): void {
    if (compact(Object.values(this.model.spineLocations)).length !== 0) {
      this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.spineLocations));
    }
  }

  isHyperlordosisOrKyphosis(): boolean {
    return (
      this.model.axialDeviationType === AxialDeviationTypeEnum.Hyperlordosis ||
      this.model.axialDeviationType === AxialDeviationTypeEnum.Kyphosis
    );
  }

  openLargeLocalizer(): void {
    this.emitLocalizer.emit(
      new BonesLargeLocalizerConfigModel(
        this.model.spineLocations,
        SpineLocationLogicTypeEnum.OneDiscWithVertebre,
        SpineSelectionAccessibilityModeEnum.C0toTH4,
        'neckMRT.bones.localization.value',
        'neckMRT.bones.pleaseSelectTheDiscSingle.value'
      )
    );
  }

  resetLocalizer(): void {
    this.model.spineLocations = new SpineLocation();
    this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.spineLocations));
  }
}
