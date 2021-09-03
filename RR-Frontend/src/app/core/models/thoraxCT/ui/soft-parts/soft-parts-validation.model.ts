import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { SoftPartsFindingTypeEnum } from '@enums/thoraxCT/soft-parts';
import { LymphNodesAxillaryTypeEnum } from '@enums/thoraxCT/soft-parts/lymph-nodes-axillary';
import { VolumeTypeEnum } from '@enums/thoraxCT/soft-parts/mamma';
import { PleuralThickeningLocalizationTypeEnum } from '@enums/thoraxCT/soft-parts/pleural-thickening';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { SoftPartsFindingUiModel } from '@models/thoraxCT/ui/soft-parts/soft-parts-finding-ui.model';
import { nameof } from 'ts-simple-nameof';

export const SoftPartsValidationModel: IValidationModel = {
  finding: [
    {
      findingName: SoftPartsFindingTypeEnum.PleuralEffusion,
      elements: [
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.siteType)
        }
      ]
    },
    {
      findingName: SoftPartsFindingTypeEnum.PleuralMass,
      elements: [
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.siteType)
        },
        {
          modelName: [
            nameof<SoftPartsFindingUiModel>(m => m.isAnterior),
            nameof<SoftPartsFindingUiModel>(m => m.isLateral),
            nameof<SoftPartsFindingUiModel>(m => m.isPosterior),
            nameof<SoftPartsFindingUiModel>(m => m.isFissural),
            nameof<SoftPartsFindingUiModel>(m => m.isMediastinal)
          ]
        },
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.differentialDiagnosis),
          validateCondition: {
            modelName: nameof<SoftPartsFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.sizeMaxWidthInMm)
        },
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.differentialDiagnosis01),
          validateCondition: {
            modelName: nameof<SoftPartsFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    },
    {
      findingName: SoftPartsFindingTypeEnum.PleuralThickening,
      elements: [
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.siteType)
        },
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.sizeMaxWidthInMm)
        },
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.pleuralThickeningLocalizationType)
        },
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.localizationCraniocaudalType),
          validateCondition: {
            modelName: nameof<SoftPartsFindingUiModel>(m => m.pleuralThickeningLocalizationType),
            requiredValue: PleuralThickeningLocalizationTypeEnum.Focal
          }
        },
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.differentialDiagnosis01)
        }
      ]
    },
    {
      findingName: SoftPartsFindingTypeEnum.Pneumothorax,
      elements: [
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.siteType)
        },
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.mediastinalshiftType),
          validateCondition: {
            modelName: nameof<SoftPartsFindingUiModel>(m => m.isMediastinalshift)
          }
        }
      ]
    },
    {
      findingName: SoftPartsFindingTypeEnum.ChestWallSoftTissueMass,
      elements: [
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.siteType)
        },
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.marginType)
        },
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.homogeneityType)
        },
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.differentialDiagnosis),
          validateCondition: {
            modelName: nameof<SoftPartsFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.sizeMaxWidthInMm)
        },
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.differentialDiagnosis01),
          validateCondition: {
            modelName: nameof<SoftPartsFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    },
    {
      findingName: SoftPartsFindingTypeEnum.Mamma,
      elements: [
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.lossOfVolumeSiteType),
          validateCondition: {
            modelName: nameof<SoftPartsFindingUiModel>(m => m.volumeType),
            requiredValue: VolumeTypeEnum.Anisomasty
          }
        },
        {
          modelName: [nameof<SoftPartsFindingUiModel>(m => m.isAblatioRight), nameof<SoftPartsFindingUiModel>(m => m.isAblatioLeft)],
          validateCondition: {
            modelName: nameof<SoftPartsFindingUiModel>(m => m.volumeType),
            requiredValue: VolumeTypeEnum.Ablatio
          }
        },
        {
          modelName: [
            nameof<SoftPartsFindingUiModel>(m => m.isBreastAugmentationRight),
            nameof<SoftPartsFindingUiModel>(m => m.isBreastAugmentationLeft)
          ],
          validateCondition: {
            modelName: nameof<SoftPartsFindingUiModel>(m => m.volumeType),
            requiredValue: VolumeTypeEnum.BreastAugmentation
          }
        },
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.thickenedCutisBreastLocation),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<SoftPartsFindingUiModel>(m => m.isThickened)
          }
        },
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.blurredSiteType),
          validateCondition: {
            modelName: nameof<SoftPartsFindingUiModel>(m => m.isBlurred)
          }
        },
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.stoveBreastLocation),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<SoftPartsFindingUiModel>(m => m.isStove)
          }
        },
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.stoveMaxDiameterAxialInMm),
          validateCondition: {
            modelName: nameof<SoftPartsFindingUiModel>(m => m.isStove)
          }
        }
      ]
    },
    {
      findingName: SoftPartsFindingTypeEnum.LymphNodesAxilla,
      elements: [
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.lymphNodesAxillaryType)
        },
        {
          modelName: [nameof<SoftPartsFindingUiModel>(m => m.isLymphNodeRight), nameof<SoftPartsFindingUiModel>(m => m.isLymphNodeLeft)],
          validateCondition: {
            customConditionFunction: (model: SoftPartsFindingUiModel): boolean => {
              return model.lymphNodesAxillaryType !== LymphNodesAxillaryTypeEnum.None;
            }
          }
        }
      ]
    },
    {
      findingName: SoftPartsFindingTypeEnum.UpperAbdomenLiverGallBladder,
      elements: [
        {
          modelName: [
            nameof<SoftPartsFindingUiModel>(m => m.isFocalLiverLesion),
            nameof<SoftPartsFindingUiModel>(m => m.isDiffuseLiverLesion)
          ]
        },
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.focalLiverLesionMaxDiameterAxialInMm),
          validateCondition: {
            modelName: nameof<SoftPartsFindingUiModel>(m => m.isFocalLiverLesion)
          }
        }
      ]
    },
    {
      findingName: SoftPartsFindingTypeEnum.UpperAbdomenPancreas,
      elements: [
        {
          modelName: [
            nameof<SoftPartsFindingUiModel>(m => m.isFocalPancreaticLesion),
            nameof<SoftPartsFindingUiModel>(m => m.isDiffusePancreaticLesion)
          ]
        },
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.abdomenLocalizationType),
          validateCondition: {
            modelName: nameof<SoftPartsFindingUiModel>(m => m.isFocalPancreaticLesion)
          }
        }
      ]
    },
    {
      findingName: SoftPartsFindingTypeEnum.UpperAbdomenKidneyAdrenalGland,
      elements: [
        {
          modelName: [nameof<SoftPartsFindingUiModel>(m => m.isKidney), nameof<SoftPartsFindingUiModel>(m => m.isMassAdrenalGland)]
        },
        {
          modelName: [
            nameof<SoftPartsFindingUiModel>(m => m.isKidneyFocalLesion),
            nameof<SoftPartsFindingUiModel>(m => m.isUrinaryRetention)
          ],
          validateCondition: {
            modelName: nameof<SoftPartsFindingUiModel>(m => m.isKidney)
          }
        },
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.abdomenLocalizationType),
          validateCondition: {
            modelName: nameof<SoftPartsFindingUiModel>(m => m.isKidneyFocalLesion)
          }
        },
        {
          modelName: [
            nameof<SoftPartsFindingUiModel>(m => m.isUrinaryRetentionLeft),
            nameof<SoftPartsFindingUiModel>(m => m.isUrinaryRetentionRight)
          ],
          validateCondition: {
            modelName: nameof<SoftPartsFindingUiModel>(m => m.isUrinaryRetention)
          }
        },
        {
          modelName: [
            nameof<SoftPartsFindingUiModel>(m => m.isMassAdrenalGlandLeft),
            nameof<SoftPartsFindingUiModel>(m => m.isMassAdrenalGlandRight)
          ],
          validateCondition: {
            modelName: nameof<SoftPartsFindingUiModel>(m => m.isMassAdrenalGland)
          }
        }
      ]
    },
    {
      findingName: SoftPartsFindingTypeEnum.UpperAbdomenSpleenLymphNodesHiatusHernia,
      elements: [
        {
          modelName: [
            nameof<SoftPartsFindingUiModel>(m => m.isSplenomegaly),
            nameof<SoftPartsFindingUiModel>(m => m.isEnlargedAbdominalLymphNodes),
            nameof<SoftPartsFindingUiModel>(m => m.isPathologicalHiatusHernia)
          ]
        }
      ]
    }
  ]
};
