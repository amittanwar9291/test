import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';
import { SideTypeEnum } from '@enums/headMRT/common/side-type.enum';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { SymmetryTypeEnum } from '@enums/headMRT/facial-skull/symmetry-type.enum';

@Component({
  selector: 'rr-skull-localization',
  templateUrl: './skull-localization.component.html',
  styleUrls: ['./skull-localization.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SkullLocalizationComponent {
  @Input() model: FacialSkullFindingUiModel;
  @Input() w060: DropdownGroupedModel[];

  descriptionTypeEnum = DescriptionTypeEnum;
  sideTypeEnum = SideTypeEnum;
  symmetryTypeEnum = SymmetryTypeEnum;

  onDifferentialDiagnosis1LocalizationTypeChange(): void {
    this.model.isSuspicionOf = false;
    this.model.isSubordinate = false;
  }

  onSizeChange() {
    if (!this.model.size) {
      this.model.size2ndPlane = null;
      this.model.size3rdPlane = null;
    }
  }

  onSize2ndPlaneChange() {
    if (!this.model.size2ndPlane) {
      this.model.size3rdPlane = null;
    }
  }
}
