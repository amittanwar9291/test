import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { AnamnesisUiModel } from '@models/abdomenMRT/ui/anamnesis/anamnesis-ui.model';
import { AnamnesisIndicationUiModel } from '@models/abdomenMRT/ui/anamnesis/anamnesis-indication-ui.model';
import { AnamnesisIndicationTypeEnum, LiverLocalizationTypeEnum } from '@enums/abdomenMRT/anamnesis';
import { nameof } from 'ts-simple-nameof/src/nameof';

const validationBlock = [
  {
    modelName: [
      nameof<AnamnesisIndicationUiModel>(m => m.isRightLobeOfLiver),
      nameof<AnamnesisIndicationUiModel>(m => m.isLeftLobeOfLiver),
      nameof<AnamnesisIndicationUiModel>(m => m.isCaudateLobe),
      nameof<AnamnesisIndicationUiModel>(m => m.isQuadrateLobe)
    ],
    validateCondition: {
      modelName: nameof<AnamnesisIndicationUiModel>(m => m.liverLocalizationType),
      requiredValue: LiverLocalizationTypeEnum.Lobe
    }
  },
  {
    modelName: nameof<AnamnesisIndicationUiModel>(m => m.liverSegmentsLocalizationType),
    isLocalizer: true,
    validateCondition: {
      modelName: nameof<AnamnesisIndicationUiModel>(m => m.liverLocalizationType),
      requiredValue: LiverLocalizationTypeEnum.LiverSegments
    }
  }
];

export const AnamnesisValidationModel: IValidationModel = {
  elements: [
    {
      modelName: nameof<AnamnesisUiModel>(m => m.indications),
      findingTypeModelName: nameof<AnamnesisIndicationUiModel>(m => m.indicationType),
      finding: [
        {
          findingName: AnamnesisIndicationTypeEnum.Mass,
          elements: validationBlock
        },
        {
          findingName: AnamnesisIndicationTypeEnum.Inflammation,
          elements: validationBlock
        },
        {
          findingName: AnamnesisIndicationTypeEnum.Concrement,
          elements: validationBlock
        },
        {
          findingName: AnamnesisIndicationTypeEnum.Trauma,
          elements: validationBlock
        },
        {
          findingName: AnamnesisIndicationTypeEnum.FollowUpAfterTherapy,
          elements: validationBlock
        }
      ]
    }
  ]
};
