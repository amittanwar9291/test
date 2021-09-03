import { nameof } from 'ts-simple-nameof';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { AnamnesisUiModel } from './anamnesis-ui.model';
import { AnamnesisClinicFindingUiModel } from './anamnesis-clinic-finding-ui.model';
import { ClinicTypeEnum } from '@enums/pelvisMRT/anamnesis/clinic-type.enum';
import { PreviousOperationTypeEnum } from '@enums/pelvisMRT/anamnesis/previous-operation-type.enum';
import { AnamnesisPreviousOperationFindingUiModel } from './anamnesis-previous-operation-finding-ui.model';

export const AnamnesisValidationModel: IValidationModel = {
  elements: [
    {
      modelName: nameof<AnamnesisUiModel>(m => m.clinicFindings),
      finding: [
        {
          findingName: ClinicTypeEnum.Pain,
          elements: [
            {
              modelName: [
                nameof<AnamnesisClinicFindingUiModel>(m => m.isPressurePainRight),
                nameof<AnamnesisClinicFindingUiModel>(m => m.isPressurePainLeft)
              ],
              validateCondition: {
                modelName: nameof<AnamnesisClinicFindingUiModel>(m => m.isPressurePainLowerAbdomen),
                requiredValue: true
              }
            }
          ]
        }
      ]
    },
    {
      modelName: nameof<AnamnesisUiModel>(m => m.previousOperationFindings),
      finding: [
        {
          findingName: PreviousOperationTypeEnum.Vesiculectomy,
          elements: [
            {
              modelName: [
                nameof<AnamnesisPreviousOperationFindingUiModel>(m => m.isLeft),
                nameof<AnamnesisPreviousOperationFindingUiModel>(m => m.isRight)
              ]
            }
          ]
        },
        {
          findingName: PreviousOperationTypeEnum.Hemiorchiectomy,
          elements: [
            {
              modelName: [
                nameof<AnamnesisPreviousOperationFindingUiModel>(m => m.isLeft),
                nameof<AnamnesisPreviousOperationFindingUiModel>(m => m.isRight)
              ]
            }
          ]
        }
      ]
    }
  ]
};
