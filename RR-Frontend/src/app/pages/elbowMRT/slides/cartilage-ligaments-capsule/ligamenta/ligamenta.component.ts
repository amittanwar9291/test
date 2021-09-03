import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import {
  CompleteRuptureLocalizationType,
  ExtentOfTearType,
  InstabilityRingTheoryType,
  LigamentsLocalizationType
} from '@enums/elbowMRT/cartilage/ligaments';

import { CartilageLigamentsCapsuleFindingUiModel } from '@models/elbowMRT/ui/cartilage-ligaments-capsule/cartilage-ligaments-capsule-finding-ui.model';

@Component({
  selector: 'rr-ligamenta',
  templateUrl: './ligamenta.component.html',
  styleUrls: ['./ligamenta.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LigamentaComponent {
  @Input() model: CartilageLigamentsCapsuleFindingUiModel;

  ligamentsLocalizationType = LigamentsLocalizationType;
  instabilityRingTheoryType = InstabilityRingTheoryType;
  extentOfTearType = ExtentOfTearType;
  completeRuptureLocalizationType = CompleteRuptureLocalizationType;

  previouslySelectedCollateralLigamentTear = LigamentsLocalizationType.None;

  isRupture(): boolean {
    return [LigamentsLocalizationType.LateralCollateralLigamentTear, LigamentsLocalizationType.MedialCollateralLigamentTear].includes(
      this.model.ligamentsLocalizationType
    );
  }

  onClickMedialCollateralLigamentTear(): void {
    this.clearLateralCollateralLigament();
    this.clearInstabilityAfterODriscollRingTheory();
    this.clearExtentOfTear(true, LigamentsLocalizationType.MedialCollateralLigamentTear);
  }

  onClickLateralCollateralLigamentTear(): void {
    this.clearMedialCollateralLigament();
    this.clearInstabilityAfterODriscollRingTheory();
    this.clearExtentOfTear(true, LigamentsLocalizationType.LateralCollateralLigamentTear);
  }

  onClickDisplacementsWithLesionsOfMCLAndLCL(): void {
    this.clearMedialCollateralLigament();
    this.clearLateralCollateralLigament();
    this.clearExtentOfTear();
  }

  private clearMedialCollateralLigament(): void {
    this.model.isAnteriorBundle = false;
    this.model.isPosteriorBundle = false;
    this.model.isTransversalBundle = false;
    this.model.isLesionOfThePronatorFlexorTendonComplex = false;
  }

  private clearLateralCollateralLigament(): void {
    this.model.isRadialCollateralLigament = false;
    this.model.isLateralUlnarCollateralLigament = false;
    this.model.isAnnularLigament = false;
    this.model.isAccessoryLateralCollateralLigament = false;
    this.model.isAnconeusMuscleLesionExtensorTendonComplex = false;
  }

  private clearInstabilityAfterODriscollRingTheory(): void {
    this.model.instabilityRingTheoryType = InstabilityRingTheoryType.None;
  }

  private clearExtentOfTear(clearConditionally = false, selectedCollateralLigamentTear = LigamentsLocalizationType.None): void {
    let canClear = false;

    if (clearConditionally) {
      if (selectedCollateralLigamentTear !== this.previouslySelectedCollateralLigamentTear) {
        this.previouslySelectedCollateralLigamentTear = selectedCollateralLigamentTear;
        canClear = true;
      }
    } else {
      canClear = true;
    }

    if (canClear) {
      this.clearExtentOfTearControls();
      this.clearCompleteTearDetails();
      this.clearPartialTearDetails();
    }
  }

  private clearExtentOfTearControls(): void {
    this.model.extentOfTearType = ExtentOfTearType.None;
  }

  clearCompleteTearDetails(): void {
    this.model.isLocalization = false;
    this.model.completeRuptureLocalizationType = CompleteRuptureLocalizationType.None;
    this.model.isRetraction = false;
    this.model.isAdjacentSoftTissueEdema = false;
    this.model.isConcomitantInjuriesOfTheAdjacentMuscleEnthesis = false;
  }

  clearPartialTearDetails(): void {
    this.model.isIllDefinedMargin = false;
    this.model.isIncreasedSignal = false;
    this.model.isThickening = false;

    this.clearThickeningDetails();

    this.model.isTSign = false;
    this.model.isWavyAppearance = false;
  }

  clearThickeningDetails(): void {
    this.model.isMoreThan4MmDiameter = false;
  }
}
