import { PelvisLegArteriesFindingTypeEnum } from '@enums/angiographyCT/pelvis-leg-arteries';
import { NonArterioscleroticPAVKPathologyTypeEnum } from '@enums/angiographyCT/pelvis-leg-arteries/non-arteriosclerotic-pavk';
import {
  ArterioscleroticPAVKPathologyTypeEnum,
  ChronicLesionsTypeEnum,
  LocalizationTypeEnum,
  ClassificationAccordingToTASCIITypeEnum
} from '@enums/angiographyCT/pelvis-leg-arteries/arteriosclerotic-pavk';
import { PelvisLegArteriesFindingUiModel } from '@models/angiographyCT/ui/pelvis-leg-arteries/pelvis-leg-arteries-finding-ui.model';
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
        {
          modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.sideType),
          validateCondition: {
            customConditionFunction: (model: PelvisLegArteriesFindingUiModel) => {
              const condition1 =
                model.classificationAccordingToTASCIIType === ClassificationAccordingToTASCIITypeEnum.ChronicAortoiliacLesions;
              const condition2 =
                model.classificationAccordingToTASCIIType === ClassificationAccordingToTASCIITypeEnum.ChronicFemoropoplitealLesions;
              const condition3 =
                model.classificationAccordingToTASCIIType === ClassificationAccordingToTASCIITypeEnum.ChronicCruropedalLesions;
              return condition1 || condition2 || condition3;
            }
          }
        },
        { modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.arterioscleroticPAVKPathologyType) },
        {
          modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.sideType),
          validateCondition: {
            customConditionFunction: (m: PelvisLegArteriesFindingUiModel) =>
              m.arterioscleroticPAVKPathologyType === ArterioscleroticPAVKPathologyTypeEnum.VascularStenosis &&
              ![LocalizationTypeEnum.AbdominalAorta, LocalizationTypeEnum.Bifurcation].includes(m.localizationType)
          }
        },
        {
          modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.localizationType),
          validateCondition: {
            modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.arterioscleroticPAVKPathologyType),
            requiredValue: ArterioscleroticPAVKPathologyTypeEnum.VascularStenosis
          }
        },
        {
          modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.arterioscleroticPAVKSeverityType),
          validateCondition: {
            modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.arterioscleroticPAVKPathologyType),
            requiredValue: ArterioscleroticPAVKPathologyTypeEnum.VascularStenosis
          }
        },
        {
          modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.classificationAccordingToTASCIIType),
          validateCondition: {
            modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.arterioscleroticPAVKPathologyType),
            requiredValue: ArterioscleroticPAVKPathologyTypeEnum.VascularPathologyDiffuse
          }
        },
        {
          modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.chronicLesionsType),
          validateCondition: {
            customConditionFunction: (model: PelvisLegArteriesFindingUiModel) => {
              return model.classificationAccordingToTASCIIType !== ClassificationAccordingToTASCIITypeEnum.None;
            }
          }
        },
        {
          modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.typeADetailsType),
          validateCondition: {
            customConditionFunction: (model: PelvisLegArteriesFindingUiModel) => {
              return (
                model.classificationAccordingToTASCIIType === ClassificationAccordingToTASCIITypeEnum.ChronicAortoiliacLesions &&
                model.chronicLesionsType === ChronicLesionsTypeEnum.TypeA
              );
            }
          }
        },
        {
          modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.typeBDetailsType),
          validateCondition: {
            customConditionFunction: (model: PelvisLegArteriesFindingUiModel) => {
              const condition1 =
                model.classificationAccordingToTASCIIType === ClassificationAccordingToTASCIITypeEnum.ChronicAortoiliacLesions &&
                model.chronicLesionsType === ChronicLesionsTypeEnum.TypeB;
              const condition2 =
                model.classificationAccordingToTASCIIType === ClassificationAccordingToTASCIITypeEnum.ChronicFemoropoplitealLesions &&
                model.chronicLesionsType === ChronicLesionsTypeEnum.TypeB;
              const condition3 =
                model.classificationAccordingToTASCIIType === ClassificationAccordingToTASCIITypeEnum.ChronicCruropedalLesions &&
                model.chronicLesionsType === ChronicLesionsTypeEnum.TypeB;
              return condition1 || condition2 || condition3;
            }
          }
        },
        {
          modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.typeCDetailsType),
          validateCondition: {
            customConditionFunction: (model: PelvisLegArteriesFindingUiModel) => {
              const condition1 =
                model.classificationAccordingToTASCIIType === ClassificationAccordingToTASCIITypeEnum.ChronicAortoiliacLesions &&
                model.chronicLesionsType === ChronicLesionsTypeEnum.TypeC;
              const condition2 =
                model.classificationAccordingToTASCIIType === ClassificationAccordingToTASCIITypeEnum.ChronicFemoropoplitealLesions &&
                model.chronicLesionsType === ChronicLesionsTypeEnum.TypeC;
              const condition3 =
                model.classificationAccordingToTASCIIType === ClassificationAccordingToTASCIITypeEnum.ChronicCruropedalLesions &&
                model.chronicLesionsType === ChronicLesionsTypeEnum.TypeC;
              return condition1 || condition2 || condition3;
            }
          }
        },
        {
          modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.typeDDetailsType),
          validateCondition: {
            customConditionFunction: (model: PelvisLegArteriesFindingUiModel) => {
              const condition1 =
                model.classificationAccordingToTASCIIType === ClassificationAccordingToTASCIITypeEnum.ChronicAortoiliacLesions &&
                model.chronicLesionsType === ChronicLesionsTypeEnum.TypeD;
              const condition2 =
                model.classificationAccordingToTASCIIType === ClassificationAccordingToTASCIITypeEnum.ChronicFemoropoplitealLesions &&
                model.chronicLesionsType === ChronicLesionsTypeEnum.TypeD;
              const condition3 =
                model.classificationAccordingToTASCIIType === ClassificationAccordingToTASCIITypeEnum.ChronicCruropedalLesions &&
                model.chronicLesionsType === ChronicLesionsTypeEnum.TypeD;
              return condition1 || condition2 || condition3;
            }
          }
        },
        {
          modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.femoropoplitealLocalizationType),
          validateCondition: {
            customConditionFunction: (model: PelvisLegArteriesFindingUiModel) => {
              return (
                model.classificationAccordingToTASCIIType === ClassificationAccordingToTASCIITypeEnum.ChronicFemoropoplitealLesions &&
                model.chronicLesionsType === ChronicLesionsTypeEnum.TypeA
              );
            }
          }
        },
        {
          modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.femoropoplitealExtentType),
          validateCondition: {
            customConditionFunction: (model: PelvisLegArteriesFindingUiModel) => {
              return (
                model.classificationAccordingToTASCIIType === ClassificationAccordingToTASCIITypeEnum.ChronicFemoropoplitealLesions &&
                model.chronicLesionsType === ChronicLesionsTypeEnum.TypeA
              );
            }
          }
        },
        {
          modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.degreeOfStenosisAccordingToNASCET),
          validateCondition: {
            customConditionFunction: (m: PelvisLegArteriesFindingUiModel) =>
              !!m.diameterStenosis && !!m.diameterDiseaseFreePoststenoticSegment
          },
          customMessage: 'errors.angiographyCT.nascetCalculation'
        },
        {
          modelName: [nameof<PelvisLegArteriesFindingUiModel>(m => m.isRight), nameof<PelvisLegArteriesFindingUiModel>(m => m.isLeft)],
          validateCondition: {
            customConditionFunction: (m: PelvisLegArteriesFindingUiModel) => {
              return (
                (m.localizationType === LocalizationTypeEnum.AbdominalAorta || m.localizationType === LocalizationTypeEnum.Bifurcation) &&
                m.distalRefillingLocalizationType !== LocalizationTypeEnum.None &&
                m.distalRefillingLocalizationType !== LocalizationTypeEnum.AbdominalAorta &&
                m.distalRefillingLocalizationType !== LocalizationTypeEnum.Bifurcation
              );
            }
          }
        }
      ]
    },
    {
      findingName: PelvisLegArteriesFindingTypeEnum.VascularDilatation,
      elements: [
        {
          modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.sideType),
          validateCondition: {
            customConditionFunction: (m: PelvisLegArteriesFindingUiModel) =>
              ![LocalizationTypeEnum.AbdominalAorta, LocalizationTypeEnum.Bifurcation].includes(m.vascularDilatationLocalizationType)
          }
        },
        { modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.vascularDilatationLocalizationType) }
      ]
    },
    {
      findingName: PelvisLegArteriesFindingTypeEnum.NonArterioscleroticPAVK,
      elements: [
        {
          modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.sideType),
          validateCondition: {
            customConditionFunction: (m: PelvisLegArteriesFindingUiModel) =>
              ![LocalizationTypeEnum.AbdominalAorta, LocalizationTypeEnum.Bifurcation].includes(m.embolismLocalizationType)
          }
        },
        { modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.nonArterioscleroticPAVKPathologyType) },
        {
          modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.embolismLocalizationType),
          validateCondition: {
            modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.nonArterioscleroticPAVKPathologyType),
            requiredValue: NonArterioscleroticPAVKPathologyTypeEnum.Embolism
          }
        }
      ]
    },
    {
      findingName: PelvisLegArteriesFindingTypeEnum.AfterTherapy,
      elements: [
        { modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.afterTherapyType) },
        {
          modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.sideType),
          validateCondition: {
            customConditionFunction: (m: PelvisLegArteriesFindingUiModel) =>
              ![LocalizationTypeEnum.AbdominalAorta, LocalizationTypeEnum.Bifurcation].includes(m.afterTherapyLocalizationType)
          }
        },
        { modelName: nameof<PelvisLegArteriesFindingUiModel>(m => m.afterTherapyLocalizationType) }
      ]
    }
  ]
};
