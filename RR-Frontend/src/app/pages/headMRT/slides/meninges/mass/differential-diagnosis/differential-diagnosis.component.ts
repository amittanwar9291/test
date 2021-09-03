import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MeningesMassDiagnosisTypeEnum } from '@enums/headMRT/meninges';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { MeningesFindingUiModel } from '@models/headMRT/ui/meninges/meninges-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

@Component({
  selector: 'rr-differential-diagnosis',
  templateUrl: './differential-diagnosis.component.html',
  styleUrls: ['./differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnosisComponent {
  @Input() model: MeningesFindingUiModel;
  @Input() diffDiagnosisOptions: DropdownModel[];
  @Input() diffDiagnosisOptions2: DropdownModel[];

  descriptionType = DescriptionTypeEnum;
  meningesMassDiagnosisType = MeningesMassDiagnosisTypeEnum;

  constructor() {}

  resetDifferentialDiagnosisDependantModel1(): void {
    this.model.isSuspicionOf = false;
    this.model.isSubordinate = false;
    this.model.massDifferentialDiagnosis2 = MeningesMassDiagnosisTypeEnum.None;
  }

  resetDifferentialDiagnosisDependantModel2(): void {
    this.model.isSubordinate = false;
    this.model.massDifferentialDiagnosis3 = MeningesMassDiagnosisTypeEnum.None;
  }
}
