import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';
import { FacialSkullDiagnosisTypeEnum } from '@enums/headMRT/facial-skull/facial-skull-diagnosis-type.enum';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';

@Component({
  selector: 'rr-skull-base-differential-diagnosis',
  templateUrl: './skull-base-differential-diagnosis.component.html',
  styleUrls: ['./skull-base-differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SkullBaseDifferentialDiagnosisComponent {
  @Input() model: FacialSkullFindingUiModel;
  @Input() w045: DropdownGroupedModel[];
  @Input() w046: DropdownGroupedModel[];

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
