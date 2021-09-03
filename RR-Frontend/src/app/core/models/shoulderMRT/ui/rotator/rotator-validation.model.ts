import { IValidationModel } from '@models/shared/validation/form-validation.models';

import { RotatorFindingUiModel } from '@models/shoulderMRT/ui/rotator/rotator-finding-ui.model';

import { nameof } from 'ts-simple-nameof';

import {
  AcJointClassificationTypeEnum,
  AfflicationTypeEnum,
  AtrophyClassificationTypeEnum,
  LesionTypeEnum,
  RotatorCuffClassificationTypeEnum,
  RotatorFindingTypeEnum,
  TendonRetractionClassificationTypeEnum
} from '@enums/shoulderMRT/rotator';

export const RotatorValidation: IValidationModel = {
  finding: [
    {
      findingName: RotatorFindingTypeEnum.ACJoint,
      elements: [
        {
          modelName: nameof<RotatorFindingUiModel>(m => m.afflicationType)
        },
        {
          modelName: nameof<RotatorFindingUiModel>(m => m.acJointClassificationType),
          validateCondition: {
            modelName: nameof<RotatorFindingUiModel>(m => m.afflicationType),
            requiredValue: AfflicationTypeEnum.Trauma
          }
        },
        {
          modelName: nameof<RotatorFindingUiModel>(m => m.tossyType),
          validateCondition: {
            modelName: nameof<RotatorFindingUiModel>(m => m.acJointClassificationType),
            requiredValue: AcJointClassificationTypeEnum.TossyClassification
          }
        },
        {
          modelName: nameof<RotatorFindingUiModel>(m => m.rockwoodType),
          validateCondition: {
            modelName: nameof<RotatorFindingUiModel>(m => m.acJointClassificationType),
            requiredValue: AcJointClassificationTypeEnum.RockwoodClassification
          }
        }
      ]
    },
    {
      findingName: RotatorFindingTypeEnum.RotatorCuff,
      elements: [
        {
          modelName: nameof<RotatorFindingUiModel>(m => m.lesionType)
        },
        {
          modelName: nameof<RotatorFindingUiModel>(m => m.patteClassificationType),
          validateCondition: {
            modelName: nameof<RotatorFindingUiModel>(m => m.lesionType),
            requiredValue: LesionTypeEnum.Complete
          }
        },
        {
          modelName: nameof<RotatorFindingUiModel>(m => m.partialLesionLocationType),
          validateCondition: {
            modelName: nameof<RotatorFindingUiModel>(m => m.lesionType),
            requiredValue: LesionTypeEnum.PartialLesions
          }
        },
        {
          modelName: nameof<RotatorFindingUiModel>(m => m.tendonRetractionBayneClassificationType),
          validateCondition: {
            customConditionFunction: (m: RotatorFindingUiModel): boolean => {
              return (
                m.isAccordingToBayneAndBateman ||
                m.tendonRetractionClassificationType === TendonRetractionClassificationTypeEnum.AccordingToBayneAndBateman
              );
            }
          }
        },
        {
          modelName: [nameof<RotatorFindingUiModel>(m => m.classificationAccGoutallierType)],
          validateCondition: {
            customConditionFunction: (m: RotatorFindingUiModel): boolean => {
              return m.isAccordingToGoutallier || m.atrophyClassificationType === AtrophyClassificationTypeEnum.AccordingToGoutallier;
            }
          }
        },
        {
          modelName: nameof<RotatorFindingUiModel>(m => m.tendonRetractionClassificationByPatentType),
          validateCondition: {
            modelName: nameof<RotatorFindingUiModel>(m => m.tendonRetractionClassificationType),
            requiredValue: TendonRetractionClassificationTypeEnum.AccordingToPatte
          }
        },
        {
          modelName: [nameof<RotatorFindingUiModel>(m => m.classificationAccZanettiType)],
          validateCondition: {
            modelName: nameof<RotatorFindingUiModel>(m => m.atrophyClassificationType),
            requiredValue: AtrophyClassificationTypeEnum.AccordingToZanetti
          }
        },
        {
          modelName: nameof<RotatorFindingUiModel>(m => m.tendonPartType),
          validateCondition: {
            modelName: nameof<RotatorFindingUiModel>(m => m.lesionType),
            requiredValue: LesionTypeEnum.PartialLesions
          }
        },
        {
          modelName: nameof<RotatorFindingUiModel>(m => m.classificationBayneClassificationType),
          validateCondition: {
            modelName: nameof<RotatorFindingUiModel>(m => m.rotatorCuffClassificationType),
            requiredValue: RotatorCuffClassificationTypeEnum.BayneAndBatermann
          }
        },
        {
          modelName: nameof<RotatorFindingUiModel>(m => m.classificationSnyderClassificationType),
          validateCondition: {
            modelName: nameof<RotatorFindingUiModel>(m => m.rotatorCuffClassificationType),
            requiredValue: RotatorCuffClassificationTypeEnum.Snyder
          }
        }
      ]
    }
  ]
};
