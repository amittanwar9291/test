import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { FacialSkullDiagnosisTypeEnum } from '@enums/headMRT/facial-skull/facial-skull-diagnosis-type.enum';

@Component({
  selector: 'rr-skull-differential-diagnosis',
  templateUrl: './skull-differential-diagnosis.component.html',
  styleUrls: ['./skull-differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SkullDifferentialDiagnosisComponent {
  @Input() model: FacialSkullFindingUiModel;
  @Input() w060: DropdownGroupedModel[];
  @Input() w061: DropdownGroupedModel[];

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
