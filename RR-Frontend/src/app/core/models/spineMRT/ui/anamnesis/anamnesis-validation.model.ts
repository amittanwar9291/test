import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof';
import { AnamnesisInterventionUiModel } from '@models/spineMRT/ui/anamnesis/anamnesis-intervention-ui.model';
import { InterventionTypesEnum } from '@enums/spineMRT/anamnesis/intervention-types.enum';
import { AnamnesisUiModel } from '@models/spineMRT/ui/anamnesis/anamnesis-ui.model';

export const AnamnesisValidationModel: IValidationModel = {
  elements: [
    {
      modelName: nameof<AnamnesisUiModel>(m => m.interventions),
      findingTypeModelName: nameof<AnamnesisInterventionUiModel>(m => m.interventionType),
      finding: [
        {
          findingName: InterventionTypesEnum.Spondylodesis,
          elements: [
            {
              modelName: nameof<AnamnesisInterventionUiModel>(m => m.spineLocation),
              isLocalizer: true,
              requiredValue: (m: AnamnesisInterventionUiModel): boolean => {
                return Object.values(m.spineLocation).filter(elem => elem).length > 1;
              }
            }
          ]
        },
        {
          findingName: InterventionTypesEnum.Laminectomy,
          elements: [
            {
              modelName: nameof<AnamnesisInterventionUiModel>(m => m.spineLocation),
              isLocalizer: true
            }
          ]
        },
        {
          findingName: InterventionTypesEnum.DiscReplacement,
          elements: [
            {
              modelName: nameof<AnamnesisInterventionUiModel>(m => m.spineLocation),
              isLocalizer: true
            }
          ]
        },
        {
          findingName: InterventionTypesEnum.VertebraReplacement,
          elements: [
            {
              modelName: nameof<AnamnesisInterventionUiModel>(m => m.spineLocation),
              isLocalizer: true
            }
          ]
        },
        {
          findingName: InterventionTypesEnum.BoneCementApplication,
          elements: [
            {
              modelName: nameof<AnamnesisInterventionUiModel>(m => m.spineLocation),
              isLocalizer: true
            }
          ]
        }
      ]
    }
  ]
};
