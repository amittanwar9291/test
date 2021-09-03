import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { ChandlerClassificationFullTypeEnum } from '@enums/headMRT/facial-skull/Orbita/chandler-classification-full-type.enum';
import { OrbitaDiagnosisTypeEnum } from '@enums/headMRT/facial-skull/Orbita/orbita-diagnosis-type.enum';

@Component({
  selector: 'rr-orbita-differential-diagnosis',
  templateUrl: './orbita-differential-diagnosis.component.html',
  styleUrls: ['./orbita-differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OrbitaDifferentialDiagnosisComponent {
  @Input() model: FacialSkullFindingUiModel;
  @Input() w049: DropdownGroupedModel[];
  @Input() w050: DropdownGroupedModel[];

  chandlerClassificationFullTypeEnum = ChandlerClassificationFullTypeEnum;
  orbitaDiagnosisTypeEnum = OrbitaDiagnosisTypeEnum;

  descriptionTypeEnum = DescriptionTypeEnum;

  onOrbitaDiagnosis1TypeChange(): void {
    this.model.isSuspicionOf = false;
    this.model.isSubordinate = false;
    if (!this.isAnyDiagnosisSubperiostealAbscess()) {
      this.model.chandlerClassificationDiagnosisType = ChandlerClassificationFullTypeEnum.None;
    }
  }

  onOrbitaDiagnosis2TypeChange(): void {
    this.model.isSubordinate = false;
    if (!this.isAnyDiagnosisSubperiostealAbscess()) {
      this.model.chandlerClassificationDiagnosisType = ChandlerClassificationFullTypeEnum.None;
    }
  }

  onOrbitaDiagnosis3TypeChange(): void {
    if (!this.isAnyDiagnosisSubperiostealAbscess()) {
      this.model.chandlerClassificationDiagnosisType = ChandlerClassificationFullTypeEnum.None;
    }
  }

  isAnyDiagnosisSubperiostealAbscess(): boolean {
    return (
      this.model.orbitaDiagnosis1Type === OrbitaDiagnosisTypeEnum.SubperiostealAbscess ||
      this.model.orbitaDiagnosis2Type === OrbitaDiagnosisTypeEnum.SubperiostealAbscess ||
      this.model.orbitaDiagnosis3Type === OrbitaDiagnosisTypeEnum.SubperiostealAbscess
    );
  }
}
