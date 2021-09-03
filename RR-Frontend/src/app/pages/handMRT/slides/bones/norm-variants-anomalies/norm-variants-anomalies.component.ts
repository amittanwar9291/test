import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { StandardVariantsTypeEnum } from '@enums/handMRT/bones/standard-variants-anomalies/standard-variants-type.enum';
import { BonesFindingUiModel } from '@models/handMRT/ui/bones/bones-finding-ui.model';
import { WristModel } from '@models/handMRT/ui/hand/localizers/wrist.model';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-norm-variants-anomalies',
  templateUrl: './norm-variants-anomalies.component.html',
  styleUrls: ['./norm-variants-anomalies.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class NormVariantsAnomaliesComponent {
  @Input() model: BonesFindingUiModel;

  standardVariantsType = StandardVariantsTypeEnum;

  constructor(private validationHelperService: ValidationHelperService) {}

  resetLocalizerModel() {
    this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.involvedBonesType));
    this.model.involvedBonesType = new WristModel();
  }
}
