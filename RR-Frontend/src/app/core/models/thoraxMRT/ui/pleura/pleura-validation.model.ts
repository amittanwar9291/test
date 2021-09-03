import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { CraniocaudalTypeEnum } from '@enums/thoraxMRT/pleura/common/craniocaudal-type.enum';
import { LymphNodesAxillaryTypeEnum } from '@enums/thoraxMRT/pleura/lymph-nodes-axillary/lymph-nodes-axillary-type.enum';
import { VolumeTypeEnum } from '@enums/thoraxMRT/pleura/mamma/volume-type.enum';
import { PleuraFindingTypeEnum } from '@enums/thoraxMRT/pleura/pleura-finding-type.enum';
import { LocalizationTypeEnum } from '@enums/thoraxMRT/pleura/pleural-thickening-mass/localization-type.enum';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { nameof } from 'ts-simple-nameof';
import { PleuraFindingUiModel } from './pleura-finding-ui.model';

export const PleuraValidationModel: IValidationModel = {
  finding: [
    {
      findingName: PleuraFindingTypeEnum.PleuralEffusion,
      elements: [
        {
          modelName: nameof<PleuraFindingUiModel>(m => m.pleuraSiteType)
        }
      ]
    },
    {
      findingName: PleuraFindingTypeEnum.PleuralThickeningMass,
      elements: [
        {
          modelName: nameof<PleuraFindingUiModel>(m => m.differentialDiagnosis),
          validateCondition: {
            modelName: nameof<PleuraFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<PleuraFindingUiModel>(m => m.pleuraSiteType)
        },
        {
          modelName: nameof<PleuraFindingUiModel>(m => m.pleuralThickeningMassLocalizationType)
        },
        {
          modelName: nameof<PleuraFindingUiModel>(m => m.pleuraLocalizationCraniocaudalType),
          validateCondition: {
            modelName: nameof<PleuraFindingUiModel>(m => m.pleuralThickeningMassLocalizationType),
            requiredValue: LocalizationTypeEnum.Local
          }
        },
        {
          modelName: [
            nameof<PleuraFindingUiModel>(m => m.isAnterior),
            nameof<PleuraFindingUiModel>(m => m.isLateral),
            nameof<PleuraFindingUiModel>(m => m.isPosterior),
            nameof<PleuraFindingUiModel>(m => m.isFissural),
            nameof<PleuraFindingUiModel>(m => m.isMediastinal)
          ],
          validateCondition: {
            modelName: nameof<PleuraFindingUiModel>(m => m.pleuralThickeningMassLocalizationType),
            requiredValue: LocalizationTypeEnum.Local
          }
        },
        {
          modelName: nameof<PleuraFindingUiModel>(m => m.expansionSizeInMM)
        },
        {
          modelName: nameof<PleuraFindingUiModel>(m => m.marginType)
        },
        {
          modelName: nameof<PleuraFindingUiModel>(m => m.differentialDiagnosis1),
          validateCondition: {
            modelName: nameof<PleuraFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    },
    {
      findingName: PleuraFindingTypeEnum.Pneumothorax,
      elements: [
        {
          modelName: nameof<PleuraFindingUiModel>(m => m.pleuraSiteType)
        },
        {
          modelName: nameof<PleuraFindingUiModel>(m => m.mediastinalPleuraSiteType),
          validateCondition: {
            modelName: nameof<PleuraFindingUiModel>(m => m.isMediastinalshift)
          }
        }
      ]
    },
    {
      findingName: PleuraFindingTypeEnum.ChestWallSoftTissueMass,
      elements: [
        {
          modelName: nameof<PleuraFindingUiModel>(m => m.pleuraSiteType)
        },
        {
          modelName: nameof<PleuraFindingUiModel>(m => m.marginType)
        },
        {
          modelName: nameof<PleuraFindingUiModel>(m => m.craniocaudalType)
        },
        {
          modelName: nameof<PleuraFindingUiModel>(m => m.homogeneityType)
        },
        {
          modelName: nameof<PleuraFindingUiModel>(m => m.differentialDiagnosis),
          validateCondition: {
            modelName: nameof<PleuraFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<PleuraFindingUiModel>(m => m.spineLocations),
          validateCondition: {
            modelName: nameof<PleuraFindingUiModel>(m => m.craniocaudalType),
            requiredValue: CraniocaudalTypeEnum.ReferenceThoracicVertebra
          }
        },
        {
          modelName: nameof<PleuraFindingUiModel>(m => m.ribLocations),
          validateCondition: {
            modelName: nameof<PleuraFindingUiModel>(m => m.craniocaudalType),
            requiredValue: CraniocaudalTypeEnum.ReferenceRib
          }
        },
        {
          modelName: nameof<PleuraFindingUiModel>(m => m.expansionSizeInMM)
        },
        {
          modelName: nameof<PleuraFindingUiModel>(m => m.differentialDiagnosis1),
          validateCondition: {
            modelName: nameof<PleuraFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    },
    {
      findingName: PleuraFindingTypeEnum.Mamma,
      elements: [
        {
          modelName: nameof<PleuraFindingUiModel>(m => m.pleuraSiteType),
          validateCondition: {
            modelName: nameof<PleuraFindingUiModel>(m => m.volumeType),
            requiredValue: VolumeTypeEnum.Anisomasty
          }
        },
        {
          modelName: [nameof<PleuraFindingUiModel>(m => m.isAblatioRight), nameof<PleuraFindingUiModel>(m => m.isAblatioLeft)],
          validateCondition: {
            modelName: nameof<PleuraFindingUiModel>(m => m.volumeType),
            requiredValue: VolumeTypeEnum.Ablatio
          }
        },
        {
          modelName: [
            nameof<PleuraFindingUiModel>(m => m.isBreastAugmentationRight),
            nameof<PleuraFindingUiModel>(m => m.isBreastAugmentationLeft)
          ],
          validateCondition: {
            modelName: nameof<PleuraFindingUiModel>(m => m.volumeType),
            requiredValue: VolumeTypeEnum.BreastAugmentation
          }
        },
        {
          modelName: nameof<PleuraFindingUiModel>(m => m.thickenedCutisBreastLocation),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<PleuraFindingUiModel>(m => m.isThickened)
          }
        },
        {
          modelName: [nameof<PleuraFindingUiModel>(m => m.isObscuredRight), nameof<PleuraFindingUiModel>(m => m.isObscuredLeft)],
          validateCondition: {
            modelName: nameof<PleuraFindingUiModel>(m => m.isObscured)
          }
        },
        {
          modelName: nameof<PleuraFindingUiModel>(m => m.massBreastLocation),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<PleuraFindingUiModel>(m => m.isMass)
          }
        }
      ]
    },
    {
      findingName: PleuraFindingTypeEnum.LymphNodesAxilla,
      elements: [
        {
          modelName: [nameof<PleuraFindingUiModel>(m => m.isLymphNodeRight), nameof<PleuraFindingUiModel>(m => m.isLymphNodeLeft)],
          validateCondition: {
            modelName: nameof<PleuraFindingUiModel>(m => m.lymphNodesAxillaType),
            requiredValue: LymphNodesAxillaryTypeEnum.Pathological
          }
        },
        {
          modelName: [nameof<PleuraFindingUiModel>(m => m.isLymphNodeRight), nameof<PleuraFindingUiModel>(m => m.isLymphNodeLeft)],
          validateCondition: {
            modelName: nameof<PleuraFindingUiModel>(m => m.lymphNodesAxillaType),
            requiredValue: LymphNodesAxillaryTypeEnum.BorderlineCentralFatHilusPreserved
          }
        },
        {
          modelName: nameof<PleuraFindingUiModel>(m => m.lymphNodesAxillaType)
        }
      ]
    },
    {
      findingName: PleuraFindingTypeEnum.UpperAbdomenLiverGallBladder,
      elements: [
        {
          modelName: [
            nameof<PleuraFindingUiModel>(m => m.isFocalLiverLesion),
            nameof<PleuraFindingUiModel>(m => m.isDiffuseLiverLesion),
            nameof<PleuraFindingUiModel>(m => m.isCholecystolithiasis),
            nameof<PleuraFindingUiModel>(m => m.isWallThickeningOfTheGallBladder)
          ]
        },
        {
          modelName: nameof<PleuraFindingUiModel>(m => m.focalLiverLesionMaxDiameterAxialInMm),
          validateCondition: {
            modelName: nameof<PleuraFindingUiModel>(m => m.isFocalLiverLesion)
          }
        }
      ]
    },
    {
      findingName: PleuraFindingTypeEnum.UpperAbdomenPancreas,
      elements: [
        {
          modelName: [
            nameof<PleuraFindingUiModel>(m => m.isFocalPancreaticLesion),
            nameof<PleuraFindingUiModel>(m => m.isDiffusePancreaticLesion),
            nameof<PleuraFindingUiModel>(m => m.isWirsungDuctDilatation)
          ]
        },
        {
          modelName: nameof<PleuraFindingUiModel>(m => m.leasionLocalizationType),
          validateCondition: {
            modelName: nameof<PleuraFindingUiModel>(m => m.isFocalPancreaticLesion)
          }
        }
      ]
    },
    {
      findingName: PleuraFindingTypeEnum.UpperAbdomenKidneyAdrenalGland,
      elements: [
        {
          modelName: [nameof<PleuraFindingUiModel>(m => m.isKidney), nameof<PleuraFindingUiModel>(m => m.isAdrenalGlandMass)]
        },
        {
          modelName: [nameof<PleuraFindingUiModel>(m => m.isKidneyFocalLesion), nameof<PleuraFindingUiModel>(m => m.isUrinaryRetention)],
          validateCondition: {
            modelName: nameof<PleuraFindingUiModel>(m => m.isKidney)
          }
        },
        {
          modelName: nameof<PleuraFindingUiModel>(m => m.focalLeasionSiteType),
          validateCondition: {
            modelName: nameof<PleuraFindingUiModel>(m => m.isKidneyFocalLesion)
          }
        },
        {
          modelName: nameof<PleuraFindingUiModel>(m => m.focalLeasionSiteType),
          validateCondition: {
            modelName: nameof<PleuraFindingUiModel>(m => m.isKidneyFocalLesion)
          }
        },
        {
          modelName: [
            nameof<PleuraFindingUiModel>(m => m.isUrinaryRetentionRight),
            nameof<PleuraFindingUiModel>(m => m.isUrinaryRetentionLeft)
          ],
          validateCondition: {
            modelName: nameof<PleuraFindingUiModel>(m => m.isUrinaryRetention)
          }
        },
        {
          modelName: nameof<PleuraFindingUiModel>(m => m.adrenalGlandMassSiteType),
          validateCondition: {
            modelName: nameof<PleuraFindingUiModel>(m => m.isAdrenalGlandMass)
          }
        }
      ]
    },
    {
      findingName: PleuraFindingTypeEnum.UpperAbdomenSpleenLymphNodesHernia,
      elements: [
        {
          modelName: [
            nameof<PleuraFindingUiModel>(m => m.isSplenomegaly),
            nameof<PleuraFindingUiModel>(m => m.isEnlargedAbdominalLymphNodes),
            nameof<PleuraFindingUiModel>(m => m.isPathologicalHiatalHernia)
          ]
        }
      ]
    },
    {
      findingName: PleuraFindingTypeEnum.UpperAbdomenAscites,
      elements: [
        {
          modelName: [
            nameof<PleuraFindingUiModel>(m => m.isPerihepatic),
            nameof<PleuraFindingUiModel>(m => m.isPerisplenic),
            nameof<PleuraFindingUiModel>(m => m.isAscitesNotFurtherDefined)
          ]
        }
      ]
    }
  ]
};
