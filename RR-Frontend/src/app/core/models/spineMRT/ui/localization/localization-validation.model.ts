import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof';
import { LocalizationUiModel } from '@models/spineMRT/ui/localization/localization-ui.model';
import { ScanAreaTypesEnum } from '@enums/spineMRT/localization/area-of-examination-types.enum';
import { compact } from 'lodash';

export const LocalizationValidationModel: IValidationModel = {
  elements: [
    { modelName: nameof<LocalizationUiModel>(m => m.scanAreaType) },
    {
      modelName: nameof<LocalizationUiModel>(m => m.spineLocation),
      isLocalizer: true,
      validateCondition: {
        modelName: nameof<LocalizationUiModel>(m => m.scanAreaType),
        requiredValue: ScanAreaTypesEnum.Spine
      },
      requiredValue: (model: LocalizationUiModel) =>
        compact(Object.values(model.spineLocation)).length > 1 || model.spineLocation.osSacrum || model.spineLocation.osCoccygis
    }
  ]
};
