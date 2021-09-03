import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { SpatialRequirementFindingUiModel } from './spatial-requirement-finding-ui.model';
import { SpatialRequirementUiModel } from '@models/cardioMRT/ui/spatial-requirement/spatial-requirement-ui.model';
import { nameof } from 'ts-simple-nameof';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

export const SpatialRequirementValidationModel: IValidationModel = {
  elements: [
    {
      modelName: nameof<SpatialRequirementUiModel>(m => m.areFindings)
    }
  ],
  finding: [
    {
      findingName: 'MassTumor',
      elements: [
        {
          modelName: nameof<SpatialRequirementFindingUiModel>(m => m.differentialDiagnosis01),
          validateCondition: {
            modelName: nameof<SpatialRequirementFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<SpatialRequirementFindingUiModel>(m => m.differentialDiagnosis1),
          validateCondition: {
            modelName: nameof<SpatialRequirementFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        },
        {
          modelName: nameof<SpatialRequirementFindingUiModel>(m => m.diameterMaxAxialInMm)
        },
        {
          modelName: nameof<SpatialRequirementFindingUiModel>(m => m.mainTumorLocalizer),
          isLocalizer: true
        }
      ]
    }
  ]
};
