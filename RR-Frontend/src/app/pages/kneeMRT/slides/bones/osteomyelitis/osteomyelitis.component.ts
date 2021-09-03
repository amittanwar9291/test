import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { compact } from 'lodash';
import { KneeBonesFindingUiModel } from '@models/kneeMRT/ui/bones/knee-bones-finding-ui.model';

import { StageTypeEnum, DifferentialDiagnosisTypeEnum } from '@enums/kneeMRT/bones/';
import { nameof } from 'ts-simple-nameof';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

@Component({
  selector: 'rr-osteomyelitis',
  templateUrl: './osteomyelitis.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OsteomyelitisComponent {
  showLargeLocalizer = false;

  stageType: typeof StageTypeEnum;
  differentialDiagnosisType: typeof DifferentialDiagnosisTypeEnum;

  @Input() model: KneeBonesFindingUiModel;
  @Input() isCMYes: boolean;

  constructor(private validationHelperService: ValidationHelperService) {
    this.stageType = StageTypeEnum;
    this.differentialDiagnosisType = DifferentialDiagnosisTypeEnum;
  }

  toggleLocalizer(): void {
    this.showLargeLocalizer = !this.showLargeLocalizer;
    if (compact(Object.values(this.model.kneeLocation)).length > 0) {
      this.validationHelperService.removeError(nameof<KneeBonesFindingUiModel>(m => m.kneeLocation));
    }
  }
}
