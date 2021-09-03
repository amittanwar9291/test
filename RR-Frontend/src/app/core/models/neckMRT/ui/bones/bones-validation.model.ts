import { nameof } from 'ts-simple-nameof';

import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { BonesFindingUiModel } from '@models/neckMRT/ui/bones/bones-finding-ui.model';

import { AxialDeviationTypeEnum, BonesFindingTypeEnum, MyelonPathologyTypeEnum } from '@enums/neckMRT/bones';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { SoftTissuesFindingUiModel } from '@models/neckMRT/ui/soft-tissues/soft-tissues-finding-ui.model';

export const BonesValidationModel: IValidationModel = {
  finding: [
    {
      findingName: BonesFindingTypeEnum.ExternalMaterial,
      elements: [
        {
          modelName: [
            nameof<BonesFindingUiModel>(m => m.isSpondylodesis),
            nameof<BonesFindingUiModel>(m => m.isOsteosynthesis),
            nameof<BonesFindingUiModel>(m => m.isIntervertebralDiscProthesis),
            nameof<BonesFindingUiModel>(m => m.isVertebroplasty)
          ]
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.spondylodesisSpineLocations),
          isLocalizer: true,
          validateCondition: { modelName: nameof<BonesFindingUiModel>(m => m.isSpondylodesis) }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.spondylodesisTraumaLocations),
          isLocalizer: true,
          validateCondition: { modelName: nameof<BonesFindingUiModel>(m => m.isSpondylodesis) }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.osteosynthesisSpineLocations),
          isLocalizer: true,
          validateCondition: { modelName: nameof<BonesFindingUiModel>(m => m.isOsteosynthesis) }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.prothesisSpineLocations),
          isLocalizer: true,
          validateCondition: { modelName: nameof<BonesFindingUiModel>(m => m.isIntervertebralDiscProthesis) }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.vertebroplastySpineLocations),
          isLocalizer: true,
          validateCondition: { modelName: nameof<BonesFindingUiModel>(m => m.isVertebroplasty) }
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.AxisDeviation,
      elements: [
        { modelName: nameof<BonesFindingUiModel>(m => m.axialDeviationType) },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.spineLocations),
          isLocalizer: true,
          validateCondition: {
            customConditionFunction: (m: BonesFindingUiModel) => {
              return (
                m.axialDeviationType === AxialDeviationTypeEnum.Hyperlordosis || m.axialDeviationType === AxialDeviationTypeEnum.Kyphosis
              );
            }
          }
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.IntervertebralDisc,
      elements: [
        { modelName: nameof<BonesFindingUiModel>(m => m.pathologyType) },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.spineLocations),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.ErosiveOsteochondrosis,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.spineLocations),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.Spondylodiscitis,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.spineLocations),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.Myelon,
      elements: [
        { modelName: nameof<BonesFindingUiModel>(m => m.myelonPathologyType) },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.spineLocations),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.myelonPathologyType),
            customConditionFunction: (m: BonesFindingUiModel) => m.myelonPathologyType !== MyelonPathologyTypeEnum.None
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.extensionCraniocaudalInMm),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.myelonPathologyType),
            requiredValue: MyelonPathologyTypeEnum.Syringohydromyelia
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.extensionSagittalInMm),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.myelonPathologyType),
            requiredValue: MyelonPathologyTypeEnum.Syringohydromyelia
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.myelonDifferentialDiagnosis1),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.myelonPathologyType),
            requiredValue: MyelonPathologyTypeEnum.SpinalCanalMass
          }
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.BoneMarrowEdema,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.spineLocations),
          isLocalizer: true,
          validateCondition: { modelName: nameof<BonesFindingUiModel>(m => m.isVertebra) }
        },
        {
          modelName: [nameof<BonesFindingUiModel>(m => m.isTendinitisRight), nameof<BonesFindingUiModel>(m => m.isTendinitisLeft)],
          validateCondition: { modelName: nameof<BonesFindingUiModel>(m => m.isTendinitisCalcareaLongus) }
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.Osteomyelitis,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.sizeInMm),
          validateCondition: { modelName: nameof<BonesFindingUiModel>(m => m.isAbscess) }
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.SpatialNeoplasm,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.mainSpatialNeoplasmDifferentialDiagnosisType1),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: [
            nameof<BonesFindingUiModel>(m => m.isSpine),
            nameof<BonesFindingUiModel>(m => m.isFacialSkeleton),
            nameof<BonesFindingUiModel>(m => m.isCartilage),
            nameof<BonesFindingUiModel>(m => m.isPosteriorCranialFossa)
          ]
        },
        { modelName: nameof<BonesFindingUiModel>(m => m.sizeInMm) },
        { modelName: nameof<SoftTissuesFindingUiModel>(m => m.marginType) },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.spatialNeoplasmDifferentialDiagnosisType1),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    }
  ]
};
