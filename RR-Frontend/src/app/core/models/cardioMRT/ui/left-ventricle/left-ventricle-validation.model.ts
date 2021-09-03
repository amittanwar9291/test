import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof/index';
import { LeftVentricleUiModel } from '@models/cardioMRT/ui/left-ventricle/left-ventricle-ui.model';

import { PerfusionTypeEnum } from '@enums/cardioMRT/left-ventricle/perfusion-type.enum';

import { LeftVentricleHelperService } from '@services/cardioMRT/left-ventricle-helper.service';
import { MyocardialEdemaTypeEnum } from '@enums/cardioMRT/left-ventricle/myocardial-edema-type.enum';
import { WallThickeningTypeEnum } from '@enums/cardioMRT/left-ventricle/wall-thickening-type.enum';
import { WallThinningTypeEnum } from '@enums/cardioMRT/left-ventricle/wall-thinning-type.enum';
import { HypointensMyokTypeEnum } from '@enums/cardioMRT/left-ventricle/hypointens-myok-type.enum';
import { RelaxationTimeTypeEnum } from '@enums/cardioMRT/left-ventricle/relaxation-time-type.enum';
import { MeasureType } from '@enums/cardioMRT/left-ventricle/measure-type.enum';

export const LeftVentricleValidation: IValidationModel = {
  elements: [
    // 1st COLUMN
    {
      modelName: nameof<LeftVentricleUiModel>(m => m.myocardialEdemaLocalizer),
      isLocalizer: true,
      validateCondition: {
        modelName: nameof<LeftVentricleUiModel>(m => m.myocardialEdemaType),
        requiredValue: MyocardialEdemaTypeEnum.FocalMyocardialEdema
      }
    },
    {
      modelName: nameof<LeftVentricleUiModel>(m => m.wallThickeningLocalizer),
      isLocalizer: true,
      validateCondition: {
        modelName: nameof<LeftVentricleUiModel>(m => m.wallThickeningType),
        requiredValue: WallThickeningTypeEnum.FocalWallThickening
      }
    },
    {
      modelName: nameof<LeftVentricleUiModel>(m => m.wallThinningLocalizer),
      isLocalizer: true,
      validateCondition: {
        modelName: nameof<LeftVentricleUiModel>(m => m.wallThinningType),
        requiredValue: WallThinningTypeEnum.FocalWallThinning
      }
    },
    {
      modelName: nameof<LeftVentricleUiModel>(m => m.reducedMyocardialSignalT1wT2wLocalizer),
      isLocalizer: true,
      validateCondition: {
        modelName: nameof<LeftVentricleUiModel>(m => m.hypointensMyokType),
        requiredValue: HypointensMyokTypeEnum.HypointensityT1wT2wFocal
      }
    },

    // 2nd COLUMN -------------------------------------------------------------------------------------------------------------------------
    {
      modelName: [
        nameof<LeftVentricleUiModel>(m => m.isKineticDisorder),
        nameof<LeftVentricleUiModel>(m => m.isMidVentricularWallMovementDisorder),
        nameof<LeftVentricleUiModel>(m => m.isApicalBallooning),
        nameof<LeftVentricleUiModel>(m => m.isAneurysm)
      ],
      validateCondition: { modelName: nameof<LeftVentricleUiModel>(m => m.isFunction) }
    },

    // Kinetic disorder localizer
    {
      modelName: nameof<LeftVentricleUiModel>(m => m.kineticDisorderLocalizer),
      requiredValue: (model: LeftVentricleUiModel) => LeftVentricleHelperService.isLocalizerValid(model.kineticDisorderLocalizer),
      validateCondition: { modelName: nameof<LeftVentricleUiModel>(m => m.isKineticDisorder) }
    },

    // 3rd COLUMN -------------------------------------------------------------------------------------------------------------------------
    {
      modelName: nameof<LeftVentricleUiModel>(m => m.perfusionType),
      validateCondition: { modelName: nameof<LeftVentricleUiModel>(m => m.isPerfusion) }
    },

    // Perfusion localizer
    {
      modelName: nameof<LeftVentricleUiModel>(m => m.perfusionDefectLocalizer),
      requiredValue: (model: LeftVentricleUiModel) => LeftVentricleHelperService.isLocalizerValid(model.perfusionDefectLocalizer),
      validateCondition: { modelName: nameof<LeftVentricleUiModel>(m => m.perfusionType), requiredValue: PerfusionTypeEnum.Defect }
    },

    // 4th COLUMN -------------------------------------------------------------------------------------------------------------------------
    {
      modelName: nameof<LeftVentricleUiModel>(m => m.lgeType),
      validateCondition: { modelName: nameof<LeftVentricleUiModel>(m => m.isLGE) }
    },
    {
      modelName: nameof<LeftVentricleUiModel>(m => m.distributionType),
      validateCondition: { modelName: nameof<LeftVentricleUiModel>(m => m.lgeType), requiredValue: 'NonSegmental' }
    },

    // LGE localizer
    {
      modelName: nameof<LeftVentricleUiModel>(m => m.lgeSegmentalLocalizer),
      requiredValue: (model: LeftVentricleUiModel) => LeftVentricleHelperService.isLocalizerValid(model.lgeSegmentalLocalizer),
      validateCondition: {
        // modelName: nameof<LeftVentricleUiModel>(m => m.lgeType),
        customConditionFunction: (model: LeftVentricleUiModel) => {
          return model.lgeType === 'Segmental' || (model.lgeType === 'NonSegmental' && model.distributionType === 'Focal');
        }
      }
    },

    // 5th COLUMN -------------------------------------------------------------------------------------------------------------------------
    {
      modelName: nameof<LeftVentricleUiModel>(m => m.valueMyocardiumInMs),
      validateCondition: { modelName: nameof<LeftVentricleUiModel>(m => m.isT2Asterisk) }
    },
    {
      modelName: nameof<LeftVentricleUiModel>(m => m.referenceValueOfMyocardiumInMs),
      validateCondition: { modelName: nameof<LeftVentricleUiModel>(m => m.isT2Asterisk) }
    },

    // Relaxation time dialog
    // T1
    {
      modelName: nameof<LeftVentricleUiModel>(m => m.t1Localizer.qualitativeType),
      validateCondition: {
        modelName: nameof<LeftVentricleUiModel>(m => m.t1Localizer.measureType),
        requiredValue: MeasureType.Qualitative
      }
    },
    {
      modelName: nameof<LeftVentricleUiModel>(m => m.t1Localizer.localizer),
      isLocalizer: true,
      validateCondition: {
        customConditionFunction: (model: LeftVentricleUiModel) => {
          return !(model.t1Localizer.qualitativeType !== RelaxationTimeTypeEnum.Focal || model.t1Localizer.isLVTotal);
        }
      }
    },
    {
      modelName: nameof<LeftVentricleUiModel>(m => m.t1Localizer.localizer),
      isLocalizer: true,
      validateCondition: {
        customConditionFunction: (model: LeftVentricleUiModel) => {
          return !(model.t1Localizer.measureType !== MeasureType.Quantitative || model.t1Localizer.isLVTotal);
        }
      }
    },
    {
      modelName: nameof<LeftVentricleUiModel>(m => m.t1Localizer.valueMyocardiumInMs),
      validateCondition: {
        modelName: nameof<LeftVentricleUiModel>(m => m.t1Localizer.measureType),
        requiredValue: MeasureType.Quantitative
      }
    },
    {
      modelName: nameof<LeftVentricleUiModel>(m => m.t1Localizer.measureType),
      validateCondition: {
        modelName: nameof<LeftVentricleUiModel>(m => m.isT1)
      }
    },
    {
      modelName: nameof<LeftVentricleUiModel>(m => m.t1Localizer.severityType),
      validateCondition: {
        modelName: nameof<LeftVentricleUiModel>(m => m.t1Localizer.measureType),
        requiredValue: MeasureType.Qualitative
      }
    },
    // T2
    {
      modelName: nameof<LeftVentricleUiModel>(m => m.t2Localizer.qualitativeType),
      validateCondition: {
        modelName: nameof<LeftVentricleUiModel>(m => m.t2Localizer.measureType),
        requiredValue: MeasureType.Qualitative
      }
    },
    {
      modelName: nameof<LeftVentricleUiModel>(m => m.t2Localizer.localizer),
      isLocalizer: true,
      validateCondition: {
        customConditionFunction: (model: LeftVentricleUiModel) => {
          return !(model.t2Localizer.measureType !== MeasureType.Quantitative || model.t2Localizer.isLVTotal);
        }
      }
    },
    {
      modelName: nameof<LeftVentricleUiModel>(m => m.t2Localizer.localizer),
      isLocalizer: true,
      validateCondition: {
        customConditionFunction: (model: LeftVentricleUiModel) => {
          return !(model.t2Localizer.qualitativeType !== RelaxationTimeTypeEnum.Focal || model.t2Localizer.isLVTotal);
        }
      }
    },
    {
      modelName: nameof<LeftVentricleUiModel>(m => m.t2Localizer.valueMyocardiumInMs),
      validateCondition: {
        modelName: nameof<LeftVentricleUiModel>(m => m.t2Localizer.measureType),
        requiredValue: MeasureType.Quantitative
      }
    },
    {
      modelName: nameof<LeftVentricleUiModel>(m => m.t2Localizer.measureType),
      validateCondition: {
        modelName: nameof<LeftVentricleUiModel>(m => m.isT2)
      }
    },
    {
      modelName: nameof<LeftVentricleUiModel>(m => m.t2Localizer.severityType),
      validateCondition: {
        modelName: nameof<LeftVentricleUiModel>(m => m.t2Localizer.measureType),
        requiredValue: MeasureType.Qualitative
      }
    },
    // T1Gd
    {
      modelName: nameof<LeftVentricleUiModel>(m => m.t1GdLocalizer.qualitativeType),
      validateCondition: {
        modelName: nameof<LeftVentricleUiModel>(m => m.t1GdLocalizer.measureType),
        requiredValue: MeasureType.Qualitative
      }
    },
    {
      modelName: nameof<LeftVentricleUiModel>(m => m.t1GdLocalizer.localizer),
      isLocalizer: true,
      validateCondition: {
        customConditionFunction: (model: LeftVentricleUiModel) => {
          return !(model.t1GdLocalizer.measureType !== MeasureType.Quantitative || model.t1GdLocalizer.isLVTotal);
        }
      }
    },
    {
      modelName: nameof<LeftVentricleUiModel>(m => m.t1GdLocalizer.localizer),
      isLocalizer: true,
      validateCondition: {
        customConditionFunction: (model: LeftVentricleUiModel) => {
          return !(model.t1GdLocalizer.qualitativeType !== RelaxationTimeTypeEnum.Focal || model.t1GdLocalizer.isLVTotal);
        }
      }
    },
    {
      modelName: nameof<LeftVentricleUiModel>(m => m.t1GdLocalizer.measureType),
      validateCondition: {
        modelName: nameof<LeftVentricleUiModel>(m => m.isT1Gd)
      }
    },
    {
      modelName: nameof<LeftVentricleUiModel>(m => m.t1GdLocalizer.valueMyocardiumInMs),
      validateCondition: {
        modelName: nameof<LeftVentricleUiModel>(m => m.t1GdLocalizer.measureType),
        requiredValue: MeasureType.Quantitative
      }
    },
    {
      modelName: nameof<LeftVentricleUiModel>(m => m.t1GdLocalizer.severityType),
      validateCondition: {
        modelName: nameof<LeftVentricleUiModel>(m => m.t1GdLocalizer.measureType),
        requiredValue: MeasureType.Qualitative
      }
    }
  ]
};
