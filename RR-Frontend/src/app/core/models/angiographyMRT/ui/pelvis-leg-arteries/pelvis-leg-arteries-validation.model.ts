import {
  ClassificationAccordingToTASCIISubTypeEnum,
  ClassificationAccordingToTASCIITypeEnum,
  LocalizationTypeEnum,
  PathologyTypeEnum,
  PelvisLegArteriesFindingTypeEnum
} from '@enums/angiographyMRT/pelvis-leg-arteries';
import { PelvisLegArteriesFindingUiModel } from '@models/angiographyMRT/ui/pelvis-leg-arteries/pelvis-leg-arteries-finding-ui.model';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof';

export const PelvisLegArteriesValidationModel: IValidationModel = {
  finding: [
    {
      findingName: PelvisLegArteriesFindingTypeEnum.AnatomicVariants,
      elements: [{ modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.sideType) }]
    },
    {
      findingName: PelvisLegArteriesFindingTypeEnum.ArterioscleroticPAVK,
      elements: [
        { modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.pathologyType) },
        {
          modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.sideType),
          validateCondition: {
            customConditionFunction: (m: PelvisLegArteriesFindingUiModel) =>
              m.pathologyType === PathologyTypeEnum.VascularStenosis &&
              ![LocalizationTypeEnum.AbdominalAorta, LocalizationTypeEnum.Bifurcation].includes(m.localizationType)
          }
        },
        {
          modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.localizationType),
          validateCondition: {
            modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.VascularStenosis
          }
        },
        {
          modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.severityType),
          validateCondition: {
            modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.VascularStenosis
          }
        },
        {
          modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.classificationAccordingToTASCIIType),
          validateCondition: {
            modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.VascularPathology
          }
        },
        {
          modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.classificationAccordingToTASCIISubType),
          validateCondition: {
            customConditionFunction: (model: PelvisLegArteriesFindingUiModel) => {
              return model.classificationAccordingToTASCIIType !== ClassificationAccordingToTASCIITypeEnum.None;
            }
          }
        },
        {
          modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.classificationAccordingToTASCIIDetailsType),
          validateCondition: {
            customConditionFunction: (model: PelvisLegArteriesFindingUiModel) => {
              const condition1 =
                model.classificationAccordingToTASCIIType === ClassificationAccordingToTASCIITypeEnum.ChronicAortoiliac &&
                ![ClassificationAccordingToTASCIISubTypeEnum.LerichSyndrome, ClassificationAccordingToTASCIISubTypeEnum.None].includes(
                  model.classificationAccordingToTASCIISubType
                );
              const condition2 =
                [
                  ClassificationAccordingToTASCIITypeEnum.ChronicFemoropopliteal,
                  ClassificationAccordingToTASCIITypeEnum.ChronicCruroPedal
                ].includes(model.classificationAccordingToTASCIIType) &&
                ![ClassificationAccordingToTASCIISubTypeEnum.TypeA, ClassificationAccordingToTASCIISubTypeEnum.None].includes(
                  model.classificationAccordingToTASCIISubType
                );
              return condition1 || condition2;
            }
          }
        },
        {
          modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.vascularPathologyLocalizationType),
          validateCondition: {
            customConditionFunction: (model: PelvisLegArteriesFindingUiModel) => {
              return (
                model.classificationAccordingToTASCIIType === ClassificationAccordingToTASCIITypeEnum.ChronicFemoropopliteal &&
                model.classificationAccordingToTASCIISubType === ClassificationAccordingToTASCIISubTypeEnum.TypeA
              );
            }
          }
        },
        {
          modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.extentType),
          validateCondition: {
            customConditionFunction: (model: PelvisLegArteriesFindingUiModel) => {
              return (
                model.classificationAccordingToTASCIIType === ClassificationAccordingToTASCIITypeEnum.ChronicFemoropopliteal &&
                model.classificationAccordingToTASCIISubType === ClassificationAccordingToTASCIISubTypeEnum.TypeA
              );
            }
          }
        },
        {
          modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.degreeOfStenosisAccordingToNASCETInPercentage),
          validateCondition: {
            customConditionFunction: (m: PelvisLegArteriesFindingUiModel) =>
              !!m.diameterStenosisInMm && !!m.diameterNormalPoststenoticSegmentInMm
          },
          customMessage: 'errors.angiographyMRT.nascetCalculation'
        }
      ]
    },
    {
      findingName: PelvisLegArteriesFindingTypeEnum.Aneurysm,
      elements: [
        {
          modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.sideType),
          validateCondition: {
            customConditionFunction: (m: PelvisLegArteriesFindingUiModel) =>
              ![LocalizationTypeEnum.AbdominalAorta, LocalizationTypeEnum.Bifurcation].includes(m.localizationType)
          }
        },
        { modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.localizationType) }
      ]
    },
    {
      findingName: PelvisLegArteriesFindingTypeEnum.NonArterioscleroticPAVK,
      elements: [
        {
          modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.sideType),
          validateCondition: {
            customConditionFunction: (m: PelvisLegArteriesFindingUiModel) =>
              ![LocalizationTypeEnum.AbdominalAorta, LocalizationTypeEnum.Bifurcation].includes(m.localizationType)
          }
        },
        { modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.pathologyType) },
        {
          modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.localizationType),
          validateCondition: {
            modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.Embolism
          }
        }
      ]
    },
    {
      findingName: PelvisLegArteriesFindingTypeEnum.AfterTherapy,
      elements: [
        { modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.therapyType) },
        {
          modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.sideType),
          validateCondition: {
            customConditionFunction: (m: PelvisLegArteriesFindingUiModel) =>
              ![LocalizationTypeEnum.AbdominalAorta, LocalizationTypeEnum.Bifurcation].includes(m.localizationType)
          }
        },
        { modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.localizationType) }
      ]
    }
  ]
};
