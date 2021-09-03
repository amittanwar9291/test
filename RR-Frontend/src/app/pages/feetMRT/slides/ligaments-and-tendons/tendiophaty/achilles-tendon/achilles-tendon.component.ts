import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LigamentsAndTendonsFindingUiModel } from '@models/feetMRT/ui/ligaments-and-tendons/ligaments-and-tendons-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { LocalizationTypeEnum, RuptureTypeEnum } from '@enums/feetMRT/ligaments-and-tendos';
import { RuptureLocalizationTypeEnum } from '@enums/feetMRT/ligaments-and-tendos/rupture-localization-type.enum';

@Component({
  selector: 'rr-achilles-tendon',
  templateUrl: './achilles-tendon.component.html',
  styleUrls: ['./achilles-tendon.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AchillesTendonComponent {
  @Input() model: LigamentsAndTendonsFindingUiModel;
  @Input() w013DifferentialDiagnosis: DropdownModel[];
  localizationType: typeof LocalizationTypeEnum;
  ruptureType: typeof RuptureTypeEnum;
  ruptureLocalizationType: typeof RuptureLocalizationTypeEnum;

  constructor() {
    this.initializeEnums();
  }

  private initializeEnums(): void {
    this.localizationType = LocalizationTypeEnum;
    this.ruptureType = RuptureTypeEnum;
    this.ruptureLocalizationType = RuptureLocalizationTypeEnum;
  }

  public clearRuptureTypeDetails(ruptureType: RuptureTypeEnum): string {
    return ruptureType !== this.model.ruptureType ? 'partialRuptureBlock completeRuptureBlock' : '';
  }
}
