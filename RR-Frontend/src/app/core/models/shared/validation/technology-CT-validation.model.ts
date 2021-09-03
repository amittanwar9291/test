import { nameof } from 'ts-simple-nameof';

import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { TechnologyCtBaseUiModel } from '@models/shared/newTechnology/ui/technology-ct-base-ui.model';
import { AcquisitionUiBaseModel } from '@models/shared/newTechnology/ui/acquisition-ui-base.model';
import { ReconstructionUiBaseModel } from '@models/shared/newTechnology/ui/reconstruction-ui-base.model';

// type alias
type TechnologyCTModel = TechnologyCtBaseUiModel<AcquisitionUiBaseModel<ReconstructionUiBaseModel>, ReconstructionUiBaseModel>;

export const TechnologyCTValidationModel: IValidationModel = {
  elements: [
    {
      modelName: nameof<TechnologyCTModel>(m => m.cmReinforcedType)
    },
    {
      modelName: nameof<TechnologyCTModel>(m => m.cmSideEffects),
      validateCondition: {
        modelName: nameof<TechnologyCTModel>(m => m.isCMSideEffect)
      },
      requiredValue: (m: TechnologyCTModel) => {
        const nonDeletedFindings = m.cmSideEffects.filter(item => !item.isDeleted);
        return nonDeletedFindings.length >= 1 && nonDeletedFindings[0].cmSideEffectType !== 'None';
      }
    }
  ]
};
