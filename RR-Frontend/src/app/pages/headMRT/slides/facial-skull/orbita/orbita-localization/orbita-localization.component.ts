import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { SideTypeEnum } from '@enums/headMRT/common/side-type.enum';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { SymmetryTypeEnum } from '@enums/headMRT/facial-skull/symmetry-type.enum';
import { ChandlerClassificationFullTypeEnum } from '@enums/headMRT/facial-skull/Orbita/chandler-classification-full-type.enum';
import { OrbitaDiagnosisTypeEnum } from '@enums/headMRT/facial-skull/Orbita/orbita-diagnosis-type.enum';

@Component({
  selector: 'rr-orbita-localization',
  templateUrl: './orbita-localization.component.html',
  styleUrls: ['./orbita-localization.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OrbitaLocalizationComponent {
  @Input() model: FacialSkullFindingUiModel;
  @Input() w049: DropdownGroupedModel[];

  chandlerClassificationFullTypeEnum = ChandlerClassificationFullTypeEnum;

  descriptionType = DescriptionTypeEnum;
  sideTypeEnum = SideTypeEnum;
  symmetryTypeEnum = SymmetryTypeEnum;

  constructor() {}

  resetDifferentialDiagnosisDependantModel1(): void {
    this.model.isSuspicionOf = false;
    this.model.isSubordinate = false;
    this.model.chandlerClassificationLocalizationType = ChandlerClassificationFullTypeEnum.None;
    this.model.chandlerClassificationDiagnosisType = ChandlerClassificationFullTypeEnum.None;
  }

  isDiagnosisSubperiostealAbscess(): boolean {
    return this.model.orbitaDiagnosis1LocalizationType === OrbitaDiagnosisTypeEnum.SubperiostealAbscess;
  }
}
