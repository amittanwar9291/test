import { AlignmentTypeEnum, BonesFindingTypeEnum } from '@enums/hipMRT/bones';
import { BonesFindingUiModel } from '@models/hipMRT/ui/bones/bones-finding-ui.model';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { nameof } from 'ts-simple-nameof';

export const BonesValidationModel: IValidationModel = {
  finding: [
    {
      findingName: BonesFindingTypeEnum.Alignment,
      elements: [
        {
          modelName: [nameof<BonesFindingUiModel>(m => m.isRight), nameof<BonesFindingUiModel>(m => m.isLeft)],
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.alignmentType),
            requiredValue: AlignmentTypeEnum.Pathology
          }
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.FractureFemoralShaftAndTrochanter,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.hipSpecificLocalizations),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.FractureFemoralNeck,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.hipSpecificLocalizations),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.FractureFemoralHead,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.hipSpecificLocalizations),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.FractureAcetabulum,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.hipSpecificLocalizations),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.FracturePelvis,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.hipSpecificLocalizations),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.StressFracture,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.hipSpecificLocalizations),
          isLocalizer: true
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.partType),
          validateCondition: {
            customConditionFunction: (model: BonesFindingUiModel) => {
              return model.hipSpecificLocalizations.leftFemoralNeck === true || model.hipSpecificLocalizations.rightFemoralNeck === true;
            }
          }
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.SubchondralInsufficiencyFracture,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.hipSpecificLocalizations),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.BoneMarrowEdema,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.hipSpecificLocalizations),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.TransientBoneMarrowEdema,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.hipSpecificLocalizations),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.AvascularFemoralHeadNecrosis,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.sideType)
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.Coxarthrosis,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.sideType)
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.Osteomyelitis,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.hipSpecificLocalizations),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.MassOrOsteolysis,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.hipSpecificLocalizations),
          isLocalizer: true
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.expansionSizeInMm)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.mainDiagnosisType),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.differentialDiagnosis1),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.marginType)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.massOrOsteolysisCorticalBoneType)
        }
      ]
    }
  ]
};
