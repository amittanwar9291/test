import { IValidationModel } from '@models/shared/validation/form-validation.models';

import { nameof } from 'ts-simple-nameof';

import { TendonsAndMusclesFindingUiModel } from '@models/elbowMRT/ui/tendons-and-muscles/tendons-and-muscles-finding-ui.model';

import { MusclesAndTendonsFindingTypeEnum } from '@enums/elbowMRT/musles-and-tendons/muscles-and-tendons-finding-type.enum';

export const TendonsAndMusclesValidation: IValidationModel = {
  finding: [
    {
      findingName: MusclesAndTendonsFindingTypeEnum.Epicondylitis,
      elements: [{ modelName: nameof<TendonsAndMusclesFindingUiModel>(m => m.localizationType) }]
    },
    {
      findingName: MusclesAndTendonsFindingTypeEnum.LesionOfTheDistalBicepsTendon,
      elements: [{ modelName: nameof<TendonsAndMusclesFindingUiModel>(m => m.pathologyType) }]
    },
    {
      findingName: MusclesAndTendonsFindingTypeEnum.LesionOfTheTricepsTendon,
      elements: [{ modelName: nameof<TendonsAndMusclesFindingUiModel>(m => m.pathologyType) }]
    },
    {
      findingName: MusclesAndTendonsFindingTypeEnum.Musculature,
      elements: [
        { modelName: nameof<TendonsAndMusclesFindingUiModel>(m => m.localizationMuscleCompartmentsType) },
        {
          modelName: nameof<TendonsAndMusclesFindingUiModel>(m => m.classificationMunichConsensusType),
          validateCondition: { modelName: nameof<TendonsAndMusclesFindingUiModel>(m => m.isMuscleLesion) }
        },
        {
          modelName: [
            nameof<TendonsAndMusclesFindingUiModel>(m => m.isIntramuscular),
            nameof<TendonsAndMusclesFindingUiModel>(m => m.isInterfascial),
            nameof<TendonsAndMusclesFindingUiModel>(m => m.isIntermuscular)
          ],
          validateCondition: { modelName: nameof<TendonsAndMusclesFindingUiModel>(m => m.isHematoma) }
        }
      ]
    }
  ]
};
