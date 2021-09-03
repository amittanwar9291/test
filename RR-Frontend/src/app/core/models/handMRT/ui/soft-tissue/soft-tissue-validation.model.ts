import { nameof } from 'ts-simple-nameof';
import { SoftTissueFindingUiModel } from '@models/handMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { IValidationModel } from '@models/shared/validation/form-validation.models';

export const SoftTissueValidationModel: IValidationModel = {
  finding: [
    {
      findingName: 'ArticularEffusion',
      elements: [
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.handJointsLocalizer),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: 'Haematoma',
      elements: [
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.localizationType)
        }
      ]
    },
    {
      findingName: 'SoftTissueMass',
      elements: [
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.localizationType)
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.marginType)
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.homogeneityType)
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.size)
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.differentialDiagnosis),
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.descriptionType),
            requiredValue: 'IKnow'
          }
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.differentialDiagnosis1),
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.descriptionType),
            requiredValue: 'IDescribe'
          }
        }
      ]
    },
    {
      findingName: 'Abscess',
      elements: [
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.localizationType)
        }
      ]
    }
  ]
};
