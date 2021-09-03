import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { SoftTissueFindingUiModel } from '@models/elbowMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { SoftTissueFindingType } from '@enums/elbowMRT/soft-tissue/';
import { nameof } from 'ts-simple-nameof';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

export const SoftTissueValidation: IValidationModel = {
  finding: [
    {
      findingName: SoftTissueFindingType.SoftTissueTumor,
      elements: [
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.localizationAxialType)
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.localizationRelatedJointSpaceLevelType)
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.extensionSizeInMm)
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.demarcationType)
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.differentialDiagnosis1Type),
          validateCondition: {
            customConditionFunction: (model: SoftTissueFindingUiModel) => model.descriptionType !== DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.localizationRelatedJointSpaceLevelType)
        }
      ]
    },
    {
      findingName: SoftTissueFindingType.Hematoma,
      elements: [
        {
          modelName: [
            nameof<SoftTissueFindingUiModel>(m => m.isAnterior),
            nameof<SoftTissueFindingUiModel>(m => m.isPosterior),
            nameof<SoftTissueFindingUiModel>(m => m.isMedial),
            nameof<SoftTissueFindingUiModel>(m => m.isLateral)
          ]
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.localizationRelatedJointSpaceLevelType)
        }
      ]
    },
    {
      findingName: SoftTissueFindingType.Abcess,
      elements: [
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.localizationAxialType)
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.localizationRelatedJointSpaceLevelType)
        }
      ]
    },
    {
      findingName: SoftTissueFindingType.Bursitis,
      elements: [
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.localizationType)
        }
      ]
    },
    {
      findingName: SoftTissueFindingType.Neuritis,
      elements: [
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.neuritisLocalizationType)
        }
      ]
    },
    {
      findingName: SoftTissueFindingType.Aneurysm,
      elements: [
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.aneurysmLocalizationType)
        }
      ]
    }
  ]
};
