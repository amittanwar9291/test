import { IValidationModel } from '@models/shared/validation/form-validation.models';

import { nameof } from 'ts-simple-nameof/index';

import { RightVentricleUiModel } from '@models/cardioMRT/ui/right-ventricle/right-ventricle-ui.model';

export const RightVentricleValidationModel: IValidationModel = {
  elements: [
    {
      modelName: nameof<RightVentricleUiModel>(m => m.findingType)
    }
  ]
};
