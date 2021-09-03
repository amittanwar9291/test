import { nameof } from 'ts-simple-nameof';
import { CongenitalHeartDiseasesFindingUiModel } from '@models/cardioMRT/ui/flaps/congenital-heart-diseases-finding-ui.model';
import { FlapsUiModel } from '@models/cardioMRT/ui/flaps/flaps-ui.model';
import { HeartValvesFindingUiModel } from '@models/cardioMRT/ui/flaps/heart-valves-finding-ui.model';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { CongenitalHeartDiseaseFindingType, OneChamberHeartSingleType } from '@enums/cardioMRT/flaps';
import { HeartValveFindingType } from '@enums/cardioMRT/flaps';

export const FlapsValidationModel: IValidationModel = {
  elements: [
    {
      modelName: nameof<FlapsUiModel>(m => m.areFindings)
    },
    {
      modelName: nameof<FlapsUiModel>(m => m.heartValves),
      findingTypeModelName: nameof<HeartValvesFindingUiModel>(m => m.findingType),
      finding: [
        {
          findingName: HeartValveFindingType.AorticValve,
          elements: [
            {
              modelName: [
                nameof<HeartValvesFindingUiModel>(m => m.isStenosis),
                nameof<HeartValvesFindingUiModel>(m => m.isInsufficiency),
                nameof<HeartValvesFindingUiModel>(m => m.isCalcification)
              ]
            }
          ]
        },
        {
          findingName: HeartValveFindingType.MitralValve,
          elements: [
            {
              modelName: [
                nameof<HeartValvesFindingUiModel>(m => m.isStenosis),
                nameof<HeartValvesFindingUiModel>(m => m.isInsufficiency),
                nameof<HeartValvesFindingUiModel>(m => m.isCalcification)
              ]
            }
          ]
        },
        {
          findingName: HeartValveFindingType.PulmonaryValve,
          elements: [
            {
              modelName: [
                nameof<HeartValvesFindingUiModel>(m => m.isStenosis),
                nameof<HeartValvesFindingUiModel>(m => m.isInsufficiency),
                nameof<HeartValvesFindingUiModel>(m => m.isCalcification)
              ]
            }
          ]
        },
        {
          findingName: HeartValveFindingType.TricuspidValve,
          elements: [
            {
              modelName: [
                nameof<HeartValvesFindingUiModel>(m => m.isStenosis),
                nameof<HeartValvesFindingUiModel>(m => m.isInsufficiency),
                nameof<HeartValvesFindingUiModel>(m => m.isCalcification)
              ]
            }
          ]
        }
      ]
    },
    {
      modelName: nameof<FlapsUiModel>(m => m.congenitalHeartDiseases),
      findingTypeModelName: nameof<CongenitalHeartDiseasesFindingUiModel>(m => m.findingType),
      finding: [
        {
          findingName: CongenitalHeartDiseaseFindingType.TranspositionOfTheGreatArteries,
          elements: [
            {
              modelName: nameof<CongenitalHeartDiseasesFindingUiModel>(m => m.transpositionOfTheGreatArteriesType)
            }
          ]
        },
        {
          findingName: CongenitalHeartDiseaseFindingType.OneChamberHeart,
          elements: [
            {
              modelName: nameof<CongenitalHeartDiseasesFindingUiModel>(m => m.oneChamberHeartSingleType)
            },
            {
              modelName: nameof<CongenitalHeartDiseasesFindingUiModel>(m => m.mainVentricleType),
              validateCondition: {
                modelName: nameof<CongenitalHeartDiseasesFindingUiModel>(m => m.oneChamberHeartSingleType),
                requiredValue: OneChamberHeartSingleType.Functional
              }
            },
            {
              modelName: nameof<CongenitalHeartDiseasesFindingUiModel>(m => m.mainVentricleType),
              validateCondition: {
                modelName: nameof<CongenitalHeartDiseasesFindingUiModel>(m => m.oneChamberHeartSingleType),
                requiredValue: OneChamberHeartSingleType.Anatomical
              }
            }
          ]
        }
      ]
    }
  ]
};
