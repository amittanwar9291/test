import { InjuryKindEnum } from '@enums/kneeMRT/ribbons';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { RibbonsFindingUiModel } from '@models/kneeMRT/ui/ribbons/ribbons-finding-ui.model';

import { nameof } from 'ts-simple-nameof';

import { RibbonsFindingTypeEnum } from '@enums/kneeMRT/ribbons/ribbons-finding-type.enum';

export const RibbonsValidationModel: IValidationModel = {
  finding: [
    {
      findingName: RibbonsFindingTypeEnum.InnerMeniscusDegeneration,
      elements: [
        { modelName: nameof<RibbonsFindingUiModel>(m => m.meniscusLocalization1), isLocalizer: true },
        { modelName: nameof<RibbonsFindingUiModel>(m => m.gradeClassification), isLocalizer: true },
        {
          modelName: [
            nameof<RibbonsFindingUiModel>(m => m.isChondropathyTibial),
            nameof<RibbonsFindingUiModel>(m => m.isChondropathyFemoral)
          ],
          validateCondition: {
            modelName: nameof<RibbonsFindingUiModel>(m => m.isChondropathyAssociated)
          }
        },
        {
          modelName: [nameof<RibbonsFindingUiModel>(m => m.isCMOedemaTibial), nameof<RibbonsFindingUiModel>(m => m.isCMOedemaFemoral)],
          validateCondition: {
            modelName: nameof<RibbonsFindingUiModel>(m => m.isCMOedemaSubchondralAssociated)
          }
        },
        {
          modelName: [
            nameof<RibbonsFindingUiModel>(m => m.isSubchondralTibial),
            nameof<RibbonsFindingUiModel>(m => m.isSubchondralFemoral)
          ],
          validateCondition: {
            modelName: nameof<RibbonsFindingUiModel>(m => m.isSubchondralSclerosisAssociated)
          }
        }
      ]
    },
    {
      findingName: RibbonsFindingTypeEnum.InnerMeniscusVarian,
      elements: [
        {
          modelName: [
            nameof<RibbonsFindingUiModel>(m => m.isDiscoidMeniscus),
            nameof<RibbonsFindingUiModel>(m => m.isParsIntermediaWavyRepresentation),
            nameof<RibbonsFindingUiModel>(m => m.isPhysiologicalT2Hyperintensity),
            nameof<RibbonsFindingUiModel>(m => m.isMeniscalOssile),
            nameof<RibbonsFindingUiModel>(m => m.isAbsentMeniscus),
            nameof<RibbonsFindingUiModel>(m => m.isSignificantVolumeDeclineIM)
          ]
        },
        {
          modelName: nameof<RibbonsFindingUiModel>(m => m.meniscusLocalization1),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<RibbonsFindingUiModel>(m => m.isPhysiologicalT2Hyperintensity)
          }
        },
        {
          modelName: nameof<RibbonsFindingUiModel>(m => m.meniscusLocalization2),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<RibbonsFindingUiModel>(m => m.isMeniscalOssile)
          }
        }
      ]
    },
    {
      findingName: RibbonsFindingTypeEnum.OuterMeniscusDegeneration,
      elements: [
        { modelName: nameof<RibbonsFindingUiModel>(m => m.meniscusLocalization1), isLocalizer: true },
        { modelName: nameof<RibbonsFindingUiModel>(m => m.gradeClassification), isLocalizer: true },
        {
          modelName: [
            nameof<RibbonsFindingUiModel>(m => m.isChondropathyTibial),
            nameof<RibbonsFindingUiModel>(m => m.isChondropathyFemoral)
          ],
          validateCondition: {
            modelName: nameof<RibbonsFindingUiModel>(m => m.isChondropathyAssociated)
          }
        },
        {
          modelName: [nameof<RibbonsFindingUiModel>(m => m.isCMOedemaTibial), nameof<RibbonsFindingUiModel>(m => m.isCMOedemaFemoral)],
          validateCondition: {
            modelName: nameof<RibbonsFindingUiModel>(m => m.isCMOedemaSubchondralAssociated)
          }
        },
        {
          modelName: [
            nameof<RibbonsFindingUiModel>(m => m.isSubchondralTibial),
            nameof<RibbonsFindingUiModel>(m => m.isSubchondralFemoral)
          ],
          validateCondition: {
            modelName: nameof<RibbonsFindingUiModel>(m => m.isSubchondralSclerosisAssociated)
          }
        }
      ]
    },
    {
      findingName: RibbonsFindingTypeEnum.OuterMeniscusVariant,
      elements: [
        {
          modelName: [
            nameof<RibbonsFindingUiModel>(m => m.isDiscoidMeniscus),
            nameof<RibbonsFindingUiModel>(m => m.isParsIntermediaWavyRepresentation),
            nameof<RibbonsFindingUiModel>(m => m.isPhysiologicalT2Hyperintensity),
            nameof<RibbonsFindingUiModel>(m => m.isMeniscalOssile),
            nameof<RibbonsFindingUiModel>(m => m.isAbsentMeniscus),
            nameof<RibbonsFindingUiModel>(m => m.isSignificantVolumeDeclineIM)
          ]
        },
        {
          modelName: nameof<RibbonsFindingUiModel>(m => m.meniscusLocalization1),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<RibbonsFindingUiModel>(m => m.isPhysiologicalT2Hyperintensity)
          }
        },
        {
          modelName: nameof<RibbonsFindingUiModel>(m => m.meniscusLocalization2),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<RibbonsFindingUiModel>(m => m.isMeniscalOssile)
          }
        }
      ]
    },
    {
      findingName: RibbonsFindingTypeEnum.MedialCollateralLigaments,
      elements: [{ modelName: nameof<RibbonsFindingUiModel>(m => m.detail) }]
    },
    {
      findingName: RibbonsFindingTypeEnum.LateralCollateralLigaments,
      elements: [{ modelName: nameof<RibbonsFindingUiModel>(m => m.detail) }]
    },
    {
      findingName: RibbonsFindingTypeEnum.AnteriorCruciateLigamentACL,
      elements: [
        { modelName: nameof<RibbonsFindingUiModel>(m => m.injuryType) },
        {
          modelName: nameof<RibbonsFindingUiModel>(m => m.ruptureKind),
          validateCondition: {
            modelName: nameof<RibbonsFindingUiModel>(m => m.injuryType)
          }
        },
        {
          modelName: nameof<RibbonsFindingUiModel>(m => m.transplantDetail),
          validateCondition: {
            modelName: nameof<RibbonsFindingUiModel>(m => m.ruptureKind),
            requiredValue: InjuryKindEnum.TransplantACL
          }
        },
        {
          modelName: [nameof<RibbonsFindingUiModel>(m => m.isTunnelCystTibial), nameof<RibbonsFindingUiModel>(m => m.isTunnelCystFemoral)],
          validateCondition: {
            modelName: nameof<RibbonsFindingUiModel>(m => m.isTunnelCyst)
          }
        }
      ]
    },
    {
      findingName: RibbonsFindingTypeEnum.PosteriorCruciateLigamentPCL,
      elements: [
        { modelName: nameof<RibbonsFindingUiModel>(m => m.injuryType) },
        {
          modelName: nameof<RibbonsFindingUiModel>(m => m.ruptureKind),
          validateCondition: {
            modelName: nameof<RibbonsFindingUiModel>(m => m.injuryType)
          }
        },
        {
          modelName: nameof<RibbonsFindingUiModel>(m => m.transplantDetail),
          validateCondition: {
            modelName: nameof<RibbonsFindingUiModel>(m => m.ruptureKind),
            requiredValue: InjuryKindEnum.TransplantPCL
          }
        },
        {
          modelName: [nameof<RibbonsFindingUiModel>(m => m.isTunnelCystTibial), nameof<RibbonsFindingUiModel>(m => m.isTunnelCystFemoral)],
          validateCondition: {
            modelName: nameof<RibbonsFindingUiModel>(m => m.isTunnelCyst)
          }
        }
      ]
    }
  ]
};
