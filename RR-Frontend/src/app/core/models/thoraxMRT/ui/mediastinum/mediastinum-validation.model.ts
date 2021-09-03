import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import {
  AnomaliesTypeEnum,
  LymphNodeStationsTypeEnum,
  LymphNodesTypeEnum,
  MediastinumFindingTypeEnum,
  MediastinumTypeEnum,
  PathologyTypeEnum,
  TracheaTypeEnum
} from '@enums/thoraxMRT/mediastinum';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { MediastinumFindingUiModel } from '@models/thoraxMRT/ui/mediastinum/mediastinum-finding-ui.model';
import { nameof } from 'ts-simple-nameof';

export const MediastinumValidationModel: IValidationModel = {
  finding: [
    {
      findingName: MediastinumFindingTypeEnum.Mediastinum,
      elements: [
        {
          modelName: nameof<MediastinumFindingUiModel>(m => m.mediastinumType)
        },
        {
          modelName: nameof<MediastinumFindingUiModel>(m => m.directionType),
          validateCondition: {
            modelName: nameof<MediastinumFindingUiModel>(m => m.mediastinumType),
            requiredValue: MediastinumTypeEnum.MediastinalShift
          }
        }
      ]
    },
    {
      findingName: MediastinumFindingTypeEnum.LymphNodes,
      elements: [
        {
          modelName: nameof<MediastinumFindingUiModel>(m => m.lymphNodesType)
        },
        {
          modelName: nameof<MediastinumFindingUiModel>(m => m.diameterOfTheLargestLnSadInMm),
          validateCondition: {
            modelName: nameof<MediastinumFindingUiModel>(m => m.lymphNodesType),
            requiredValue: LymphNodesTypeEnum.MultiplePathologicallyEnlargedLymphNodes
          }
        },
        {
          modelName: nameof<MediastinumFindingUiModel>(m => m.lymphNodeStationsType),
          validateCondition: {
            modelName: nameof<MediastinumFindingUiModel>(m => m.lymphNodesType),
            requiredValue: LymphNodesTypeEnum.LocalizationAccToIASCL
          }
        },
        {
          modelName: nameof<MediastinumFindingUiModel>(m => m.sadInMm),
          validateCondition: {
            modelName: nameof<MediastinumFindingUiModel>(m => m.lymphNodesType),
            requiredValue: LymphNodesTypeEnum.LocalizationAccToIASCL
          }
        },
        {
          modelName: nameof<MediastinumFindingUiModel>(m => m.supraclavicularLowCervicalAndJugular),
          validateCondition: {
            modelName: nameof<MediastinumFindingUiModel>(m => m.lymphNodeStationsType),
            requiredValue: LymphNodeStationsTypeEnum.SupraclavicularZone
          }
        },
        {
          modelName: nameof<MediastinumFindingUiModel>(m => m.lymphNodesLocalizationType),
          validateCondition: {
            modelName: nameof<MediastinumFindingUiModel>(m => m.lymphNodeStationsType),
            requiredValue: LymphNodeStationsTypeEnum.HilarLobarAndSegmental
          }
        }
      ]
    },
    {
      findingName: MediastinumFindingTypeEnum.CardiovascularPulmonaryArteries,
      elements: [
        {
          modelName: nameof<MediastinumFindingUiModel>(m => m.lungsLocation),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<MediastinumFindingUiModel>(m => m.isThrombus)
          }
        },
        {
          modelName: nameof<MediastinumFindingUiModel>(m => m.localizationWithinVesselType),
          validateCondition: {
            modelName: nameof<MediastinumFindingUiModel>(m => m.isThrombus)
          }
        },
        {
          modelName: nameof<MediastinumFindingUiModel>(m => m.diagnosisType1)
        }
      ]
    },
    {
      findingName: MediastinumFindingTypeEnum.CardiovascularHeart,
      elements: [
        {
          modelName: [
            nameof<MediastinumFindingUiModel>(m => m.isRight),
            nameof<MediastinumFindingUiModel>(m => m.isLeft),
            nameof<MediastinumFindingUiModel>(m => m.isPericardium)
          ]
        }
      ]
    },
    {
      findingName: MediastinumFindingTypeEnum.CardiovascularThoracicAorta,
      elements: [
        {
          modelName: nameof<MediastinumFindingUiModel>(m => m.pathologyType)
        },
        {
          modelName: nameof<MediastinumFindingUiModel>(m => m.anomaliesType),
          validateCondition: {
            modelName: nameof<MediastinumFindingUiModel>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.AorticAnomalies
          }
        },
        {
          modelName: nameof<MediastinumFindingUiModel>(m => m.detailsCongenitalVascularRingsType),
          validateCondition: {
            modelName: nameof<MediastinumFindingUiModel>(m => m.anomaliesType),
            requiredValue: AnomaliesTypeEnum.CongenitalVascularRings
          }
        },
        {
          modelName: nameof<MediastinumFindingUiModel>(m => m.localizationType),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<MediastinumFindingUiModel>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.AorticAneurysm
          }
        },
        {
          modelName: nameof<MediastinumFindingUiModel>(m => m.expansionMaxAxialDiameter),
          validateCondition: {
            modelName: nameof<MediastinumFindingUiModel>(m => m.pathologyType),
            requiredValue: PathologyTypeEnum.AorticAneurysm
          }
        }
      ]
    },
    {
      findingName: MediastinumFindingTypeEnum.Mass,
      elements: [
        {
          modelName: nameof<MediastinumFindingUiModel>(m => m.diagnosisType1),
          validateCondition: {
            modelName: nameof<MediastinumFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: [
            nameof<MediastinumFindingUiModel>(m => m.isUpperMediastinum),
            nameof<MediastinumFindingUiModel>(m => m.isLowerMediastinum)
          ]
        },
        {
          modelName: [
            nameof<MediastinumFindingUiModel>(m => m.isAnteriorMediastinum),
            nameof<MediastinumFindingUiModel>(m => m.isMiddleMediastinum),
            nameof<MediastinumFindingUiModel>(m => m.isPosteriorMediastinum)
          ],
          validateCondition: {
            modelName: nameof<MediastinumFindingUiModel>(m => m.isLowerMediastinum)
          }
        },
        {
          modelName: nameof<MediastinumFindingUiModel>(m => m.expansionSizeInMm)
        },
        {
          modelName: nameof<MediastinumFindingUiModel>(m => m.limitationType)
        },
        {
          modelName: nameof<MediastinumFindingUiModel>(m => m.homogeneityType)
        },
        {
          modelName: nameof<MediastinumFindingUiModel>(m => m.diagnosisType2),
          validateCondition: {
            modelName: nameof<MediastinumFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        }
      ]
    },
    {
      findingName: MediastinumFindingTypeEnum.Esuphagus,
      elements: [
        {
          modelName: nameof<MediastinumFindingUiModel>(m => m.esuphagusType)
        }
      ]
    },
    {
      findingName: MediastinumFindingTypeEnum.Trachea,
      elements: [
        {
          modelName: nameof<MediastinumFindingUiModel>(m => m.tracheaType)
        },
        {
          modelName: nameof<MediastinumFindingUiModel>(m => m.diagnosisType1),
          validateCondition: {
            modelName: nameof<MediastinumFindingUiModel>(m => m.tracheaType),
            requiredValue: TracheaTypeEnum.Mass
          }
        },
        {
          modelName: nameof<MediastinumFindingUiModel>(m => m.tracheaShiftType),
          validateCondition: {
            modelName: nameof<MediastinumFindingUiModel>(m => m.tracheaType),
            requiredValue: TracheaTypeEnum.TrachealDeviation
          }
        }
      ]
    }
  ]
};
