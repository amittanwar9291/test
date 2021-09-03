import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof';
import { LungParenchymaFindingTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/lung-parenchyma-finding-type.enum';
import { LungParenchymaFindingUiModel } from '@models/thoraxCT/ui/lung-parenchyma/lung-parenchyma-finding-ui.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { LungParenchymaLocalizationTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/lung-parenchyma-localization-type.enum';
import { LungSectionTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/lung-section-type.enum';
import { ConsolidationLocalizationTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/consolidation-localization-type.enum';

export const LungPerenchymaValidationModel: IValidationModel = {
  finding: [
    {
      findingName: LungParenchymaFindingTypeEnum.Nodule,
      elements: [
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.mainCharacteristicsDifferentialDiagnosis01),
          validateCondition: {
            modelName: nameof<LungParenchymaFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.mainCharacteristicsLocalizationType)
        },
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.mainCharacteristicsLungsSegmentsLocation),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<LungParenchymaFindingUiModel>(m => m.mainCharacteristicsLocalizationType),
            requiredValue: LungParenchymaLocalizationTypeEnum.AtSegmentLevel
          }
        },
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.mainCharacteristicsLungsFlapsLocation),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<LungParenchymaFindingUiModel>(m => m.mainCharacteristicsLocalizationType),
            requiredValue: LungParenchymaLocalizationTypeEnum.AtLobeLevel
          }
        },
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.measuredValuesMaxDiameterAxialInMm)
        },
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.differentialDiagnosis01),
          validateCondition: {
            modelName: nameof<LungParenchymaFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        },
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.differentialDiagnosisLocalizationType),
          validateCondition: {
            modelName: nameof<LungParenchymaFindingUiModel>(m => m.isMoreThanOneLesionSamePathology)
          }
        }
      ]
    },
    {
      findingName: LungParenchymaFindingTypeEnum.Mass,
      elements: [
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.mainCharacteristicsDifferentialDiagnosis01),
          validateCondition: {
            modelName: nameof<LungParenchymaFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.mainCharacteristicsLocalizationType)
        },
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.mainCharacteristicsLungsSegmentsLocation),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<LungParenchymaFindingUiModel>(m => m.mainCharacteristicsLocalizationType),
            requiredValue: LungParenchymaLocalizationTypeEnum.AtSegmentLevel
          }
        },
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.mainCharacteristicsLungsFlapsLocation),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<LungParenchymaFindingUiModel>(m => m.mainCharacteristicsLocalizationType),
            requiredValue: LungParenchymaLocalizationTypeEnum.AtLobeLevel
          }
        },
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.measuredValuesMaxDiameterAxialInMm)
        },
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.differentialDiagnosis01),
          validateCondition: {
            modelName: nameof<LungParenchymaFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        },
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.differentialDiagnosisLocalizationType),
          validateCondition: {
            modelName: nameof<LungParenchymaFindingUiModel>(m => m.isMoreThanOneLesionSamePathology)
          }
        }
      ]
    },
    {
      findingName: LungParenchymaFindingTypeEnum.Atelectasis,
      elements: [
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.lungSectionType)
        },
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.lungSectionType),
          validateCondition: {
            modelName: nameof<LungParenchymaFindingUiModel>(m => m.lungSectionType),
            requiredValue: LungSectionTypeEnum.TotalAtelectasis
          }
        },
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.mainCharacteristicsLungsFlapsLocation),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<LungParenchymaFindingUiModel>(m => m.lungSectionType),
            requiredValue: LungSectionTypeEnum.LobeAtelectasis
          }
        },
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.mainCharacteristicsLungsSegmentsLocation),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<LungParenchymaFindingUiModel>(m => m.lungSectionType),
            requiredValue: LungSectionTypeEnum.SegmentAtelectasis
          }
        },
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.peculiaritySegmentatelectasisType),
          validateCondition: {
            modelName: nameof<LungParenchymaFindingUiModel>(m => m.lungSectionType),
            requiredValue: LungSectionTypeEnum.SegmentAtelectasis
          }
        },
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.formType),
          validateCondition: {
            modelName: nameof<LungParenchymaFindingUiModel>(m => m.lungSectionType),
            requiredValue: LungSectionTypeEnum.SegmentAtelectasis
          }
        },
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.sideType),
          validateCondition: {
            modelName: nameof<LungParenchymaFindingUiModel>(m => m.lungSectionType),
            requiredValue: LungSectionTypeEnum.TotalAtelectasis
          }
        }
      ]
    },
    {
      findingName: LungParenchymaFindingTypeEnum.Consolidation,
      elements: [
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.mainCharacteristicsDifferentialDiagnosis01),
          validateCondition: {
            modelName: nameof<LungParenchymaFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.consolidationLocalizationType)
        },
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.mainCharacteristicsLungsSegmentsLocation),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<LungParenchymaFindingUiModel>(m => m.consolidationLocalizationType),
            requiredValue: ConsolidationLocalizationTypeEnum.Segmental
          }
        },
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.mainCharacteristicsLungsFlapsLocation),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<LungParenchymaFindingUiModel>(m => m.consolidationLocalizationType),
            requiredValue: ConsolidationLocalizationTypeEnum.Lobar
          }
        },
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.differentialDiagnosis01),
          validateCondition: {
            modelName: nameof<LungParenchymaFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    },
    {
      findingName: LungParenchymaFindingTypeEnum.PulmonaryInfarction,
      elements: [
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.mainCharacteristicsLocalizationType)
        },
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.pulmonaryInfarctionType)
        },
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.mainCharacteristicsLungsSegmentsLocation),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<LungParenchymaFindingUiModel>(m => m.mainCharacteristicsLocalizationType),
            requiredValue: LungParenchymaLocalizationTypeEnum.AtSegmentLevel
          }
        },
        {
          modelName: nameof<LungParenchymaFindingUiModel>(m => m.mainCharacteristicsLungsFlapsLocation),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<LungParenchymaFindingUiModel>(m => m.mainCharacteristicsLocalizationType),
            requiredValue: LungParenchymaLocalizationTypeEnum.AtLobeLevel
          }
        }
      ]
    }
  ]
};
