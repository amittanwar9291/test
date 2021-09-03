import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LigamentsAndTendonsFindingUiModel } from '@models/feetMRT/ui/ligaments-and-tendons/ligaments-and-tendons-finding-ui.model';
import { RuptureTypeEnum } from '@enums/feetMRT/ligaments-and-tendos';

@Component({
  selector: 'rr-tendon-of-m-flexor-digitorum-longus',
  templateUrl: './tendon-of-m-flexor-digitorum-longus.component.html',
  styleUrls: ['./tendon-of-m-flexor-digitorum-longus.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TendonOfMFlexorDigitorumLongusComponent {
  @Input() model: LigamentsAndTendonsFindingUiModel;
  ruptureType: typeof RuptureTypeEnum;

  constructor() {
    this.initializeEnums();
  }

  private initializeEnums(): void {
    this.ruptureType = RuptureTypeEnum;
  }

  public clearRuptureTypeDetails(ruptureType: RuptureTypeEnum): string {
    return ruptureType !== this.model.ruptureType ? 'ruptureTypeDetailsBlockOne ruptureTypeDetailsBlockTwo' : '';
  }
}
