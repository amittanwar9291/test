import { nameof } from 'ts-simple-nameof';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { MyelonFindingUiModel } from '@models/spineCT';
import { MyelonSpinalCanalFindingTypeEnum } from '@enums/spineCT/myelon/myelon-spinal-canal-finding-type.enum';

export const MyelonValidationModel: IValidationModel = {
  finding: [
    {
      findingName: MyelonSpinalCanalFindingTypeEnum.SpinalCanalStenosis,
      elements: [
        {
          modelName: nameof<MyelonFindingUiModel>(m => m.spineLocation),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: MyelonSpinalCanalFindingTypeEnum.Mass,
      elements: [
        {
          modelName: nameof<MyelonFindingUiModel>(m => m.localizationTopOrBottomVertebra),
          isLocalizer: true
        },
        {
          modelName: nameof<MyelonFindingUiModel>(m => m.differentialDiagnosis1Type)
        }
      ]
    }
  ]
};
