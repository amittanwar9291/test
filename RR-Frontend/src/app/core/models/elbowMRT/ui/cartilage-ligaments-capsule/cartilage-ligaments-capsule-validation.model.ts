import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof';
import { CartilageLigamentsCapsuleFindingUiModel } from './cartilage-ligaments-capsule-finding-ui.model';
import { CartilageLigamentsCapsuleUiModel } from './cartilage-ligaments-capsule-ui.model';
import { CharacterizationType } from '@enums/elbowMRT/cartilage/osteochondral-lesion';
import { EtiologyType } from '@enums/elbowMRT/cartilage/chondral-lesion';
import { LigamentsLocalizationType } from '@enums/elbowMRT/cartilage/ligaments';
import { CartilagFindingTypeEnum } from '@enums/elbowMRT/cartilage/common/cartilag-finding-type.enum';

export const CartilageLigamentsCapsuleValidationModel: IValidationModel = {
  elements: [
    {
      modelName: nameof<CartilageLigamentsCapsuleUiModel>(m => m.areFindings)
    }
  ],
  finding: [
    {
      findingName: CartilagFindingTypeEnum.OsteochondralLesion,
      elements: [
        {
          modelName: [
            nameof<CartilageLigamentsCapsuleFindingUiModel>(m => m.cartilageLocation.anteriorHumeralCapitulum),
            nameof<CartilageLigamentsCapsuleFindingUiModel>(m => m.cartilageLocation.posteriorHumeralCapitulum),
            nameof<CartilageLigamentsCapsuleFindingUiModel>(m => m.cartilageLocation.anteriorHumeralTrochlea),
            nameof<CartilageLigamentsCapsuleFindingUiModel>(m => m.cartilageLocation.posteriorHumeralTrochlea),
            nameof<CartilageLigamentsCapsuleFindingUiModel>(m => m.cartilageLocation.ulnaTrochlearNotch),
            nameof<CartilageLigamentsCapsuleFindingUiModel>(m => m.cartilageLocation.ulnaRadialNotch),
            nameof<CartilageLigamentsCapsuleFindingUiModel>(m => m.cartilageLocation.radiusFoveaCapitis),
            nameof<CartilageLigamentsCapsuleFindingUiModel>(m => m.cartilageLocation.radiusCircumferentiaRadii)
          ]
        },
        {
          modelName: nameof<CartilageLigamentsCapsuleFindingUiModel>(m => m.sizeInMm)
        },
        {
          modelName: nameof<CartilageLigamentsCapsuleFindingUiModel>(m => m.generalCharacterizationType),
          validateCondition: {
            customConditionFunction: (model: CartilageLigamentsCapsuleFindingUiModel) =>
              model.characterizationType === CharacterizationType.General || model.isGeneral
          }
        },
        {
          modelName: nameof<CartilageLigamentsCapsuleFindingUiModel>(m => m.stagingType),
          validateCondition: {
            customConditionFunction: (model: CartilageLigamentsCapsuleFindingUiModel) =>
              model.characterizationType === CharacterizationType.ItsuboClassification
          }
        }
      ]
    },
    {
      findingName: CartilagFindingTypeEnum.ChondralLesion,
      elements: [
        {
          modelName: [
            nameof<CartilageLigamentsCapsuleFindingUiModel>(m => m.cartilageLocation.anteriorHumeralCapitulum),
            nameof<CartilageLigamentsCapsuleFindingUiModel>(m => m.cartilageLocation.posteriorHumeralCapitulum),
            nameof<CartilageLigamentsCapsuleFindingUiModel>(m => m.cartilageLocation.anteriorHumeralTrochlea),
            nameof<CartilageLigamentsCapsuleFindingUiModel>(m => m.cartilageLocation.posteriorHumeralTrochlea),
            nameof<CartilageLigamentsCapsuleFindingUiModel>(m => m.cartilageLocation.ulnaTrochlearNotch),
            nameof<CartilageLigamentsCapsuleFindingUiModel>(m => m.cartilageLocation.ulnaRadialNotch),
            nameof<CartilageLigamentsCapsuleFindingUiModel>(m => m.cartilageLocation.radiusFoveaCapitis),
            nameof<CartilageLigamentsCapsuleFindingUiModel>(m => m.cartilageLocation.radiusCircumferentiaRadii)
          ]
        },
        {
          modelName: nameof<CartilageLigamentsCapsuleFindingUiModel>(m => m.etiologyType)
        },
        {
          modelName: nameof<CartilageLigamentsCapsuleFindingUiModel>(m => m.detailsType),
          validateCondition: {
            customConditionFunction: (model: CartilageLigamentsCapsuleFindingUiModel) => model.etiologyType === EtiologyType.Traumatic
          }
        }
      ]
    },
    {
      findingName: CartilagFindingTypeEnum.Ligaments,
      elements: [
        {
          modelName: nameof<CartilageLigamentsCapsuleFindingUiModel>(m => m.ligamentsLocalizationType)
        },
        {
          modelName: nameof<CartilageLigamentsCapsuleFindingUiModel>(m => m.extentOfTearType),
          validateCondition: {
            customConditionFunction: (model: CartilageLigamentsCapsuleFindingUiModel) =>
              model.ligamentsLocalizationType === LigamentsLocalizationType.MedialCollateralLigamentTear ||
              model.ligamentsLocalizationType === LigamentsLocalizationType.LateralCollateralLigamentTear
          }
        }
      ]
    },
    {
      findingName: CartilagFindingTypeEnum.Capsule,
      elements: [
        {
          modelName: nameof<CartilageLigamentsCapsuleFindingUiModel>(m => m.capsuleType)
        }
      ]
    }
  ]
};
