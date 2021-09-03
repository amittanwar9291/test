import { IValidationModel } from '@models/shared/validation/form-validation.models';

import { nameof } from 'ts-simple-nameof';

import { LocalizationUiModel } from '@models/shoulderMRT/ui/localization/localization-ui.model';

export const LocalizationValidationModel: IValidationModel = {
  elements: [
    {
      modelName: nameof<LocalizationUiModel>(m => m.localization),
      isLocalizer: true
    }
  ]
};
