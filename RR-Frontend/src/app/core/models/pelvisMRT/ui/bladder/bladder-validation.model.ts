import { nameof } from 'ts-simple-nameof';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { BladderFindingUiModel } from '@models/pelvisMRT/ui/bladder/bladder-finding-ui.model';
import { BladderFindingTypeEnum, AffectedVesselUreterTypeEnum, TendonsPathologyTypeEnum } from '@enums/pelvisMRT/bladder';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

export const BladderValidationModel: IValidationModel = {
  finding: [
    {
      findingName: BladderFindingTypeEnum.VesselsUreter,
      elements: [
        {
          modelName: nameof<BladderFindingUiModel>(m => m.affectedVesselUreterType)
        },
        {
          modelName: nameof<BladderFindingUiModel>(m => m.arteriopathyType),
          validateCondition: {
            modelName: nameof<BladderFindingUiModel>(m => m.affectedVesselUreterType),
            requiredValue: AffectedVesselUreterTypeEnum.AbdominalAorta
          }
        },
        {
          modelName: nameof<BladderFindingUiModel>(m => m.sideType),
          validateCondition: {
            modelName: nameof<BladderFindingUiModel>(m => m.affectedVesselUreterType),
            requiredValue: AffectedVesselUreterTypeEnum.CommonIliacArtery
          }
        },
        {
          modelName: nameof<BladderFindingUiModel>(m => m.arteriopathyType),
          validateCondition: {
            modelName: nameof<BladderFindingUiModel>(m => m.affectedVesselUreterType),
            requiredValue: AffectedVesselUreterTypeEnum.CommonIliacArtery
          }
        },
        {
          modelName: nameof<BladderFindingUiModel>(m => m.sideType),
          validateCondition: {
            modelName: nameof<BladderFindingUiModel>(m => m.affectedVesselUreterType),
            requiredValue: AffectedVesselUreterTypeEnum.ExternalIliacArtery
          }
        },
        {
          modelName: nameof<BladderFindingUiModel>(m => m.arteriopathyType),
          validateCondition: {
            modelName: nameof<BladderFindingUiModel>(m => m.affectedVesselUreterType),
            requiredValue: AffectedVesselUreterTypeEnum.ExternalIliacArtery
          }
        },
        {
          modelName: nameof<BladderFindingUiModel>(m => m.sideType),
          validateCondition: {
            modelName: nameof<BladderFindingUiModel>(m => m.affectedVesselUreterType),
            requiredValue: AffectedVesselUreterTypeEnum.InternalIliacArtery
          }
        },
        {
          modelName: nameof<BladderFindingUiModel>(m => m.arteriopathyType),
          validateCondition: {
            modelName: nameof<BladderFindingUiModel>(m => m.affectedVesselUreterType),
            requiredValue: AffectedVesselUreterTypeEnum.InternalIliacArtery
          }
        },
        {
          modelName: [nameof<BladderFindingUiModel>(m => m.pathologyAnatomicVariantsType)],
          validateCondition: {
            modelName: nameof<BladderFindingUiModel>(m => m.affectedVesselUreterType),
            requiredValue: AffectedVesselUreterTypeEnum.InferiorVenaCava
          }
        },
        {
          modelName: [nameof<BladderFindingUiModel>(m => m.sideType)],
          validateCondition: {
            modelName: nameof<BladderFindingUiModel>(m => m.affectedVesselUreterType),
            requiredValue: AffectedVesselUreterTypeEnum.CommonIliacVein
          }
        },
        {
          modelName: [nameof<BladderFindingUiModel>(m => m.sideType)],
          validateCondition: {
            modelName: nameof<BladderFindingUiModel>(m => m.affectedVesselUreterType),
            requiredValue: AffectedVesselUreterTypeEnum.ExternalIliacVein
          }
        },
        {
          modelName: nameof<BladderFindingUiModel>(m => m.sideType),
          validateCondition: {
            modelName: nameof<BladderFindingUiModel>(m => m.affectedVesselUreterType),
            requiredValue: AffectedVesselUreterTypeEnum.Ureter
          }
        },
        {
          modelName: nameof<BladderFindingUiModel>(m => m.vesselsUreterPathologyType),
          validateCondition: {
            modelName: nameof<BladderFindingUiModel>(m => m.affectedVesselUreterType),
            requiredValue: AffectedVesselUreterTypeEnum.Ureter
          }
        }
      ]
    },
    {
      findingName: BladderFindingTypeEnum.UrinaryBladderWallThickening,
      elements: [
        {
          modelName: nameof<BladderFindingUiModel>(m => m.thickeningLocalizationType)
        },
        {
          modelName: nameof<BladderFindingUiModel>(m => m.maxExpansionInMm)
        },
        {
          modelName: nameof<BladderFindingUiModel>(m => m.differentialDiagnosis1)
        }
      ]
    },
    {
      findingName: BladderFindingTypeEnum.UrinaryBladderTrauma,
      elements: [
        {
          modelName: [nameof<BladderFindingUiModel>(m => m.isBladderrupture), nameof<BladderFindingUiModel>(m => m.isBladderTamponade)]
        }
      ]
    },
    {
      findingName: BladderFindingTypeEnum.SoftTissueMass,
      elements: [
        {
          modelName: nameof<BladderFindingUiModel>(m => m.maxExpansionInMm)
        },
        {
          modelName: nameof<BladderFindingUiModel>(m => m.differentialDiagnosis),
          validateCondition: {
            modelName: nameof<BladderFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<BladderFindingUiModel>(m => m.differentialDiagnosis1),
          validateCondition: {
            modelName: nameof<BladderFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    },
    {
      findingName: BladderFindingTypeEnum.Muscles,
      elements: [
        {
          modelName: nameof<BladderFindingUiModel>(m => m.sideType)
        },
        {
          modelName: nameof<BladderFindingUiModel>(m => m.musclesLocalizationType)
        },
        {
          modelName: nameof<BladderFindingUiModel>(m => m.classificationMunichConsensusType),
          validateCondition: {
            modelName: nameof<BladderFindingUiModel>(m => m.isMuscleLesion),
            requiredValue: true
          }
        },
        {
          modelName: [
            nameof<BladderFindingUiModel>(m => m.isIntramuscular),
            nameof<BladderFindingUiModel>(m => m.isInterfacial),
            nameof<BladderFindingUiModel>(m => m.isIntermuscular)
          ],
          validateCondition: {
            modelName: nameof<BladderFindingUiModel>(m => m.isHematoma),
            requiredValue: true
          }
        }
      ]
    },
    {
      findingName: BladderFindingTypeEnum.Tendons,
      elements: [
        {
          modelName: nameof<BladderFindingUiModel>(m => m.tendonsLocalizationType)
        },
        {
          modelName: nameof<BladderFindingUiModel>(m => m.sideType)
        },
        {
          modelName: nameof<BladderFindingUiModel>(m => m.tendonsPathologyType)
        },
        {
          modelName: nameof<BladderFindingUiModel>(m => m.detailsRuptureLocalizationType),
          validateCondition: {
            modelName: nameof<BladderFindingUiModel>(m => m.tendonsPathologyType),
            requiredValue: TendonsPathologyTypeEnum.Rupture
          }
        }
      ]
    }
  ]
};
