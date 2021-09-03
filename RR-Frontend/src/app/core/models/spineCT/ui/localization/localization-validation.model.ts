import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof';
import { LocalizationUiModel } from '@models/spineCT';

export const LocalizationValidationModel: IValidationModel = {
  elements: [
    {
      modelName: nameof<LocalizationUiModel>(m => m.spineLocation),
      isLocalizer: true
    }
  ]
};
