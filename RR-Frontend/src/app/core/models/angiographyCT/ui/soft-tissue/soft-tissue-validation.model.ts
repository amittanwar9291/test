import {
  ExtremitiesFractureLocalizationTypeEnum,
  ExtremitiesMassLocalizationTypeEnum,
  ExtremitiesTypeEnum,
  NeckSoftTissuePathologyTypeEnum,
  SoftTissueFindingTypeEnum,
  SupraaorticHeadPathologyTypeEnum,
  SupraaorticLocalizationTypeEnum,
  ThoracicLocalizationTypeEnum,
  ThoracicTypeEnum
} from '@enums/angiographyCT/soft-tissue';
import { SoftTissueFindingUiModel } from '@models/angiographyCT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof';
import { AbdominalLocalizationTypeEnum, AbdominalTypeEnum, FractureLocalizationTypeEnum } from '@enums/angiographyCT/soft-tissue/abdominal';

export const SoftTissuesValidationModel: IValidationModel = {
  finding: [
    {
      findingName: SoftTissueFindingTypeEnum.Supraaortic,
      elements: [
        { modelName: nameof<SoftTissueFindingUiModel>(m => m.supraaorticLocalizationType) },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.supraaorticHeadPathologyType),
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.supraaorticLocalizationType),
            requiredValue: SupraaorticLocalizationTypeEnum.Head
          }
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.neckSoftTissuePathologyType),
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.supraaorticLocalizationType),
            requiredValue: SupraaorticLocalizationTypeEnum.NeckSoftTissue
          }
        },
        {
          modelName: [
            nameof<SoftTissueFindingUiModel>(m => m.isRight),
            nameof<SoftTissueFindingUiModel>(m => m.isLeft),
            nameof<SoftTissueFindingUiModel>(m => m.isMedian)
          ],
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.neckSoftTissuePathologyType),
            requiredValue: SupraaorticHeadPathologyTypeEnum.Mass
          }
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.spineLocations),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.neckSoftTissuePathologyType),
            requiredValue: NeckSoftTissuePathologyTypeEnum.CervicalSpineFracture
          }
        }
      ]
    },

    {
      findingName: SoftTissueFindingTypeEnum.Thoracic,
      elements: [
        { modelName: nameof<SoftTissueFindingUiModel>(m => m.thoracicType) },
        {
          modelName: [nameof<SoftTissueFindingUiModel>(m => m.isRight), nameof<SoftTissueFindingUiModel>(m => m.isLeft)],
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.thoracicType),
            customConditionFunction: (model: SoftTissueFindingUiModel) =>
              model.thoracicType === ThoracicTypeEnum.PleuralEffusion || model.thoracicType === ThoracicTypeEnum.PneumonicConsolidation
          }
        },
        {
          modelName: [
            nameof<SoftTissueFindingUiModel>(m => m.isNormVariantVesselsPulmonaryVeins),
            nameof<SoftTissueFindingUiModel>(m => m.isSuperiorVenaCava),
            nameof<SoftTissueFindingUiModel>(m => m.isInferiorVenaCava)
          ],
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.thoracicType),
            requiredValue: ThoracicTypeEnum.NormVariantVessels
          }
        },
        {
          modelName: [nameof<SoftTissueFindingUiModel>(m => m.normVariantVesselsVariantsType)],
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.isNormVariantVesselsPulmonaryVeins)
          }
        },
        {
          modelName: [nameof<SoftTissueFindingUiModel>(m => m.superiorVenaCavaType)],
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.isSuperiorVenaCava)
          }
        },
        {
          modelName: [nameof<SoftTissueFindingUiModel>(m => m.inferiorVenaCavaType)],
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.isInferiorVenaCava)
          }
        },
        {
          modelName: [nameof<SoftTissueFindingUiModel>(m => m.thoracicLocalizationType)],
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.thoracicType),
            requiredValue: ThoracicTypeEnum.Mass
          }
        },
        {
          modelName: [nameof<SoftTissueFindingUiModel>(m => m.sideType)],
          validateCondition: {
            customConditionFunction: (model: SoftTissueFindingUiModel) => {
              const conditionOne = model.thoracicType === ThoracicTypeEnum.Mass;
              const conditionTwo =
                model.thoracicLocalizationType === ThoracicLocalizationTypeEnum.Ribs ||
                model.thoracicLocalizationType === ThoracicLocalizationTypeEnum.Clavicle ||
                model.thoracicLocalizationType === ThoracicLocalizationTypeEnum.Scapula ||
                model.thoracicLocalizationType === ThoracicLocalizationTypeEnum.ProximalHumerus ||
                model.thoracicLocalizationType === ThoracicLocalizationTypeEnum.Pulmonary ||
                model.thoracicLocalizationType === ThoracicLocalizationTypeEnum.ThoracicWall;
              const conditionThree =
                model.thoracicType === ThoracicTypeEnum.Pneumothorax || model.thoracicType === ThoracicTypeEnum.Atelectasis;
              const conditionFour = model.thoracicType === ThoracicTypeEnum.Fracture;

              const conditionFive =
                model.thoracicLocalizationType === ThoracicLocalizationTypeEnum.Clavicle ||
                model.thoracicLocalizationType === ThoracicLocalizationTypeEnum.Scapula ||
                model.thoracicLocalizationType === ThoracicLocalizationTypeEnum.ProximalHumerus;
              return (conditionOne && conditionTwo) || conditionThree || (conditionFour && conditionFive);
            }
          }
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.spineLocations),
          isLocalizer: true,
          validateCondition: {
            customConditionFunction: (model: SoftTissueFindingUiModel) =>
              model.thoracicType === ThoracicTypeEnum.Fracture && model.thoracicLocalizationType === ThoracicLocalizationTypeEnum.Spine
          }
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.ribLocations),
          isLocalizer: true,
          validateCondition: {
            customConditionFunction: (model: SoftTissueFindingUiModel) =>
              model.thoracicType === ThoracicTypeEnum.Fracture && model.thoracicLocalizationType === ThoracicLocalizationTypeEnum.Ribs
          }
        }
      ]
    },
    {
      findingName: SoftTissueFindingTypeEnum.Abdominal,
      elements: [
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.abdominalType)
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.abdominalLocalizationType),
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.abdominalType),
            requiredValue: AbdominalTypeEnum.Mass
          }
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.sideType),
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.abdominalLocalizationType),
            customConditionFunction: (model: SoftTissueFindingUiModel) =>
              model.abdominalLocalizationType === AbdominalLocalizationTypeEnum.AdrenalGlands ||
              model.abdominalLocalizationType === AbdominalLocalizationTypeEnum.Kidneys ||
              model.abdominalLocalizationType === AbdominalLocalizationTypeEnum.Ovaries
          }
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.spineLocations),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.fractureLocalizationType),
            requiredValue: FractureLocalizationTypeEnum.Spine
          }
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.ribLocations),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.fractureLocalizationType),
            requiredValue: FractureLocalizationTypeEnum.Ribs
          }
        }
      ]
    },
    {
      findingName: SoftTissueFindingTypeEnum.Lymphadenopathy,
      elements: [
        {
          modelName: [
            nameof<SoftTissueFindingUiModel>(m => m.isCervical),
            nameof<SoftTissueFindingUiModel>(m => m.isThoracic),
            nameof<SoftTissueFindingUiModel>(m => m.isAxillary),
            nameof<SoftTissueFindingUiModel>(m => m.isAbdominal),
            nameof<SoftTissueFindingUiModel>(m => m.isRetroperitoneal),
            nameof<SoftTissueFindingUiModel>(m => m.isIliac),
            nameof<SoftTissueFindingUiModel>(m => m.isInguinal)
          ]
        },
        {
          modelName: [nameof<SoftTissueFindingUiModel>(m => m.isCervicalRight), nameof<SoftTissueFindingUiModel>(m => m.isCervicalLeft)],
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.isCervical)
          }
        },
        {
          modelName: [
            nameof<SoftTissueFindingUiModel>(m => m.isThoracicMediastinalRight),
            nameof<SoftTissueFindingUiModel>(m => m.isThoracicMediastinalLeft)
          ],
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.isMediastinal)
          }
        },
        {
          modelName: [
            nameof<SoftTissueFindingUiModel>(m => m.isThoracicPerihilarRight),
            nameof<SoftTissueFindingUiModel>(m => m.isThoracicPerihilarLeft)
          ],
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.isPerihilar)
          }
        },
        {
          modelName: [nameof<SoftTissueFindingUiModel>(m => m.isAxillaryRight), nameof<SoftTissueFindingUiModel>(m => m.isAxillaryLeft)],
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.isAxillary)
          }
        },
        {
          modelName: [nameof<SoftTissueFindingUiModel>(m => m.isIliacRight), nameof<SoftTissueFindingUiModel>(m => m.isIliacLeft)],
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.isIliac)
          }
        },
        {
          modelName: [nameof<SoftTissueFindingUiModel>(m => m.isInguinalRight), nameof<SoftTissueFindingUiModel>(m => m.isInguinalLeft)],
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.isInguinal)
          }
        }
      ]
    },
    {
      findingName: SoftTissueFindingTypeEnum.Extremities,
      elements: [
        { modelName: nameof<SoftTissueFindingUiModel>(m => m.extremitiesType) },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.extremitiesMassLocalizationType),
          validateCondition: {
            customConditionFunction: (model: SoftTissueFindingUiModel) => model.extremitiesType === ExtremitiesTypeEnum.Mass
          }
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.sideType),
          validateCondition: {
            customConditionFunction: (model: SoftTissueFindingUiModel) =>
              (model.extremitiesMassLocalizationType !== ExtremitiesMassLocalizationTypeEnum.Pelvis &&
                model.extremitiesMassLocalizationType !== ExtremitiesMassLocalizationTypeEnum.None) ||
              model.extremitiesFractureLocalizationType !== ExtremitiesFractureLocalizationTypeEnum.None
          }
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.extremitiesFractureLocalizationType),
          validateCondition: {
            customConditionFunction: (model: SoftTissueFindingUiModel) => model.extremitiesType === ExtremitiesTypeEnum.Fracture
          }
        }
      ]
    }
  ]
};
