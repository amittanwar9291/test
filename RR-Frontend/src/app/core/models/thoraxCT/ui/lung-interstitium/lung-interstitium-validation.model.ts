import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import {
  LocalizationLevelTypeEnum,
  LungInterstitiumAreFindingsEnum,
  LungInterstitiumFindingTypeEnum,
  LungInterstitiumDiagnosisTypeEnum,
  SideComparisonTypeEnum
} from '@enums/thoraxCT/lung-interstitium';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { LungInterstitiumFindingUiModel } from '@models/thoraxCT/ui/lung-interstitium/lung-interstitium-finding-ui.model';
import { LungInterstitiumUiModel } from '@models/thoraxCT/ui/lung-interstitium/lung-interstitium-ui.model';
import { nameof } from 'ts-simple-nameof';

export const LungInterstitiumValidationModel: IValidationModel = {
  elements: [
    {
      modelName: nameof<LungInterstitiumUiModel>(m => m.areFindings)
    },
    {
      modelName: nameof<LungInterstitiumUiModel>(m => m.dominantPatternType),
      validateCondition: {
        modelName: nameof<LungInterstitiumUiModel>(m => m.areFindings),
        requiredValue: LungInterstitiumAreFindingsEnum.Finding
      }
    },
    {
      modelName: nameof<LungInterstitiumUiModel>(m => m.localizationCraniocaudalType),
      validateCondition: {
        modelName: nameof<LungInterstitiumUiModel>(m => m.areFindings),
        requiredValue: LungInterstitiumAreFindingsEnum.Finding
      }
    },
    {
      modelName: nameof<LungInterstitiumUiModel>(m => m.asymmetricalType),
      validateCondition: {
        modelName: nameof<LungInterstitiumUiModel>(m => m.sideComparisonType),
        requiredValue: SideComparisonTypeEnum.Asymmetrical
      }
    },
    {
      modelName: nameof<LungInterstitiumUiModel>(m => m.differentialDiagnosis),
      validateCondition: {
        modelName: nameof<LungInterstitiumUiModel>(m => m.descriptionType),
        requiredValue: DescriptionTypeEnum.IKnow
      }
    },
    {
      modelName: nameof<LungInterstitiumUiModel>(m => m.differentialDiagnosis1),
      validateCondition: {
        modelName: nameof<LungInterstitiumUiModel>(m => m.descriptionType),
        requiredValue: DescriptionTypeEnum.IDescribe
      }
    },
    {
      modelName: nameof<LungInterstitiumUiModel>(m => m.causeType1),
      validateCondition: {
        customConditionFunction: (m: LungInterstitiumUiModel) => {
          return (
            m.differentialDiagnosis === LungInterstitiumDiagnosisTypeEnum.ILDKnownOrigin ||
            m.differentialDiagnosis1 === LungInterstitiumDiagnosisTypeEnum.ILDKnownOrigin
          );
        }
      }
    },
    {
      modelName: nameof<LungInterstitiumUiModel>(m => m.causeType2),
      validateCondition: {
        modelName: nameof<LungInterstitiumUiModel>(m => m.differentialDiagnosis2),
        requiredValue: LungInterstitiumDiagnosisTypeEnum.ILDKnownOrigin
      }
    },
    {
      modelName: nameof<LungInterstitiumUiModel>(m => m.causeType3),
      validateCondition: {
        modelName: nameof<LungInterstitiumUiModel>(m => m.differentialDiagnosis3),
        requiredValue: LungInterstitiumDiagnosisTypeEnum.ILDKnownOrigin
      }
    }
  ],
  finding: [
    {
      findingName: LungInterstitiumFindingTypeEnum.NodularChanges,
      elements: [
        {
          modelName: nameof<LungInterstitiumFindingUiModel>(m => m.distributionSecondaryPulmonaryLobuleType)
        },
        {
          modelName: nameof<LungInterstitiumFindingUiModel>(m => m.localizationType)
        }
      ]
    },
    {
      findingName: LungInterstitiumFindingTypeEnum.IncreasedParenchymalDensity,
      elements: [
        {
          modelName: [
            nameof<LungInterstitiumFindingUiModel>(m => m.isConsolidation),
            nameof<LungInterstitiumFindingUiModel>(m => m.isGroundGlassOpacity),
            nameof<LungInterstitiumFindingUiModel>(m => m.isPleuralThickening)
          ]
        },
        {
          modelName: nameof<LungInterstitiumFindingUiModel>(m => m.lungsFlapsLocation1),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<LungInterstitiumFindingUiModel>(m => m.isConsolidation)
          }
        },
        {
          modelName: nameof<LungInterstitiumFindingUiModel>(m => m.lungsFlapsLocation2),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<LungInterstitiumFindingUiModel>(m => m.isGroundGlassOpacity)
          }
        }
      ]
    },
    {
      findingName: LungInterstitiumFindingTypeEnum.DecreasedParenchymalDensity,
      elements: [
        {
          modelName: nameof<LungInterstitiumFindingUiModel>(m => m.reducedParenchymaDensityPatternType)
        }
      ]
    },
    {
      findingName: LungInterstitiumFindingTypeEnum.BronchialTubes,
      elements: [
        {
          modelName: nameof<LungInterstitiumFindingUiModel>(m => m.lungsFlapsLocation2),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<LungInterstitiumFindingUiModel>(m => m.localizationLevel),
            requiredValue: LocalizationLevelTypeEnum.LobeLevel
          }
        },
        {
          modelName: nameof<LungInterstitiumFindingUiModel>(m => m.lungsSegmentsLocation),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<LungInterstitiumFindingUiModel>(m => m.localizationLevel),
            requiredValue: LocalizationLevelTypeEnum.SegmentLevel
          }
        }
      ]
    }
  ]
};
