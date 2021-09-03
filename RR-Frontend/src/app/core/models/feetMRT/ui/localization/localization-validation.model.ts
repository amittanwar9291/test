import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof';
import { LocalizationUiModel } from '@models/feetMRT/ui/localization/localization-ui.model';

export const LocalizationValidationModel: IValidationModel = {
  elements: [
    { modelName: nameof<LocalizationUiModel>(m => m.localization), isLocalizer: true },
    {
      modelName: [
        nameof<LocalizationUiModel>(m => m.isAnkleJoint),
        nameof<LocalizationUiModel>(m => m.isFoot),
        nameof<LocalizationUiModel>(m => m.isForefoot)
      ]
    }
  ]
};
