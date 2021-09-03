import { JointFindingUiModel } from '@models/shoulderMRT/ui/joint/joint-finding-ui.model';
import { IValidationModel } from '@models/shared/validation/form-validation.models';

import { nameof } from 'ts-simple-nameof';
import { JointAndBursaeFindingType } from '@enums/shoulderMRT/joint';

export const JointValidation: IValidationModel = {
  finding: [
    {
      findingName: JointAndBursaeFindingType.Capsule,
      elements: [
        {
          modelName: nameof<JointFindingUiModel>(m => m.pathologyType)
        },
        {
          modelName: nameof<JointFindingUiModel>(m => m.insertionPosteriorType),
          validateCondition: {
            modelName: nameof<JointFindingUiModel>(m => m.isInsertionAnteriorJointCapsule),
            requiredValue: true
          }
        }
      ]
    },
    {
      findingName: JointAndBursaeFindingType.ArticularEffusion,
      elements: [
        {
          modelName: nameof<JointFindingUiModel>(m => m.articularEffusionType)
        }
      ]
    },
    {
      findingName: JointAndBursaeFindingType.Bursitis,
      elements: [
        {
          modelName: [
            nameof<JointFindingUiModel>(m => m.isBursitisSubacromial),
            nameof<JointFindingUiModel>(m => m.isBursitisSubdeltoide),
            nameof<JointFindingUiModel>(m => m.isBursitisSubscapular),
            nameof<JointFindingUiModel>(m => m.isSubcoracoid)
          ]
        }
      ]
    }
  ]
};
