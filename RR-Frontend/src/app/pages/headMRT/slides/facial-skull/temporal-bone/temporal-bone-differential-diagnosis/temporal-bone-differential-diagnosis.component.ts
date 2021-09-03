import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { FacialSkullDiagnosisTypeEnum } from '@enums/headMRT/facial-skull/facial-skull-diagnosis-type.enum';

@Component({
  selector: 'rr-temporal-bone-differential-diagnosis',
  templateUrl: './temporal-bone-differential-diagnosis.component.html',
  styleUrls: ['./temporal-bone-differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TemporalBoneDifferentialDiagnosisComponent {
  @Input() model: FacialSkullFindingUiModel;
  @Input() w047: DropdownGroupedModel[];
  @Input() w048: DropdownGroupedModel[];

  facialSkullDiagnosisTypeEnum = FacialSkullDiagnosisTypeEnum;
  descriptionTypeEnum = DescriptionTypeEnum;

  resetDifferentialDiagnosisDependantModel1(): void {
    this.model.isSuspicionOf = false;
    this.model.isSubordinate = false;
  }

  resetDifferentialDiagnosisDependantModel2(): void {
    this.model.isSubordinate = false;
  }
}
