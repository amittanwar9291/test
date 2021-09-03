import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  NeckSoftTissueMassLocalizationTypeEnum,
  OrbitaTypeEnum,
  SupraaorticHeadPathologyTypeEnum,
  SupraaorticLocalizationTypeEnum,
  NeckSoftTissuePathologyTypeEnum,
  DignityTypeEnum
} from '@enums/angiographyCT/soft-tissue';
import { IntracranialTypeEnum } from '@enums/angiographyCT/soft-tissue/supraaortal/intracranial-type.enum';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';
import { BonesLargeLocalizerConfigModel } from '@models/angiographyCT/ui/soft-tissue/bones-large-localizer-config.model';
import { SoftTissueFindingUiModel } from '@models/angiographyCT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { compact } from 'lodash';
import { nameof } from 'ts-simple-nameof';
import { SoftTissueHelperService } from '../soft-tissue-helper.service';

@Component({
  selector: 'rr-supraaortic',
  templateUrl: './supraaortic.component.html',
  styleUrls: ['supraaortic.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SupraaorticComponent implements OnInit {
  @Input() model: SoftTissueFindingUiModel;
  @Input() dignityTypeOptions: DropdownModel[];
  @Output() emitLocalizer = new EventEmitter<BonesLargeLocalizerConfigModel>();
  selectionAccessibilityMode: typeof SpineSelectionAccessibilityModeEnum;

  localizationType = SupraaorticLocalizationTypeEnum;
  pathologyType = SupraaorticHeadPathologyTypeEnum;
  neckPathologyType = NeckSoftTissuePathologyTypeEnum;
  orbitaType = OrbitaTypeEnum;
  intracranialType = IntracranialTypeEnum;
  localizationMassType = NeckSoftTissueMassLocalizationTypeEnum;
  dignityType = DignityTypeEnum;

  constructor(private softTissueHelperService: SoftTissueHelperService, private validationHelperService: ValidationHelperService) {
    this.selectionAccessibilityMode = SpineSelectionAccessibilityModeEnum;
  }

  ngOnInit(): void {
    if (compact(Object.values(this.model.spineLocations)).length !== 0) {
      this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.spineLocations));
    }
  }

  openLargeLocalizer(model): void {
    this.softTissueHelperService.largeLocalizerOpen.next(model);
  }

  resetLocalizer(): void {
    this.model.spineLocations = new SpineLocation();
    this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.spineLocations));
  }

  resetInput() {
    if (!this.model.maxDiameter) {
      this.model.secondPlane = null;
      this.model.thirdPlane = null;
    } else if (!this.model.secondPlane) {
      this.model.thirdPlane = null;
    }
  }
}
