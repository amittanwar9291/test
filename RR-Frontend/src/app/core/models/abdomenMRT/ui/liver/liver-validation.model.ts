import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { LiverFindingUiModel } from '@models/abdomenMRT/ui/liver/liver-finding-ui.model';
import { LiverUiModel } from '@models/abdomenMRT/ui/liver/liver-ui.model';
import { LiverFindingTypeEnum, FocalLocalizationTypeEnum, LiverAreFindingsEnum } from '@enums/abdomenMRT/liver';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { nameof } from 'ts-simple-nameof';

export const LiverValidationModel: IValidationModel = {
  elements: [
    {
      modelName: nameof<LiverUiModel>(m => m.areFindings)
    },
    {
      modelName: nameof<LiverUiModel>(m => m.findings),
      validateCondition: {
        modelName: nameof<LiverUiModel>(m => m.areFindings),
        requiredValue: LiverAreFindingsEnum.Finding
      },
      requiredValue: (m: LiverUiModel) => {
        return m.findings.filter(item => item.findingType !== LiverFindingTypeEnum.None).length > 0;
      }
    }
  ],
  finding: [
    {
      findingName: LiverFindingTypeEnum.FocalLiverLesion,
      elements: [
        {
          modelName: nameof<LiverFindingUiModel>(m => m.differentialDiagnosis),
          validateCondition: {
            modelName: nameof<LiverFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IKnow
          }
        },
        {
          modelName: nameof<LiverFindingUiModel>(m => m.differentialDiagnosis1),
          validateCondition: {
            modelName: nameof<LiverFindingUiModel>(m => m.descriptionType),
            requiredValue: DescriptionTypeEnum.IDescribe
          }
        },
        {
          modelName: nameof<LiverFindingUiModel>(m => m.focalLocalizationType)
        },
        {
          modelName: [
            nameof<LiverFindingUiModel>(m => m.isRightLobeOfLiver),
            nameof<LiverFindingUiModel>(m => m.isLeftLobeOfLiver),
            nameof<LiverFindingUiModel>(m => m.isLobusCaudatus),
            nameof<LiverFindingUiModel>(m => m.isLobusQuadratus)
          ],
          validateCondition: {
            modelName: nameof<LiverFindingUiModel>(m => m.focalLocalizationType),
            requiredValue: FocalLocalizationTypeEnum.Lobe
          }
        },
        {
          modelName: nameof<LiverFindingUiModel>(m => m.liverSegmentsLocations),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<LiverFindingUiModel>(m => m.focalLocalizationType),
            requiredValue: FocalLocalizationTypeEnum.LiverSegments
          }
        },
        {
          modelName: nameof<LiverFindingUiModel>(m => m.sizeInMm)
        }
      ]
    },
    {
      findingName: LiverFindingTypeEnum.DiffuseParenchymalChanges,
      elements: [
        {
          modelName: nameof<LiverFindingUiModel>(m => m.differentialDiagnosis1)
        }
      ]
    },
    {
      findingName: LiverFindingTypeEnum.GallbladderNormVariantPostoperative,
      elements: [
        {
          modelName: nameof<LiverFindingUiModel>(m => m.gallbladderNormVariantPostoperativeType)
        }
      ]
    },
    {
      findingName: LiverFindingTypeEnum.GallbladderStone,
      elements: [
        {
          modelName: nameof<LiverFindingUiModel>(m => m.topographyConcrementsType)
        }
      ]
    },
    {
      findingName: LiverFindingTypeEnum.GallbladderWallThickening,
      elements: [
        {
          modelName: nameof<LiverFindingUiModel>(m => m.characteristicsType)
        },
        {
          modelName: nameof<LiverFindingUiModel>(m => m.differentialDiagnosis1)
        }
      ]
    },
    {
      findingName: LiverFindingTypeEnum.BileDuctMass,
      elements: [
        {
          modelName: nameof<LiverFindingUiModel>(m => m.differentialDiagnosis1)
        },
        {
          modelName: nameof<LiverFindingUiModel>(m => m.liverPathologyLocations),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: LiverFindingTypeEnum.BiliaryDuctalDilatation,
      elements: [
        {
          modelName: nameof<LiverFindingUiModel>(m => m.differentialDiagnosis1)
        },
        {
          modelName: nameof<LiverFindingUiModel>(m => m.liverPathologyLocations),
          isLocalizer: true
        },
        {
          modelName: nameof<LiverFindingUiModel>(m => m.liverPathologyLocations2),
          isLocalizer: true,
          validateCondition: {
            modelName: nameof<LiverFindingUiModel>(m => m.isStricture)
          }
        }
      ]
    },
    {
      findingName: LiverFindingTypeEnum.BileDuctLeakage,
      elements: [
        {
          modelName: nameof<LiverFindingUiModel>(m => m.liverPathologyLocations),
          isLocalizer: true
        }
      ]
    },
    {
      findingName: LiverFindingTypeEnum.VascularNormVariants,
      elements: [
        {
          modelName: [
            nameof<LiverFindingUiModel>(m => m.isCommonHepaticArtery),
            nameof<LiverFindingUiModel>(m => m.isCommonOriginOfCeliacArtery),
            nameof<LiverFindingUiModel>(m => m.isRightHepaticArtery),
            nameof<LiverFindingUiModel>(m => m.isLeftHepaticArtery),
            nameof<LiverFindingUiModel>(m => m.isTrifurcationHepaticArtery),
            nameof<LiverFindingUiModel>(m => m.isGastroduodenalArtery),
            nameof<LiverFindingUiModel>(m => m.isTruncusIncompletus),
            nameof<LiverFindingUiModel>(m => m.isTruncusCompletus)
          ]
        }
      ]
    }
  ]
};
