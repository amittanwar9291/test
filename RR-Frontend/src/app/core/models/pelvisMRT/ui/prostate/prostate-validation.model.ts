import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof';
import { ProstateFindingUiModel } from './prostate-finding-ui.model';

export const ProstateValidationModel: IValidationModel = {
  elements: [],
  finding: [
    {
      findingName: 'ResidualHemorrhage',
      elements: [{ modelName: nameof<ProstateFindingUiModel>(m => m.localizationT1wSignalEnhancementType), isLocalizer: true }]
    },
    {
      findingName: 'TransitionZoneTZ',
      elements: [
        { modelName: nameof<ProstateFindingUiModel>(m => m.transitionaZoneTZLocalizerType), isLocalizer: true },

        { modelName: nameof<ProstateFindingUiModel>(m => m.signalPowerType) },
        { modelName: nameof<ProstateFindingUiModel>(m => m.marginType) },
        { modelName: nameof<ProstateFindingUiModel>(m => m.homogenityType) },
        { modelName: nameof<ProstateFindingUiModel>(m => m.transitionaZoneTZCapsuleType) },
        {
          modelName: nameof<ProstateFindingUiModel>(m => m.ejaculatoryDuctDirectionType),
          validateCondition: { modelName: nameof<ProstateFindingUiModel>(m => m.isEjaculatoryDuct) }
        },

        { modelName: nameof<ProstateFindingUiModel>(m => m.dynamicContrastEnhancedType) },
        {
          modelName: nameof<ProstateFindingUiModel>(m => m.neurovascularBundleDirectionType),
          validateCondition: { modelName: nameof<ProstateFindingUiModel>(m => m.isNeurovascularBundle) }
        },
        {
          modelName: nameof<ProstateFindingUiModel>(m => m.seminalVesiclesDirectionType),
          validateCondition: { modelName: nameof<ProstateFindingUiModel>(m => m.isSeminalVesicles) }
        },
        { modelName: nameof<ProstateFindingUiModel>(m => m.extraprostaticGrowthType) },
        { modelName: nameof<ProstateFindingUiModel>(m => m.indexLesionType) },
        { modelName: nameof<ProstateFindingUiModel>(m => m.piradsScoreSizeType) },
        {
          modelName: nameof<ProstateFindingUiModel>(m => m.differentialDiagnosis01),
          validateCondition: {
            customConditionFunction: (m: ProstateFindingUiModel) => [1, 2].includes(m.piradsScoreTotal)
          }
        }
      ]
    },
    {
      findingName: 'PeripheralZonePZ',
      elements: [
        { modelName: nameof<ProstateFindingUiModel>(m => m.peripheralZonePZLocalizerType), isLocalizer: true },

        { modelName: nameof<ProstateFindingUiModel>(m => m.signalPowerType) },
        { modelName: nameof<ProstateFindingUiModel>(m => m.marginType) },
        { modelName: nameof<ProstateFindingUiModel>(m => m.homogenityType) },
        {
          modelName: nameof<ProstateFindingUiModel>(m => m.ejaculatoryDuctDirectionType),
          validateCondition: { modelName: nameof<ProstateFindingUiModel>(m => m.isEjaculatoryDuct) }
        },

        { modelName: nameof<ProstateFindingUiModel>(m => m.dynamicContrastEnhancedType) },
        {
          modelName: nameof<ProstateFindingUiModel>(m => m.neurovascularBundleDirectionType),
          validateCondition: { modelName: nameof<ProstateFindingUiModel>(m => m.isNeurovascularBundle) }
        },
        {
          modelName: nameof<ProstateFindingUiModel>(m => m.seminalVesiclesDirectionType),
          validateCondition: { modelName: nameof<ProstateFindingUiModel>(m => m.isSeminalVesicles) }
        },
        { modelName: nameof<ProstateFindingUiModel>(m => m.extraprostaticGrowthType) },
        { modelName: nameof<ProstateFindingUiModel>(m => m.indexLesionType) },
        { modelName: nameof<ProstateFindingUiModel>(m => m.piradsScoreSizeType) },
        {
          modelName: nameof<ProstateFindingUiModel>(m => m.differentialDiagnosis01),
          validateCondition: {
            customConditionFunction: (m: ProstateFindingUiModel) => [1, 2].includes(m.piradsScoreTotal)
          }
        }
      ]
    },
    {
      findingName: 'CentralZoneCZ',
      elements: [
        { modelName: nameof<ProstateFindingUiModel>(m => m.centralZoneCZLocalizerType), isLocalizer: true },

        { modelName: nameof<ProstateFindingUiModel>(m => m.signalPowerType) },
        { modelName: nameof<ProstateFindingUiModel>(m => m.marginType) },
        { modelName: nameof<ProstateFindingUiModel>(m => m.homogenityType) },
        {
          modelName: nameof<ProstateFindingUiModel>(m => m.ejaculatoryDuctDirectionType),
          validateCondition: { modelName: nameof<ProstateFindingUiModel>(m => m.isEjaculatoryDuct) }
        },

        { modelName: nameof<ProstateFindingUiModel>(m => m.dynamicContrastEnhancedType) },
        {
          modelName: nameof<ProstateFindingUiModel>(m => m.neurovascularBundleDirectionType),
          validateCondition: { modelName: nameof<ProstateFindingUiModel>(m => m.isNeurovascularBundle) }
        },
        {
          modelName: nameof<ProstateFindingUiModel>(m => m.seminalVesiclesDirectionType),
          validateCondition: { modelName: nameof<ProstateFindingUiModel>(m => m.isSeminalVesicles) }
        },
        { modelName: nameof<ProstateFindingUiModel>(m => m.sliderPiradasScoreType) },
        { modelName: nameof<ProstateFindingUiModel>(m => m.extraprostaticGrowthType) },
        { modelName: nameof<ProstateFindingUiModel>(m => m.piradsScoreSizeType) }
      ]
    }
  ]
};
