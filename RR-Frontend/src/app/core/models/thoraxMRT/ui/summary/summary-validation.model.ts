import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { SummaryUiModel } from '@models/thoraxMRT/ui/summary/summary-ui.model';
import { nameof } from 'ts-simple-nameof';

export const SummaryValidationModel: IValidationModel = {
  elements: [
    {
      modelName: [
        nameof<SummaryUiModel>(m => m.isCTThorax),
        nameof<SummaryUiModel>(m => m.isCTAbdomen),
        nameof<SummaryUiModel>(m => m.isCTNeck),
        nameof<SummaryUiModel>(m => m.isMammographyAndBreastUltrasound),
        nameof<SummaryUiModel>(m => m.isMRIAbdomen),
        nameof<SummaryUiModel>(m => m.isMRISpine),
        nameof<SummaryUiModel>(m => m.isMRINeck),
        nameof<SummaryUiModel>(m => m.isCardiacDiagnostics),
        nameof<SummaryUiModel>(m => m.isCTAngiography),
        nameof<SummaryUiModel>(m => m.isCTPA),
        nameof<SummaryUiModel>(m => m.isPETCT),
        nameof<SummaryUiModel>(m => m.isSPECT),
        nameof<SummaryUiModel>(m => m.isBoneScan)
      ],
      validateCondition: {
        modelName: nameof<SummaryUiModel>(m => m.isFurtherDiagnostics)
      }
    },
    {
      modelName: [nameof<SummaryUiModel>(m => m.tStageType)],
      validateCondition: {
        modelName: nameof<SummaryUiModel>(m => m.tnStagingType)
      }
    },
    {
      modelName: [nameof<SummaryUiModel>(m => m.nStageType)],
      validateCondition: {
        modelName: nameof<SummaryUiModel>(m => m.tnStagingType)
      }
    }
  ]
};
