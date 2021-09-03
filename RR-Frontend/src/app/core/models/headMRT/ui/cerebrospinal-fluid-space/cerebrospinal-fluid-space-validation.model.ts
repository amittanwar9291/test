import { CerebrospinalFluidSpaceFindingTypeEnum } from '@enums/headMRT/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof';
import { CerebrospinalFluidSpaceFindingUiModel } from './cerebrospinal-fluid-space-finding-ui.model';

export const CerebrospinalFluidSpaceValidationModel: IValidationModel = {
  finding: [
    {
      findingName: CerebrospinalFluidSpaceFindingTypeEnum.NormVariantVentricle,
      elements: [
        {
          modelName: nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.normVariantVentricleType)
        }
      ]
    },
    {
      findingName: CerebrospinalFluidSpaceFindingTypeEnum.VentricleConfiguration,
      elements: [
        {
          modelName: nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.ventricleDifferentialDiagnosis1Type)
        },
        {
          modelName: nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.configurationType)
        }
      ]
    },
    {
      findingName: CerebrospinalFluidSpaceFindingTypeEnum.Mass,
      elements: [
        {
          modelName: nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.massDifferentialDiagnosisIDescribe1Type),
          validateCondition: {
            modelName: nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        },
        {
          modelName: nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.size)
        },
        {
          modelName: nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.massDifferentialDiagnosisIKnow1Type),
          validateCondition: {
            modelName: nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: [
            nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isLateralVentricle),
            nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isForamenOfMonro),
            nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isIIIVentricle),
            nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isAquaeductusMesencephaliSylvii),
            nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isIVVentricle),
            nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isForaminaOfLuschka),
            nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isForamenOfMagendie),
            nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isSubarachnoidCisterns)
          ]
        }
      ]
    },
    {
      findingName: CerebrospinalFluidSpaceFindingTypeEnum.SubarachnoidHemorrhage,
      elements: [
        {
          modelName: [
            nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isLeftSide),
            nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isRightSide),
            nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isMedian)
          ]
        },
        {
          modelName: [
            nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isFrontal),
            nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isFrontobasal),
            nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isTemporal),
            nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isParietal),
            nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isOccipital),
            nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isInfratentorial),
            nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isSubarachnoidCisterns)
          ]
        }
      ]
    }
  ]
};
