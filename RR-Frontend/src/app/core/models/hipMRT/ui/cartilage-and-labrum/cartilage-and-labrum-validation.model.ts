import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { CartilageAndLabrumFindingUiModel } from '@models/hipMRT/ui/cartilage-and-labrum/cartilage-and-labrum-finding-ui.model';

import { EtiologyTypeEnum, FindingTypeEnum } from '@enums/hipMRT/cartilage-and-labrum';

import { nameof } from 'ts-simple-nameof';

export const CartilageAndLabrumValidationModel: IValidationModel = {
  finding: [
    {
      findingName: FindingTypeEnum.Labrum,
      elements: [
        {
          modelName: nameof<CartilageAndLabrumFindingUiModel>(m => m.sideType)
        },
        {
          modelName: [
            nameof<CartilageAndLabrumFindingUiModel>(m => m.isTear),
            nameof<CartilageAndLabrumFindingUiModel>(m => m.isDegeneration),
            nameof<CartilageAndLabrumFindingUiModel>(m => m.isParalabralCyst)
          ]
        },
        {
          modelName: nameof<CartilageAndLabrumFindingUiModel>(m => m.cartilageLocalizer),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<CartilageAndLabrumFindingUiModel>(m => m.isTear)
          }
        }
      ]
    },
    {
      findingName: FindingTypeEnum.FAI,
      elements: [
        {
          modelName: nameof<CartilageAndLabrumFindingUiModel>(m => m.sideType)
        },
        {
          modelName: nameof<CartilageAndLabrumFindingUiModel>(m => m.morphologyType)
        }
      ]
    },
    {
      findingName: FindingTypeEnum.CartilageLesion,
      elements: [
        {
          modelName: nameof<CartilageAndLabrumFindingUiModel>(m => m.sideType)
        },
        {
          modelName: nameof<CartilageAndLabrumFindingUiModel>(m => m.cartilageLocalizer),
          isLocalizer: true
        },
        {
          modelName: nameof<CartilageAndLabrumFindingUiModel>(m => m.etiologyType)
        },
        {
          modelName: nameof<CartilageAndLabrumFindingUiModel>(m => m.traumaticType),
          validateCondition: {
            modelName: nameof<CartilageAndLabrumFindingUiModel>(m => m.etiologyType),
            requiredValue: EtiologyTypeEnum.Traumatic
          }
        }
      ]
    }
  ]
};
