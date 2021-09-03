import { nameof } from 'ts-simple-nameof';

import { KneeBonesFindingUiModel } from '@models/kneeMRT/ui/bones/knee-bones-finding-ui.model';
import { IValidationModel } from '@models/shared/validation/form-validation.models';

import { BonesEpiphysealJointDetailsTypeEnum, BonesEpiphysealJointTypeEnum, BonesFindingTypeEnum } from '@enums/kneeMRT/bones';

export const BonesValidationModel: IValidationModel = {
  finding: [
    {
      findingName: BonesFindingTypeEnum.FractureDistalFemur,
      elements: [{ modelName: nameof<KneeBonesFindingUiModel>(m => m.evaluationFractureType) }]
    },
    {
      findingName: BonesFindingTypeEnum.FractureTibiaProximal,
      elements: [{ modelName: nameof<KneeBonesFindingUiModel>(m => m.evaluationFractureType) }]
    },
    {
      findingName: BonesFindingTypeEnum.FractureFibulaProximal,
      elements: [{ modelName: nameof<KneeBonesFindingUiModel>(m => m.evaluationFractureType) }]
    },
    {
      findingName: BonesFindingTypeEnum.FracturePatella,
      elements: [{ modelName: nameof<KneeBonesFindingUiModel>(m => m.evaluationFractureType) }]
    },
    {
      findingName: BonesFindingTypeEnum.BoneMarrowEdema,
      elements: [{ modelName: nameof<KneeBonesFindingUiModel>(m => m.kneeExtensionLocation), isLocalizer: true }]
    },
    {
      findingName: BonesFindingTypeEnum.Osteomyelitis,
      elements: [{ modelName: nameof<KneeBonesFindingUiModel>(m => m.kneeLocation), isLocalizer: true }]
    },
    {
      findingName: BonesFindingTypeEnum.EpiphysealJointFracture,
      elements: [
        { modelName: nameof<KneeBonesFindingUiModel>(m => m.epiphysealJointType) },
        {
          modelName: nameof<KneeBonesFindingUiModel>(m => m.kneeLocation),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<KneeBonesFindingUiModel>(m => m.epiphysealJointType),
            requiredValue: BonesEpiphysealJointTypeEnum.Pathology
          }
        },
        {
          modelName: nameof<KneeBonesFindingUiModel>(m => m.bonesEpiphysealJointDetailsType),
          validateCondition: {
            modelName: nameof<KneeBonesFindingUiModel>(m => m.epiphysealJointType),
            requiredValue: BonesEpiphysealJointTypeEnum.Pathology
          }
        },
        {
          modelName: nameof<KneeBonesFindingUiModel>(m => m.aitkenClassificationType),
          validateCondition: {
            modelName: nameof<KneeBonesFindingUiModel>(m => m.bonesEpiphysealJointDetailsType),
            requiredValue: BonesEpiphysealJointDetailsTypeEnum.Fracture
          }
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.BonesTumor,
      elements: [
        { modelName: nameof<KneeBonesFindingUiModel>(m => m.kneeExtensionLocation), isLocalizer: true },
        { modelName: nameof<KneeBonesFindingUiModel>(m => m.expansionAxialMaxInMm) },
        { modelName: nameof<KneeBonesFindingUiModel>(m => m.limitationType) },
        { modelName: nameof<KneeBonesFindingUiModel>(m => m.corticalisType) },
        {
          modelName: nameof<KneeBonesFindingUiModel>(m => m.differentialDiagnosis1),
          validateCondition: {
            modelName: nameof<KneeBonesFindingUiModel>(m => m.descriptionType),
            requiredValue: 'IDescribe'
          }
        },
        {
          modelName: nameof<KneeBonesFindingUiModel>(m => m.differentialDiagnosis),
          validateCondition: {
            modelName: nameof<KneeBonesFindingUiModel>(m => m.descriptionType),
            requiredValue: 'IKnow'
          }
        }
      ]
    }
  ]
};
