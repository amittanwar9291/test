import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof';
import { AdrenalGlandsFindingTypeEnum } from '@enums/abdomenMRT/adrenal-glands';
import { AdrenalGlandsFindingUiModel } from '@models/abdomenMRT/ui/adrenal-glands/adrenal-glands-finding-ui.model';
import { AdrenalGlandsUiModel } from '@models/abdomenMRT/ui/adrenal-glands/adrenal-glands-ui.model';

export const AdrenalGlandsValidation: IValidationModel = {
  elements: [
    {
      modelName: nameof<AdrenalGlandsUiModel>(m => m.areFindings)
    }
  ],
  finding: [
    {
      findingName: AdrenalGlandsFindingTypeEnum.Mass,
      elements: [
        { modelName: nameof<AdrenalGlandsFindingUiModel>(m => m.localizationType) },
        { modelName: nameof<AdrenalGlandsFindingUiModel>(m => m.sizeInMm) },
        { modelName: nameof<AdrenalGlandsFindingUiModel>(m => m.differentialDiagnosis1Type) }
      ]
    },
    {
      findingName: AdrenalGlandsFindingTypeEnum.AdrenalHyperplasia,
      elements: [{ modelName: [nameof<AdrenalGlandsFindingUiModel>(m => m.isRight), nameof<AdrenalGlandsFindingUiModel>(m => m.isLeft)] }]
    }
  ]
};
