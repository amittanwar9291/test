import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof/src/nameof';
import { SummaryUiModel } from '@models/headMRT/ui/summary/summary-ui.model';
import { SummaryFindingTypeEnum } from '@enums/headMRT/summary';
import { SummaryFindingUiModel } from '@models/headMRT/ui/summary/summary-finding-ui.model';

export const SummaryValidationModel: IValidationModel = {
  elements: [
    {
      modelName: nameof<SummaryUiModel>(m => m.findings),
      finding: [
        {
          findingName: SummaryFindingTypeEnum.SignsOfIntracranialPressure,
          elements: [
            {
              modelName: nameof<SummaryFindingUiModel>(m => m.sideType),
              validateCondition: {
                modelName: nameof<SummaryFindingUiModel>(m => m.isMidlineShift)
              }
            }
          ]
        },
        {
          findingName: SummaryFindingTypeEnum.Hemorrhage,
          elements: [
            {
              modelName: nameof<SummaryFindingUiModel>(m => m.hemorrhageLocalizationType)
            }
          ]
        },
        {
          findingName: SummaryFindingTypeEnum.Neurodegeneration,
          elements: [
            {
              modelName: [nameof<SummaryFindingUiModel>(m => m.neurodegenerationType)]
            },
            {
              modelName: nameof<SummaryFindingUiModel>(m => m.sideType),
              validateCondition: {
                modelName: nameof<SummaryFindingUiModel>(m => m.isSideAsymmetryInFavorOf),
                requiredValue: true
              }
            },
            {
              modelName: nameof<SummaryFindingUiModel>(m => m.koedamScore),
              validateCondition: {
                modelName: nameof<SummaryFindingUiModel>(m => m.isKoedamScore),
                requiredValue: true
              }
            },
            {
              modelName: nameof<SummaryFindingUiModel>(m => m.mesialTemporalLobeAtrophyScore),
              validateCondition: {
                modelName: nameof<SummaryFindingUiModel>(m => m.isMesialTemporalLobeAtrophy),
                requiredValue: true
              }
            }
          ]
        }
      ]
    }
  ]
};
