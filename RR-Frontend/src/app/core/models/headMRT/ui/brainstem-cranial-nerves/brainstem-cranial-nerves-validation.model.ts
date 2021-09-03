import { BrainstemCranialNervesFindingTypeEnum } from '@enums/headMRT/brainstem-cranial-nerves';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof';
import { BrainstemCranialNervesFindingUiModel } from './brainstem-cranial-nerves-finding-ui.model';

export const BrainstemCranialNervesValidationModel: IValidationModel = {
  finding: [
    {
      findingName: BrainstemCranialNervesFindingTypeEnum.Brainstem,
      elements: [
        {
          modelName: [
            nameof<BrainstemCranialNervesFindingUiModel>(m => m.isMesencephalon),
            nameof<BrainstemCranialNervesFindingUiModel>(m => m.isPons),
            nameof<BrainstemCranialNervesFindingUiModel>(m => m.isMedullaOblongata)
          ]
        },
        {
          modelName: [
            nameof<BrainstemCranialNervesFindingUiModel>(m => m.isCrusCerebriLeft),
            nameof<BrainstemCranialNervesFindingUiModel>(m => m.isCrusCerebriRight)
          ],
          validateCondition: {
            modelName: nameof<BrainstemCranialNervesFindingUiModel>(m => m.isCrusCerebri)
          }
        },
        {
          modelName: nameof<BrainstemCranialNervesFindingUiModel>(m => m.differentialDiagnosis),
          validateCondition: {
            modelName: nameof<BrainstemCranialNervesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<BrainstemCranialNervesFindingUiModel>(m => m.differentialDiagnosis1),
          validateCondition: {
            modelName: nameof<BrainstemCranialNervesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    },
    {
      findingName: BrainstemCranialNervesFindingTypeEnum.CranialNerves,
      elements: [
        {
          modelName: nameof<BrainstemCranialNervesFindingUiModel>(m => m.sideType)
        },
        {
          modelName: nameof<BrainstemCranialNervesFindingUiModel>(m => m.cranialNerveType)
        },
        {
          modelName: nameof<BrainstemCranialNervesFindingUiModel>(m => m.differentialDiagnosis),
          validateCondition: {
            modelName: nameof<BrainstemCranialNervesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<BrainstemCranialNervesFindingUiModel>(m => m.differentialDiagnosis1),
          validateCondition: {
            modelName: nameof<BrainstemCranialNervesFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    }
  ]
};
