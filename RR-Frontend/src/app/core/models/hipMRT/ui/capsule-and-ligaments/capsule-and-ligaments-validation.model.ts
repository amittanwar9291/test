import { IValidationModel } from '@models/shared/validation/form-validation.models';

import { nameof } from 'ts-simple-nameof';

import { CapsuleAndLigamentsFindingUiModel } from '@models/hipMRT/ui/capsule-and-ligaments/capsule-and-ligaments-finding-ui.model';
import { FindingTypeEnum } from '@enums/hipMRT/capsule-and-ligaments/finding-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

export const CapsuleAndLigamentsValidation: IValidationModel = {
  elements: [{ modelName: nameof<CapsuleAndLigamentsFindingUiModel>(m => m.sideType) }],
  finding: [
    {
      findingName: FindingTypeEnum.LigamentousLesion,
      elements: [{ modelName: nameof<CapsuleAndLigamentsFindingUiModel>(m => m.sideType) }]
    },
    {
      findingName: FindingTypeEnum.SynoviaDiffusePathology,
      elements: [
        {
          modelName: [
            nameof<CapsuleAndLigamentsFindingUiModel>(m => m.isRightSide),
            nameof<CapsuleAndLigamentsFindingUiModel>(m => m.isLeftSide)
          ]
        }
      ]
    },
    {
      findingName: FindingTypeEnum.SynoviaMass,
      elements: [
        { modelName: nameof<CapsuleAndLigamentsFindingUiModel>(m => m.sideType) },
        { modelName: nameof<CapsuleAndLigamentsFindingUiModel>(m => m.extensionSizeInMm) },
        {
          modelName: nameof<CapsuleAndLigamentsFindingUiModel>(m => m.synoviaDifferentialDiagnosis),
          validateCondition: {
            modelName: nameof<CapsuleAndLigamentsFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<CapsuleAndLigamentsFindingUiModel>(m => m.differentialDiagnosis1),
          validateCondition: {
            modelName: nameof<CapsuleAndLigamentsFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    }
  ]
};
