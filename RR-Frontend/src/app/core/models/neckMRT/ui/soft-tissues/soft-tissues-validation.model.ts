import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { SoftTissuesFindingTypeEnum } from '@enums/neckMRT/soft-tissues';
import { nameof } from 'ts-simple-nameof';
import { SoftTissuesFindingUiModel } from '@models/neckMRT/ui/soft-tissues/soft-tissues-finding-ui.model';
import { CharacterizationCystTypeEnum } from '@enums/neckMRT/soft-tissues/cysts';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

export const SoftTissuesValidationModel: IValidationModel = {
  finding: [
    {
      findingName: SoftTissuesFindingTypeEnum.Cysts,
      elements: [
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.sideType),
          validateCondition: {
            modelName: nameof<SoftTissuesFindingUiModel>(m => m.characterizationCystType),
            requiredValue: CharacterizationCystTypeEnum.LateralNeckCyst
          }
        }
      ]
    },
    {
      findingName: SoftTissuesFindingTypeEnum.MassInflammation,
      elements: [
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.characterizationIDifferentialDiagnosis),
          validateCondition: {
            modelName: nameof<SoftTissuesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.localizationReferenceVertebra),
          isLocalizer: true
        },
        { modelName: nameof<SoftTissuesFindingUiModel>(m => m.sizeInMm) },
        { modelName: nameof<SoftTissuesFindingUiModel>(m => m.marginType) },
        {
          modelName: nameof<SoftTissuesFindingUiModel>(m => m.differentialDiagnosis1),
          validateCondition: {
            modelName: nameof<SoftTissuesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    }
  ]
};
