import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';

import { GenderTypeEnum } from '@enums/shared/gender-type.enum';

@Component({
  selector: 'rr-patient-information',
  templateUrl: './patient-information.component.html',
  styleUrls: ['./patient-information.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class PatientInformationComponent {
  @Input() model: PatientInformationUiModel;
  @Input() genderMandatory = false;
  @Input() isBSA = false;
  @Input() bsaModelProperty = 0;
  @Output() genderChange = new EventEmitter();

  genderTypeEnum: typeof GenderTypeEnum;

  constructor() {
    this.genderTypeEnum = GenderTypeEnum;
  }
}
