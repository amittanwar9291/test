import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { LymphNodeUiModel } from '@models/mammaMRT/ui/lymph-node/lymph-node-ui.model';

import { nameof } from 'ts-simple-nameof';

import { LungDiseaseTypeEnum } from '@enums/mammaMRT/lymph-node';

const lungDiseaseType = LungDiseaseTypeEnum;

export const LymphNodeValidation: IValidationModel = {
  elements: [
    {
      modelName: [nameof<LymphNodeUiModel>(m => m.isLocalizationRight), nameof<LymphNodeUiModel>(m => m.isLocalizationLeft)],
      validateCondition: {
        modelName: nameof<LymphNodeUiModel>(m => m.lungDiseaseType)
      }
    }
  ]
};
