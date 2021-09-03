import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { AnamnesisUiModel } from '@models/elbowMRT/ui/anamnesis/anamnesis-ui.model';

import { nameof } from 'ts-simple-nameof';

export const AnamnesisValidationModel: IValidationModel = {
  elements: [
    {
      modelName: nameof<AnamnesisUiModel>(m => m.findings)
    }
  ]
};
