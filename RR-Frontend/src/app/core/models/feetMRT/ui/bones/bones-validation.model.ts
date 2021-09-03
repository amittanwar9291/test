import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { BonesFindingUiModel } from './bones-finding-ui.model';
import { nameof } from 'ts-simple-nameof';
import { BonesFindingTypeEnum } from '@enums/feetMRT/bones';
import { StandardVariantTypeEnum } from '@enums/feetMRT/bones/standard-variant';

export const BonesValidationModel: IValidationModel = {
  finding: [
    {
      findingName: BonesFindingTypeEnum.NormalVariantOrAnomaly,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.footThreeSidesLocalization),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.standardVariantType),
            requiredValue: StandardVariantTypeEnum.OssaAccessoriaPedis
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.radioulnarSynostosisType),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.standardVariantType),
            requiredValue: StandardVariantTypeEnum.Coalition
          }
        },
        { modelName: nameof<BonesFindingUiModel>(m => m.standardVariantType) }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.Fracture,
      elements: [
        { modelName: nameof<BonesFindingUiModel>(m => m.threeDimensionalLocalization), isLocalizer: true },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.fractureClassificationType),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.threeDimensionalLocalization),
            customConditionFunction: (model: BonesFindingUiModel) => !model.threeDimensionalLocalization.complexOrMultipleBones
          }
        },
        {
          modelName: [
            nameof<BonesFindingUiModel>(m => m.isHindfoot),
            nameof<BonesFindingUiModel>(m => m.isMidfoot),
            nameof<BonesFindingUiModel>(m => m.isForefoot)
          ],
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.threeDimensionalLocalization),
            customConditionFunction: (model: BonesFindingUiModel) => model.threeDimensionalLocalization.complexOrMultipleBones
          }
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.BoneMarrowEdema,
      elements: [{ modelName: nameof<BonesFindingUiModel>(m => m.threeDimensionalLocalization), isLocalizer: true }]
    },
    {
      findingName: BonesFindingTypeEnum.Dislocation,
      elements: [{ modelName: nameof<BonesFindingUiModel>(m => m.dislocationLocalizationType) }]
    },
    {
      findingName: BonesFindingTypeEnum.OsteochondralLesion,
      elements: [{ modelName: nameof<BonesFindingUiModel>(m => m.threeDimensionalLocalization), isLocalizer: true }]
    },
    {
      findingName: BonesFindingTypeEnum.Osteoarthritis,
      elements: [{ modelName: nameof<BonesFindingUiModel>(m => m.threeDimensionalLocalization), isLocalizer: true }]
    },
    {
      findingName: BonesFindingTypeEnum.Arthritis,
      elements: [{ modelName: nameof<BonesFindingUiModel>(m => m.threeDimensionalLocalization), isLocalizer: true }]
    },
    {
      findingName: BonesFindingTypeEnum.Osteomyelitis,
      elements: [{ modelName: nameof<BonesFindingUiModel>(m => m.threeDimensionalLocalization), isLocalizer: true }]
    },
    {
      findingName: BonesFindingTypeEnum.MassOsteolysis,
      elements: [
        { modelName: nameof<BonesFindingUiModel>(m => m.threeDimensionalLocalization), isLocalizer: true },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.spaceRequirementDifferentialDiagnosis),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: 'IKnow'
          }
        },
        { modelName: nameof<BonesFindingUiModel>(m => m.sizeInMm) },
        { modelName: nameof<BonesFindingUiModel>(m => m.limitationType) },
        { modelName: nameof<BonesFindingUiModel>(m => m.cortexType) },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.differentialDiagnosis1),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: 'IDescribe'
          }
        }
      ]
    }
  ]
};
