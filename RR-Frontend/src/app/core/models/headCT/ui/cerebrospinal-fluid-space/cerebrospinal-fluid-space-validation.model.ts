import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { CerebrospinalFluidSpaceFindingTypeEnum } from '@enums/headCT/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-type.enum';
import { nameof } from 'ts-simple-nameof';
import { CerebrospinalFluidSpaceFindingUiModel } from '@models/headCT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-ui.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

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
          modelName: nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.configurationType)
        },
        {
          modelName: nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.ventricleDifferentialDiagnosis1Type)
        }
      ]
    },
    {
      findingName: CerebrospinalFluidSpaceFindingTypeEnum.Mass,
      elements: [
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
            nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isForamenMonroi),
            nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isIIIVentricle),
            nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isAquaeductusMesencephaliSylvii),
            nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isIVVentricle),
            nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isForamenLuschkae),
            nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isForamenMagendie),
            nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isSubarachnoidCisterns)
          ]
        },
        {
          modelName: nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.size)
        },
        {
          modelName: nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.massDifferentialDiagnosisIDescribe1Type),
          validateCondition: {
            modelName: nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    },
    {
      findingName: CerebrospinalFluidSpaceFindingTypeEnum.SubarachnoidHemorrhage,
      elements: [
        {
          modelName: [
            nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isRightSide),
            nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isLeftSide),
            nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isMedian)
          ]
        },
        {
          modelName: [
            nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isInfratentorial),
            nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isOccipital),
            nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isParietal),
            nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isTemporal),
            nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isFrontobasal),
            nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isFrontal)
          ]
        }
      ]
    }
  ]
};
