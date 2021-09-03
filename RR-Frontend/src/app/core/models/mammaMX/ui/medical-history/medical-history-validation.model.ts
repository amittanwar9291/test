import { nameof } from 'ts-simple-nameof/src/nameof';

import { PreviousTherapiesUi } from './previous-therapies-ui.model';
import { FamilyPersonUi } from './family-person-ui.model';
import { MedicalHistoryUiModel } from './medical-history-ui.model';

import { IValidationModel } from '@models/shared/validation/form-validation.models';

import { OwnFamilyAnamnesisPresentType, TheraphyType } from '@enums/shared/mamma/anamnesis-medical-history';
import { OwnFamilyAnamnesisType } from '@enums/mammaMX/medical-history/own-family-anamnesis-type.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

export const MedicalHistoryValidation: IValidationModel = {
  elements: [
    {
      modelName: nameof<MedicalHistoryUiModel>(m => m.ownFamilyAnamnesisFindings),
      validateCondition: {
        modelName: nameof<MedicalHistoryUiModel>(m => m.ownFamilyAnamnesisPresent),
        requiredValue: OwnFamilyAnamnesisPresentType.Positive
      },
      requiredValue: (model: MedicalHistoryUiModel) =>
        model.ownFamilyAnamnesisFindings.length > 0 && model.ownFamilyAnamnesisFindings[0].findingType !== OwnFamilyAnamnesisType.None,
      finding: [
        {
          findingName: OwnFamilyAnamnesisType.BreastCarcinoma,
          elements: [
            {
              modelName: nameof<FamilyPersonUi>(m => m.breastLocation),
              isLocalizer: true
            }
          ]
        },
        {
          findingName: OwnFamilyAnamnesisType.BenignBreastLesion,
          elements: [
            {
              modelName: nameof<FamilyPersonUi>(m => m.breastLocation),
              isLocalizer: true
            }
          ]
        },
        {
          findingName: OwnFamilyAnamnesisType.Mother,
          elements: [
            {
              modelName: [nameof<FamilyPersonUi>(m => m.isBreastCarcinoma), nameof<FamilyPersonUi>(m => m.isOvarianCancer)]
            }
          ]
        },
        {
          findingName: OwnFamilyAnamnesisType.Sister,
          elements: [
            {
              modelName: [nameof<FamilyPersonUi>(m => m.isBreastCarcinoma), nameof<FamilyPersonUi>(m => m.isOvarianCancer)]
            }
          ]
        },
        {
          findingName: OwnFamilyAnamnesisType.Daughter,
          elements: [
            {
              modelName: [nameof<FamilyPersonUi>(m => m.isBreastCarcinoma), nameof<FamilyPersonUi>(m => m.isOvarianCancer)]
            }
          ]
        },
        {
          findingName: OwnFamilyAnamnesisType.Grandmother,
          elements: [
            {
              modelName: [nameof<FamilyPersonUi>(m => m.isBreastCarcinoma), nameof<FamilyPersonUi>(m => m.isOvarianCancer)]
            }
          ]
        },
        {
          findingName: OwnFamilyAnamnesisType.MaternalAunt,
          elements: [
            {
              modelName: [nameof<FamilyPersonUi>(m => m.isBreastCarcinoma), nameof<FamilyPersonUi>(m => m.isOvarianCancer)]
            }
          ]
        },
        {
          findingName: OwnFamilyAnamnesisType.PaternalAunt,
          elements: [
            {
              modelName: [nameof<FamilyPersonUi>(m => m.isBreastCarcinoma), nameof<FamilyPersonUi>(m => m.isOvarianCancer)]
            }
          ]
        }
      ]
    },
    {
      modelName: nameof<MedicalHistoryUiModel>(m => m.previousTherapiesFindings),
      validateCondition: {
        modelName: nameof<MedicalHistoryUiModel>(m => m.arePreviousTherapies),
        requiredValue: SimpleAnswerEnum.Yes
      },
      requiredValue: (model: MedicalHistoryUiModel) =>
        model.previousTherapiesFindings.length > 0 && model.previousTherapiesFindings[0].findingType !== TheraphyType.None,
      finding: [
        {
          findingName: TheraphyType.BreastAugmentation,
          elements: [
            {
              modelName: nameof<PreviousTherapiesUi>(m => m.breastLocation),
              isLocalizer: true
            }
          ]
        },
        {
          findingName: TheraphyType.FineNeedleAspiration,
          elements: [
            {
              modelName: nameof<PreviousTherapiesUi>(m => m.breastLocation),
              isLocalizer: true
            }
          ]
        },
        {
          findingName: TheraphyType.Radio,
          elements: [
            {
              modelName: nameof<PreviousTherapiesUi>(m => m.breastLocation),
              isLocalizer: true
            }
          ]
        },
        {
          findingName: TheraphyType.PunchBiopsy,
          elements: [
            {
              modelName: nameof<PreviousTherapiesUi>(m => m.breastLocation),
              isLocalizer: true
            }
          ]
        },
        {
          findingName: TheraphyType.VacuumBiopsy,
          elements: [
            {
              modelName: nameof<PreviousTherapiesUi>(m => m.breastLocation),
              isLocalizer: true
            }
          ]
        },
        {
          findingName: TheraphyType.OpenBiopsy,
          elements: [
            {
              modelName: nameof<PreviousTherapiesUi>(m => m.breastLocation),
              isLocalizer: true
            }
          ]
        },
        {
          findingName: TheraphyType.BreastAmputation,
          elements: [
            {
              modelName: nameof<PreviousTherapiesUi>(m => m.breastLocation),
              isLocalizer: true
            }
          ]
        },
        {
          findingName: TheraphyType.BreastReduction,
          elements: [
            {
              modelName: nameof<PreviousTherapiesUi>(m => m.breastLocation),
              isLocalizer: true
            }
          ]
        },
        {
          findingName: TheraphyType.BET,
          elements: [
            {
              modelName: nameof<PreviousTherapiesUi>(m => m.breastLocation),
              isLocalizer: true
            }
          ]
        }
      ]
    }
  ]
};
