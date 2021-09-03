import { nameof } from 'ts-simple-nameof';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { RectumFindingUiModel } from '@models/pelvisMRT/ui/rectum/rectum-finding-ui.model';
import { MinimumDistanceToMesorectalFasciaTypeEnum } from '@enums/pelvisMRT/rectum/rectal-carcinoma/minimum-distance-to-mesorectal-fascia-type.enum';
import { FindingTypesEnum } from '@enums/pelvisMRT/rectum/common/finding-types.enum';
import { RectalCancerCraniallyToPuborectalisType } from '@enums/pelvisMRT/rectum/rectal-carcinoma/rectal-cancer-cranially-to-puborectalis-type.enum';
import { InfiltrationTypeEnum } from '@enums/pelvisMRT/rectum/rectal-carcinoma/infiltration-type.enum';
import { TstadiumInfiltrationTypeEnum } from '@enums/pelvisMRT/rectum/sigma-mass/tstadium-infiltration-type.enum';
import { RelationToPuborectalisMuscleTypeEnum } from '@enums/pelvisMRT/rectum/rectal-carcinoma/relation-to-puborectalis-muscle-type.enum';

export const RectumValidationModel: IValidationModel = {
  finding: [
    {
      findingName: FindingTypesEnum.RectalCarcinoma,
      elements: [
        {
          modelName: [
            nameof<RectumFindingUiModel>(m => m.isUpperThird),
            nameof<RectumFindingUiModel>(m => m.isMiddleThird),
            nameof<RectumFindingUiModel>(m => m.isLowerThird)
          ]
        },
        {
          modelName: nameof<RectumFindingUiModel>(m => m.localizationAxialType)
        },
        {
          modelName: [
            nameof<RectumFindingUiModel>(m => m.isUrinaryBladder),
            nameof<RectumFindingUiModel>(m => m.isUterus),
            nameof<RectumFindingUiModel>(m => m.isSeminalVesicles),
            nameof<RectumFindingUiModel>(m => m.isProstate),
            nameof<RectumFindingUiModel>(m => m.isVagina),
            nameof<RectumFindingUiModel>(m => m.isSacrum),
            nameof<RectumFindingUiModel>(m => m.isCoccygis),
            nameof<RectumFindingUiModel>(m => m.isLevatorAniMuscle),
            nameof<RectumFindingUiModel>(m => m.isMSphincterAni)
          ],
          validateCondition: {
            customConditionFunction: (model: RectumFindingUiModel) => {
              return (
                (model.lowRectalCancerType === RectalCancerCraniallyToPuborectalisType.T4 &&
                  model.relationToPuborectalisMuscleType === RelationToPuborectalisMuscleTypeEnum.Below) ||
                (model.rectalCancerCraniallyToPuborectalisType === RectalCancerCraniallyToPuborectalisType.T4 &&
                  model.infiltrationType === InfiltrationTypeEnum.T4b)
              );
            }
          }
        },
        {
          modelName: nameof<RectumFindingUiModel>(m => m.rectumCircumferencialTumorLocationType),
          validateCondition: {
            modelName: nameof<RectumFindingUiModel>(m => m.minimumDistanceToMesorectalFasciaType),
            requiredValue: MinimumDistanceToMesorectalFasciaTypeEnum.PositiveCrm
          }
        }
      ]
    },
    {
      findingName: FindingTypesEnum.SigmaMass,
      elements: [
        {
          modelName: nameof<RectumFindingUiModel>(m => m.expansionSize)
        },
        {
          modelName: [
            nameof<RectumFindingUiModel>(m => m.isUrinaryBladder),
            nameof<RectumFindingUiModel>(m => m.isProstate),
            nameof<RectumFindingUiModel>(m => m.isSeminalVesicles),
            nameof<RectumFindingUiModel>(m => m.isUterus),
            nameof<RectumFindingUiModel>(m => m.isVagina),
            nameof<RectumFindingUiModel>(m => m.isPeritoneum),
            nameof<RectumFindingUiModel>(m => m.isAbdomenPelvicWall),
            nameof<RectumFindingUiModel>(m => m.isSmallIntestine),
            nameof<RectumFindingUiModel>(m => m.isLeftExternalIliacVessels)
          ],
          validateCondition: {
            modelName: nameof<RectumFindingUiModel>(m => m.tstadiumInfiltrationType),
            requiredValue: TstadiumInfiltrationTypeEnum.T4bAdjacentOrgan
          }
        },
        {
          modelName: [nameof<RectumFindingUiModel>(m => m.sigmaMassDifferentialDiagnosisType)]
        }
      ]
    },
    {
      findingName: FindingTypesEnum.SigmoidDiverticularDisease,
      elements: [
        {
          modelName: nameof<RectumFindingUiModel>(m => m.pathologyType)
        }
      ]
    },
    {
      findingName: FindingTypesEnum.ChronicInflammatoryBowelDisease,
      elements: [
        {
          modelName: [
            nameof<RectumFindingUiModel>(m => m.isIleum),
            nameof<RectumFindingUiModel>(m => m.isColon),
            nameof<RectumFindingUiModel>(m => m.isSigmoidColon),
            nameof<RectumFindingUiModel>(m => m.isRectum)
          ]
        },
        {
          modelName: [nameof<RectumFindingUiModel>(m => m.chronicBowelDiseaseDifferentialDiagnosisType01)]
        }
      ]
    },
    {
      findingName: FindingTypesEnum.Fistula,
      elements: [
        {
          modelName: nameof<RectumFindingUiModel>(m => m.fistulaType)
        }
      ]
    }
  ]
};
