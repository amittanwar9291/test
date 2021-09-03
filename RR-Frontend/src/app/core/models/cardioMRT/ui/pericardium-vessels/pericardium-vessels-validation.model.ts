import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { PericardiumVesselsUiModel } from '@models/cardioMRT/ui/pericardium-vessels/pericardium-vessels-ui.model';
import { PericardiumVesselsFindingUiModel } from '@models/cardioMRT/ui/pericardium-vessels/pericardium-vessels-finding-ui.model';

import { nameof } from 'ts-simple-nameof/index';

import {
  CoronaryAnomalyTypeEnum,
  FindingTypeEnum,
  LungPathologyTypeEnum,
  MediastinalVesselsTypeEnum,
  OssLesionLocalizationTypeEnum,
  VenaCavaTypeEnum
} from '@enums/cardioMRT/pericardium-vessels';

export const PericardiumVesselsValidationModel: IValidationModel = {
  elements: [
    {
      modelName: nameof<PericardiumVesselsUiModel>(m => m.areFindings)
    }
  ],
  finding: [
    {
      findingName: FindingTypeEnum.Pericardium,
      elements: [
        {
          modelName: [
            nameof<PericardiumVesselsFindingUiModel>(m => m.isPericardialEffusion),
            nameof<PericardiumVesselsFindingUiModel>(m => m.isPericarditisCalcification)
          ]
        }
      ]
    },
    {
      findingName: FindingTypeEnum.MediastinalVessels,
      elements: [
        {
          modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.mediastinalVesselsType)
        },
        {
          modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.coronaryAnomalyType),
          validateCondition: {
            modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.mediastinalVesselsType),
            requiredValue: MediastinalVesselsTypeEnum.CoronaryAnomaly
          }
        },
        {
          modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.detailsOriginType),
          validateCondition: {
            modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.coronaryAnomalyType),
            requiredValue: CoronaryAnomalyTypeEnum.Origin
          }
        },
        {
          modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.distalType),
          validateCondition: {
            modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.coronaryAnomalyType),
            requiredValue: CoronaryAnomalyTypeEnum.Distal
          }
        },
        {
          modelName: [
            nameof<PericardiumVesselsFindingUiModel>(m => m.isRCA),
            nameof<PericardiumVesselsFindingUiModel>(m => m.isLMA),
            nameof<PericardiumVesselsFindingUiModel>(m => m.isLAD),
            nameof<PericardiumVesselsFindingUiModel>(m => m.isRCX)
          ],
          validateCondition: {
            modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.coronaryAnomalyType),
            requiredValue: CoronaryAnomalyTypeEnum.Distal
          }
        },
        {
          modelName: [
            nameof<PericardiumVesselsFindingUiModel>(m => m.isExtension),
            nameof<PericardiumVesselsFindingUiModel>(m => m.isStenosis)
          ],
          validateCondition: {
            modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.mediastinalVesselsType),
            requiredValue: MediastinalVesselsTypeEnum.Aorta
          }
        },
        {
          modelName: [
            nameof<PericardiumVesselsFindingUiModel>(m => m.isAorticRoot),
            nameof<PericardiumVesselsFindingUiModel>(m => m.isAscendingAorta),
            nameof<PericardiumVesselsFindingUiModel>(m => m.isAorticArch),
            nameof<PericardiumVesselsFindingUiModel>(m => m.isDescendingAorta)
          ],
          validateCondition: {
            modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.isExtension)
          }
        },
        {
          modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.stenosisType),
          validateCondition: {
            modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.isStenosis)
          }
        },
        {
          modelName: [
            nameof<PericardiumVesselsFindingUiModel>(m => m.isCentral),
            nameof<PericardiumVesselsFindingUiModel>(m => m.isRight),
            nameof<PericardiumVesselsFindingUiModel>(m => m.isRightSegmental),
            nameof<PericardiumVesselsFindingUiModel>(m => m.isLeft),
            nameof<PericardiumVesselsFindingUiModel>(m => m.isLeftSegmental)
          ],
          validateCondition: {
            modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.isThrombus)
          }
        },
        {
          modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.pericardiumVesselsDiagnosisType),
          validateCondition: {
            modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.mediastinalVesselsType),
            requiredValue: MediastinalVesselsTypeEnum.PulmonaryArteries
          }
        },
        {
          modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.pulmonaryVariantsType),
          validateCondition: {
            modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.mediastinalVesselsType),
            requiredValue: MediastinalVesselsTypeEnum.PulmonaryVeins
          }
        },
        {
          modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.venaCavaType),
          validateCondition: {
            modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.mediastinalVesselsType),
            requiredValue: MediastinalVesselsTypeEnum.VenaCava
          }
        },
        {
          modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.superiorVariantsType),
          validateCondition: {
            modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.venaCavaType),
            requiredValue: VenaCavaTypeEnum.Superior
          }
        },
        {
          modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.inferiorVariantsType),
          validateCondition: {
            modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.venaCavaType),
            requiredValue: VenaCavaTypeEnum.Inferior
          }
        }
      ]
    },
    {
      findingName: FindingTypeEnum.MediastinumLymphadenopathy,
      elements: [
        {
          modelName: [
            nameof<PericardiumVesselsFindingUiModel>(m => m.isCerviSupraParast),
            nameof<PericardiumVesselsFindingUiModel>(m => m.isMediastinal),
            nameof<PericardiumVesselsFindingUiModel>(m => m.isHilaryLobarSegmental),
            nameof<PericardiumVesselsFindingUiModel>(m => m.isAxilary)
          ]
        },
        {
          modelName: [
            nameof<PericardiumVesselsFindingUiModel>(m => m.isCervicalRight),
            nameof<PericardiumVesselsFindingUiModel>(m => m.isCervicalLeft)
          ],
          validateCondition: {
            modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.isCerviSupraParast)
          }
        },
        {
          modelName: [
            nameof<PericardiumVesselsFindingUiModel>(m => m.isHilaryRight),
            nameof<PericardiumVesselsFindingUiModel>(m => m.isHilaryLeft)
          ],
          validateCondition: {
            modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.isHilaryLobarSegmental)
          }
        },
        {
          modelName: [
            nameof<PericardiumVesselsFindingUiModel>(m => m.isAxilaryRight),
            nameof<PericardiumVesselsFindingUiModel>(m => m.isAxilaryLeft)
          ],
          validateCondition: {
            modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.isAxilary)
          }
        }
      ]
    },
    {
      findingName: FindingTypeEnum.MediastinumMass,
      elements: [
        {
          modelName: [
            nameof<PericardiumVesselsFindingUiModel>(m => m.isAnteriorMediastinum),
            nameof<PericardiumVesselsFindingUiModel>(m => m.isMiddleMediastinum),
            nameof<PericardiumVesselsFindingUiModel>(m => m.isPosteriorMediastinum)
          ]
        },
        {
          modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.differentialDiagnosis01)
        }
      ]
    },
    {
      findingName: FindingTypeEnum.Lung,
      elements: [
        {
          modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.lungPathologyType)
        },
        {
          modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.lungLocalizer),
          isLocalizer: true,
          validateCondition: {
            customConditionFunction: (m: PericardiumVesselsFindingUiModel) => {
              return [
                LungPathologyTypeEnum.Consolidation,
                LungPathologyTypeEnum.Atelectasis,
                LungPathologyTypeEnum.PulmonaryNodule,
                LungPathologyTypeEnum.Mass
              ].includes(m.lungPathologyType);
            }
          }
        },
        {
          modelName: [
            nameof<PericardiumVesselsFindingUiModel>(m => m.isLocalizationRight),
            nameof<PericardiumVesselsFindingUiModel>(m => m.isLocalizationLeft)
          ],
          validateCondition: {
            customConditionFunction: (m: PericardiumVesselsFindingUiModel) => {
              return [LungPathologyTypeEnum.PleuralEffusion, LungPathologyTypeEnum.Pneumothorax].includes(m.lungPathologyType);
            }
          }
        }
      ]
    },
    {
      findingName: FindingTypeEnum.UpperAbdomen,
      elements: [
        {
          modelName: [
            nameof<PericardiumVesselsFindingUiModel>(m => m.isFocalLiverLesions),
            nameof<PericardiumVesselsFindingUiModel>(m => m.isDiffuseLiverLesion),
            nameof<PericardiumVesselsFindingUiModel>(m => m.isCholecystolithiasis),
            nameof<PericardiumVesselsFindingUiModel>(m => m.isSplenomegaly),
            nameof<PericardiumVesselsFindingUiModel>(m => m.isHiatalHernia),
            nameof<PericardiumVesselsFindingUiModel>(m => m.isMassAdrenalGland),
            nameof<PericardiumVesselsFindingUiModel>(m => m.isFocalLesionOfKidney),
            nameof<PericardiumVesselsFindingUiModel>(m => m.isHydronephrosis),
            nameof<PericardiumVesselsFindingUiModel>(m => m.isEnlargedAbdLymphNodes)
          ]
        },
        {
          modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.focalLiverLesionsType),
          validateCondition: {
            modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.isFocalLiverLesions)
          }
        },
        {
          modelName: [
            nameof<PericardiumVesselsFindingUiModel>(m => m.isMassAdrenalGlandRight),
            nameof<PericardiumVesselsFindingUiModel>(m => m.isMassAdrenalGlandLeft)
          ],
          validateCondition: {
            modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.isMassAdrenalGland)
          }
        },
        {
          modelName: [
            nameof<PericardiumVesselsFindingUiModel>(m => m.isFocalLesionOfKidneyRight),
            nameof<PericardiumVesselsFindingUiModel>(m => m.isFocalLesionOfKidneyLeft)
          ],
          validateCondition: {
            modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.isFocalLesionOfKidney)
          }
        },
        {
          modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.focalLesionOfKidneyType),
          validateCondition: {
            modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.isFocalLesionOfKidney)
          }
        },
        {
          modelName: [
            nameof<PericardiumVesselsFindingUiModel>(m => m.isHydronephrosisRight),
            nameof<PericardiumVesselsFindingUiModel>(m => m.isHydronephrosisLeft)
          ],
          validateCondition: {
            modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.isHydronephrosis)
          }
        }
      ]
    },
    {
      findingName: FindingTypeEnum.Neck,
      elements: [
        {
          modelName: [nameof<PericardiumVesselsFindingUiModel>(m => m.isStruma), nameof<PericardiumVesselsFindingUiModel>(m => m.isNode)]
        }
      ]
    },
    {
      findingName: FindingTypeEnum.OsseousLesion,
      elements: [
        {
          modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.ossLesionLocalizationType)
        },
        {
          modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.upperAbdomenSide),
          validateCondition: {
            customConditionFunction: (m: PericardiumVesselsFindingUiModel) => {
              return [
                OssLesionLocalizationTypeEnum.Humerus,
                OssLesionLocalizationTypeEnum.Cavicula,
                OssLesionLocalizationTypeEnum.Ribs
              ].includes(m.ossLesionLocalizationType);
            }
          }
        },
        {
          modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.focalClavicleType),
          validateCondition: {
            modelName: nameof<PericardiumVesselsFindingUiModel>(m => m.ossLesionLocalizationType)
          }
        }
      ]
    }
  ]
};
