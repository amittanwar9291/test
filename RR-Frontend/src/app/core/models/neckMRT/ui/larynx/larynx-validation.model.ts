import { nameof } from 'ts-simple-nameof';

import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { LarynxFindingUiModel } from '@models/neckMRT/ui/larynx/larynx-finding-ui.model';

import { FractureLocalizationTypeEnum, LarynxFindingTypeEnum, LuxationLocalizationTypeEnum } from '@enums/neckMRT/larynx';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

export const LarynxValidationModel: IValidationModel = {
  finding: [
    {
      findingName: LarynxFindingTypeEnum.Mass,
      elements: [
        {
          modelName: nameof<LarynxFindingUiModel>(m => m.differentialDiagnosis),
          validateCondition: {
            modelName: nameof<LarynxFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: [
            nameof<LarynxFindingUiModel>(m => m.isSupraglotticSpace),
            nameof<LarynxFindingUiModel>(m => m.isGlottis),
            nameof<LarynxFindingUiModel>(m => m.isSubglotticSpace)
          ]
        },
        { modelName: nameof<LarynxFindingUiModel>(m => m.localizationAxialType) },
        { modelName: nameof<LarynxFindingUiModel>(m => m.sizeInMm) },
        { modelName: nameof<LarynxFindingUiModel>(m => m.marginType) },
        {
          modelName: nameof<LarynxFindingUiModel>(m => m.differentialDiagnosis1),
          validateCondition: {
            modelName: nameof<LarynxFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    },
    {
      findingName: LarynxFindingTypeEnum.Trauma,
      elements: [
        {
          modelName: nameof<LarynxFindingUiModel>(m => m.softTissueLocalizationType),
          validateCondition: { modelName: nameof<LarynxFindingUiModel>(m => m.isSoftTissueSwelling) }
        },
        {
          modelName: [
            nameof<LarynxFindingUiModel>(m => m.isArytaenoidCartilageRight),
            nameof<LarynxFindingUiModel>(m => m.isArytaenoidCartilageLeft)
          ],
          validateCondition: {
            modelName: nameof<LarynxFindingUiModel>(m => m.fractureLocalizationType),
            requiredValue: FractureLocalizationTypeEnum.ArytaenoidCartilage
          }
        },
        {
          modelName: [
            nameof<LarynxFindingUiModel>(m => m.isCricothyroidalJointRight),
            nameof<LarynxFindingUiModel>(m => m.isCricothyroidalJointLeft)
          ],
          validateCondition: {
            modelName: nameof<LarynxFindingUiModel>(m => m.luxationLocalizationType),
            requiredValue: LuxationLocalizationTypeEnum.CricothyroidalJoint
          }
        },
        {
          modelName: [
            nameof<LarynxFindingUiModel>(m => m.isCartilagoArytaenoideaRight),
            nameof<LarynxFindingUiModel>(m => m.isCartilagoArytaenoideaLeft)
          ],
          validateCondition: {
            modelName: nameof<LarynxFindingUiModel>(m => m.luxationLocalizationType),
            requiredValue: LuxationLocalizationTypeEnum.CartilagoArytaenoidea
          }
        },
        {
          modelName: [
            nameof<LarynxFindingUiModel>(m => m.isIpsilateralVocalFoldAdductionRight),
            nameof<LarynxFindingUiModel>(m => m.isIpsilateralVocalFoldAdductionLeft)
          ],
          validateCondition: {
            modelName: nameof<LarynxFindingUiModel>(m => m.isIpsilateralVocalFoldAdduction),
            requiredValue: true
          }
        },
        {
          modelName: [
            nameof<LarynxFindingUiModel>(m => m.isDissectionCarotidArteryRight),
            nameof<LarynxFindingUiModel>(m => m.isDissectionCarotidArteryLeft)
          ],
          validateCondition: {
            modelName: nameof<LarynxFindingUiModel>(m => m.isDissectionCarotidArtery),
            requiredValue: true
          }
        }
      ]
    }
  ]
};
