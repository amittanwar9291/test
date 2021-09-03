import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MeningesDiffuseDiagnosisTypeEnum } from '@enums/headMRT/meninges';
import { MeningesFindingUiModel } from '@models/headMRT/ui/meninges/meninges-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

@Component({
  selector: 'rr-differential-diagnosis-diffuse-changes',
  templateUrl: './differential-diagnosis-diffuse-changes.component.html',
  styleUrls: ['./differential-diagnosis-diffuse-changes.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnosisDiffuseChangesComponent {
  @Input() model: MeningesFindingUiModel;
  @Input() diffDiagnosisOptions: DropdownModel[];

  meningesDiffuseDiagnosisType = MeningesDiffuseDiagnosisTypeEnum;

  constructor() {}

  resetDifferentialDiagnosisDependantModel1(): void {
    this.model.isSuspicionOf = false;
    this.model.diffuseDifferentialDiagnosis2 = MeningesDiffuseDiagnosisTypeEnum.None;
  }
}
