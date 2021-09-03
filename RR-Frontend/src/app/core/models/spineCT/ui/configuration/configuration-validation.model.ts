import { nameof } from 'ts-simple-nameof/src/nameof';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { ConfigurationFindingUiModel } from './configuration-finding-ui.model';
import { ConfigurationFindingTypeEnum } from '@enums/spineCT/configuration/configuration-finding-type.enum';
import { CastellviTypeEnum } from '@enums/spineCT/configuration/transitional-vertebra/castellvi-type.enum';
import { PathologyTypeEnum } from '@enums/spineCT/configuration/curvature-disorders/pathology-type.enum';
import { compact } from 'lodash';

export const ConfigurationValidationModel: IValidationModel = {
  finding: [
    {
      findingName: ConfigurationFindingTypeEnum.CurvatureDisorders,
      elements: [
        {
          modelName: nameof<ConfigurationFindingUiModel>(m => m.cervicalSpinePathologyType),
          validateCondition: {
            modelName: nameof<ConfigurationFindingUiModel>(m => m.isCervicalSpine)
          }
        },
        {
          modelName: nameof<ConfigurationFindingUiModel>(m => m.thoracicSpinePathologyType),
          validateCondition: {
            modelName: nameof<ConfigurationFindingUiModel>(m => m.isThoracicSpine)
          }
        },
        {
          modelName: nameof<ConfigurationFindingUiModel>(m => m.lumbarSpinePathologyType),
          validateCondition: {
            modelName: nameof<ConfigurationFindingUiModel>(m => m.isLumbarSpine)
          }
        },
        {
          modelName: nameof<ConfigurationFindingUiModel>(m => m.cervicalSpineLocation),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<ConfigurationFindingUiModel>(m => m.cervicalSpinePathologyType),
            requiredValue: PathologyTypeEnum.Kinking
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
          modelName: nameof<ConfigurationFindingUiModel>(m => m.detailsType),
          validateCondition: {
            customConditionFunction: (model: ConfigurationFindingUiModel) => {
              return compact(Object.values(model.spondylolisthesisLocation)).length !== 0;
            }
          }
        },
        {
          modelName: nameof<ConfigurationFindingUiModel>(m => m.spondylolisthesisLocation),
          isLocalizer: true
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
        },
        {
          modelName: nameof<ConfigurationFindingUiModel>(m => m.sideType),
          validateCondition: {
            customConditionFunction: (model: ConfigurationFindingUiModel) => {
              return (
                model.castellviType === CastellviTypeEnum.Type1A ||
                model.castellviType === CastellviTypeEnum.Type2A ||
                model.castellviType === CastellviTypeEnum.Type3A
              );
            }
          }
        }
      ]
    }
  ]
};
