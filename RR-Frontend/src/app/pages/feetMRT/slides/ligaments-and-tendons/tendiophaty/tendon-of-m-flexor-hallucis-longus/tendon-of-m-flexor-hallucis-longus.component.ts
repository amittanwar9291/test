import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LigamentsAndTendonsFindingUiModel } from '@models/feetMRT/ui/ligaments-and-tendons/ligaments-and-tendons-finding-ui.model';
import { RuptureTypeEnum } from '@enums/feetMRT/ligaments-and-tendos';
import { LocalizationOfTheTendonRuptureTypeEnum } from '@enums/feetMRT/ligaments-and-tendos/localization-of-the-tendon-rupture-type.enum';

@Component({
  selector: 'rr-tendon-of-m-flexor-hallucis-longus',
  templateUrl: './tendon-of-m-flexor-hallucis-longus.component.html',
  styleUrls: ['./tendon-of-m-flexor-hallucis-longus.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TendonOfMFlexorHallucisLongusComponent {
  @Input() model: LigamentsAndTendonsFindingUiModel;

  ruptureType: typeof RuptureTypeEnum;
  localizationOfTendonRuptureType: typeof LocalizationOfTheTendonRuptureTypeEnum;

  constructor() {
    this.initializeEnums();
  }

  private initializeEnums(): void {
    this.ruptureType = RuptureTypeEnum;
    this.localizationOfTendonRuptureType = LocalizationOfTheTendonRuptureTypeEnum;
  }

  public clearRuptureTypeDetails(ruptureType: RuptureTypeEnum): string {
    return ruptureType !== this.model.ruptureType ? 'ruptureTypeDetailsBlockOne ruptureTypeDetailsBlockTwo' : '';
  }
}
