import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof/src/nameof';
import { AnamnesisUI } from './anamnesis-ui.model';

export const AnamnesisValidation: IValidationModel = {
  elements: [
    {
      modelName: [
        nameof<AnamnesisUI>(m => m.isLocalizationHumeralHead),
        nameof<AnamnesisUI>(m => m.isLocalizationScapula),
        nameof<AnamnesisUI>(m => m.isGlenoid),
        nameof<AnamnesisUI>(m => m.isLocalizationClavicle)
      ],
      validateCondition: { modelName: nameof<AnamnesisUI>(m => m.isFracture) }
    }
  ]
};
