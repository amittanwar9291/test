import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MaleSexFindingUiModel } from '@models/pelvisMRT/ui/male-sex/male-sex-finding-ui.model';
import { FlowVoidTypeEnum } from '@enums/pelvisMRT/male-sex/flow-void-type.enum';
import { CMEnhancementTypeEnum } from '@enums/shared/cm-enhancement-type.enum';
import { HomogeneityTypeEnum } from '@enums/pelvisMRT/male-sex/homogeneity-type.enum';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

@Component({
  selector: 'rr-pelvismrt-penis-mass-additional-features',
  templateUrl: './additional-features.component.html',
  styleUrls: ['./additional-features.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AdditionalFeaturesComponent {
  @Input() model: MaleSexFindingUiModel;
  @Input() technologyModel: TechnologyUiModel;

  SignalLossFlowVoidType: typeof FlowVoidTypeEnum;
  CMEnhancementType: typeof CMEnhancementTypeEnum;
  Homogeneity02Type: typeof HomogeneityTypeEnum;
  SimpleAnswerType: typeof SimpleAnswerEnum;

  constructor(private validationHelperService: ValidationHelperService) {
    this.SignalLossFlowVoidType = FlowVoidTypeEnum;
    this.CMEnhancementType = CMEnhancementTypeEnum;
    this.Homogeneity02Type = HomogeneityTypeEnum;
    this.SimpleAnswerType = SimpleAnswerEnum;
  }

  hasTechnologyDwiBeenSelected() {
    if (!this.technologyModel || !this.technologyModel.sequences.length) {
      return false;
    }

    return !this.technologyModel.sequences.some(sequence => {
      return sequence.weightingType === 'DWI';
    });
  }

  resetError(value) {
    if (!value.checked) {
      this.validationHelperService.removeError('corpusCavernosumRight');
      this.validationHelperService.removeError('corpusCavernosumLeft');
    }
  }
}
