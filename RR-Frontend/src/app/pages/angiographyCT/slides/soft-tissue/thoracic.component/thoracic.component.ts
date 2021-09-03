import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftTissueFindingUiModel } from '@models/angiographyCT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';
import { SoftTissueHelperService } from '../soft-tissue-helper.service';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { RibsModel } from '@models/shared/thorax/localizers/ribs.model';
import {
  DignityTypeEnum,
  InferiorVenaCavaTypeEnum,
  NormVariantVesselsVariantsTypeEnum,
  PartialAnomalousPulmonaryVenousConnectionTypeEnum,
  SuperiorVenaCavaTypeEnum,
  ThoracicDiagnosisTypeEnum,
  ThoracicLocalizationTypeEnum,
  ThoracicTypeEnum
} from '@enums/angiographyCT/soft-tissue';
import { SideTypeEnum } from '@enums/shared/side-type.enum';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { nameof } from 'ts-simple-nameof';
import { compact } from 'lodash';

@Component({
  selector: 'rr-thoracic',
  templateUrl: './thoracic.component.html',
  styleUrls: ['thoracic.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ThoracicComponent implements OnInit {
  @Input() model: SoftTissueFindingUiModel;
  @Input() dignityTypeOptions: DropdownModel[];
  @Input() diagnosisTypeOptions: DropdownModel[];

  thoracicFindingType = ThoracicTypeEnum;
  localizationThoracicType = ThoracicLocalizationTypeEnum;
  spineLocationDisablePartEnum = SpineSelectionAccessibilityModeEnum;
  sideTypeEnum = SideTypeEnum;
  normVariantVesselsVariantsTypeEnum = NormVariantVesselsVariantsTypeEnum;
  partialAnomalousPulmonaryVenousConnectionTypeEnum = PartialAnomalousPulmonaryVenousConnectionTypeEnum;
  superiorVenaCavaTypeEnum = SuperiorVenaCavaTypeEnum;
  inferiorVenaCavaTypeEnum = InferiorVenaCavaTypeEnum;
  thoracicDiagnosisTypeEnum = ThoracicDiagnosisTypeEnum;
  dignityTypeEnum = DignityTypeEnum;

  constructor(private softTissueHelperService: SoftTissueHelperService, private validationHelperService: ValidationHelperService) {}

  ngOnInit(): void {
    if (compact(Object.values(this.model.spineLocations)).length !== 0) {
      this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.spineLocations));
    }
    if (compact(Object.values(this.model.ribLocations)).length !== 0) {
      this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.ribLocations));
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

  resetThoracicType() {
    this.model.maxWidth = null;
    this.model.pericardialCalcificationsDetails = false;
    this.model.isRight = false;
    this.model.isLeft = false;
    this.model.isPulmonaryArteryEmbolismCentral = false;
    this.model.isPulmonaryArteryEmbolismCentralRight = false;
    this.model.isPulmonaryArteryEmbolismCentralLeft = false;
    this.model.isPulmonaryArteryEmbolismSegmentalRight = false;
    this.model.isPulmonaryArteryEmbolismSegmentalLeft = false;
    this.model.isRidingThrombus = false;
    this.model.diameterCentralPulmonaryArtery = null;
    this.model.thoracicDiagnosisType = ThoracicDiagnosisTypeEnum.None;
    this.model.isSuspicionOf = false;
    this.model.isNormVariantVesselsPulmonaryVeins = false;
    this.model.isSuperiorVenaCava = false;
    this.model.isInferiorVenaCava = false;
    this.model.normVariantVesselsVariantsType = NormVariantVesselsVariantsTypeEnum.None;
    this.model.partialAnomalousPulmonaryVenousConnectionType = PartialAnomalousPulmonaryVenousConnectionTypeEnum.None;
    this.model.superiorVenaCavaType = SuperiorVenaCavaTypeEnum.None;
    this.model.inferiorVenaCavaType = InferiorVenaCavaTypeEnum.None;
    this.model.isMediastinalShiftToTheOppositeSide = false;
    this.model.isCompleteAtelectasis = false;
    this.model.thoracicLocalizationType = ThoracicLocalizationTypeEnum.None;
    this.model.maxDiameter = null;
    this.model.secondPlane = null;
    this.model.thirdPlane = null;
    this.model.dignityType = DignityTypeEnum.None;
    this.model.isAbscess = false;
    this.removeErrorFromSideType();
    this.resetLocalization();
    this.removeErrorFromNormVariantVessels();
  }

  resetLocalization() {
    this.clearLocalizer();
    this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.spineLocations));
    this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.ribLocations));
    this.removeErrorFromSideType();
  }

  removeErrorFromSideType() {
    this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.sideType));
    this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.isLeft));
    this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.isRight));
    this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.thoracicLocalizationType));
    this.model.sideType = SideTypeEnum.None;
  }

  removeErrorFromNormVariantVessels() {
    if (this.model.thoracicType !== this.thoracicFindingType.NormVariantVessels) {
      this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.isNormVariantVesselsPulmonaryVeins));
      this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.isSuperiorVenaCava));
      this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.isInferiorVenaCava));
    }

    if (!this.model.isNormVariantVesselsPulmonaryVeins) {
      this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.normVariantVesselsVariantsType));
    }

    if (!this.model.isSuperiorVenaCava) {
      this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.superiorVenaCavaType));
    }

    if (!this.model.isInferiorVenaCava) {
      this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.inferiorVenaCavaType));
    }
  }

  getRRID(thoracicType) {
    switch (thoracicType) {
      case this.thoracicFindingType.PleuralEffusion:
        return 'ang_c_100318';
      case this.thoracicFindingType.Pneumothorax:
        return 'ang_c_100337';
      case this.thoracicFindingType.Atelectasis:
        return 'ang_c_100342';
      case this.thoracicFindingType.PneumonicConsolidation:
        return 'ang_c_100347';
    }
  }
}
