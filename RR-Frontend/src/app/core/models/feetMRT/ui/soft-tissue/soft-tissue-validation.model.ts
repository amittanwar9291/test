import { IValidationModel } from '@models/shared/validation/form-validation.models';
import {
  D1TypeEnum,
  DiseaseOfTheSynoviaEnum,
  DiseasesOfTheMtpTypeEnum,
  FindingTypeEnum,
  MuscleLesionLocalizationTypeEnum
} from '@enums/feetMRT/soft-tissue';
import { nameof } from 'ts-simple-nameof';
import { SoftTissueFindingUiModel } from '@models/feetMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

export const SoftTissueValidationModel: IValidationModel = {
  finding: [
    {
      findingName: FindingTypeEnum.Effusion,
      elements: [
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.threeDimensionalLocalization),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: FindingTypeEnum.Hematoma,
      elements: [
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.threeDimensionalLocalization),
          isLocalizer: true
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.detailType)
        }
      ]
    },
    {
      findingName: FindingTypeEnum.PlantarFasciaDisease,
      elements: [
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.plantarFasciaDiseaseType)
        }
      ]
    },
    {
      findingName: FindingTypeEnum.DiseasesOfTheMTP,
      elements: [
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.diseasesOfTheMtpType)
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.d1Type),
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.diseasesOfTheMtpType),
            requiredValue: DiseasesOfTheMtpTypeEnum.D1
          }
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.diseasesOfTheMTPLocalizationType),
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.d1Type),
            requiredValue: D1TypeEnum.SesamoidBones
          }
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.pathologyType),
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.d1Type),
            requiredValue: D1TypeEnum.SesamoidBones
          }
        }
      ]
    },
    {
      findingName: FindingTypeEnum.Burisitis,
      elements: [
        {
          modelName: [
            nameof<SoftTissueFindingUiModel>(m => m.isBursaMetatarsophalangealis),
            nameof<SoftTissueFindingUiModel>(m => m.isMetatarsalBursa),
            nameof<SoftTissueFindingUiModel>(m => m.isBursaIntermetatarsale),
            nameof<SoftTissueFindingUiModel>(m => m.isBursaSubcutaneaCalcanea),
            nameof<SoftTissueFindingUiModel>(m => m.isBursaRetrocalcaneal),
            nameof<SoftTissueFindingUiModel>(m => m.isBursaSubcutaneaMedialMalleolus),
            nameof<SoftTissueFindingUiModel>(m => m.isBursaSubcutaneaLateralMalleolus)
          ]
        }
      ]
    },
    {
      findingName: FindingTypeEnum.SoftTissueTumor,
      elements: [
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.threeDimensionalLocalization),
          isLocalizer: true
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.detailType)
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.expansionSizeMaxInMm)
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.demarcationType)
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.homogeneityType)
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.differentialDiagnosis),
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.differentialDiagnosis1),
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    },
    {
      findingName: FindingTypeEnum.DiseaseOfTheSynoviaSynovitis,
      elements: [
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.localizationOfTheSynoviaSynovitisType)
        },
        {
          modelName: [nameof<SoftTissueFindingUiModel>(m => m.isIntraarticular), nameof<SoftTissueFindingUiModel>(m => m.isExtraarticular)],
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.localizationOfTheSynoviaSynovitisType),
            requiredValue: DiseaseOfTheSynoviaEnum.Focus
          }
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.threeDimensionalLocalization),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.isIntraarticular)
          }
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.tendonsLocalization),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.isExtraarticular)
          }
        }
      ]
    },
    {
      findingName: FindingTypeEnum.DiseaseOfTheSynoviaFocalMass,
      elements: [
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.localizationOfTheSynoviaSynovitisType)
        },
        {
          modelName: [nameof<SoftTissueFindingUiModel>(m => m.isIntraarticular), nameof<SoftTissueFindingUiModel>(m => m.isExtraarticular)],
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.localizationOfTheSynoviaSynovitisType),
            requiredValue: DiseaseOfTheSynoviaEnum.Focus
          }
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.threeDimensionalLocalization),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.isIntraarticular)
          }
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.tendonsLocalization),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.isExtraarticular)
          }
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.differentialDiagnosis),
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        }
      ]
    },
    {
      findingName: FindingTypeEnum.MuscleLesion,
      elements: [
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.muscleLesionLocalizationType)
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.classificationType),
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.isMuscleLesion)
          }
        },
        {
          modelName: [
            nameof<SoftTissueFindingUiModel>(m => m.isIntramuscular),
            nameof<SoftTissueFindingUiModel>(m => m.isInterfacial),
            nameof<SoftTissueFindingUiModel>(m => m.isIntermuscular)
          ],
          validateCondition: {
            modelName: nameof<SoftTissueFindingUiModel>(m => m.isHematoma)
          }
        }
      ]
    },
    {
      findingName: FindingTypeEnum.Abscess,
      elements: [
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.threeDimensionalLocalization),
          isLocalizer: true
        },
        {
          modelName: nameof<SoftTissueFindingUiModel>(m => m.detailType)
        }
      ]
    }
  ]
};
