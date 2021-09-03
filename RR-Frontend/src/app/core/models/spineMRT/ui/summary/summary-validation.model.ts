import { InterventionTypeEnum } from '@enums/spineMRT/summary/intervention-type.enum';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { SummaryUiModel } from '@models/spineMRT/ui/summary/summary-ui.model';
import { nameof } from 'ts-simple-nameof';

export const SummaryValidationModel: IValidationModel = {
  elements: [
    {
      modelName: nameof<SummaryUiModel>(m => m.interventionType),
      validateCondition: {
        modelName: nameof<SummaryUiModel>(m => m.isInterventional)
      }
    },
    {
      modelName: [
        nameof<SummaryUiModel>(m => m.isFacetJointInfiltrationRight),
        nameof<SummaryUiModel>(m => m.isFacetJointInfiltrationLeft)
      ],
      validateCondition: {
        modelName: nameof<SummaryUiModel>(m => m.interventionType),
        requiredValue: InterventionTypeEnum.FacetJointInfiltration
      }
    },
    {
      modelName: [nameof<SummaryUiModel>(m => m.isSIJInfiltrationRight), nameof<SummaryUiModel>(m => m.isSIJInfiltrationLeft)],
      validateCondition: {
        modelName: nameof<SummaryUiModel>(m => m.interventionType),
        requiredValue: InterventionTypeEnum.SIJInfiltration
      }
    }
  ]
};
