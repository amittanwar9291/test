import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LigamentsAndTendonsFindingUiModel } from '@models/feetMRT/ui/ligaments-and-tendons/ligaments-and-tendons-finding-ui.model';
import { AssociatedFindingsTypeEnum } from '@enums/feetMRT/ligaments-and-tendos/associated-findings-type.enum';
import { RuptureTypeEnum } from '@enums/feetMRT/ligaments-and-tendos';

@Component({
  selector: 'rr-tendon-of-m-peroneus-longus-brevis',
  templateUrl: './tendon-of-m-peroneus-longus-brevis.component.html',
  styleUrls: ['./tendon-of-m-peroneus-longus-brevis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TendonOfMPeroneusLongusBrevisComponent {
  @Input() model: LigamentsAndTendonsFindingUiModel;

  associatedFindingsType = AssociatedFindingsTypeEnum;
  ruptureType = RuptureTypeEnum;

  public bothPathologiesSelected(): boolean {
    return this.model.isTear && this.model.isTendinopathy;
  }

  public clearRuptureTypeDetails(ruptureType: RuptureTypeEnum): string {
    return ruptureType !== this.model.ruptureType ? 'ruptureTypeDetailsBlockOne ruptureTypeDetailsBlockTwo' : '';
  }
}
