import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { SideTypeEnum } from '@enums/headMRT/common/side-type.enum';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { SymmetryTypeEnum } from '@enums/headMRT/facial-skull/symmetry-type.enum';
import { ConchaeTypeEnum } from '@enums/headMRT/facial-skull/ParanasalSinuses/conchae-type.enum';

@Component({
  selector: 'rr-paranasal-sinuses-localization',
  templateUrl: './paranasal-sinuses-localization.component.html',
  styleUrls: ['./paranasal-sinuses-localization.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ParanasalSinusesLocalizationComponent {
  @Input() model: FacialSkullFindingUiModel;
  @Input() w053: DropdownGroupedModel[];

  descriptionTypeEnum = DescriptionTypeEnum;
  sideTypeEnum = SideTypeEnum;
  symmetryTypeEnum = SymmetryTypeEnum;
  conchaeTypeEnum = ConchaeTypeEnum;

  onParanasalSinusesDiagnosis1LocalizationTypeChange() {
    this.model.isSuspicionOf = false;
    this.model.isSubordinate = false;
  }
}
