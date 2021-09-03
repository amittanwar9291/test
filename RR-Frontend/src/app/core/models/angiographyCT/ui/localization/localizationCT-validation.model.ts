import { LocalizationUiModel } from '@models/angiographyCT/ui/localization/localization-ui.model';
import { nameof } from 'ts-simple-nameof';
import { IValidationModel } from '@models/shared/validation/form-validation.models';

export const LocalizationValidationModel: IValidationModel = {
  elements: [{ modelName: nameof<LocalizationUiModel>(m => m.localization), isLocalizer: true }]
};
