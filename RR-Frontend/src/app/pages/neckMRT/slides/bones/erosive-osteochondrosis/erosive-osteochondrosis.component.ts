import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { BonesFindingUiModel } from '@models/neckMRT/ui/bones/bones-finding-ui.model';
import { BonesLargeLocalizerConfigModel } from '@models/neckMRT/ui/bones/bones-large-localizer-config.model';

import { ModicClassificationTypeEnum } from '@enums/neckMRT/bones';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';

import { nameof } from 'ts-simple-nameof';

import { compact } from 'lodash';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

@Component({
  selector: 'rr-erosive-osteochondrosis',
  templateUrl: './erosive-osteochondrosis.component.html',
  styleUrls: ['./erosive-osteochondrosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ErosiveOsteochondrosisComponent implements OnInit {
  @Input() model: BonesFindingUiModel;
  @Output() emitLocalizer = new EventEmitter<BonesLargeLocalizerConfigModel>();

  modicClassificationType: typeof ModicClassificationTypeEnum;
  selectionAccessibilityMode: typeof SpineSelectionAccessibilityModeEnum;

  constructor(private validationHelperService: ValidationHelperService) {
    this.modicClassificationType = ModicClassificationTypeEnum;
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
        SpineLocationLogicTypeEnum.DiscEachIntervertebre,
        SpineSelectionAccessibilityModeEnum.C0toTH4,
        'neckMRT.bones.localization.value',
        'neckMRT.bones.pleaseSelectTheDiscMultiple.value'
      )
    );
  }
}
