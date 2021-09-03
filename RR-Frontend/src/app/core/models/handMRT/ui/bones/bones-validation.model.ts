import { BonesFindingTypeEnum, StandardVariantsTypeEnum } from '@enums/handMRT/bones/';

import { BonesFindingUiModel } from '@models/handMRT/ui/bones/bones-finding-ui.model';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

export const BonesValidationModel: IValidationModel = {
  finding: [
    {
      findingName: BonesFindingTypeEnum.NormVariantsAnomalies,
      elements: [
        { modelName: nameof<BonesFindingUiModel>(m => m.standardVariantsType) },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.involvedBonesType),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.standardVariantsType),
            requiredValue: StandardVariantsTypeEnum.CarpalCoalition
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.involvedBonesType),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.standardVariantsType),
            requiredValue: StandardVariantsTypeEnum.CarpalBonesDivision
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.facetType),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.standardVariantsType),
            requiredValue: StandardVariantsTypeEnum.NormVariantsOfOsLunatum
          }
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.Fracture,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.involvedBonesLocalizer),
          isLocalizer: true
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.fractureClassificationType),
          validateCondition: {
            customConditionFunction: (model: BonesFindingUiModel) => {
              let selectedKey = '';
              for (const key in model.involvedBonesLocalizer) {
                if (model.involvedBonesLocalizer[key]) {
                  selectedKey = key;
                }
              }
              return selectedKey && selectedKey !== 'complex';
            }
          }
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.AvascularNecrosis,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.involvedBonesType),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.Osteoarthritis,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.handJointsLocalizer),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.ImpactionAndImpingementSyndrome,
      elements: [{ modelName: nameof<BonesFindingUiModel>(m => m.impactionImpingementSyndromeType) }]
    },
    {
      findingName: BonesFindingTypeEnum.Arthritis,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.handJointsLocalizer),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.Osteomyelitis,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.involvedBonesLocalizer),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.MassOsteolysis,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.tumorDifferentialDiagnosisType),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.extensionSize)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.marginType)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.cortexType)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.tumorDifferentialDiagnosis1Type),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.involvedBonesLocalizer),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.BoneMarrowEdema,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.involvedBonesLocalizer),
          isLocalizer: true
        }
      ]
    }
  ]
};
