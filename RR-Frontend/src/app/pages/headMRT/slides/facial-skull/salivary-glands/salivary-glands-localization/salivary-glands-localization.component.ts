import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SalivaryGlandsDiagnosisTypeEnum } from '@enums/headMRT/facial-skull/SalivaryGlands/salivary-glands-diagnosis-type.enum';
import { SymmetryTypeEnum } from '@enums/headMRT/facial-skull/symmetry-type.enum';

@Component({
  selector: 'rr-salivary-glands-localization',
  templateUrl: './salivary-glands-localization.component.html',
  styleUrls: ['./salivary-glands-localization.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SalivaryGlandsLocalizationComponent {
  @Input() model: FacialSkullFindingUiModel;
  @Input() w058: DropdownModel[];

  differentialDiagnosisType = SalivaryGlandsDiagnosisTypeEnum;
  descriptionType = DescriptionTypeEnum;
  symmetryTypeEnum = SymmetryTypeEnum;

  onSalivaryGlandsDiagnosis1LocalizationTypeChange(): void {
    this.model.isSuspicionOf = false;
    this.model.isSubordinate = false;
  }
}
