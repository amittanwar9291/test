import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { AnatomyUiModel } from '@models/mammaMRT/ui/anatomy/anatomy-ui.model';

import { nameof } from 'ts-simple-nameof';

import { CutisThicknessTypeEnum, PectoralisMuscleTypeEnum, SubcutaneousTissueSpaceTypeEnum, VolumeTypeEnum } from '@enums/mammaMRT/anatomy';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

export const AnatomyValidation: IValidationModel = {
  elements: [
    {
      modelName: nameof<AnatomyUiModel>(m => m.volumeLocation),
      isLocalizer: true,
      validateCondition: {
        customConditionFunction: (m: AnatomyUiModel): boolean => [VolumeTypeEnum.Ablatio, VolumeTypeEnum.Anisomastia].includes(m.volume)
      }
    },
    {
      modelName: nameof<AnatomyUiModel>(m => m.cutisThicknessLocation),
      isLocalizer: true,
      validateCondition: {
        customConditionFunction: (m: AnatomyUiModel): boolean => m.cutisThickness === CutisThicknessTypeEnum.Thickened
      }
    },
    {
      modelName: nameof<AnatomyUiModel>(m => m.cutisRetractionLocation),
      isLocalizer: true,
      validateCondition: {
        customConditionFunction: (m: AnatomyUiModel): boolean => m.cutisRetraction === SimpleAnswerEnum.Yes
      }
    },
    {
      modelName: nameof<AnatomyUiModel>(m => m.subcutaneousFatSpaceLocation),
      isLocalizer: true,
      validateCondition: {
        customConditionFunction: (m: AnatomyUiModel): boolean => m.subcutaneousTissueType === SubcutaneousTissueSpaceTypeEnum.Condensed
      }
    },
    {
      modelName: nameof<AnatomyUiModel>(m => m.pectoralisMuscleLocation),
      isLocalizer: true,
      validateCondition: {
        customConditionFunction: (m: AnatomyUiModel): boolean => m.pectoralisMuscle === PectoralisMuscleTypeEnum.MuscleInvasion
      }
    }
  ]
};
