import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { DetailEnum, BandPortionEnum, DetailLocalizationEnum, RibbonsFindingTypeEnum } from '@enums/kneeMRT/ribbons';

import { RibbonsFindingUiModel } from '@models/kneeMRT/ui/ribbons/ribbons-finding-ui.model';

@Component({
  selector: 'rr-collateral-ligaments',
  templateUrl: './collateral-ligaments.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CollateralLigamentsComponent implements OnInit {
  @Input() isMedial: boolean;
  @Input() model: RibbonsFindingUiModel;

  detail: typeof DetailEnum;
  bandPortion: typeof BandPortionEnum;
  detailLocalization: typeof DetailLocalizationEnum;
  findingType: typeof RibbonsFindingTypeEnum;

  previousDetailRadioSelected: DetailEnum;

  constructor() {
    this.detail = DetailEnum;
    this.bandPortion = BandPortionEnum;
    this.detailLocalization = DetailLocalizationEnum;
    this.findingType = RibbonsFindingTypeEnum;
  }

  ngOnInit() {
    this.previousDetailRadioSelected = this.model.detail;
  }

  clearCollateralLigament(segmentToClear: DetailEnum) {
    if (this.previousDetailRadioSelected === segmentToClear) {
      return;
    }

    if (segmentToClear !== DetailEnum.SprainGradeOneInjury) {
      this.model.isBursitisBetweenDeepAndMidLayers = false;
    }
    if (segmentToClear !== DetailEnum.PartialTearGradeTwoInjury) {
      this.model.detailLocalization = DetailLocalizationEnum.None;
      this.model.isRetracted = false;
      this.model.dimensionGrad3 = null;

      this.model.isLateralCollateralLigament = false;
      this.model.isTractusIliotibialis = false;
      this.model.isBicepsFemorisTendon = false;
      this.model.isLiggPopliteofibulare = false;
      this.model.isLigMeniscopliteale = false;
    }
    if (segmentToClear !== DetailEnum.CompleteRuptureGradeThreeInjury) {
      this.model.bandPortion = BandPortionEnum.None;
      this.model.detailLocalization = DetailLocalizationEnum.None;
      this.model.isRetracted = false;
      this.model.dimensionGrad2 = null;
    }
    if (segmentToClear !== DetailEnum.BursitisBetweenDeepAndMiddleLayers) {
      this.model.isDistortionGrade1Injury = false;
    }
    if (segmentToClear !== DetailEnum.BonyLigamentRupture) {
      this.model.isSegondFracture = false;
      this.model.isAvulsionTibia = false;
      this.model.isRuptureOfAnteriorCruciateLigament = false;
      this.model.isArcuateSign = false;
      this.model.isAvulsionFrakturFibula = false;
      this.model.isPullOutPosterolateralCapsule = false;
      this.model.isPosteriorCruciateLigament = false;
    }

    this.previousDetailRadioSelected = segmentToClear;
  }
}
