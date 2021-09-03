import { AbnormalitiesNormVariantsThyroidTypeEnum } from '@enums/neckMRT/thyroid/anomalies-normal-variants-thyroid-gland/abnormalities-norm-variants-thyroid-type.enum';
import { ThyroidFindingTypeEnum } from '@enums/neckMRT/thyroid/thyroid-finding-type.enum';
import { ThyroidectomyTypeEnum } from '@enums/neckMRT/thyroid/thyroidectomy/thyroidectomy-type.enum';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof';
import { ThyroidFindingUiModel } from './thyroid-finding-ui.model';
import { MeasurementTypeEnum } from '@enums/neckMRT/thyroid';

export const ThyroidValidationModel: IValidationModel = {
  finding: [
    {
      findingName: ThyroidFindingTypeEnum.AnomaliesNormalVariantsThyroidGland,
      elements: [
        {
          modelName: nameof<ThyroidFindingUiModel>(m => m.abnormalitiesNormVariantsThyroidType)
        },
        {
          modelName: nameof<ThyroidFindingUiModel>(m => m.sideType),
          validateCondition: {
            customConditionFunction: (model: ThyroidFindingUiModel) => {
              return (
                model.abnormalitiesNormVariantsThyroidType === AbnormalitiesNormVariantsThyroidTypeEnum.Hypoplasia ||
                model.abnormalitiesNormVariantsThyroidType === AbnormalitiesNormVariantsThyroidTypeEnum.ThyroidHemiagenesis
              );
            }
          }
        }
      ]
    },
    {
      findingName: ThyroidFindingTypeEnum.Thyroidectomy,
      elements: [
        {
          modelName: nameof<ThyroidFindingUiModel>(m => m.thyroidectomyType)
        },
        {
          modelName: nameof<ThyroidFindingUiModel>(m => m.thyroidectomySideType),
          validateCondition: {
            modelName: nameof<ThyroidFindingUiModel>(m => m.thyroidectomyType),
            customConditionFunction: isThyroidectomyPostSubtotalOrHemithyroidectomy
          }
        },
        {
          modelName: nameof<ThyroidFindingUiModel>(m => m.sizeRightLobeInMm),
          validateCondition: {
            modelName: nameof<ThyroidFindingUiModel>(m => m.thyroidectomyType),
            customConditionFunction: isThyroidectomyPostSubtotalOrHemithyroidectomy
          }
        },
        {
          modelName: nameof<ThyroidFindingUiModel>(m => m.sizeLeftLobeInMm),
          validateCondition: {
            modelName: nameof<ThyroidFindingUiModel>(m => m.thyroidectomyType),
            customConditionFunction: isThyroidectomyPostSubtotalOrHemithyroidectomy
          }
        }
      ]
    },
    {
      findingName: ThyroidFindingTypeEnum.ThyroidGoiterMassInflammation,
      elements: [
        {
          modelName: [
            nameof<ThyroidFindingUiModel>(m => m.isRightLobe),
            nameof<ThyroidFindingUiModel>(m => m.isLeftLobe),
            nameof<ThyroidFindingUiModel>(m => m.isIsthmus)
          ]
        },
        {
          modelName: nameof<ThyroidFindingUiModel>(m => m.sizeInMm),
          validateCondition: {
            modelName: nameof<ThyroidFindingUiModel>(m => m.measurementType),
            requiredValue: MeasurementTypeEnum.SpatialNodule
          }
        },
        {
          modelName: nameof<ThyroidFindingUiModel>(m => m.differentialDiagnosisType1)
        }
      ]
    },
    {
      findingName: ThyroidFindingTypeEnum.ParathyroidGlandMass,
      elements: [
        {
          modelName: [nameof<ThyroidFindingUiModel>(m => m.sideType)]
        },
        {
          modelName: [nameof<ThyroidFindingUiModel>(m => m.sizeInMm)]
        },
        {
          modelName: nameof<ThyroidFindingUiModel>(m => m.differentialDiagnosisType1)
        }
      ]
    },
    {
      findingName: ThyroidFindingTypeEnum.SalivaryGlandsMassInflammation,
      elements: [
        {
          modelName: nameof<ThyroidFindingUiModel>(m => m.localizationType)
        },
        {
          modelName: [nameof<ThyroidFindingUiModel>(m => m.isRight), nameof<ThyroidFindingUiModel>(m => m.isLeft)]
        },
        {
          modelName: nameof<ThyroidFindingUiModel>(m => m.sizeInMm)
        },
        {
          modelName: nameof<ThyroidFindingUiModel>(m => m.differentialDiagnosisType1)
        }
      ]
    }
  ]
};

function isThyroidectomyPostSubtotalOrHemithyroidectomy(m: ThyroidFindingUiModel) {
  return (
    m.thyroidectomyType === ThyroidectomyTypeEnum.StatusPostSubtotalThyroidectomy ||
    m.thyroidectomyType === ThyroidectomyTypeEnum.StatusPostHemithyroidectomy
  );
}
