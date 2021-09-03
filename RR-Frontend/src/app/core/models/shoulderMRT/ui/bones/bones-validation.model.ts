import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { BonesFindingUiModel } from '@models/shoulderMRT/ui/bones/bones-finding-ui.model';

import { nameof } from 'ts-simple-nameof';

import { BonesFindingTypeEnum, BoneTypeEnum, FractureClassificationTypeEnum } from '@enums/shoulderMRT/bones';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

export const BonesValidation: IValidationModel = {
  finding: [
    {
      findingName: BonesFindingTypeEnum.Fracture,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.fractureHumerusNeerRatingType),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.fractureHumerusClassificationType),
            requiredValue: FractureClassificationTypeEnum.Neer
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.boneType)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.fractureHumerusClassificationType),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.boneType),
            requiredValue: BoneTypeEnum.ProximalHumerus
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.fractureHumerusAoRatingType),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.fractureHumerusClassificationType),
            requiredValue: FractureClassificationTypeEnum.AO
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.fractureClaviculaEvaluationType),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.boneType),
            requiredValue: BoneTypeEnum.Clavicle
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.fractureScapulaEvaluationType),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.boneType),
            requiredValue: BoneTypeEnum.Scapula
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.aoClassificationAO12Type),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.boneType),
            requiredValue: BoneTypeEnum.HumeralDiaphysis
          }
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.PostTraumatic,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.posttraumaticHillSachsType)
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.BoneMarrowEdema,
      elements: [
        {
          modelName: [
            nameof<BonesFindingUiModel>(m => m.isProximalerHumerus),
            nameof<BonesFindingUiModel>(m => m.isLateralClavicle),
            nameof<BonesFindingUiModel>(m => m.isScapula)
          ]
        },
        {
          modelName: [
            nameof<BonesFindingUiModel>(m => m.isHillSachsLesion),
            nameof<BonesFindingUiModel>(m => m.isReverseHillSachsLesion),
            nameof<BonesFindingUiModel>(m => m.isHumeralHead),
            nameof<BonesFindingUiModel>(m => m.isGreaterTubercle),
            nameof<BonesFindingUiModel>(m => m.isLesserTubercle)
          ],
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.isProximalerHumerus)
          }
        },
        {
          modelName: [
            nameof<BonesFindingUiModel>(m => m.isAcromialEnd),
            nameof<BonesFindingUiModel>(m => m.isClavicularBody),
            nameof<BonesFindingUiModel>(m => m.isExtremitasClaviculae)
          ],
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.isLateralClavicle)
          }
        },
        {
          modelName: [
            nameof<BonesFindingUiModel>(m => m.isAkromion),
            nameof<BonesFindingUiModel>(m => m.isProcessusCoracoideus),
            nameof<BonesFindingUiModel>(m => m.isScapularSpine),
            nameof<BonesFindingUiModel>(m => m.isSupraspinatousFossa),
            nameof<BonesFindingUiModel>(m => m.isGlenoidFossa),
            nameof<BonesFindingUiModel>(m => m.isInfraspinatousFossa)
          ],
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.isScapula)
          }
        }
      ]
    },
    {
      findingName: BonesFindingTypeEnum.BoneTumor,
      elements: [
        {
          modelName: nameof<BonesFindingUiModel>(m => m.firstLocalizationType)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.axialMaxInMm)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.tumorDifferentialDiagnosis),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.limitationType)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.cortexType)
        },
        {
          modelName: nameof<BonesFindingUiModel>(m => m.differentialDiagnosis01),
          validateCondition: {
            modelName: nameof<BonesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    }
  ]
};
