import { nameof } from 'ts-simple-nameof';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { LocalizationUiModel } from '@models/pelvisMRT/ui/localization/localization-ui.model';

export const LocalizationValidationModel: IValidationModel = {
  elements: [
    {
      modelName: nameof<LocalizationUiModel>(m => m.investigationType)
    },
    {
      modelName: nameof<LocalizationUiModel>(m => m.patientInformation.gender)
    }
  ]
};
