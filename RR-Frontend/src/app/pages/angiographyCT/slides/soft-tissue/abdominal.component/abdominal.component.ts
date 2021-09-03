import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { AbdominalLocalizationTypeEnum, AbdominalTypeEnum, FractureLocalizationTypeEnum } from '@enums/angiographyCT/soft-tissue/abdominal';
import { SoftTissueFindingUiModel } from '@models/angiographyCT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { SideTypeEnum } from '@enums/shared/side-type.enum';
import { DignityTypeEnum } from '@enums/angiographyCT/soft-tissue';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { RibsModel } from '@models/shared/thorax/localizers/ribs.model';
import { SoftTissueHelperService } from '../soft-tissue-helper.service';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';
import { nameof } from 'ts-simple-nameof';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { compact } from 'lodash';

@Component({
  selector: 'rr-abdominal',
  templateUrl: './abdominal.component.html',
  styleUrls: ['abdominal.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AbdominalComponent implements OnInit {
  @Input() model: SoftTissueFindingUiModel;
  @Input() findingTypeOptions: DropdownModel[];
  @Input() dignityTypeOptions: DropdownModel[];

  findingAbdominalTypeEnum = AbdominalTypeEnum;
  abdominalLocalizationType = AbdominalLocalizationTypeEnum;
  sideTypeEnum = SideTypeEnum;
  dignityTypeEnum = DignityTypeEnum;
  fractureLocalizationTypeEnum = FractureLocalizationTypeEnum;

  spineLocationDisablePartEnum = SpineSelectionAccessibilityModeEnum;

  constructor(private softTissueHelperService: SoftTissueHelperService, private validationHelperService: ValidationHelperService) {}

  ngOnInit(): void {
    if (this.isSpineLocalizerSelection()) {
      this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.spineLocations));
    } else if (this.isRibLocalizerSelection()) {
      this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.ribLocations));
    } else {
      this.model.isStatusPost = false;
    }
  }

  openLargeLocalizer(model: 'spine' | 'rib') {
    this.softTissueHelperService.largeLocalizerOpen.next(model);
  }

  clearLocalizer() {
    this.model.spineLocations = new SpineLocation();
    this.model.ribLocations = new RibsModel();
  }

  resetInput() {
    if (!this.model.maxDiameter) {
      this.model.secondPlane = null;
      this.model.thirdPlane = null;
    } else if (!this.model.secondPlane) {
      this.model.thirdPlane = null;
    }
  }

  resetabdominalType() {
    this.model.isSuspicionOf = false;
    this.model.abdominalLocalizationType = AbdominalLocalizationTypeEnum.None;
    this.model.maxDiameter = null;
    this.model.secondPlane = null;
    this.model.thirdPlane = null;
    this.model.dignityType = DignityTypeEnum.None;
    this.model.isAbscess = false;
    this.model.isAscitesHemoperitoneum = false;
    this.model.isAscitesSignificant = false;
    this.model.sideType = SideTypeEnum.None;
    this.model.fractureLocalizationType = FractureLocalizationTypeEnum.None;
    this.resetLocalizationColumn();
    this.model.isRight = false;
    this.model.isLeft = false;
    this.resetMassLocalizationError();
  }

  removeErrorFromSideType() {
    this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.sideType));
    this.model.sideType = SideTypeEnum.None;
  }

  isSpineLocalizerSelection() {
    return compact(Object.values(this.model.spineLocations)).length !== 0;
  }

  isRibLocalizerSelection() {
    return compact(Object.values(this.model.ribLocations)).length !== 0;
  }

  disableCondition() {
    if (this.isSpineLocalizerSelection() || this.isRibLocalizerSelection()) {
      return true;
    }
  }

  resetLocalizationColumn() {
    this.clearLocalizer();
    this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.spineLocations));
    this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.ribLocations));
    this.model.isStatusPost = false;
  }

  resetMassLocalizationError() {
    this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.abdominalLocalizationType));
    this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.sideType));
  }
}
