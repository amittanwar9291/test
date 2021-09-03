import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftTissueFindingUiModel } from '@models/elbowMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

@Component({
  selector: 'rr-differential-diagnosis',
  templateUrl: './differential-diagnosis.component.html',
  styleUrls: ['../soft-tissue-tumor.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnosisComponent {
  @Input() model: SoftTissueFindingUiModel;
  @Input() differentialDiagnosis1Options: DropdownModel[];
  @Input() differentialDiagnosis2Options: DropdownModel[];

  descriptionType: typeof DescriptionTypeEnum;

  constructor() {
    this.descriptionType = DescriptionTypeEnum;
  }

  resetIsSuspectedDiagnosis(): void {
    this.model.isSuspectedDiagnosis = false;
  }

  resetIsSecondary(): void {
    this.model.isSecondary = false;
  }
}
