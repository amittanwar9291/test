import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof';
import { ThoraxMRTBonesFindingTypeEnum } from '@enums/thoraxMRT/bones/thorax-mrt-bones-finding-type.enum';
import { BonesFindingUiModel } from '@models/thoraxMRT/ui/bones/bones-finding-ui.model';
import { compact } from 'lodash';

import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { FractureTypeEnum } from '@enums/thoraxMRT/bones/fracture/fracture-type.enum';
export const BonesValidationModel: IValidationModel = {
  finding: [
    {
      findingName: ThoraxMRTBonesFindingTypeEnum.ClavicleFracture,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.sideType)
        },
        {
          modelName: [
            nameof<BonesFindingUiModel>(m => m.isAOClassification),
            nameof<BonesFindingUiModel>(m => m.isRockwood),
            nameof<BonesFindingUiModel>(m => m.isTossy)
          ]
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.fractureType),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.isAOClassification)
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.rockwoodInjuryGrade),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.isRockwood)
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.tossyInjuryGrade),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.isTossy)
          }
        }
      ]
    },
    {
      findingName: ThoraxMRTBonesFindingTypeEnum.ScapularFracture,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.sideType)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.fractureType)
        }
      ]
    },
    {
      findingName: ThoraxMRTBonesFindingTypeEnum.RibFracture,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.ribLocalization),
          isLocalizer: true
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.fractureType),
          validateCondition: {
            customConditionFunction: (m: BonesFindingUiModel) => compact(Object.values(m.ribLocalization)).length === 1
          }
        }
      ]
    },
    {
      findingName: ThoraxMRTBonesFindingTypeEnum.SpinalFracture,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.spineLocalization),
          isLocalizer: true
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.fractureType),
          validateCondition: {
            customConditionFunction: (m: BonesFindingUiModel) => compact(Object.values(m.spineLocalization)).length === 1
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.pathologyNoFractureType),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.fractureType),
            requiredValue: FractureTypeEnum.PathologyNoFracture
          }
        }
      ]
    },
    {
      findingName: ThoraxMRTBonesFindingTypeEnum.SternalFracture,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.fractureType)
        }
      ]
    },
    {
      findingName: ThoraxMRTBonesFindingTypeEnum.ClavicularMass,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.characterizationOneDifferentialDiagnosis),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.differentialDiagnosis01),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.sideType)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.extensionSize)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.marginType)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.corticalBone)
        }
      ]
    },
    {
      findingName: ThoraxMRTBonesFindingTypeEnum.ScapularMass,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.characterizationOneDifferentialDiagnosis),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.differentialDiagnosis01),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.sideType)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.extensionSize)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.marginType)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.corticalBone)
        }
      ]
    },
    {
      findingName: ThoraxMRTBonesFindingTypeEnum.SternalMass,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.characterizationOneDifferentialDiagnosis),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.differentialDiagnosis01),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        },
        {
          modelName: [
            nameof<BonesFindingUiModel>(m => m.isSternalManubriumLocalized),
            nameof<BonesFindingUiModel>(m => m.isSternalBodyLocalized),
            nameof<BonesFindingUiModel>(m => m.isXiphoidProcessLocalized)
          ]
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.extensionSize)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.marginType)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.corticalBone)
        }
      ]
    },
    {
      findingName: ThoraxMRTBonesFindingTypeEnum.MassOfTheRibs,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.characterizationOneDifferentialDiagnosis),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.differentialDiagnosis01),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.ribLocalization),
          isLocalizer: true
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.extensionSize)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.marginType)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.corticalBone)
        }
      ]
    },
    {
      findingName: ThoraxMRTBonesFindingTypeEnum.SpinalMass,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.characterizationOneDifferentialDiagnosis),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.differentialDiagnosis01),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.spineLocalization),
          isLocalizer: true
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.extensionSize)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.marginType)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.corticalBone)
        }
      ]
    }
  ]
};
