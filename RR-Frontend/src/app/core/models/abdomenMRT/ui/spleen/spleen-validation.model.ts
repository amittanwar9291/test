import { SpleenFindingTypeEnum } from '@enums/abdomenMRT/spleen';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { SpleenFindingUiModel } from '@models/abdomenMRT/ui/spleen/spleen-finding-ui.model';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof';

export const SpleenValidationModel: IValidationModel = {
  finding: [
    {
      findingName: SpleenFindingTypeEnum.StandardVariants,
      elements: [{ modelName: nameof<SpleenFindingUiModel>(m => m.plantVariationPathologicalAnatomyType) }]
    },
    {
      findingName: SpleenFindingTypeEnum.Mass,
      elements: [
        {
          modelName: nameof<SpleenFindingUiModel>(m => m.differentialDiagnosis),
          validateCondition: {
            modelName: nameof<SpleenFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<SpleenFindingUiModel>(m => m.differentialDiagnosis1),
          validateCondition: {
            modelName: nameof<SpleenFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    }
  ]
};
