import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof';
import { SacroiliacJointFindingTypesEnum } from '@enums/spineMRT/sacroiliac-joint/sacroiliac-joint-finding-types.enum';
import { SacroiliacJointFindingUiModel } from '@models/spineMRT/ui/sacroiliac-joint/sacroiliac-joint-finding-ui.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { SacroiliacJointUiModel } from '@models/spineMRT/ui/sacroiliac-joint/sacroiliac-joint-ui.model';
import { SacroiliacJointAreFindingTypesEnum } from '@enums/spineMRT/sacroiliac-joint/sacroiliac-joint-are-finding-types.enum';

export const SacroiliacJointValidationModel: IValidationModel = {
  elements: [
    {
      modelName: nameof<SacroiliacJointUiModel>(m => m.areFindings)
    },
    {
      modelName: nameof<SacroiliacJointUiModel>(m => m.findings),
      validateCondition: {
        modelName: nameof<SacroiliacJointUiModel>(m => m.areFindings),
        requiredValue: SacroiliacJointAreFindingTypesEnum.PathologicFinding
      },
      requiredValue: (m: SacroiliacJointUiModel) => {
        return m.findings.filter(item => item.findingType !== SacroiliacJointFindingTypesEnum.None).length > 0;
      }
    }
  ],
  finding: [
    {
      findingName: SacroiliacJointFindingTypesEnum.Degeneration,
      elements: [
        {
          modelName: nameof<SacroiliacJointFindingUiModel>(m => m.pelvisLocation),
          isLocalizer: true
        },
        {
          modelName: nameof<SacroiliacJointFindingUiModel>(m => m.iKnowDifferentialDiagnosis01),
          validateCondition: {
            modelName: nameof<SacroiliacJointFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<SacroiliacJointFindingUiModel>(m => m.iDescribeDifferentialDiagnosis01),
          validateCondition: {
            modelName: nameof<SacroiliacJointFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    },
    {
      findingName: SacroiliacJointFindingTypesEnum.Inflammation,
      elements: [
        {
          modelName: nameof<SacroiliacJointFindingUiModel>(m => m.pelvisLocation),
          isLocalizer: true
        },
        {
          modelName: nameof<SacroiliacJointFindingUiModel>(m => m.iKnowDifferentialDiagnosis01),
          validateCondition: {
            modelName: nameof<SacroiliacJointFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<SacroiliacJointFindingUiModel>(m => m.iDescribeDifferentialDiagnosis01),
          validateCondition: {
            modelName: nameof<SacroiliacJointFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    }
  ]
};
