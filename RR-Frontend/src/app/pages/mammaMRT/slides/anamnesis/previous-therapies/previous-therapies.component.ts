import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { PreviousTherapiesUi } from '@models/mammaMRT/ui/anamnesis/previous-therapies-ui.model';

import { TimeStatusType, TheraphyType, SideType } from '@enums/shared/mamma/anamnesis-medical-history';
import { IBreastReconstructionTranslationsKeys } from '@interfaces/shared/mamma/breast-reconstruction-translations-keys.interface';

@Component({
  selector: 'rr-previous-therapies',
  templateUrl: './previous-therapies.component.html',
  styleUrls: ['./previous-therapies.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PreviousTherapiesComponent {
  @Input() model: PreviousTherapiesUi;
  reconstructionLabels: IBreastReconstructionTranslationsKeys;

  augumentation = [TheraphyType.BreastAugmentation, TheraphyType.BreastReduction, TheraphyType.BET];
  fineNeedle = [TheraphyType.FineNeedleAspiration, TheraphyType.VacuumBiopsy, TheraphyType.OpenBiopsy];
  antiHormonal = [TheraphyType.AntiHormonalTherapy, TheraphyType.Chemotherapy, TheraphyType.HormonalContraception];

  findingType = TheraphyType;
  timeStatusType = TimeStatusType;

  constructor() {
    this.reconstructionLabels = {
      reconstructionWith: 'mammaMRT.anamnesis.reconstructionWith.value',
      r: 'mammaMRT.anamnesis.r.value',
      l: 'mammaMRT.anamnesis.l.value',
      fatGrafts: 'mammaMRT.anamnesis.fatGrafts.value',
      silicone: 'mammaMRT.anamnesis.silicone.value'
    };
  }

  isAugmentationOrReductionOrBET(): boolean {
    return this.augumentation.includes(this.model.findingType);
  }

  isFineNeedleOrVacuumOrOpenBiopsy(): boolean {
    return this.fineNeedle.includes(this.model.findingType);
  }

  isAugmentationOrFineNeedleOrAmputationOrPunch(): boolean {
    return (
      this.isAugmentationOrReductionOrBET() === true ||
      this.isFineNeedleOrVacuumOrOpenBiopsy() === true ||
      this.model.findingType === this.findingType.BreastAmputation ||
      this.model.findingType === this.findingType.PunchBiopsy
    );
  }

  isAntiHormonalOrChemoOrHormonal(): boolean {
    return this.antiHormonal.includes(this.model.findingType);
  }

  updateReconstruction(): void {
    if (!this.model.breastLocation.left && this.model.reconstruction.leftReconstructionLocalization !== SideType.None) {
      this.model.reconstruction.leftReconstructionLocalization = SideType.None;
    }
    if (!this.model.breastLocation.right && this.model.reconstruction.rightReconstructionLocalization !== SideType.None) {
      this.model.reconstruction.rightReconstructionLocalization = SideType.None;
    }
  }
}
