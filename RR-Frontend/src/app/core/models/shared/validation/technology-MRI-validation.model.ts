import { nameof } from 'ts-simple-nameof';

import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { TechnologyMrtBaseUiModel } from '@models/shared/newTechnology/ui/technology-mrt-base-ui.model';
import { SequenceUiBaseModel } from '@models/shared/newTechnology/ui/sequence-ui-base.model';

type TechnologyMRTModel = TechnologyMrtBaseUiModel<SequenceUiBaseModel>;

export const TechnologyMRIValidationModel: IValidationModel = {
  elements: [
    { modelName: nameof<TechnologyMRTModel>(m => m.cmReinforcedType) },
    {
      modelName: nameof<TechnologyMRTModel>(m => m.cmSideEffects),
      validateCondition: { modelName: nameof<TechnologyMrtBaseUiModel<SequenceUiBaseModel>>(m => m.isCMSideEffect) },
      requiredValue: (m: TechnologyMRTModel) => {
        const nonDeletedFindings = m.cmSideEffects.filter(item => !item.isDeleted);
        return nonDeletedFindings.length >= 1 && nonDeletedFindings[0].cmSideEffectType !== 'None';
      }
    }
  ]
};
