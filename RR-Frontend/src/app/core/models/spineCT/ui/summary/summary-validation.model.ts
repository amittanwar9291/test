import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof';
import { SummaryUiModel } from '@models/spineCT';
import { PainTherapyInterventionalTypeEnum } from '@enums/spineCT/summary/pain-therapy-interventional-type.enum';

export const SummaryValidationModel: IValidationModel = {
  elements: [
    {
      modelName: [nameof<SummaryUiModel>(m => m.isISGInfiltrationRight), nameof<SummaryUiModel>(m => m.isISGInfiltrationLeft)],
      validateCondition: {
        modelName: nameof<SummaryUiModel>(m => m.painTherapyInterventionalType),
        requiredValue: PainTherapyInterventionalTypeEnum.ISGInfiltration
      }
    }
  ]
};
