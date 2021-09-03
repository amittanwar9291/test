import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof';
import { SummaryUiModel } from '@models/pelvisMRT/ui/summary/summary-ui.model';
import { ProcedureTypeEnum } from '@enums/pelvisMRT/summary/procedure-type.enum';

export const SummaryValidationModel: IValidationModel = {
  elements: [
    {
      modelName: [
        nameof<SummaryUiModel>(m => m.isSkeletalScintigraphy),
        nameof<SummaryUiModel>(m => m.isSpectCt),
        nameof<SummaryUiModel>(m => m.isPetCt),
        nameof<SummaryUiModel>(m => m.isMriAbdomen),
        nameof<SummaryUiModel>(m => m.isCtAbdomen),
        nameof<SummaryUiModel>(m => m.isCtThorax)
      ],
      validateCondition: {
        modelName: nameof<SummaryUiModel>(m => m.procedureType),
        requiredValue: ProcedureTypeEnum.ComplementaryCrossSectionalImaging
      }
    }
  ]
};
