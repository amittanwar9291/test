import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LigamentsAndTendonsFindingUiModel } from '@models/feetMRT/ui/ligaments-and-tendons/ligaments-and-tendons-finding-ui.model';
import {
  AgeOfTheLesionTypeEnum,
  LigamentaLocalisationTypeEnum,
  LigamentaTypeEnum,
  PartialRupturetTypeEnum,
  RuptureTypeEnum
} from '@enums/feetMRT/ligaments-and-tendos';

@Component({
  selector: 'rr-ligamenta',
  templateUrl: './ligamenta.component.html',
  styleUrls: ['./ligamenta.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LigamentaComponent {
  @Input() model: LigamentsAndTendonsFindingUiModel;
  ligamentaType: typeof LigamentaTypeEnum;
  ligamentaLocalisationTypes: typeof LigamentaLocalisationTypeEnum;
  ageOfTheLesionType: typeof AgeOfTheLesionTypeEnum;
  partialRuptureType: typeof PartialRupturetTypeEnum;
  ruptureType: typeof RuptureTypeEnum;

  readonly ruptureOfTheSyndesmosisTibiofibularisToResetIds =
    'ruptureOfLateralCollateralLigamentsContainer medialCollateralLigamentRuptureContainer ageOfTheLesionRuptureOfLateralCollateralLigamentsContainer ageOfTheLesionMedialCollateralLigamentRuptureContainer';
  readonly ruptureOfLateralCollateralLigamentsToResetIds =
    'ruptureOfTheSyndesmosisTibiofibularisContainer medialCollateralLigamentRuptureContainer ageOfTheLesionRuptureOfTheSyndesmosisTibiofibularisContainer ageOfTheLesionMedialCollateralLigamentRuptureContainer';
  readonly medialCollateralLigamentRuptureToResetIds =
    'ruptureOfTheSyndesmosisTibiofibularisContainer ruptureOfLateralCollateralLigamentsContainer ageOfTheLesionRuptureOfTheSyndesmosisTibiofibularisContainer ageOfTheLesionRuptureOfLateralCollateralLigamentsContainer';

  constructor() {
    this.initializeEnums();
  }

  initializeEnums(): void {
    this.ligamentaType = LigamentaTypeEnum;
    this.ligamentaLocalisationTypes = LigamentaLocalisationTypeEnum;
    this.ageOfTheLesionType = AgeOfTheLesionTypeEnum;
    this.partialRuptureType = PartialRupturetTypeEnum;
    this.ruptureType = RuptureTypeEnum;
  }

  getMainContainerClass(): string {
    return this.isLigamentaType(this.ligamentaType.None) ? 'main-container-ligamenta-type-none' : 'main-container';
  }

  isLigamentaType(typeTOCheck: LigamentaTypeEnum): boolean {
    return this.model.ligamentaType === typeTOCheck;
  }
}
