import { nameof } from 'ts-simple-nameof';

import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { LymphNodesFindingTypeEnum } from '@enums/neckMRT/lymph-nodes';
import { LymphNodesFindingUiModel } from '@models/neckMRT/ui/lymph-nodes/lymph-nodes-finding-ui.model';

export const LymphNodesValidationModel: IValidationModel = {
  finding: [
    {
      findingName: LymphNodesFindingTypeEnum.LymphNodes,
      elements: [
        {
          modelName: [
            nameof<LymphNodesFindingUiModel>(m => m.isLevelIaSubmental),
            nameof<LymphNodesFindingUiModel>(m => m.isLevelIbSubmandibular),
            nameof<LymphNodesFindingUiModel>(m => m.isLevelIIaUpperInternal),
            nameof<LymphNodesFindingUiModel>(m => m.isLevelIIbUpperInternal),
            nameof<LymphNodesFindingUiModel>(m => m.isLevelIIIMidInternal),
            nameof<LymphNodesFindingUiModel>(m => m.isLevelIVLowerInternal),
            nameof<LymphNodesFindingUiModel>(m => m.isLevelVaSuperiorPosteriorcervical),
            nameof<LymphNodesFindingUiModel>(m => m.isLevelVbInferiorPosterior),
            nameof<LymphNodesFindingUiModel>(m => m.isLevelVIAnteriorCompartment),
            nameof<LymphNodesFindingUiModel>(m => m.isLevelVIIUppermediastinalLN)
          ]
        },
        { modelName: nameof<LymphNodesFindingUiModel>(m => m.characterizationType) }
      ]
    }
  ]
};
