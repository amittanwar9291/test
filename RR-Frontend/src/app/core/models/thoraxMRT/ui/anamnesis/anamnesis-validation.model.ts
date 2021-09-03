import { IValidationModel, IValidationModelFinding } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof/src/nameof';
import { AnamnesisUiModel } from '@models/thoraxMRT/ui/anamnesis/anamnesis-ui.model';
import { AnamnesisFindingUiModel } from '@models/thoraxMRT/ui/anamnesis/anamnesis-finding-ui.model';
import { IndicationFindingUiModel } from '@models/thoraxMRT/ui/anamnesis/indication-finding-ui.model';
import { IndicationTypeEnum } from '@enums/thoraxMRT/anamnesis/indication-type.enum';
import { AnamnesisFindingTypeEnum } from '@enums/thoraxMRT/anamnesis/anamnesis-finding-type.enum';

export const AnamnesisValidaationModel: IValidationModel = {
  elements: [
    {
      modelName: nameof<AnamnesisUiModel>(m => m.indicationFindings),
      findingTypeModelName: nameof<IndicationFindingUiModel>(m => m.indicationFindingType),
      finding: [
        {
          findingName: IndicationTypeEnum.Arthralgia,
          elements: [
            {
              modelName: [nameof<IndicationFindingUiModel>(m => m.isRight), nameof<IndicationFindingUiModel>(m => m.isLeft)],
              validateCondition: {
                modelName: nameof<IndicationFindingUiModel>(m => m.isSternoclavicularJoint)
              }
            }
          ]
        }
      ]
    },
    {
      modelName: nameof<AnamnesisUiModel>(m => m.anamnesisFindings),
      findingTypeModelName: nameof<AnamnesisFindingUiModel>(m => m.anamnesisFindingType),
      finding: [
        {
          findingName: AnamnesisFindingTypeEnum.HistoryOfPartialLungResection,
          elements: [
            {
              modelName: [
                nameof<AnamnesisFindingUiModel>(m => m.isAfterPartialLungResectionRight),
                nameof<AnamnesisFindingUiModel>(m => m.isAfterPartialLungResectionLeft)
              ]
            }
          ]
        }
      ]
    }
  ]
};
