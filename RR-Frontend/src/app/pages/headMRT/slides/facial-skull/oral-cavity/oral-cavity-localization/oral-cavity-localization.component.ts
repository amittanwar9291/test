import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';
import { SideTypeEnum } from '@enums/headMRT/common/side-type.enum';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { SymmetryTypeEnum } from '@enums/headMRT/facial-skull/symmetry-type.enum';

@Component({
  selector: 'rr-oral-cavity-localization',
  templateUrl: './oral-cavity-localization.component.html',
  styleUrls: ['./oral-cavity-localization.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OralCavityLocalizationComponent {
  @Input() model: FacialSkullFindingUiModel;
  @Input() w055: DropdownGroupedModel[];

  descriptionTypeEnum = DescriptionTypeEnum;
  sideTypeEnum = SideTypeEnum;
  symmetryTypeEnum = SymmetryTypeEnum;

  onOralCavityDiagnosis1LocalizationTypeChange(): void {
    this.model.isSuspicionOf = false;
    this.model.isSubordinate = false;
  }
}
