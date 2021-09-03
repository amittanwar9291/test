import { nameof } from 'ts-simple-nameof';

import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { MeningesFindingUiModel } from '@models/headMRT/ui/meninges/meninges-finding-ui.model';
import { MeningesUiModel } from '@models/headMRT/ui/meninges/meninges-ui.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { MeningesFindingTypeEnum } from '@enums/headMRT/meninges/meninges-finding-type.enum';

export const MeningesValidationModel: IValidationModel = {
  elements: [
    {
      modelName: nameof<MeningesUiModel>(m => m.areFindings)
    },
    {
      modelName: nameof<MeningesUiModel>(m => m.findings),
      findingTypeModelName: nameof<MeningesFindingUiModel>(m => m.findingType),
      finding: [
        {
          findingName: MeningesFindingTypeEnum.Mass,
          elements: [
            {
              modelName: nameof<MeningesFindingUiModel>(m => m.massDifferentialDiagnosisLocalization),
              validateCondition: {
                modelName: nameof<MeningesFindingUiModel>(m => m.descriptionType),
                requiredValue: DescriptionTypeEnum.IKnow
              }
            },
            {
              modelName: nameof<MeningesFindingUiModel>(m => m.massDifferentialDiagnosis1),
              validateCondition: {
                modelName: nameof<MeningesFindingUiModel>(m => m.descriptionType),
                requiredValue: DescriptionTypeEnum.IDescribe
              }
            },
            {
              modelName: [
                nameof<MeningesFindingUiModel>(m => m.isRight),
                nameof<MeningesFindingUiModel>(m => m.isLeft),
                nameof<MeningesFindingUiModel>(m => m.isMedian)
              ]
            },
            {
              modelName: [
                nameof<MeningesFindingUiModel>(m => m.isFrontal),
                nameof<MeningesFindingUiModel>(m => m.isTemporal),
                nameof<MeningesFindingUiModel>(m => m.isParietal),
                nameof<MeningesFindingUiModel>(m => m.isOccipital),
                nameof<MeningesFindingUiModel>(m => m.isInfratentorial)
              ]
            },
            {
              modelName: [nameof<MeningesFindingUiModel>(m => m.size)]
            }
          ]
        },
        {
          findingName: MeningesFindingTypeEnum.DiffuseChanges,
          elements: [
            {
              modelName: [
                nameof<MeningesFindingUiModel>(m => m.isRight),
                nameof<MeningesFindingUiModel>(m => m.isLeft),
                nameof<MeningesFindingUiModel>(m => m.isMedian)
              ]
            },
            {
              modelName: [
                nameof<MeningesFindingUiModel>(m => m.isFrontal),
                nameof<MeningesFindingUiModel>(m => m.isTemporal),
                nameof<MeningesFindingUiModel>(m => m.isParietal),
                nameof<MeningesFindingUiModel>(m => m.isOccipital),
                nameof<MeningesFindingUiModel>(m => m.isInfratentorial)
              ]
            },
            {
              modelName: [nameof<MeningesFindingUiModel>(m => m.maxExtension)],
              validateCondition: {
                modelName: nameof<MeningesFindingUiModel>(m => m.isAbscess)
              }
            },
            {
              modelName: [nameof<MeningesFindingUiModel>(m => m.diffuseDifferentialDiagnosis1)]
            }
          ]
        },
        {
          findingName: MeningesFindingTypeEnum.SubduralHematoma,
          elements: [
            {
              modelName: [
                nameof<MeningesFindingUiModel>(m => m.isRight),
                nameof<MeningesFindingUiModel>(m => m.isLeft),
                nameof<MeningesFindingUiModel>(m => m.isMedian)
              ]
            },
            {
              modelName: [
                nameof<MeningesFindingUiModel>(m => m.isFrontal),
                nameof<MeningesFindingUiModel>(m => m.isTemporal),
                nameof<MeningesFindingUiModel>(m => m.isParietal),
                nameof<MeningesFindingUiModel>(m => m.isOccipital),
                nameof<MeningesFindingUiModel>(m => m.isInfratentorial)
              ]
            },
            {
              modelName: nameof<MeningesFindingUiModel>(m => m.sideType),
              validateCondition: {
                modelName: nameof<MeningesFindingUiModel>(m => m.isMidlineShift)
              }
            },
            {
              modelName: [nameof<MeningesFindingUiModel>(m => m.regionType)],
              validateCondition: {
                modelName: nameof<MeningesFindingUiModel>(m => m.isHerniation)
              }
            }
          ]
        },
        {
          findingName: MeningesFindingTypeEnum.EpiduralHematoma,
          elements: [
            {
              modelName: [
                nameof<MeningesFindingUiModel>(m => m.isRight),
                nameof<MeningesFindingUiModel>(m => m.isLeft),
                nameof<MeningesFindingUiModel>(m => m.isMedian)
              ]
            },
            {
              modelName: [
                nameof<MeningesFindingUiModel>(m => m.isFrontal),
                nameof<MeningesFindingUiModel>(m => m.isTemporal),
                nameof<MeningesFindingUiModel>(m => m.isParietal),
                nameof<MeningesFindingUiModel>(m => m.isOccipital),
                nameof<MeningesFindingUiModel>(m => m.isInfratentorial)
              ]
            },
            {
              modelName: [nameof<MeningesFindingUiModel>(m => m.size)]
            }
          ]
        }
      ]
    }
  ]
};
