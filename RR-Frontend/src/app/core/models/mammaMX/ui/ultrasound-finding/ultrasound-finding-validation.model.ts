import { nameof } from 'ts-simple-nameof/src/nameof';

import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { UltrasoundFindingSubfindingUiModel } from '@models/mammaMX/ui/ultrasound-finding/ultrasound-finding-subfinding-ui.model';

import { UltrasoundFindingTypeEnum } from '@enums/mammaMX/ultrasound-finding';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

export const UltrasoundFindingValidationModel: IValidationModel = {
  finding: [
    {
      findingName: UltrasoundFindingTypeEnum.Mass,
      elements: [
        {
          modelName: nameof<UltrasoundFindingSubfindingUiModel>(m => m.differentialDiagnosis),
          validateCondition: {
            modelName: nameof<UltrasoundFindingSubfindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<UltrasoundFindingSubfindingUiModel>(m => m.location),
          isLocalizer: true
        },
        {
          modelName: nameof<UltrasoundFindingSubfindingUiModel>(m => m.diameterInMm)
        },
        {
          modelName: nameof<UltrasoundFindingSubfindingUiModel>(m => m.differentialDiagnosis1),
          validateCondition: {
            modelName: nameof<UltrasoundFindingSubfindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    }
  ]
};
