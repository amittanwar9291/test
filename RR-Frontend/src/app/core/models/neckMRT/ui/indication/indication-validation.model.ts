import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof/src/nameof';
import { IndicationUiModel } from '@models/neckMRT/ui/indication/indication-ui.model';
import { PreviousTherapyUiModel } from '@models/neckMRT/ui/indication/previous-therapy-ui.model';
import { PreviousTherapyTypeEnum, ThryoidectomyTypeEnum } from '@enums/neckMRT/indication';

export const IndicationValidationModel: IValidationModel = {
  elements: [
    {
      modelName: nameof<IndicationUiModel>(m => m.previousTherapies),
      findingTypeModelName: nameof<PreviousTherapyUiModel>(m => m.previousTherapyType),
      finding: [
        {
          findingName: PreviousTherapyTypeEnum.NeckDissection,
          elements: [
            {
              modelName: [
                nameof<PreviousTherapyUiModel>(m => m.isNeckDissectionRight),
                nameof<PreviousTherapyUiModel>(m => m.isNeckDissectionLeft)
              ]
            }
          ]
        },
        {
          findingName: PreviousTherapyTypeEnum.Thryoidectomy,
          elements: [
            {
              modelName: nameof<PreviousTherapyUiModel>(m => m.sideType),
              validateCondition: {
                modelName: nameof<PreviousTherapyUiModel>(m => m.thryoidectomyType),
                requiredValue: ThryoidectomyTypeEnum.Hemithyroidectomy
              }
            }
          ]
        }
      ]
    }
  ]
};
