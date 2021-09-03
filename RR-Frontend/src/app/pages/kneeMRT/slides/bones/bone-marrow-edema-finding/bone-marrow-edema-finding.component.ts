import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { compact } from 'lodash';

import { KneeBonesFindingUiModel } from '@models/kneeMRT/ui/bones/knee-bones-finding-ui.model';
import { FormValidationService } from '@services/shared/validation/form-validation.service';
import { nameof } from 'ts-simple-nameof';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

@Component({
  selector: 'rr-bone-marrow-edema',
  templateUrl: './bone-marrow-edema-finding.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class BoneMarrowEdemaFindingComponent {
  showLargeLocalizer = false;

  @Input() model: KneeBonesFindingUiModel;
  constructor(private validationHelperService: ValidationHelperService) {}

  toggleLocalizer(): void {
    this.showLargeLocalizer = !this.showLargeLocalizer;
    if (compact(Object.values(this.model.kneeExtensionLocation)).length > 0) {
      this.validationHelperService.removeError(nameof<KneeBonesFindingUiModel>(m => m.kneeExtensionLocation));
    }
  }
}
