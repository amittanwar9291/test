import { nameof } from 'ts-simple-nameof/src/nameof';
import { MammographyParenchymaAnatomyUiModel } from './mammography-parenchyma-anatomy-ui.model';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { VolumeType, PectoralisMuscleType, SubcutaneousFattyTissueType } from '@enums/mammaMX/mammography-parenchyma-anatomy';

export const MammographyParenchymaAnatomyValidation: IValidationModel = {
  elements: [
    {
      modelName: nameof<MammographyParenchymaAnatomyUiModel>(m => m.volumeLocalization),
      isLocalizer: true,
      validateCondition: {
        customConditionFunction: isVolumeTypeAnisomastyOrAblatio
      }
    },
    {
      modelName: nameof<MammographyParenchymaAnatomyUiModel>(m => m.subcutaneousAdiposeTissueLocalization),
      isLocalizer: true,
      validateCondition: {
        modelName: nameof<MammographyParenchymaAnatomyUiModel>(m => m.subcutaneousFattyTissueType),
        requiredValue: SubcutaneousFattyTissueType.Obliterated
      }
    },
    {
      modelName: nameof<MammographyParenchymaAnatomyUiModel>(m => m.pectoralisMuscleLocalization),
      isLocalizer: true,
      validateCondition: {
        modelName: nameof<MammographyParenchymaAnatomyUiModel>(m => m.pectoralisMuscleType),
        requiredValue: PectoralisMuscleType.Obscured
      }
    }
  ]
};

function isVolumeTypeAnisomastyOrAblatio(model: MammographyParenchymaAnatomyUiModel): boolean {
  return model.volumeType === VolumeType.Anisomastia || model.volumeType === VolumeType.Ablatio;
}
