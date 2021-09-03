import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { AnamnesisUiModel } from '@models/kneeMRT/ui/anamnesis/anamnesis-ui.model';

import { nameof } from 'ts-simple-nameof';

export const AnamnesisValidationModel: IValidationModel = {
  elements: [
    {
      modelName: [
        nameof<AnamnesisUiModel>(m => m.isFemur),
        nameof<AnamnesisUiModel>(m => m.isTibia),
        nameof<AnamnesisUiModel>(m => m.isFibula),
        nameof<AnamnesisUiModel>(m => m.isPatella)
      ],
      validateCondition: {
        modelName: nameof<AnamnesisUiModel>(m => m.isFracture)
      }
    },
    {
      modelName: [
        nameof<AnamnesisUiModel>(m => m.isAnteriorCruciateLigament),
        nameof<AnamnesisUiModel>(m => m.isMedialCollateralLigament),
        nameof<AnamnesisUiModel>(m => m.isLateralCollateralLigament),
        nameof<AnamnesisUiModel>(m => m.isPosteriorCruciateLigament)
      ],
      validateCondition: {
        modelName: nameof<AnamnesisUiModel>(m => m.isLigamentReconstruction)
      }
    }
  ]
};
