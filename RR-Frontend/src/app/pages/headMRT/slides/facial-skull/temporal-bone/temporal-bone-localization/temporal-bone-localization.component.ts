import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { SideTypeEnum } from '@enums/headMRT/common/side-type.enum';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { FacialSkullDiagnosisTypeEnum } from '@enums/headMRT/facial-skull/facial-skull-diagnosis-type.enum';
import { SymmetryTypeEnum } from '@enums/headMRT/facial-skull/symmetry-type.enum';

@Component({
  selector: 'rr-temporal-bone-localization',
  templateUrl: './temporal-bone-localization.component.html',
  styleUrls: ['./temporal-bone-localization.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TemporalBoneLocalizationComponent {
  @Input() model: FacialSkullFindingUiModel;
  @Input() w047: DropdownGroupedModel[];

  facialSkullDiagnosisTypeEnum = FacialSkullDiagnosisTypeEnum;
  descriptionTypeEnum = DescriptionTypeEnum;
  sideTypeEnum = SideTypeEnum;
  symmetryTypeEnum = SymmetryTypeEnum;

  resetDifferentialDiagnosisDependantModel1(): void {
    this.model.isSuspicionOf = false;
    this.model.isSubordinate = false;
  }
}
