import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { FindingTypeEnum, LigamentaTypeEnum } from '@enums/feetMRT/ligaments-and-tendos';
import { nameof } from 'ts-simple-nameof';
import { LigamentsAndTendonsFindingUiModel } from '@models/feetMRT/ui/ligaments-and-tendons/ligaments-and-tendons-finding-ui.model';
import { some } from 'lodash';

export const LigamentsAndTendonsValidationModel: IValidationModel = {
  finding: [
    {
      findingName: FindingTypeEnum.Ligamenta,
      elements: [
        {
          modelName: nameof<LigamentsAndTendonsFindingUiModel>(m => m.ligamentaType)
        },
        {
          modelName: nameof<LigamentsAndTendonsFindingUiModel>(m => m.ligamentaLocalizationType),
          validateCondition: {
            modelName: nameof<LigamentsAndTendonsFindingUiModel>(m => m.ligamentaType),
            requiredValue: LigamentaTypeEnum.AnkleJoint
          }
        }
      ]
    },
    {
      findingName: FindingTypeEnum.Tendinopathy,
      elements: [
        {
          modelName: nameof<LigamentsAndTendonsFindingUiModel>(m => m.extraarticularLocalizationType),
          isLocalizer: true
        },
        {
          modelName: nameof<LigamentsAndTendonsFindingUiModel>(m => m.ruptureType),
          validateCondition: {
            modelName: nameof<LigamentsAndTendonsFindingUiModel>(m => m.isTear)
          }
        },
        {
          modelName: [
            nameof<LigamentsAndTendonsFindingUiModel>(m => m.isTendinopathy),
            nameof<LigamentsAndTendonsFindingUiModel>(m => m.isTear)
          ],
          validateCondition: {
            customConditionFunction: (m: LigamentsAndTendonsFindingUiModel): boolean => {
              return some(m.extraarticularLocalizationType, bone => bone);
            }
          }
        }
      ]
    }
  ]
};
