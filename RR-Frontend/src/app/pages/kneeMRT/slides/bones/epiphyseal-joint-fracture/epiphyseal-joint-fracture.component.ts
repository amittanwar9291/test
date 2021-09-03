import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { compact } from 'lodash';

import { nameof } from 'ts-simple-nameof';

import { FormValidationService } from '@services/shared/validation/form-validation.service';

import { KneeBonesFindingUiModel } from '@models/kneeMRT/ui/bones/knee-bones-finding-ui.model';
import { KneeDetails } from '@models/kneeMRT/ui/knee/knee-details-ui.model';

import { BonesEpiphysealJointDetailsTypeEnum, AitkenClassificationTypeEnum, BonesEpiphysealJointTypeEnum } from '@enums/kneeMRT/bones/';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

@Component({
  selector: 'rr-epiphyseal-joint-fracture',
  templateUrl: './epiphyseal-joint-fracture.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class EpiphysealJointFractureComponent {
  showLargeLocalizer: boolean;

  @Input() model: KneeBonesFindingUiModel;

  bonesEpiphysealJointType: typeof BonesEpiphysealJointTypeEnum;
  bonesEpiphysealJointDetailsType: typeof BonesEpiphysealJointDetailsTypeEnum;
  aitkenClassificationType: typeof AitkenClassificationTypeEnum;

  constructor(private validationHelperService: ValidationHelperService) {
    this.bonesEpiphysealJointType = BonesEpiphysealJointTypeEnum;
    this.bonesEpiphysealJointDetailsType = BonesEpiphysealJointDetailsTypeEnum;
    this.aitkenClassificationType = AitkenClassificationTypeEnum;
  }

  toggleLocalizer(): void {
    this.showLargeLocalizer = !this.showLargeLocalizer;
    if (compact(Object.values(this.model.kneeLocation)).length > 0) {
      this.validationHelperService.removeError(nameof<KneeBonesFindingUiModel>(m => m.kneeLocation));
    }
  }

  clearLocalizer(): void {
    this.model.kneeLocation = new KneeDetails();
    this.validationHelperService.removeError(nameof<KneeBonesFindingUiModel>(m => m.kneeLocation));
  }
}
