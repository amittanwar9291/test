import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LigamentsAndTendonsFindingUiModel } from '@models/feetMRT/ui/ligaments-and-tendons/ligaments-and-tendons-finding-ui.model';
import { RuptureTypeEnum } from '@enums/feetMRT/ligaments-and-tendos';

@Component({
  selector: 'rr-tendon-of-the-posterior-tibialis-muscle',
  templateUrl: './tendon-of-the-posterior-tibialis-muscle.component.html',
  styleUrls: ['./tendon-of-the-posterior-tibialis-muscle.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TendonOfThePosteriorTibialisMuscleComponent {
  @Input() model: LigamentsAndTendonsFindingUiModel;

  ruptureType: typeof RuptureTypeEnum;

  constructor() {
    this.initializeEnums();
  }

  private initializeEnums(): void {
    this.ruptureType = RuptureTypeEnum;
  }

  public resetPseudotumorOnTheBack(): void {
    if (this.model.retractionInMm === null) {
      this.model.isPseudotumorOnTheBackOfTheFoot = false;
    }
  }

  public clearRuptureTypeDetails(ruptureType: RuptureTypeEnum): string {
    return ruptureType !== this.model.ruptureType ? 'ruptureTypeDetailsBlockOne ruptureTypeDetailsBlockTwo' : '';
  }
}
