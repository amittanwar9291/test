import { nameof } from 'ts-simple-nameof';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { LymphNodesFindingUiModel } from '@models/pelvisMRT/ui/lymph-nodes/lymph-nodes-finding-ui.model';
import { LymphNodesFindingsTypeEnum } from '@enums/pelvisMRT/lymph-nodes/lymph-nodes-findings-type.enum';

export const LymphNodesValidationModel: IValidationModel = {
  finding: [
    {
      findingName: LymphNodesFindingsTypeEnum.MarginalWithCentralFatHilum,
      elements: [
        {
          modelName: nameof<LymphNodesFindingUiModel>(m => m.localizationType),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: LymphNodesFindingsTypeEnum.Pathological,
      elements: [
        {
          modelName: nameof<LymphNodesFindingUiModel>(m => m.localizationType),
          isLocalizer: true
        }
      ]
    }
  ]
};
