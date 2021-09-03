import { nameof } from 'ts-simple-nameof/src/nameof';
import { TechnologyUiModel } from './technology-ui.model';
import { IValidationModel } from '@models/shared/validation/form-validation.models';

export const TechnologyValidation: IValidationModel = {
  elements: [
    {
      modelName: [nameof<TechnologyUiModel>(m => m.isMammography), nameof<TechnologyUiModel>(m => m.isUltrasound)]
    },
    {
      modelName: nameof<TechnologyUiModel>(m => m.breastLocationCC),
      isLocalizer: true,
      validateCondition: {
        customConditionFunction: isBreastLocationCCRequired
      }
    },
    {
      modelName: nameof<TechnologyUiModel>(m => m.breastLocationMLO),
      isLocalizer: true,
      validateCondition: {
        customConditionFunction: isBreastLocationMLORequired
      }
    },
    {
      modelName: nameof<TechnologyUiModel>(m => m.breastLocationSonography),
      isLocalizer: true,
      validateCondition: {
        modelName: nameof<TechnologyUiModel>(m => m.isUltrasound)
      }
    }
  ]
};

function isBreastLocationCCRequired(model): boolean {
  const isBreastLocationMLOLocalizerChecked = Object.values(model.breastLocationMLO).some(prop => prop);
  return model.isMammography && !isBreastLocationMLOLocalizerChecked;
}

function isBreastLocationMLORequired(model): boolean {
  const isBreastLocationCCLocalizerChecked = Object.values(model.breastLocationCC).some(prop => prop);
  return model.isMammography && !isBreastLocationCCLocalizerChecked;
}
