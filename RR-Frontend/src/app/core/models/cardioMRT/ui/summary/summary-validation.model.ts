import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { SummaryUiModel } from '@models/cardioMRT/ui/summary/summary-ui.model';
import { nameof } from 'ts-simple-nameof';

export const SummaryValidationModel: IValidationModel = {
  elements: [
    {
      modelName: nameof<SummaryUiModel>(m => m.differentialDiagnosis01)
    },
    {
      modelName: nameof<SummaryUiModel>(m => m.differentialDiagnosisTo01),
      validateCondition: { modelName: nameof<SummaryUiModel>(m => m.isDifferentialDiagnosisTo01) }
    },
    {
      modelName: nameof<SummaryUiModel>(m => m.differentialDiagnosis02),
      validateCondition: { modelName: nameof<SummaryUiModel>(m => m.isDifferentialDiagnosis02) }
    }
  ]
};
