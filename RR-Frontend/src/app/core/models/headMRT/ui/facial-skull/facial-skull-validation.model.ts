import { nameof } from 'ts-simple-nameof';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';
import { FacialSkullFindingTypeEnum } from '@enums/headMRT/facial-skull/facial-skull-finding-type.enum';

export const FacialSkullValidationModel: IValidationModel = {
  finding: [
    {
      findingName: FacialSkullFindingTypeEnum.SkullBase,
      elements: [
        {
          modelName: nameof<FacialSkullFindingUiModel>(m => m.differentialDiagnosis1LocalizationType),
          validateCondition: {
            modelName: nameof<FacialSkullFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<FacialSkullFindingUiModel>(m => m.sideType)
        },
        {
          modelName: nameof<FacialSkullFindingUiModel>(m => m.differentialDiagnosis1Type),
          validateCondition: {
            modelName: nameof<FacialSkullFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    },
    {
      findingName: FacialSkullFindingTypeEnum.TemporalBone,
      elements: [
        {
          modelName: nameof<FacialSkullFindingUiModel>(m => m.differentialDiagnosis1LocalizationType),
          validateCondition: {
            modelName: nameof<FacialSkullFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<FacialSkullFindingUiModel>(m => m.sideType)
        },
        {
          modelName: nameof<FacialSkullFindingUiModel>(m => m.differentialDiagnosis1Type),
          validateCondition: {
            modelName: nameof<FacialSkullFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    },
    {
      findingName: FacialSkullFindingTypeEnum.Orbita,
      elements: [
        {
          modelName: nameof<FacialSkullFindingUiModel>(m => m.orbitaDiagnosis1LocalizationType),
          validateCondition: {
            modelName: nameof<FacialSkullFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<FacialSkullFindingUiModel>(m => m.sideType)
        },
        {
          modelName: nameof<FacialSkullFindingUiModel>(m => m.orbitaDiagnosis1Type),
          validateCondition: {
            modelName: nameof<FacialSkullFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    },
    {
      findingName: FacialSkullFindingTypeEnum.ParanasalSinusesVariant,
      elements: [
        {
          modelName: [nameof<FacialSkullFindingUiModel>(m => m.sideType)],
          validateCondition: {
            modelName: nameof<FacialSkullFindingUiModel>(m => m.isDeviatedNasalSeptum)
          }
        },
        {
          modelName: [
            nameof<FacialSkullFindingUiModel>(m => m.isConchaBullosaRight),
            nameof<FacialSkullFindingUiModel>(m => m.isConchaBullosaLeft)
          ],
          validateCondition: {
            modelName: nameof<FacialSkullFindingUiModel>(m => m.isConchaBullosa)
          }
        },
        {
          modelName: [nameof<FacialSkullFindingUiModel>(m => m.levelType)],
          validateCondition: {
            modelName: nameof<FacialSkullFindingUiModel>(m => m.isConchaBullosa)
          }
        },
        {
          modelName: [
            nameof<FacialSkullFindingUiModel>(m => m.isInfraorbitalHallerRight),
            nameof<FacialSkullFindingUiModel>(m => m.isInfraorbitalHallerLeft)
          ],
          validateCondition: {
            modelName: nameof<FacialSkullFindingUiModel>(m => m.isInfraorbitalHallerCell)
          }
        },

        {
          modelName: [
            nameof<FacialSkullFindingUiModel>(m => m.isOnodiCellsRight),
            nameof<FacialSkullFindingUiModel>(m => m.isOnodiCellsLeft)
          ],
          validateCondition: {
            modelName: nameof<FacialSkullFindingUiModel>(m => m.isOnodiCells)
          }
        }
      ]
    },
    {
      findingName: FacialSkullFindingTypeEnum.ParanasalSinuses,
      elements: [
        {
          modelName: nameof<FacialSkullFindingUiModel>(m => m.paranasalSinusesDiagnosis1LocalizationType),
          validateCondition: {
            modelName: nameof<FacialSkullFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<FacialSkullFindingUiModel>(m => m.paranasalSinusesDiagnosis1Type),
          validateCondition: {
            modelName: nameof<FacialSkullFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    },
    {
      findingName: FacialSkullFindingTypeEnum.OralCavity,
      elements: [
        {
          modelName: nameof<FacialSkullFindingUiModel>(m => m.oralCavityDiagnosis1LocalizationType),
          validateCondition: {
            modelName: nameof<FacialSkullFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<FacialSkullFindingUiModel>(m => m.oralCavityDiagnosis1Type),
          validateCondition: {
            modelName: nameof<FacialSkullFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    },
    {
      findingName: FacialSkullFindingTypeEnum.JawTeeth,
      elements: [
        {
          modelName: [nameof<FacialSkullFindingUiModel>(m => m.jawTeethType)]
        }
      ]
    },
    {
      findingName: FacialSkullFindingTypeEnum.SalivaryGlands,
      elements: [
        {
          modelName: nameof<FacialSkullFindingUiModel>(m => m.salivaryGlandsDiagnosis1LocalizationType),
          validateCondition: {
            modelName: nameof<FacialSkullFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: [nameof<FacialSkullFindingUiModel>(m => m.isRight), nameof<FacialSkullFindingUiModel>(m => m.isLeft)]
        },
        {
          modelName: nameof<FacialSkullFindingUiModel>(m => m.salivaryGlandsDiagnosis1Type),
          validateCondition: {
            modelName: nameof<FacialSkullFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    },
    {
      findingName: FacialSkullFindingTypeEnum.Skull,
      elements: [
        {
          modelName: nameof<FacialSkullFindingUiModel>(m => m.differentialDiagnosis1LocalizationType),
          validateCondition: {
            modelName: nameof<FacialSkullFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<FacialSkullFindingUiModel>(m => m.differentialDiagnosis1Type),
          validateCondition: {
            modelName: nameof<FacialSkullFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        },
        {
          modelName: [nameof<FacialSkullFindingUiModel>(m => m.sideType)]
        },
        {
          modelName: [
            nameof<FacialSkullFindingUiModel>(m => m.isFrontal),
            nameof<FacialSkullFindingUiModel>(m => m.isParietal),
            nameof<FacialSkullFindingUiModel>(m => m.isOccipital),
            nameof<FacialSkullFindingUiModel>(m => m.isTemporal)
          ]
        }
      ]
    }
  ]
};
