import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { compact } from 'lodash';
import { nameof } from 'ts-simple-nameof';
import { ThoraxBonesFindingsTypeEnum } from '@enums/thoraxCT/bones/thorax-bones-findings-type.enum';
import { BonesFindingUiModel } from '@models/thoraxCT/ui/bones/bones-finding-ui.model';
import { FractureOfSpineTypeEnum } from '@enums/thoraxCT/bones/fracture-of-spine-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

export const BonesValidationModel: IValidationModel = {
  finding: [
    {
      findingName: ThoraxBonesFindingsTypeEnum.FractureOfClavicle,
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
          modelName: nameof<BonesFindingUiModel>(m => m.claviculaeFractureType),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.isAOClassification)
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.rockwoodType),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.isRockwood)
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.tossyType),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.isTossy)
          }
        }
      ]
    },
    {
      findingName: ThoraxBonesFindingsTypeEnum.FractureOfScapula,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.sideType)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.scapulaFractureType)
        }
      ]
    },
    {
      findingName: ThoraxBonesFindingsTypeEnum.FractureOfRibs,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.ribLocation),
          isLocalizer: true
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.ribFractureType),
          validateCondition: {
            customConditionFunction: (m: BonesFindingUiModel) => compact(Object.values(m.ribLocation)).length === 1
          }
        }
      ]
    },
    {
      findingName: ThoraxBonesFindingsTypeEnum.FractureOfSternum,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.sternumFractureType)
        }
      ]
    },
    {
      findingName: ThoraxBonesFindingsTypeEnum.FractureOfSpine,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.vertebralColumnLocalization),
          isLocalizer: true
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.fractureOfSpineType),
          validateCondition: {
            customConditionFunction: (m: BonesFindingUiModel) => compact(Object.values(m.vertebralColumnLocalization)).length === 1
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.pathologyType),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.fractureOfSpineType),
            requiredValue: FractureOfSpineTypeEnum.PathologyNoFracture
          }
        }
      ]
    },
    {
      findingName: ThoraxBonesFindingsTypeEnum.MassClavicle,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.sideType)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.sizeInMm)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.bonesDifferentialDiagnosisType),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.bonesDifferentialDiagnosis1),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    },
    {
      findingName: ThoraxBonesFindingsTypeEnum.MassScapula,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.sideType)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.sizeInMm)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.bonesDifferentialDiagnosisType),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.bonesDifferentialDiagnosis1),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    },
    {
      findingName: ThoraxBonesFindingsTypeEnum.MassRibs,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.ribLocation),
          isLocalizer: true
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.sizeInMm)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.bonesDifferentialDiagnosisType),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.bonesDifferentialDiagnosis1),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    },
    {
      findingName: ThoraxBonesFindingsTypeEnum.MassSternum,
      elements: [
        {
          modelName: [
            nameof<BonesFindingUiModel>(m => m.isManubrium),
            nameof<BonesFindingUiModel>(m => m.isCorpus),
            nameof<BonesFindingUiModel>(m => m.isXiphoidProcess)
          ]
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.sizeInMm)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.bonesDifferentialDiagnosisType),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.bonesDifferentialDiagnosis1),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    },
    {
      findingName: ThoraxBonesFindingsTypeEnum.MassSpine,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.vertebralColumnLocalization),
          isLocalizer: true
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.sizeInMm)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.bonesDifferentialDiagnosisType),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.bonesDifferentialDiagnosis1),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    }
  ]
};
