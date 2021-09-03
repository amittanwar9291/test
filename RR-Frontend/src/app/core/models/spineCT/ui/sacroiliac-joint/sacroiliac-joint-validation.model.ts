import { nameof } from 'ts-simple-nameof/src/nameof';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { SacroiliacJointFindingTypeEnum } from '@enums/spineCT/sacroiliac-joint/sacroiliac-joint-finding-type.enum';
import { SacroiliacJointFindingUiModel } from '@models/spineCT/ui/sacroiliac-joint/sacroiliac-joint-finding-ui.model';

export const SacroiliacJointValidationModel: IValidationModel = {
  finding: [
    {
      findingName: SacroiliacJointFindingTypeEnum.Degeneration,
      elements: [
        {
          modelName: nameof<SacroiliacJointFindingUiModel>(m => m.pelvisLocation),
          isLocalizer: true
        },
        {
          modelName: nameof<SacroiliacJointFindingUiModel>(m => m.differentialDiagnosisType01)
        }
      ]
    },
    {
      findingName: SacroiliacJointFindingTypeEnum.Inflammation,
      elements: [
        {
          modelName: nameof<SacroiliacJointFindingUiModel>(m => m.pelvisLocation),
          isLocalizer: true
        },
        {
          modelName: nameof<SacroiliacJointFindingUiModel>(m => m.differentialDiagnosisType01)
        }
      ]
    }
  ]
};
