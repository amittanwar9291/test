import { nameof } from 'ts-simple-nameof/src/nameof';

import { PreviousTherapiesUi } from './previous-therapies-ui.model';
import { FamilyPersonUi } from './family-person-ui.model';
import { AnamnesisUi } from './anamnesis-ui.model';

import { IValidationModel } from '@models/shared/validation/form-validation.models';

import { OwnFamilyAnamnesisPresentType, OwnFamilyAnamnesisType, TheraphyType } from '@enums/shared/mamma/anamnesis-medical-history';

export const AnamnesisValidation: IValidationModel = {
  elements: [
    {
      modelName: nameof<AnamnesisUi>(m => m.ownFamilyAnamnesisFindings),
      validateCondition: {
        modelName: nameof<AnamnesisUi>(m => m.ownFamilyAnamnesisPresent),
        requiredValue: OwnFamilyAnamnesisPresentType.Positive
      },
      requiredValue: (model: AnamnesisUi) =>
        model.ownFamilyAnamnesisFindings.length > 0 && model.ownFamilyAnamnesisFindings[0].findingType !== 'None',
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
          findingName: OwnFamilyAnamnesisType.BenignMammaryLesion,
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
              modelName: [nameof<FamilyPersonUi>(m => m.isBreastCancer), nameof<FamilyPersonUi>(m => m.isOvarianCancer)]
            }
          ]
        },
        {
          findingName: OwnFamilyAnamnesisType.Sister,
          elements: [
            {
              modelName: [nameof<FamilyPersonUi>(m => m.isBreastCancer), nameof<FamilyPersonUi>(m => m.isOvarianCancer)]
            }
          ]
        },
        {
          findingName: OwnFamilyAnamnesisType.Daughter,
          elements: [
            {
              modelName: [nameof<FamilyPersonUi>(m => m.isBreastCancer), nameof<FamilyPersonUi>(m => m.isOvarianCancer)]
            }
          ]
        },
        {
          findingName: OwnFamilyAnamnesisType.Grandmother,
          elements: [
            {
              modelName: [nameof<FamilyPersonUi>(m => m.isBreastCancer), nameof<FamilyPersonUi>(m => m.isOvarianCancer)]
            }
          ]
        },
        {
          findingName: OwnFamilyAnamnesisType.MaternalAunt,
          elements: [
            {
              modelName: [nameof<FamilyPersonUi>(m => m.isBreastCancer), nameof<FamilyPersonUi>(m => m.isOvarianCancer)]
            }
          ]
        },
        {
          findingName: OwnFamilyAnamnesisType.PaternalAunt,
          elements: [
            {
              modelName: [nameof<FamilyPersonUi>(m => m.isBreastCancer), nameof<FamilyPersonUi>(m => m.isOvarianCancer)]
            }
          ]
        }
      ]
    },
    {
      modelName: nameof<AnamnesisUi>(m => m.previousTherapiesFindings),
      validateCondition: {
        modelName: nameof<AnamnesisUi>(m => m.arePreviousTherapies),
        requiredValue: 'Yes'
      },
      requiredValue: (model: AnamnesisUi) =>
        model.previousTherapiesFindings.length > 0 && model.previousTherapiesFindings[0].findingType !== 'None',
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
