import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { MainSoftPartsFindingTypeEnum } from '@enums/kneeMRT/soft-parts/soft-parts-finding-type.enum';
import { nameof } from 'ts-simple-nameof';
import { SoftPartsFindingUiModel } from '@models/kneeMRT/ui/soft-parts/soft-parts-finding-ui.model';

export const SoftPartsValidationModel: IValidationModel = {
  finding: [
    {
      findingName: MainSoftPartsFindingTypeEnum.SynoviaFocal,
      elements: [
        { modelName: nameof<SoftPartsFindingUiModel>(m => m.location), isLocalizer: true },
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.differentialDiagnosis01),
          validateCondition: {
            modelName: nameof<SoftPartsFindingUiModel>(m => m.descriptionType),
            requiredValue: 'IDescribe'
          }
        },
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.differentialDiagnosis),
          validateCondition: {
            modelName: nameof<SoftPartsFindingUiModel>(m => m.descriptionType),
            requiredValue: 'IKnow'
          }
        }
      ]
    },
    {
      findingName: MainSoftPartsFindingTypeEnum.HoffaFatBody,
      elements: [
        {
          modelName: [
            nameof<SoftPartsFindingUiModel>(m => m.isEdema),
            nameof<SoftPartsFindingUiModel>(m => m.isFragmentation),
            nameof<SoftPartsFindingUiModel>(m => m.isFibrosis),
            nameof<SoftPartsFindingUiModel>(m => m.isHypertrophy),
            nameof<SoftPartsFindingUiModel>(m => m.isCartilageIsointenserNodulus),
            nameof<SoftPartsFindingUiModel>(m => m.isThickeningPlicaSynovialisInfrapatellaris)
          ]
        }
      ]
    },
    {
      findingName: MainSoftPartsFindingTypeEnum.Bursitis,
      elements: [
        {
          modelName: [
            nameof<SoftPartsFindingUiModel>(m => m.isBursaSuprapatellar),
            nameof<SoftPartsFindingUiModel>(m => m.isBursaSubcutaneaPraepatellaris),
            nameof<SoftPartsFindingUiModel>(m => m.isBursaSubfascialisPraepatellaris),
            nameof<SoftPartsFindingUiModel>(m => m.isBursaInfrapatellarisProfunda),
            nameof<SoftPartsFindingUiModel>(m => m.isBursaAnserina),
            nameof<SoftPartsFindingUiModel>(m => m.isBursaWithinTheInnerBand),
            nameof<SoftPartsFindingUiModel>(m => m.isBursaSubtendineaMusculiSemimembranosi),
            nameof<SoftPartsFindingUiModel>(m => m.isBursaTractusIliotibialis),
            nameof<SoftPartsFindingUiModel>(m => m.isBursaSubtendineaMusculiBicipitisFemorisInferior)
          ]
        }
      ]
    },
    {
      findingName: MainSoftPartsFindingTypeEnum.TendonsPatellarTendon,
      elements: [
        {
          modelName: [nameof<SoftPartsFindingUiModel>(m => m.isTear), nameof<SoftPartsFindingUiModel>(m => m.isEnthesiopathy)]
        },
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.tptLocalizationType),
          validateCondition: {
            modelName: nameof<SoftPartsFindingUiModel>(m => m.isTear)
          }
        }
      ]
    },
    {
      findingName: MainSoftPartsFindingTypeEnum.TendonsQuadricepsTendon,
      elements: [
        {
          modelName: [nameof<SoftPartsFindingUiModel>(m => m.isTear), nameof<SoftPartsFindingUiModel>(m => m.isEnthesiopathy)]
        },
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.tearType),
          validateCondition: {
            modelName: nameof<SoftPartsFindingUiModel>(m => m.isTear)
          }
        }
      ]
    },
    {
      findingName: MainSoftPartsFindingTypeEnum.TendonsBicepsFemorisTendon,
      elements: [
        {
          modelName: [nameof<SoftPartsFindingUiModel>(m => m.isTear), nameof<SoftPartsFindingUiModel>(m => m.isEnthesiopathy)]
        }
      ]
    },
    {
      findingName: MainSoftPartsFindingTypeEnum.TendonsPopliteusTendon,
      elements: [
        {
          modelName: [nameof<SoftPartsFindingUiModel>(m => m.isTear), nameof<SoftPartsFindingUiModel>(m => m.isEnthesiopathy)]
        }
      ]
    },
    {
      findingName: MainSoftPartsFindingTypeEnum.TendonsTractusIliotibialis,
      elements: [
        {
          modelName: [nameof<SoftPartsFindingUiModel>(m => m.isTear), nameof<SoftPartsFindingUiModel>(m => m.isEnthesiopathy)]
        }
      ]
    },
    {
      findingName: MainSoftPartsFindingTypeEnum.TendonsPesAnserinus,
      elements: [
        {
          modelName: [
            nameof<SoftPartsFindingUiModel>(m => m.isTear),
            nameof<SoftPartsFindingUiModel>(m => m.isEnthesiopathy),
            nameof<SoftPartsFindingUiModel>(m => m.isLayer)
          ]
        }
      ]
    },
    {
      findingName: MainSoftPartsFindingTypeEnum.Musculature,
      elements: [
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.musculatureLocation)
        },
        {
          modelName: [
            nameof<SoftPartsFindingUiModel>(m => m.isIntramuscularHaematoma),
            nameof<SoftPartsFindingUiModel>(m => m.isMuscleLesion),
            nameof<SoftPartsFindingUiModel>(m => m.isFurtherFindingsMusculature)
          ]
        },
        {
          modelName: [
            nameof<SoftPartsFindingUiModel>(m => m.isIntramuscular),
            nameof<SoftPartsFindingUiModel>(m => m.isInterfacial),
            nameof<SoftPartsFindingUiModel>(m => m.isIntermuscular)
          ],
          validateCondition: {
            modelName: nameof<SoftPartsFindingUiModel>(m => m.isIntramuscularHaematoma)
          }
        },
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.classificationMunichConsensusType),
          validateCondition: {
            modelName: nameof<SoftPartsFindingUiModel>(m => m.isMuscleLesion)
          }
        },
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.furtherFindingsMusculatureType),
          validateCondition: {
            modelName: nameof<SoftPartsFindingUiModel>(m => m.isFurtherFindingsMusculature)
          }
        }
      ]
    },
    {
      findingName: MainSoftPartsFindingTypeEnum.VesselsNerves,
      elements: [
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.vesselsNervesType)
        }
      ]
    },
    {
      findingName: MainSoftPartsFindingTypeEnum.SoftParts,
      elements: [
        { modelName: nameof<SoftPartsFindingUiModel>(m => m.location), isLocalizer: true },
        { modelName: nameof<SoftPartsFindingUiModel>(m => m.softPartsFindingType) }
      ]
    },
    {
      findingName: MainSoftPartsFindingTypeEnum.SoftTissueTumor,
      elements: [
        { modelName: nameof<SoftPartsFindingUiModel>(m => m.localizationAxialType) },
        { modelName: nameof<SoftPartsFindingUiModel>(m => m.localizationCraniocaudalRelationType) },
        { modelName: nameof<SoftPartsFindingUiModel>(m => m.demarcationType) },
        { modelName: nameof<SoftPartsFindingUiModel>(m => m.tissueTumorHomogeneityType) },
        { modelName: nameof<SoftPartsFindingUiModel>(m => m.axialMaxInMm) },
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.differentialDiagnosis01),
          validateCondition: {
            modelName: nameof<SoftPartsFindingUiModel>(m => m.descriptionType),
            requiredValue: 'IDescribe'
          }
        },
        {
          modelName: nameof<SoftPartsFindingUiModel>(m => m.differentialDiagnosis),
          validateCondition: {
            modelName: nameof<SoftPartsFindingUiModel>(m => m.descriptionType),
            requiredValue: 'IKnow'
          }
        }
      ]
    }
  ]
};
