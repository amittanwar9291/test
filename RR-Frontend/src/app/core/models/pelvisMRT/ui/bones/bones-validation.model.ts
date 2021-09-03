import { nameof } from 'ts-simple-nameof/src/nameof';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { BonesFindingUiModel } from './bones-finding-ui.model';
import { BonesFindingTypeEnum } from '@enums/pelvisMRT/bones/bones-finding-type.enum';

export const BonesValidationModel: IValidationModel = {
  finding: [
    {
      findingName: BonesFindingTypeEnum.FractureProximalFemur,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.hipLocalizer),
          isLocalizer: true
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.fpfClassificationType)
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.FractureFemoralShaft,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.hipLocalizer),
          isLocalizer: true
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.ffsLocalizationType)
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.FractureAcetabulum,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.hipLocalizer),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.StressFracture,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.hipLocalizer),
          isLocalizer: true
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.localizationFemoralNeckType),
          validateCondition: {
            customConditionFunction: isFemoralNeckSelected
          }
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.SubchondralInsufficiencyFracture,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.hipLocalizer),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.BoneMarrowEdema,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.expansionHipLocalizer),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.TransientBoneMarrowEdema,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.hipLocalizer),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.AvascularNecrosisOfTheFemoralHead,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.hipLocalizer),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.Coxarthrosis,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.hipLocalizer),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.Osteomyelitis,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.hipLocalizer),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.OsteitisPubis,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.hipLocalizer),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.Bursitis,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.sideType)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.bursitisLocalizationType)
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.OsteitisPubis,
      elements: []
    },
    {
      findingName: BonesFindingTypeEnum.JointEffusion,
      elements: [
        {
          modelName: [nameof<BonesFindingUiModel>(m => m.isJointEffusionRight), nameof<BonesFindingUiModel>(m => m.isJointEffusionLeft)]
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.Tumor,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.singleSelectionTumorHipLocalizer),
          isLocalizer: true
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.expansionSizeInMm)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.limitationType)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.corticalisType)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.differentialDiagnosis1),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: 'IDescribe'
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.differentialDiagnosis),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: 'IKnow'
          }
        }
      ]
    }
  ]
};

function isFemoralNeckSelected(model: BonesFindingUiModel): boolean {
  return model.hipLocalizer.leftFemoralNeck || model.hipLocalizer.rightFemoralNeck;
}
