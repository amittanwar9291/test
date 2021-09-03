import { ConfigurationFindingTypeEnum } from '@enums/spineMRT/configuration/configuration-finding-type.enum';
import { PathologyTypeEnum } from '@enums/spineMRT/configuration/deviation/pathology-type.enum';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { ConfigurationFindingUiModel } from '@models/spineMRT/ui/configuration/configuration-finding-ui.model';
import { nameof } from 'ts-simple-nameof';

export const ConfigurationValidationModel: IValidationModel = {
  finding: [
    {
      findingName: ConfigurationFindingTypeEnum.Deviation,
      elements: [
        {
          modelName: nameof<ConfigurationFindingUiModel>(m => m.cervicalSpinePathologyType),
          validateCondition: {
            modelName: nameof<ConfigurationFindingUiModel>(m => m.isCervicalSpine)
          }
        },
        {
          modelName: nameof<ConfigurationFindingUiModel>(m => m.cervicalSpineLocation),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<ConfigurationFindingUiModel>(m => m.cervicalSpinePathologyType),
            requiredValue: PathologyTypeEnum.KinkFormation
          }
        },
        {
          modelName: nameof<ConfigurationFindingUiModel>(m => m.thoracicSpinePathologyType),
          validateCondition: {
            modelName: nameof<ConfigurationFindingUiModel>(m => m.isThoracicSpine)
          }
        },
        {
          modelName: nameof<ConfigurationFindingUiModel>(m => m.thoracicSpineLocation),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<ConfigurationFindingUiModel>(m => m.thoracicSpinePathologyType),
            requiredValue: PathologyTypeEnum.Kinking
          }
        },
        {
          modelName: nameof<ConfigurationFindingUiModel>(m => m.lumbarSpinePathologyType),
          validateCondition: {
            modelName: nameof<ConfigurationFindingUiModel>(m => m.isLumbarSpine)
          }
        },
        {
          modelName: nameof<ConfigurationFindingUiModel>(m => m.lumbarSpineLocation),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<ConfigurationFindingUiModel>(m => m.lumbarSpinePathologyType),
            requiredValue: PathologyTypeEnum.Kinking
          }
        }
      ]
    },
    {
      findingName: ConfigurationFindingTypeEnum.Spondylolisthesis,
      elements: [
        {
          modelName: nameof<ConfigurationFindingUiModel>(m => m.spondylolisthesisLocation),
          isLocalizer: true
        },
        {
          modelName: nameof<ConfigurationFindingUiModel>(m => m.detailsType)
        }
      ]
    },
    {
      findingName: ConfigurationFindingTypeEnum.TransitionalVertebra,
      elements: [
        {
          modelName: [
            nameof<ConfigurationFindingUiModel>(m => m.isCervical),
            nameof<ConfigurationFindingUiModel>(m => m.isThoracolumbar),
            nameof<ConfigurationFindingUiModel>(m => m.isLumbosacral)
          ]
        }
      ]
    }
  ]
};
