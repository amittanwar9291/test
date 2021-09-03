import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { LocalizersHelperService } from '@services/shared/localizers/localizers-helper.service';

import { MonthYearModel } from '@models/shared/month-year/month-year.model';
import { PreviousTherapiesUi } from '@models/mammaMRT/ui/anamnesis/previous-therapies-ui.model';

import { TimeStatusType, TheraphyType, SideType } from '@enums/shared/mamma/anamnesis-medical-history';
import { IBreastReconstructionTranslationsKeys } from '@interfaces/shared/mamma/breast-reconstruction-translations-keys.interface';

@Component({
  selector: 'rr-previous-therapies',
  templateUrl: './previous-therapies.component.html',
  styleUrls: ['./previous-therapies.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class PreviousTherapiesComponent {
  @Input() model: PreviousTherapiesUi;
  reconstructionLabels: IBreastReconstructionTranslationsKeys;

  augumentation = [TheraphyType.BreastAugmentation, TheraphyType.BreastReduction, TheraphyType.BET, TheraphyType.BreastAmputation];
  fineNeedle = [TheraphyType.FineNeedleAspiration, TheraphyType.VacuumBiopsy, TheraphyType.OpenBiopsy];
  antiHormonal = [TheraphyType.AntiHormonalTherapy, TheraphyType.Chemotherapy, TheraphyType.HormonalContraception];
  antiHormonalWithRadio = [...this.antiHormonal, TheraphyType.Radio];
  findingType = TheraphyType;
  timeStatusType = TimeStatusType;

  constructor(private localizersHelper: LocalizersHelperService) {
    this.reconstructionLabels = {
      reconstructionWith: 'mammaMX.medicalHistory.reconstructionWith.value',
      r: 'mammaMX.medicalHistory.r.value',
      l: 'mammaMX.medicalHistory.l.value',
      fatGrafts: 'mammaMX.medicalHistory.fatGrafts.value',
      silicone: 'mammaMX.medicalHistory.silicone.value'
    };
  }

  get isAugmentationOrReductionOrBET(): boolean {
    return this.augumentation.includes(this.model.findingType);
  }

  get isFineNeedleOrVacuumOrOpenBiopsy(): boolean {
    return this.fineNeedle.includes(this.model.findingType);
  }

  get isAntiHormonalOrChemoOrHormonal(): boolean {
    return this.antiHormonal.includes(this.model.findingType);
  }

  get isAntiHormonalOrChemoOrHormonalOrRadio(): boolean {
    return this.antiHormonalWithRadio.includes(this.model.findingType);
  }

  updateReconstruction(): void {
    if (
      !this.localizersHelper.hasAnyElementSelectedInPart(this.model.breastLocation, 'left') &&
      this.model.reconstruction.leftReconstructionLocalization !== SideType.None
    ) {
      this.model.reconstruction.leftReconstructionLocalization = SideType.None;
    }

    if (
      !this.localizersHelper.hasAnyElementSelectedInPart(this.model.breastLocation, 'right') &&
      this.model.reconstruction.rightReconstructionLocalization !== SideType.None
    ) {
      this.model.reconstruction.rightReconstructionLocalization = SideType.None;
    }
  }

  resetDate(): void {
    this.model.monthyear = new MonthYearModel();
  }
}
